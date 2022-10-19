const got = require("got");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

module.exports = async (helper) => {
  const { TQ_GITHUB_USERNAME, TQ_OPEN_PIXEL_ART_DIR, GIT_EXE } = helper.env;

  try {
    checkSetup(GIT_EXE);
  } catch (err) {
    helper.fail(`We did not find command line git installed on your computer!`);
    return;
  }

  try {
    const gitRemote = await exec(`git remote -v`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
    });

    const remoteStrings = gitRemote.stdout.trim().split("\n");
    const remotes = remoteStrings.map((remoteString) =>
      remoteString.split(/\s+/)
    );

    const upstreamRemotes = remotes.filter(([name]) => name === "upstream");

    if (upstreamRemotes.length === 0) {
      helper.fail(
        `We didn't find a local remote named "upstream"! Did you create one yet?`
      );
      return;
    }

    const isUpstreamUrlCorrect = remotes.find(
      ([, url]) =>
        url === "https://github.com/twilio-labs/open-pixel-art.git" ||
        url === "git@github.com:twilio-labs/open-pixel-art.git"
    );

    if (!isUpstreamUrlCorrect) {
      helper.fail(
        `We found your "upstream" remote, but it doesn't seem to have the correct URL.
        
        It should look like this:
        https://github.com/twilio-labs/open-pixel-art.git
        
        Run git remote -v in your terminal to verify it!`
      );
      return;
    }

    const openPixelArtResponse = await got(
      `https://api.github.com/repos/twilio-labs/open-pixel-art/branches/master`,
      {
        throwHttpErrors: false,
      }
    );

    if (openPixelArtResponse.statusCode !== 200) {
      helper.fail(`We couldn't connect to the Open Pixel Art repository!
      
      ${openPixelArtResponse.statusMessage}`);
      return;
    }

    const playerResponse = await got(
      `https://api.github.com/repos/${TQ_GITHUB_USERNAME}/open-pixel-art/branches/master`,
      {
        throwHttpErrors: false,
      }
    );

    if (playerResponse.statusCode !== 200) {
      helper.fail(`We couldn't find the "open-pixel-art" repository for your user "${TQ_GITHUB_USERNAME}"!
      
      ${playerResponse.statusMessage}`);
      return;
    }

    if (
      JSON.parse(playerResponse.body).commit.sha !==
      JSON.parse(openPixelArtResponse.body).commit.sha
    ) {
      helper.fail(
        `The Open Pixel Art repository and the "open-pixel-art" repository for your user "${TQ_GITHUB_USERNAME} are out of sync"! New changes may've been added since your last sync. Try syncing again!`
      );
      return;
    }

    return helper.success(
      `The Open Pixel Art repository and the "open-pixel-art" repository for your user "${TQ_GITHUB_USERNAME} are in sync! These may get out of sync in the future as other users make changes to the repository!`
    );
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate if your Open Pixel Art fork was synchronized!
      
      ${err}`
    );
  }
};
