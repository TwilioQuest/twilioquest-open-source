const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  try {
    await commandExists('git');
  } catch (err) {
    helper.fail(`We did not find command line git installed on your computer!`);
    return;
  }

  try {
    const gitConfigList = await exec('git config --list');

    if (!gitConfigList.stdout.includes('user.email=')) {
      helper.fail(`We did not find the you email configured correctly!`);
      return;
    }

    if (!gitConfigList.stdout.includes('user.name=')) {
      helper.fail(`We did not find the you user name configured correctly!`);
      return;
    }

    const gitConfigOptions = gitConfigList.stdout.split('\n');
    const gitUserNameOption = gitConfigOptions.find(option =>
      option.includes('user.name=')
    );
    const [, userName] = gitUserNameOption.trim().split('=');

    helper.success(
      `It looks like your email and name are configured correctly!`,
      [{ name: 'LOCAL_GIT_USER_NAME', value: userName }]
    );
  } catch (err) {
    helper.fail(`Something went wrong while tried to validate your git configuration!
    
    ${err}`);
  }
};
