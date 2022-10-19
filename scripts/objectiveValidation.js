/**
 * Performs a naive check for the Git exe
 * @param {string} git - The path to the local Git installation.
 */
function checkSetup(git) {
  if (!!git === false) {
    throw new Error(
      "It looks like you don't have a Python executable path saved in your game\
        configuration. Go back to the very first barrier of this area and repeat\
        that challenge. It will set up your Python executable for you."
    );
  }
}

module.exports = {
  checkSetup,
};
