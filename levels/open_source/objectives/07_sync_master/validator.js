const got = require('got');
const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_GITHUB_USERNAME, TQ_OPEN_PIXEL_ART_DIR } = helper.env;

  try {
    await commandExists('git');
    const gitRemote = await exec(`git remote -v`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
    });

    const remoteStrings = gitRemote.stdout.trim().split('\n');
    const remotes = remoteStrings.map(remoteString =>
      remoteString.split(/\s+/)
    );

    const upstreamRemotes = remotes.filter(([name]) => name === 'upstream');

    if (upstreamRemotes.length === 0) {
      helper.fail(helper.world.getTranslatedString('open_source.07_sync_master.remote_not_found'));
      return;
    }

    const isUpstreamUrlCorrect = remotes.find(
      ([, url]) =>
        url === 'https://github.com/twilio-labs/open-pixel-art.git' ||
        url === 'git@github.com:twilio-labs/open-pixel-art.git'
    );

    if (!isUpstreamUrlCorrect) {
      helper.fail(helper.world.getTranslatedString('open_source.07_sync_master.upstream_found'));
      return;
    }

    const openPixelArtResponse = await got(
      `https://api.github.com/repos/twilio-labs/open-pixel-art/branches/master`,
      {
        throwHttpErrors: false,
      }
    );

    if (openPixelArtResponse.statusCode !== 200) {
      helper.fail(helper.world.getTranslatedString('open_source.07_sync_master.repo_not_connected', { statusMessage: openPixelArtResponse.statusMessage }));
      return;
    }

    const playerResponse = await got(
      `https://api.github.com/repos/${TQ_GITHUB_USERNAME}/open-pixel-art/branches/master`,
      {
        throwHttpErrors: false,
      }
    );

    if (playerResponse.statusCode !== 200) {
      helper.fail(helper.world.getTranslatedString('open_source.07_sync_master.repo_not_found', { TQ_GITHUB_USERNAME, statusMessage: playerResponse.statusMessage }));
      return;
    }

    if (
      JSON.parse(playerResponse.body).commit.sha !==
      JSON.parse(openPixelArtResponse.body).commit.sha
    ) {
      helper.fail(helper.world.getTranslatedString('open_source.07_sync_master.open_pixel', { TQ_GITHUB_USERNAME }));
      return;
    }

    return helper.success(helper.world.getTranslatedString('open_source.07_sync_master.success', { TQ_GITHUB_USERNAME }));
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.07_sync_master.error', { err }));
  }
};
