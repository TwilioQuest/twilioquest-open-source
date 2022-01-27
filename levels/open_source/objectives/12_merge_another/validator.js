const got = require('got');

module.exports = async helper => {
  const { prNumber, repositoryOwner, repository } = helper.validationFields;
  const { TQ_GITHUB_USERNAME } = helper.env;

  if (!repository) {
    helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.dont_forget_owner'));
    return;
  }

  if (!repository) {
    helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.dont_forget_name'));
    return;
  }

  if (!prNumber) {
    helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.dont_forget_number'));
    return;
  }

  if (repositoryOwner === 'twilio-labs' && repository === 'open-pixel-art') {
    helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.pixel_fail'));
    return;
  }

  try {
    const response = await got(
      `https://api.github.com/repos/${repositoryOwner}/${repository}/pulls/${prNumber}`,
      {
        throwHttpErrors: false,
      }
    );

    if (response.statusCode !== 200) {
      helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.pr_not_found', { prNumber, repositoryOwner, repository }));
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);
    const isPrClosed = parsedResponseBody.state === 'closed';
    const isPrMerged = parsedResponseBody.merged === true;
    const prOwner = parsedResponseBody.user.login;

    if (prOwner !== TQ_GITHUB_USERNAME) {
      helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.pr_dont_belong', { prNumber, repositoryOwner, repository, TQ_GITHUB_USERNAME }));
      return;
    }

    if (isPrClosed && !isPrMerged) {
      helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.pr_closed', { prNumber, repositoryOwner, repository }));
      return;
    }

    if (!isPrMerged) {
      helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.pr_not_merged', { prNumber, repositoryOwner, repository }));
      return;
    }

    return helper.success(helper.world.getTranslatedString('open_source.12_merge_another.success', { prNumber, repositoryOwner, repository }));
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.12_merge_another.error', { err }));
  }
};
