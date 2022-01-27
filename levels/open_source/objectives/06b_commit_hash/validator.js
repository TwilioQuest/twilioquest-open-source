const commandExists = require('command-exists');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  const { TQ_LOCAL_GIT_USER_NAME, TQ_OPEN_PIXEL_ART_DIR } = helper.env;
  const commitHash = helper.getNormalizedInput('commitHash');

  try {
    await commandExists('git');
    const gitShowCommit = await exec(`git show ${commitHash}`, {
      cwd: TQ_OPEN_PIXEL_ART_DIR,
    });

    const commit = gitShowCommit.stdout;

    if (!commit.includes(TQ_LOCAL_GIT_USER_NAME)) {
      helper.fail(helper.world.getTranslatedString('open_source.06b_commit_hash.local_git_user_error', { commitHash, TQ_LOCAL_GIT_USER_NAME }));
      return;
    }

    return helper.success(helper.world.getTranslatedString('open_source.06b_commit_hash.success', { TQ_LOCAL_GIT_USER_NAME }));
  } catch (err) {
    helper.fail(helper.world.getTranslatedString('open_source.06b_commit_hash.error', { err }));
  }
};
