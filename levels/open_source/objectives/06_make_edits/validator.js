const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const jetpack = require('fs-jetpack');
const path = require('path');

module.exports = async helper => {
  const {
    TQ_OPEN_PIXEL_ART_DIR,
    TQ_LOCAL_GIT_USER_NAME,
    TQ_GITHUB_USERNAME,
  } = helper.env;

  try {
    const pixelsPath = path.join(TQ_OPEN_PIXEL_ART_DIR, '_data', 'pixels.json');
    const pixelFileExists = await jetpack.existsAsync(pixelsPath);

    if (pixelFileExists !== 'file') {
      helper.fail(helper.world.getTranslatedString('open_source.06_make_edits.pixels_not_found', { pixelsPath }));
      return;
    }

    const pixelsContent = await jetpack.readAsync(pixelsPath, 'json');
    const isPixelPresentWithUsername = pixelsContent.data.find(
      pixel => pixel.username === TQ_GITHUB_USERNAME
    );

    if (!isPixelPresentWithUsername) {
      helper.fail(helper.world.getTranslatedString('open_source.06_make_edits.pixel_not_found_on_git', { TQ_GITHUB_USERNAME }));
      return;
    }

    await commandExists('git');

    // TODO: Figure out how to do this correctly
    // const gitPixelsCommitList = await exec(
    //   `git shortlog -ns _data/pixels.json < /dev/tty`,
    //   {
    //     cwd: TQ_OPEN_PIXEL_ART_DIR,
    //     timeout: 2000,
    //   }
    // );

    const gitPixelsCommitLog = await exec(`git log _data/pixels.json`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
      timeout: 2000,
    });

    // TODO: Figure out how to do this correctly
    // if (!gitPixelsCommitList.stdout.includes(TQ_LOCAL_GIT_USER_NAME)) {
    //   helper.fail(
    //     `We didn't find a commit with your git username, ${TQ_LOCAL_GIT_USER_NAME}, on it for the "_data/pixels.json" file! Have you committed your changes?`
    //   );
    //   return;
    // }

    if (!gitPixelsCommitLog.stdout.includes(TQ_LOCAL_GIT_USER_NAME)) {
      helper.fail(helper.world.getTranslatedString('open_source.06_make_edits.commit_not_found', { TQ_LOCAL_GIT_USER_NAME }));
      return;
    }

    helper.success(helper.world.getTranslatedString('open_source.06_make_edits.success'));
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.06_make_edits.error', { err: JSON.stringify(err, undefined, 2) }));
  }
};
