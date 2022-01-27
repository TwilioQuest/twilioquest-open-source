const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  try {
    await commandExists('git');
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.03b_configure_git.git_not_found'));
    return;
  }

  try {
    const gitConfigList = await exec('git config --list');

    if (!gitConfigList.stdout.includes('user.email=')) {
      helper.fail(helper.world.getTranslatedString('open_source.03b_configure_git.email_error'));
      return;
    }

    if (!gitConfigList.stdout.includes('user.name=')) {
      helper.fail(helper.world.getTranslatedString('open_source.03b_configure_git.username_not_found'));
      return;
    }

    const gitConfigOptions = gitConfigList.stdout.split('\n');
    const gitUserNameOption = gitConfigOptions.find(option =>
      option.includes('user.name=')
    );
    const [, userName] = gitUserNameOption.trim().split('=');

    helper.success(
      helper.world.getTranslatedString('open_source.03b_configure_git.email_not_configured'),
      [{ name: 'LOCAL_GIT_USER_NAME', value: userName }]
    );
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.03b_configure_git.error', { err }));
  }
};
