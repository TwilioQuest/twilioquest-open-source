/**
 * Performs a naive check for the Git exe
 * @param {string} git - The path to the local Git installation.
 */
function checkSetup(git) {
  if (!!git === false) {
    throw new Error(
      "It looks like you don't have a Git executable path saved in your game \
        configuration. Head to the previous terminal and follow the steps to \
        installing Git."
    );
  }
}

module.exports = {
  checkSetup,
};
