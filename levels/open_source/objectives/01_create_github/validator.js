const got = require("got");

module.exports = async (helper) => {
  const username = helper.getNormalizedInput("username", { lowerCase: false });

  if (!username) {
    return helper.fail(helper.world.getTranslatedString('open_source.01_create_github.enter_github_account'));
  }

  try {
    const response = await got(`https://api.github.com/users/${username}`, {
      throwHttpErrors: false,
    });

    if (response.statusCode === 200) {
      return helper.success(
        helper.world.getTranslatedString('open_source.01_create_github.username_found', { username }),
        [{ name: "GITHUB_USERNAME", value: username }]
      );
    } else {
      helper.fail(helper.world.getTranslatedString('open_source.01_create_github.username_notfound', { username }));
    }
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.01_create_github.username_error', { err }));
  }
};
