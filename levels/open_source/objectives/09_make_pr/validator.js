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
      helper.fail(
        `We could not find the Pull Request #${prNumber} on the Open Pixel Art remote repository"!`
      );
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);

    const prOwner = parsedResponseBody.user.login;

    if (prOwner !== TQ_GITHUB_USERNAME) {
      helper.fail(
        `We found the Pull Request #${prNumber} on the Open Pixel Art remote repository, but it doesn't belong to your GitHub user "${TQ_GITHUB_USERNAME}"!`
      );
      return;
    }

    return helper.success(
      `We found your Pull Request #${prNumber} on the Open Pixel Art remote repository for your GitHub user "${TQ_GITHUB_USERNAME}"!`,
      [{ name: 'OPEN_PIXEL_ART_PR_NUMBER', value: prNumber }]
    );
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate your Open Pixel Art pull request!
      
      ${err}`
    );
  }
};
