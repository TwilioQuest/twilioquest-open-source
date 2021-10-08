const got = require('got');

module.exports = async helper => {
  const { prNumber, repositoryOwner, repository } = helper.validationFields;
  const { TQ_GITHUB_USERNAME } = helper.env;

  if (!repository) {
    helper.fail(
      `Don't forget to enter the name of the repository owner who's project you contributed to!`
    );
    return;
  }

  if (!repository) {
    helper.fail(
      `Don't forget to enter the name of the repository you contributed to!`
    );
    return;
  }

  if (!prNumber) {
    helper.fail(
      `Don't forget to enter the number of the Pull Request you contributed with!`
    );
    return;
  }

  if (repositoryOwner === 'twilio-labs' && repository === 'open-pixel-art') {
    helper.fail(`You can't count your Open Pixel Art contribution again!`);
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
      helper.fail(
        `We could not find the Pull Request #${prNumber} on ${repositoryOwner}'s repository "${repository}"!`
      );
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);
    const isPrClosed = parsedResponseBody.state === 'closed';
    const isPrMerged = parsedResponseBody.merged === true;
    const prOwner = parsedResponseBody.user.login;

    if (prOwner !== TQ_GITHUB_USERNAME) {
      helper.fail(
        `We found the Pull Request #${prNumber} on ${repositoryOwner}'s repository "${repository}", but it doesn't belong to your GitHub user "${TQ_GITHUB_USERNAME}"!`
      );
      return;
    }

    if (isPrClosed && !isPrMerged) {
      helper.fail(
        `We found the Pull Request #${prNumber} on ${repositoryOwner}'s repository "${repository}", but it was closed without being merged!`
      );
      return;
    }

    if (!isPrMerged) {
      helper.fail(
        `We found the Pull Request #${prNumber} on ${repositoryOwner}'s repository "${repository}", but it has not been merged yet!`
      );
      return;
    }

    return helper.success(
      `We found the Pull Request #${prNumber} on ${repositoryOwner}'s repository "${repository}" and it has been merged! Congratulations on your open source contribution!`
    );
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate if your pull request was merged!
      
      ${err}`
    );
  }
};
