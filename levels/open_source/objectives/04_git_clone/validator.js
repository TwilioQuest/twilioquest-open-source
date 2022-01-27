const jetpack = require('fs-jetpack');
const path = require('path');

module.exports = async helper => {
  const { repositoryFilePath } = helper.validationFields;

  if (!repositoryFilePath) {
    helper.fail(helper.world.getTranslatedString('open_source.04_git_clone.dont_forget_path'));
    return;
  }

  try {
    const directoryExists = await jetpack.existsAsync(repositoryFilePath);

    if (directoryExists !== 'dir') {
      helper.fail(helper.world.getTranslatedString('open_source.04_git_clone.path_not_found', { repositoryFilePath }));
      return;
    }

    const packagePath = path.join(repositoryFilePath, 'package.json');
    const packageFileExists = await jetpack.existsAsync(packagePath);

    if (packageFileExists !== 'file') {
      helper.fail(helper.world.getTranslatedString('open_source.04_git_clone.package_not_found', { packagePath }));
      return;
    }

    const packageContents = await jetpack.readAsync(packagePath, 'json');

    if (packageContents.name !== 'open-pixel-art') {
      helper.fail(helper.world.getTranslatedString('open_source.04_git_clone.package_not_correct', { packagePath }));
      return;
    }

    helper.success(
      helper.world.getTranslatedString('open_source.04_git_clone.success'),
      [{ name: 'OPEN_PIXEL_ART_DIR', value: repositoryFilePath }]
    );
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.04_git_clone.error', { err }));
  }
};
