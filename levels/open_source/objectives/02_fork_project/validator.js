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
      return helper.success(helper.world.getTranslatedString('open_source.02_fork_project.success'));
    } else {
      helper.fail(helper.world.getTranslatedString('open_source.02_fork_project.repository_not_found', { TQ_GITHUB_USERNAME }));
    }
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.02_fork_project.error', { err }));
  }
};
