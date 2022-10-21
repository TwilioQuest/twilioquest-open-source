const { execGitWithArgs } = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  const { TQ_LOCAL_GIT_USER_NAME, TQ_OPEN_PIXEL_ART_DIR } = helper.env;
  const commitHash = helper.getNormalizedInput("commitHash");

  if (!TQ_OPEN_PIXEL_ART_DIR) {
    helper.fail(
      `You do not have the environment variable <span class="highlight">TQ_OPEN_PIXEL_ART_DIR</span> set. Return to a previous objective to make sure its set correctly!`
    );
    return;
  }

  if (!TQ_LOCAL_GIT_USER_NAME) {
    helper.fail(
      `You do not have the environment variable <span class="highlight">TQ_LOCAL_GIT_USER_NAME</span> set. Return to a previous objective to make sure its set correctly!`
    );
    return;
  }

  try {
    const gitShowCommit = await execGitWithArgs(helper, `show ${commitHash}`, {
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
