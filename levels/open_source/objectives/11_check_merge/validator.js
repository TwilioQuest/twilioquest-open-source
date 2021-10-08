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
      helper.fail(
        `We could not find the Pull Request #${TQ_OPEN_PIXEL_ART_PR_NUMBER} on the Open Pixel Art remote repository"!`
      );
      return;
    }

    const parsedResponseBody = JSON.parse(response.body);
    const isPrClosed = parsedResponseBody.state === 'closed';
    const isPrMerged = parsedResponseBody.merged === true;

    if (isPrClosed && !isPrMerged) {
      helper.fail(
        `We found the Pull Request #${TQ_OPEN_PIXEL_ART_PR_NUMBER} on the Open Pixel Art remote repository, but it was closed without being merged!`
      );
      return;
    }

    if (!isPrMerged) {
      helper.fail(
        `We found the Pull Request #${TQ_OPEN_PIXEL_ART_PR_NUMBER} on the Open Pixel Art remote repository, but it has not been merged yet!`
      );
      return;
    }

    return helper.success(
      `We found the Pull Request #${TQ_OPEN_PIXEL_ART_PR_NUMBER} on the Open Pixel Art remote repository and it has been merged! Congratulations on your open source contribution!`
    );
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate if your Open Pixel Art pull request was merged!
      
      ${err}`
    );
  }
};
