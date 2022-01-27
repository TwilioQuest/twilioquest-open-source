const got = require('got');

module.exports = async helper => {
  const { TQ_GITHUB_USERNAME, TQ_OPEN_PIXEL_ART_BRANCH } = helper.env;

  try {
    const response = await got(
      `https://api.github.com/repos/${TQ_GITHUB_USERNAME}/open-pixel-art/branches/${TQ_OPEN_PIXEL_ART_BRANCH}`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode === 200) {
      return helper.success(helper.world.getTranslatedString('open_source.08_push_upstream.branch_found', { TQ_OPEN_PIXEL_ART_BRANCH, TQ_GITHUB_USERNAME }));
    } else {
      helper.fail(helper.world.getTranslatedString('open_source.08_push_upstream.branch_not_found', { TQ_OPEN_PIXEL_ART_BRANCH, TQ_GITHUB_USERNAME }));
    }
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.08_push_upstream.error', { err }));
  }
};
