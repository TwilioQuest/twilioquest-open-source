const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function execGitWithArgs(helper, argString, execOptions = {}) {
  const { TQ_GIT_EXE } = helper.env;

  if (!!TQ_GIT_EXE === false) {
    throw new Error(
      `You do not have a value for the environment variable <span class="highlight">TQ_GIT_EXE</span>. Return to the previous objective where you configured your git installation to fix this.`
    );
  }

  return exec(`${TQ_GIT_EXE} ${argString}`, execOptions);
}

module.exports = {
  execGitWithArgs,
};
