const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function execGitWithArgs(helper, argString, execOptions = {}) {
  const { TQ_GIT_EXE } = helper.env;

  if (!!TQ_GIT_EXE === false) {
    throw new Error(
      `You do not have a value for the environment variable <span class="highlight">TQ_GIT_EXE</span>. Return to the previous objective where you configured your git installation to fix this.`
    );
  }

  // There was a bug introduced in the TQ 3.10.0 release that resulted in "exec" calls failing if the user's
  // Git path had spaces. During that time, we recommended player's add quotes to their environment
  // variable to circumvent the issue. Since we're doing that ourselves now, we want to be sure player's aren't
  if (
    TQ_GIT_EXE.startsWith('"') || TQ_GIT_EXE.endsWith('"') ||
    TQ_GIT_EXE.startsWith("'") || TQ_GIT_EXE.endsWith("'")
  ) {
    throw new Error(
      "TwilioQuest no longer requires you to surround your git executable path with quotation marks if it contains spaces. Go into Settings -> Variables and remove any quotes around the TQ_GIT_EXE variable!"
    );
  }

  return exec(`"${TQ_GIT_EXE}" ${argString}`, execOptions);
}

module.exports = {
  execGitWithArgs,
};
