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
      helper.fail(helper.world.getTranslatedString('open_source.07b_merge_master.latest_commit_not_found', { latestMasterCommit, TQ_OPEN_PIXEL_ART_BRANCH }));
      return;
    }

    return helper.success(helper.world.getTranslatedString('open_source.07b_merge_master.latest_commit_found', { TQ_OPEN_PIXEL_ART_BRANCH }));
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.07b_merge_master.error', { err }));
  }
};
