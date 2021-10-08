const commandExists = require('command-exists');

module.exports = async helper => {
  try {
    await commandExists('git');

    helper.success(`We found git installed on your computer!`);
  } catch (err) {
    helper.fail(`
      We did not find the git command on your system path. If you installed
      git for the first time while playing TwilioQuest, you may need to quit
      and relaunch the game for TwilioQuest to ensure the command is present.
    `);
  }
};
