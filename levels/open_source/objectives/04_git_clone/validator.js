const jetpack = require('fs-jetpack');
const path = require('path');

module.exports = async helper => {
  const { repositoryFilePath } = helper.validationFields;

  if (!repositoryFilePath) {
    helper.fail(`Don't forget to provide a repository file path!`);
    return;
  }

  try {
    const directoryExists = await jetpack.existsAsync(repositoryFilePath);

    if (directoryExists !== 'dir') {
      helper.fail(
        `We could not find a directory at the path you provided! -> ${repositoryFilePath}`
      );
      return;
    }

    const packagePath = path.join(repositoryFilePath, 'package.json');
    const packageFileExists = await jetpack.existsAsync(packagePath);

    if (packageFileExists !== 'file') {
      helper.fail(
        `We could not find the package file in your provided repository! Was it cloned correctly? -> ${packagePath}`
      );
      return;
    }

    const packageContents = await jetpack.readAsync(packagePath, 'json');

    if (packageContents.name !== 'open-pixel-art') {
      helper.fail(
        `The package file in that repository was not for the correct project! Was it cloned correctly? -> ${packagePath}`
      );
      return;
    }

    helper.success(
      `It looks like you've cloned the Open Pixel Art repository correctly!`,
      [{ name: 'OPEN_PIXEL_ART_DIR', value: repositoryFilePath }]
    );
  } catch (err) {
    helper.fail(`Something went wrong while we were trying to validate your repository clone!
    
    ${err}`);
  }
};
