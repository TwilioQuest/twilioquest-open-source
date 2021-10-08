const got = require("got");

module.exports = async (helper) => {
  const username = helper.getNormalizedInput("username", { lowerCase: false });

  if (!username) {
    return helper.fail(`Please enter the username of your GitHub account!`);
  }

  try {
    const response = await got(`https://api.github.com/users/${username}`, {
      throwHttpErrors: false,
    });

    if (response.statusCode === 200) {
      return helper.success(
        `We found your GitHub user, ${username}. Good job!`,
        [{ name: "GITHUB_USERNAME", value: username }]
      );
    } else {
      helper.fail(
        `We couldn't find the GitHub user, ${username}. Is there a typo in the username?`
      );
    }
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate your GitHub username!
      
      ${err}`
    );
  }
};
