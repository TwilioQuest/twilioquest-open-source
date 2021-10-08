const got = require('got');

module.exports = async helper => {
  const { TQ_GITHUB_USERNAME } = helper.env;

  try {
    const response = await got(
      `https://api.github.com/repos/${TQ_GITHUB_USERNAME}/open-pixel-art`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode === 200) {
      return helper.success(
        `We found your fork of the Open Pixel Art respository! Good job!`
      );
    } else {
      helper.fail(
        `We couldn't find a repository named "open-pixel-art" owned by the GitHub user, ${TQ_GITHUB_USERNAME}. Is your fork named correctly?`
      );
    }
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate your Open Pixel Art fork!
      
      ${err}`
    );
  }
};
