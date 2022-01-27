const got = require('got');

module.exports = async helper => {
  const { TQ_GITHUB_USERNAME } = helper.env;
  const prNumber = helper.getNormalizedInput('prNumber');

  try {
    const response = await got(
      `https://api.github.com/repos/twilio-labs/open-pixel-art/pulls/${prNumber}`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode !== 200) {
      helper.fail(helper.world.getTranslatedString('open_source.09_make_pr.pr_not_found', { prNumber }));
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);

    const prOwner = parsedResponseBody.user.login;

    if (prOwner !== TQ_GITHUB_USERNAME) {
      helper.fail(helper.world.getTranslatedString('open_source.09_make_pr.pr_found_wrong_user', { prNumber, TQ_GITHUB_USERNAME }));
      return;
    }

    return helper.success(
      helper.world.getTranslatedString('open_source.09_make_pr.success', { prNumber, TQ_GITHUB_USERNAME }),
      [{ name: 'OPEN_PIXEL_ART_PR_NUMBER', value: prNumber }]
    );
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.09_make_pr.error', { err }));
  }
};
