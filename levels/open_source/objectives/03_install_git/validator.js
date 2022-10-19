const { spawn } = require("child_process");

module.exports = async (helper) => {
  try {
    const { gitPath } = helper.validationFields;

    const args = ["--version"];
    const [isExecutableValid, errorMessage] = await helper.isExecutableValid(
      gitPath,
      args
    );

    if (!isExecutableValid) {
      helper.fail(errorMessage);
      return;
    }

    const gitVersion = spawn(gitPath, args);

    let versionString = "";
    gitVersion.stdout.on("data", (data) => {
      versionString += `${data}`;
    });

    gitVersion.on("close", (code) => {
      if (code === 0) {
        helper.success(
          `
        Awesome! Looks like you have this version installed: <br/>
        <span class="highlight">${versionString}</span> <br/><br/>
        Please proceed to the next security checkpoint.
      `,
          [{ name: "GIT_EXE", value: gitPath }]
        );
      } else {
        helper.fail(`
        Welp... something went wrong when we tried to validate this Git
        path. Double check the path and try again.
      `);
      }
    });
  } catch (e) {
    helper.fail(`
    Sorry! We couldn't validate your Git installation. Please try
    again.
    `);
    console.log(e);
  }
};
