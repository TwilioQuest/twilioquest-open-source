const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_OPEN_PIXEL_ART_DIR } = helper.env;
  const { branchName } = helper.validationFields;

  if (!branchName) {
    helper.fail(`Don't forget to provide the name of the branch you created!`);
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
      helper.fail(
        `We couldn't find the branch named "${branchName}" in your respository!`
      );
      return;
    }

    if (!branches.includes(branchCheckedOutName)) {
      helper.fail(
        `We found your branch "${branchName}" but it looks like you haven't checked it out yet!`
      );
      return;
    }

    helper.success(
      `It looks like you created and checked out the branch "${branchName}" correctly!`,
      [{ name: 'OPEN_PIXEL_ART_BRANCH', value: branchName }]
    );
  } catch (err) {
    helper.fail(
      `We ran into a problem trying to validate your branch was created!
      
      ${err}`
    );
  }
};
