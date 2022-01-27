const got = require('got');

module.exports = async helper => {
  const { TQ_OPEN_PIXEL_ART_PR_NUMBER } = helper.env;

  try {
    const response = await got(
      `https://api.github.com/repos/twilio-labs/open-pixel-art/pulls/${TQ_OPEN_PIXEL_ART_PR_NUMBER}`,
      // `https://api.github.com/repos/sindresorhus/got/pulls/889`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode !== 200) {
      helper.fail(helper.world.getTranslatedString('open_source.11_check_merge.pr_not_found', { TQ_OPEN_PIXEL_ART_PR_NUMBER }));
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);
    const isPrClosed = parsedResponseBody.state === 'closed';
    const isPrMerged = parsedResponseBody.merged === true;

    if (isPrClosed && !isPrMerged) {
      helper.fail(helper.world.getTranslatedString('open_source.11_check_merge.pr_found_closed', { TQ_OPEN_PIXEL_ART_PR_NUMBER }));
      return;
    }

    if (!isPrMerged) {
      helper.fail(helper.world.getTranslatedString('open_source.11_check_merge.pr_not_merged', { TQ_OPEN_PIXEL_ART_PR_NUMBER }));
      return;
    }

    return helper.success(helper.world.getTranslatedString('open_source.11_check_merge.success', { TQ_OPEN_PIXEL_ART_PR_NUMBER }));
  } catch (err) {
    helper.fail(
      `${helper.world.getTranslatedString('open_source.11_check_merge.error')}
      
      ${err}`
    );
  }
};
