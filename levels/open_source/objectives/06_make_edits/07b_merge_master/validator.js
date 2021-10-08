const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_OPEN_PIXEL_ART_DIR, TQ_OPEN_PIXEL_ART_BRANCH } = helper.env;

  try {
    await commandExists('git');
    const gitLogLastMasterCommit = await exec(
      `git log master -n 1 --pretty=format:"%H"`,
      {
        cwd: TQ_OPEN_PIXEL_ART_DIR,
      }
    );

    const latestMasterCommit = gitLogLastMasterCommit.stdout;

    const gitBranchListContainingMasterCommit = await exec(
      `git branch --contains ${latestMasterCommit}`,
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
