const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_OPEN_PIXEL_ART_DIR } = helper.env;
  const { branchName } = helper.validationFields;

  if (!branchName) {
    helper.fail(helper.world.getTranslatedString('open_source.05_git_branch.dont_forget_branch'));
    return;
  }

  try {
    await commandExists('git');
    const gitBranchList = await exec(`git branch --list ${branchName}`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
    });

    const branches = gitBranchList.stdout
      .split('\n')
      .map(branch => branch.trim());

    const branchCheckedOutName = `* ${branchName}`;

    if (
      !branches.includes(branchName) &&
      !branches.includes(branchCheckedOutName)
    ) {
      helper.fail(helper.world.getTranslatedString('open_source.05_git_branch.branch_not_found', { branchName }));
      return;
    }

    if (!branches.includes(branchCheckedOutName)) {
      helper.fail(helper.world.getTranslatedString('open_source.05_git_branch.branch_found', { branchName }));
      return;
    }

    helper.success(
      helper.world.getTranslatedString('open_source.05_git_branch.success', { branchName }),
      [{ name: 'OPEN_PIXEL_ART_BRANCH', value: branchName }]
    );
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.05_git_branch.error', { err }));
  }
};
