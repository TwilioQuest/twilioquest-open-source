const { execGitWithArgs } = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const gitConfigList = await execGitWithArgs(helper, `config --list`);

    if (!gitConfigList.stdout.includes("user.email=")) {
      helper.fail(`We did not find your email configured correctly!`);
      return;
    }

    if (!gitConfigList.stdout.includes("user.name=")) {
      helper.fail(`We did not find your user name configured correctly!`);
      return;
    }

    const gitConfigOptions = gitConfigList.stdout.split("\n");
    const gitUserNameOption = gitConfigOptions.find((option) =>
      option.includes("user.name=")
    );
    const [, userName] = gitUserNameOption.trim().split("=");

    helper.success(
      `It looks like your email and user name are configured correctly!`,
      [{ name: "LOCAL_GIT_USER_NAME", value: userName }]
    );
  } catch (err) {
    helper.fail(`Something went wrong while trying to validate your git configuration!
    
    ${err.message}`);
    console.error(err);
  }
};
