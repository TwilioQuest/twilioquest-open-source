const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { checkSetup } = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  const { TQ_LOCAL_GIT_USER_NAME, TQ_OPEN_PIXEL_ART_DIR, TQ_GIT_EXE } =
    helper.env;
  const commitHash = helper.getNormalizedInput("commitHash");

  try {
    checkSetup(TQ_GIT_EXE);
  } catch (err) {
    helper.fail(err);
    return;
  }

  try {
    const gitShowCommit = await exec(`git show ${commitHash}`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
    });

    const commit = gitShowCommit.stdout;

    if (!commit.includes(TQ_LOCAL_GIT_USER_NAME)) {
      helper.fail(`
        Sorry! The commit hash "${commitHash}" does not have your local git user "${TQ_LOCAL_GIT_USER_NAME}" listed as the author!

        Try the command "git show ${commitHash}" to look at the specific commit you just provided.
      `);
      return;
    }

    return helper.success(
      `We found your pixel commit for the author "${TQ_LOCAL_GIT_USER_NAME}"!`
    );
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate your pixel commit!
      
      ${err}`
    );
  }
};
