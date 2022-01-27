const commandExists = require('command-exists');

module.exports = async helper => {
  try {
    await commandExists('git');

    helper.success(helper.world.getTranslatedString('open_source.03_install_git.git_installed'));
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.03_install_git.git_not_found'));
  }
};
