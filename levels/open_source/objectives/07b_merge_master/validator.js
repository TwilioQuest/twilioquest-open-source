const { execGitWithArgs } = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  const { TQ_OPEN_PIXEL_ART_DIR, TQ_OPEN_PIXEL_ART_BRANCH } = helper.env;

  if (!TQ_OPEN_PIXEL_ART_DIR) {
    helper.fail(
      `You do not have the environment variable <span class="highlight">TQ_OPEN_PIXEL_ART_DIR</span> set. Return to a previous objective to make sure its set correctly!`
    );
    return;
  }

  if (!TQ_OPEN_PIXEL_ART_BRANCH) {
    helper.fail(
      `You do not have the environment variable <span class="highlight">TQ_OPEN_PIXEL_ART_BRANCH</span> set. Return to a previous objective to make sure its set correctly!`
    );
    return;
  }

  try {
    const gitLogLastMasterCommit = await execGitWithArgs(
      helper,
      `log master -n 1 --pretty=format:"%H"`,
      {
        cwd: TQ_OPEN_PIXEL_ART_DIR,
      }
    );

    const latestMasterCommit = gitLogLastMasterCommit.stdout;

    const gitBranchListContainingMasterCommit = await execGitWithArgs(
      helper,
      `branch --contains ${latestMasterCommit}`,
      {
        cwd: TQ_OPEN_PIXEL_ART_DIR,
      }
    );

    const branchList = gitBranchListContainingMasterCommit.stdout;

    if (!branchList.includes(TQ_OPEN_PIXEL_ART_BRANCH)) {
      helper.fail(
        `The latest commit on master "${latestMasterCommit}" wasn't found in your branch "${TQ_OPEN_PIXEL_ART_BRANCH}"!`
      );
      return;
    }

    return helper.success(
      `We found the latest commit on master in your branch "${TQ_OPEN_PIXEL_ART_BRANCH}"!`
    );
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate if your branch had master merged in!
      
      ${err}`
    );
  }
};
