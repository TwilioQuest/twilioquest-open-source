const util = require("util");
const exec = util.promisify(require("child_process").exec);
const jetpack = require("fs-jetpack");
const path = require("path");
const { checkSetup } = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  const {
    TQ_OPEN_PIXEL_ART_DIR,
    TQ_LOCAL_GIT_USER_NAME,
    TQ_GITHUB_USERNAME,
    TQ_GIT_EXE,
  } = helper.env;

  try {
    checkSetup(TQ_GIT_EXE);
  } catch (err) {
    helper.fail(err);
    return;
  }

  try {
    const pixelsPath = path.join(TQ_OPEN_PIXEL_ART_DIR, "_data", "pixels.json");
    const pixelFileExists = await jetpack.existsAsync(pixelsPath);

    if (pixelFileExists !== "file") {
      helper.fail(
        `We could not find the pixels.json file in your provided repository! Has it been removed? -> ${pixelsPath}`
      );
      return;
    }

    const pixelsContent = await jetpack.readAsync(pixelsPath, "json");
    const isPixelPresentWithUsername = pixelsContent.data.find(
      (pixel) =>
        pixel.username &&
        pixel.username.toLowerCase() === TQ_GITHUB_USERNAME.toLowerCase()
    );

    if (!isPixelPresentWithUsername) {
      helper.fail(
        `We didn't find a pixel in the _data/pixels.json file with your git username, ${TQ_GITHUB_USERNAME}!`
      );
      return;
    }

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

    if (
      !gitPixelsCommitLog.stdout
        .toLowerCase()
        .includes(TQ_LOCAL_GIT_USER_NAME.toLowerCase())
    ) {
      helper.fail(
        `We didn't find a commit with your git username, ${TQ_LOCAL_GIT_USER_NAME}, on it for the "_data/pixels.json" file! Have you committed your changes?`
      );
      return;
    }

    helper.success(
      `It looks like you've correctly added and committed your new pixel!`
    );
  } catch (err) {
    helper.fail(
      `We ran into a problem trying to validate you added your new pixel!
      
      ${JSON.stringify(err, undefined, 2)}`
    );
  }
};
