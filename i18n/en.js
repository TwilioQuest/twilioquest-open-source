module.exports = {
  "open_source.druid_default.hello": "Hello! Nice to meet you!",
  "open_source.druid_guard_forbidden_leader.apologies": `Apologies traveler, but you may not enter here. Please speak with 
  our leader in the village first. With their permission, we could let you 
  pass.`,
  "open_source.druid_guard_forbidden.peace": `Peace, traveler. The way beyond is not yet safe, and we cannot let you
  pass. Return again later, and the way may be clear.`,
  "open_source.druid_guard.peace": "Peace, traveler. May you create more pull requests than issues.",
  "open_source.druid_leader.thank_you": `Thank you for answering our summons. The most urgent issue requiring
  your attention is the path to the 
  <span class='highlight'>Flame of Open Source</span>. It would be a great
  service if you could unblock the path through the forest to the flame.
  I will see to it my guards let you pass.`,
  "open_source.events.brush.open_source_flame": "Hopefully the <em>The Flame of Open Source</em> can help me burn through this brush.",
  "open_source.01_create_github.enter_github_account": "Please enter the username of your GitHub account!",
  "open_source.01_create_github.username_found": "We found your GitHub user, {username}. Good job!",
  "open_source.01_create_github.username_notfound": "We couldn't find the GitHub user, {username}. Is there a typo in the username?",
  "open_source.01_create_github.username_error": `Something went wrong when we tried to validate your GitHub username 
  {err}`,
  "open_source.02_fork_project.success": "We found your fork of the Open Pixel Art repository! Good job!",
  "open_source.02_fork_project.repository_not_found": "We couldn't find a repository named 'open-pixel-art' owned by the GitHub user, {TQ_GITHUB_USERNAME}. Is your fork named correctly?",
  "open_source.02_fork_project.error": `Something went wrong when we tried to validate your Open Pixel Art fork! 
  {err}`,
  "open_source.03_install_git.git_installed": "We found git installed on your computer!",
  "open_source.03_install_git.git_not_found": "We did not find the git command on your system path. If you installed git for the first time while playing TwilioQuest, you may need to quit and relaunch the game for TwilioQuest to ensure the command is present.",
  "open_source.03b_configure_git.git_not_found": "We did not find command line git installed on your computer!",
  "open_source.03b_configure_git.email_error": "We did not find the you email configured correctly!",
  "open_source.03b_configure_git.username_not_found": "We did not find the you user name configured correctly!",
  "open_source.03b_configure_git.email_not_configured": "It looks like your email and name are configured correctly!",
  "open_source.03b_configure_git.error": `Something went wrong while tried to validate your git configuration!
  {err}`,
  "open_source.04_git_clone.dont_forget_path": "Don't forget to provide a repository file path!",
  "open_source.04_git_clone.path_not_found": "We could not find a directory at the path you provided! -> {repositoryFilePath}",
  "open_source.04_git_clone.package_not_found": "We could not find the package file in your provided repository! Was it cloned correctly? -> {packagePath}",
  "open_source.04_git_clone.package_not_correct": "The package file in that repository was not for the correct project! Was it cloned correctly? -> {packagePath}",
  "open_source.04_git_clone.success": "It looks like you've cloned the Open Pixel Art repository correctly!",
  "open_source.04_git_clone.error": `Something went wrong while we were trying to validate your repository clone! 
  {err}`,
  "open_source.05_git_branch.dont_forget_branch": "Don't forget to provide the name of the branch you created!",
  "open_source.05_git_branch.branch_not_found": "We couldn't find the branch named '{branchName}' in your repository!",
  "open_source.05_git_branch.branch_found": "We found your branch '{branchName}' but it looks like you haven't checked it out yet!",
  "open_source.05_git_branch.success": "It looks like you created and checked out the branch '{branchName}' correctly!",
  "open_source.05_git_branch.error": `We ran into a problem trying to validate your branch was created! 
  {err}`,
  "open_source.06_make_edits.pixels_not_found": "We could not find the pixels.json file in your provided repository! Has it been removed? -> {pixelsPath}",
  "open_source.06_make_edits.pixel_not_found_on_git": "We didn't find a pixel in the _data/pixels.json file with your git username, {TQ_GITHUB_USERNAME}!",
  "open_source.06_make_edits.commit_not_found": "We didn't find a commit with your git username, {TQ_LOCAL_GIT_USER_NAME}, on it for the '_data/pixels.json' file! Have you committed your changes?",
  "open_source.06_make_edits.success": "It looks like you've correctly added and committed your new pixel!",
  "open_source.06_make_edits.error": `We ran into a problem trying to validate you added your new pixel! 
  {err}`,
  "open_source.06b_commit_hash.local_git_user_error": "Sorry! The commit hash '{commitHash}' does not have your local git user '{TQ_LOCAL_GIT_USER_NAME}' listed as the author!",
  "open_source.06b_commit_hash.try_git_show": "Try the command 'git show {commitHash}' to look at the specific commit you just provided.",
  "open_source.06b_commit_hash.success": "We found your pixel commit for the author '{TQ_LOCAL_GIT_USER_NAME}'!",
  "open_source.06b_commit_hash.error": `Something went wrong when we tried to validate your pixel commit! 
  {err}`,
  "open_source.07_sync_master.remote_not_found": "We didn't find a local remote named 'upstream'! Did you create one yet?",
  "open_source.07_sync_master.upstream_found": "We found your 'upstream' remote, but it doesn't seem to have the correct URL.  It should look like this: https://github.com/twilio-labs/open-pixel-art.git  Run git remote -v in your terminal to verify it!",
  "open_source.07_sync_master.repo_not_connected": `We couldn't connect to the Open Pixel Art repository! 
  {statusMessage}`,
  "open_source.07_sync_master.repo_not_found": `We couldn't find the 'open-pixel-art' repository for your user '{TQ_GITHUB_USERNAME}'! 
  {statusMessage}`,
  "open_source.07_sync_master.open_pixel": "The Open Pixel Art repository and the 'open-pixel-art' repository for your user '{TQ_GITHUB_USERNAME} are out of sync'! New changes may've been added since your last sync. Try syncing again!",
  "open_source.07_sync_master.success": "The Open Pixel Art repository and the 'open-pixel-art' repository for your user '{TQ_GITHUB_USERNAME}' are in sync! These may get out of sync in the future as other users make changes to the repository!",
  "open_source.07_sync_master.error": `Something went wrong when we tried to validate if your Open Pixel Art fork was synchronized! 
  {err}`,
  "open_source.07b_merge_master.latest_commit_not_found": "The latest commit on master '{latestMasterCommit}' wasn't found in your branch '{TQ_OPEN_PIXEL_ART_BRANCH}'!",
  "open_source.07b_merge_master.latest_commit_found": "We found the latest commit on master in your branch '{TQ_OPEN_PIXEL_ART_BRANCH}'!",
  "open_source.07b_merge_master.error": `Something went wrong when we tried to validate if your branch had master merged in! 
  {err}`,
  "open_source.08_push_upstream.branch_found": "We found your branch '{TQ_OPEN_PIXEL_ART_BRANCH}' on your remote repository for the user '{TQ_GITHUB_USERNAME}'!",
  "open_source.08_push_upstream.branch_not_found": "We could not find your branch '{TQ_OPEN_PIXEL_ART_BRANCH}' on your remote repository 'open-pixel-art' for the user '{TQ_GITHUB_USERNAME}'!",
  "open_source.08_push_upstream.error": `Something went wrong when we tried to validate your Open Pixel Art branch! 
  {err}`,
  "open_source.09_make_pr.pr_not_found": "We could not find the Pull Request #{prNumber} on the Open Pixel Art remote repository!",
  "open_source.09_make_pr.pr_found_wrong_user": "We found the Pull Request #{prNumber} on the Open Pixel Art remote repository, but it doesn't belong to your GitHub user '{TQ_GITHUB_USERNAME}'!",
  "open_source.09_make_pr.success": "We found your Pull Request #{prNumber} on the Open Pixel Art remote repository for your GitHub user '{TQ_GITHUB_USERNAME}'!",
  "open_source.09_make_pr.error": `Something went wrong when we tried to validate your Open Pixel Art pull request! 
  {err}`,
  "open_source.11_check_merge.pr_not_found": "We could not find the Pull Request #{TQ_OPEN_PIXEL_ART_PR_NUMBER} on the Open Pixel Art remote repository!",
  "open_source.11_check_merge.pr_found_closed": "We found the Pull Request #{TQ_OPEN_PIXEL_ART_PR_NUMBER} on the Open Pixel Art remote repository, but it was closed without being merged!",
  "open_source.11_check_merge.pr_not_merged": "We found the Pull Request #{TQ_OPEN_PIXEL_ART_PR_NUMBER} on the Open Pixel Art remote repository, but it has not been merged yet!",
  "open_source.11_check_merge.success": "We found the Pull Request #{TQ_OPEN_PIXEL_ART_PR_NUMBER} on the Open Pixel Art remote repository and it has been merged! Congratulations on your open source contribution!",
  "open_source.11_check_merge.error": "Something went wrong when we tried to validate if your Open Pixel Art pull request was merged!",
  "open_source.12_merge_another.dont_forget_owner": "Don't forget to enter the name of the repository owner who's project you contributed to!",
  "open_source.12_merge_another.dont_forget_name": "Don't forget to enter the name of the repository you contributed to!",
  "open_source.12_merge_another.dont_forget_number": "Don't forget to enter the number of the Pull Request you contributed with!",
  "open_source.12_merge_another.pixel_fail": "You can't count your Open Pixel Art contribution again!",
  "open_source.12_merge_another.pr_not_found": "We could not find the Pull Request #{prNumber} on {repositoryOwner}'s repository '{repository}'!",
  "open_source.12_merge_another.pr_dont_belong": "We found the Pull Request #{prNumber} on {repositoryOwner}'s repository '{repository}', but it doesn't belong to your GitHub user '{TQ_GITHUB_USERNAME}'!",
  "open_source.12_merge_another.pr_closed": "We found the Pull Request #{prNumber} on {repositoryOwner}'s repository '{repository}', but it was closed without being merged!",
  "open_source.12_merge_another.pr_not_merged": "We found the Pull Request #{prNumber} on {repositoryOwner}'s repository '{repository}', but it has not been merged yet!",
  "open_source.12_merge_another.success": "We found the Pull Request #{prNumber} on {repositoryOwner}'s repository '{repository}' and it has been merged! Congratulations on your open source contribution!",
  "open_source.12_merge_another.error": `Something went wrong when we tried to validate if your pull request was merged! 
  {err}`
}
