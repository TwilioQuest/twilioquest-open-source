module.exports = {
  "open_source.druid_default.display_name": "Villageois druidique",
  "open_source.druid_default.hello": "Bonjour! Ravi de vous rencontrer!",
  "open_source.druid_guard.display_name": "Garde druidique",
  "open_source.druid_guard_forbidden_leader.apologies": `Toutes mes excuses voyageur, mais vous ne pouvez pas passer. Vous devez d'abord vous entretenir avec 
  le chef du village. Avec sa permission, nous pourrons vous laisser 
  passer.`,
  "open_source.druid_guard_forbidden.peace": `Paix sur vous, voyageur. Le chemin n'est pas encore sûr, et nous ne pouvons pas vous laisser
  passer. Revenez plus tard. La voie sera peut-être libre.`,
  "open_source.druid_guard.peace": "Paix sur vous, voyageur. Puissiez-vous créer plus de requêtes pull que de problèmes.",
  "open_source.druid_leader.display_name": "Chef druidique",
  "open_source.druid_leader.thank_you": `Merci d'avoir répondu à notre appel. Le problème le plus urgent qui nécessite
  votre attention est le chemin vers la 
  <span class='highlight'>Flamme de l'Open Source</span>. Vous nous rendriez un grand
  service si vous pouviez dégager le chemin à travers la forêt jusqu'à la flamme.
  Je vais dire aux gardes de vous laisser passer.`,
  "open_source.events.brush.open_source_flame": "J'espère que la <em>Flamme de l'Open Source</em> m'aidera à brûler ces broussailles.",
  "open_source.01_create_github.enter_github_account": "Saisissez le nom d'utilisateur de votre compte GitHub!",
  "open_source.01_create_github.username_found": "Nous avons trouvé votre utilisateur GitHub, {username}. Bon travail!",
  "open_source.01_create_github.username_notfound": "Nous n'avons pas trouvé l'utilisateur GitHub, {username}. Le nom d'utilisateur est-il mal écrit?",
  "open_source.01_create_github.username_error": `Une erreur s'est produite lors de la tentative de validation de votre nom d'utilisateur GitHub 
  {err}`,
  "open_source.02_fork_project.success": "Nous avons trouvé votre fork du répertoire Open Pixel Art! Bon travail!",
  "open_source.02_fork_project.repository_not_found": "Nous n'avons trouvé aucun répertoire nommé «open-pixel-art» appartenant à l'utilisateur GitHub {TQ_GITHUB_USERNAME}. Le nom de votre fork est-il correct?",
  "open_source.02_fork_project.error": `Une erreur s'est produite lors de la tentative de validation de votre fork Open Pixel Art! 
  {err}`,
  "open_source.03_install_git.git_installed": "Git est installé sur votre ordinateur!",
  "open_source.03_install_git.git_not_found": "Nous n'avons pas trouvé la commande Git sur votre chemin d'accès système. Si vous avez installé Git pour la première fois pour jouer à TwilioQuest, vous devrez peut-être relancer le jeu pour que TwilioQuest vérifie l'existence de la commande.",
  "open_source.03b_configure_git.git_not_found": "Le Git de ligne de commande n'est pas installé sur votre ordinateur!",
  "open_source.03b_configure_git.email_error": "Votre adresse e-mail n'est pas configurée correctement!",
  "open_source.03b_configure_git.username_not_found": "Votre nom d'utilisateur n'est pas configuré correctement!",
  "open_source.03b_configure_git.email_not_configured": "Il semble que votre adresse e-mail et votre nom soient configurés correctement!",
  "open_source.03b_configure_git.error": `Une erreur s'est produite lors de la tentative de validation de votre configuration Git!
  {err}`,
  "open_source.04_git_clone.dont_forget_path": "N'oubliez pas de fournir un chemin d'accès au fichier de répertoire!",
  "open_source.04_git_clone.path_not_found": "Nous n'avons pas trouvé de répertoire au chemin d'accès indiqué! -> {repositoryFilePath}",
  "open_source.04_git_clone.package_not_found": "Nous n'avons pas trouvé le fichier de package dans le répertoire fourni! A-t-il été cloné correctement? -> {packagePath}",
  "open_source.04_git_clone.package_not_correct": "Le fichier de package dans ce répertoire n'était pas pour le projet correct! A-t-il été cloné correctement? -> {packagePath}",
  "open_source.04_git_clone.success": "Il semble que vous ayez cloné correctement le répertoire Open Pixel Art!",
  "open_source.04_git_clone.error": `Une erreur s'est produite lors de la tentative de validation de votre clone de répertoire! 
  {err}`,
  "open_source.05_git_branch.dont_forget_branch": "N'oubliez pas de fournir le nom de la branche que vous avez créée!",
  "open_source.05_git_branch.branch_not_found": "Nous n'avons pas trouvé la branche nommée '{branchName}' dans votre répertoire!",
  "open_source.05_git_branch.branch_found": "Nous avons trouvé votre branche '{branchName}', mais il semble que vous ne l'ayez pas encore extraite!",
  "open_source.05_git_branch.success": "Il semble que vous ayez créé et extrait correctement la branche '{branchName}'!",
  "open_source.05_git_branch.error": `Nous avons rencontré un problème lors de la tentative de validation de la création de votre branche! 
  {err}`,
  "open_source.06_make_edits.pixels_not_found": "Nous n'avons pas trouvé le fichier pixels.json dans le répertoire fourni! A-t-il été supprimé? -> {pixelsPath}",
  "open_source.06_make_edits.pixel_not_found_on_git": "Nous n'avons pas trouvé de pixel dans le fichier _data/pixels.json avec votre nom d'utilisateur Git, {TQ_GITHUB_USERNAME}!",
  "open_source.06_make_edits.commit_not_found": "Nous n'avons pas trouvé de commit avec votre nom d'utilisateur Git {TQ_LOCAL_GIT_USER_NAME} pour le fichier «_data/pixels.json»! Avez-vous validé vos changements?",
  "open_source.06_make_edits.success": "Il semble que vous ayez correctement ajouté et validé votre nouveau pixel!",
  "open_source.06_make_edits.error": `Nous avons rencontré un problème lors de la tentative de validation de l'ajout de votre nouveau pixel! 
  {err}`,
  "open_source.06b_commit_hash.local_git_user_error": "Désolé! Votre commit hash '{commitHash}' ne contient pas votre utilisateur Git local '{TQ_LOCAL_GIT_USER_NAME}' comme auteur!",
  "open_source.06b_commit_hash.try_git_show": "Essayez la commande «git show {commitHash}» pour examiner le commit spécifique fourni.",
  "open_source.06b_commit_hash.success": "Nous avons trouvé votre pixel validé pour l'auteur '{TQ_LOCAL_GIT_USER_NAME}'!",
  "open_source.06b_commit_hash.error": `Une erreur s'est produite lors de la tentative de validation de votre pixel! 
  {err}`,
  "open_source.07_sync_master.remote_not_found": "Nous n'avons pas trouvé le répertoire distant local nommé «upstream»! En avez-vous déjà créé un?",
  "open_source.07_sync_master.upstream_found": "Nous avons trouvé votre répertoire distant «upstream», mais son URL ne semble pas correcte.  Elle doit être au format suivant: https://github.com/twilio-labs/open-pixel-art.git  Exécutez la commande git remote -v dans votre terminal pour la vérifier!",
  "open_source.07_sync_master.repo_not_connected": `Nous n'avons pas pu nous connecter au répertoire Open Pixel Art! 
  {statusMessage}`,
  "open_source.07_sync_master.repo_not_found": `Nous n'avons pas pu trouver le répertoire «open-pixel-art» pour votre utilisateur '{TQ_GITHUB_USERNAME}'! 
  {statusMessage}`,
  "open_source.07_sync_master.open_pixel": "Le répertoire Open Pixel Art et le répertoire «open-pixel-art» de votre utilisateur {TQ_GITHUB_USERNAME} ne sont pas synchronisés! De nouvelles modifications ont peut-être été ajoutées depuis votre dernière synchronisation. Effectuez une nouvelle synchronisation!",
  "open_source.07_sync_master.success": "Le répertoire Open Pixel Art et le répertoire «open-pixel-art» pour votre utilisateur '{TQ_GITHUB_USERNAME}' sont synchronisés! Ces éléments risquent d'être désynchronisés à l'avenir, car d'autres utilisateurs peuvent modifier le répertoire!",
  "open_source.07_sync_master.error": `Une erreur s'est produite lors de la tentative de validation de la synchronisation de votre fourche Open Pixel Art! 
  {err}`,
  "open_source.07b_merge_master.latest_commit_not_found": "Le dernier commit dans le master '{latestMasterCommit}' est introuvable dans votre branche '{TQ_OPEN_PIXEL_ART_BRANCH}'!",
  "open_source.07b_merge_master.latest_commit_found": "Nous avons trouvé le dernier commit dans le master dans votre branche '{TQ_OPEN_PIXEL_ART_BRANCH}'!",
  "open_source.07b_merge_master.error": `Une erreur s'est produite lors de la tentative de validation de la fusion du master et de votre branche! 
  {error}`,
  "open_source.08_push_upstream.branch_found": "Nous avons trouvé votre branche '{TQ_OPEN_PIXEL_ART_BRANCH}' dans votre répertoire distant pour l'utilisateur '{TQ_GITHUB_USERNAME}'!",
  "open_source.08_push_upstream.branch_not_found": "Nous n'avons pas trouvé votre branche '{TQ_OPEN_PIXEL_ART_BRANCH}' dans votre répertoire distant «open-pixel-art» pour l'utilisateur '{TQ_GITHUB_USERNAME}'!",
  "open_source.08_push_upstream.error": `Une erreur s'est produite lors de la tentative de validation de votre branche Open Pixel Art! 
  {err}`,
  "open_source.09_make_pr.pr_not_found": "Nous n'avons pas trouvé la requête pull #{prNumber} dans le répertoire distant Open Pixel Art!",
  "open_source.09_make_pr.pr_found_wrong_user": "Nous avons trouvé la requête pull #{prNumber} dans le répertoire distant Open Pixel Art, mais elle n'appartient pas à votre utilisateur GitHub '{TQ_GITHUB_USERNAME}'!",
  "open_source.09_make_pr.success": "Nous avons trouvé votre requête pull #{prNumber} dans le répertoire distant Open Pixel Art pour votre utilisateur GitHub '{TQ_GITHUB_USERNAME}'!",
  "open_source.09_make_pr.error": `Une erreur s'est produite lors de la tentative de validation de votre requête pull Open Pixel Art! 
  {err}`,
  "open_source.11_check_merge.pr_not_found": "Nous n'avons pas trouvé la requête pull #{TQ_OPEN_PIXEL_ART_PR_NUMBER} dans le répertoire distant Open Pixel Art!",
  "open_source.11_check_merge.pr_found_closed": "Nous avons trouvé la requête pull #{TQ_OPEN_PIXEL_ART_PR_NUMBER} dans le répertoire distant Open Pixel Art, mais elle a été fermée sans être fusionnée!",
  "open_source.11_check_merge.pr_not_merged": "Nous avons trouvé la requête pull #{TQ_OPEN_PIXEL_ART_PR_NUMBER} dans le répertoire distant Open Pixel Art, mais elle n'a pas encore été fusionnée!",
  "open_source.11_check_merge.success": "Nous avons trouvé la requête pull #{TQ_OPEN_PIXEL_ART_PR_NUMBER} dans le répertoire distant Open Pixel Art et elle a été fusionnée! Félicitations pour votre contribution open source!",
  "open_source.11_check_merge.error": "Une erreur s'est produite lors de la tentative de validation de la fusion de votre requête pull Open Pixel Art!",
  "open_source.12_merge_another.dont_forget_owner": "N'oubliez pas de saisir le nom du propriétaire du répertoire auquel vous avez contribué!",
  "open_source.12_merge_another.dont_forget_name": "N'oubliez pas de saisir le nom du répertoire auquel vous avez contribué!",
  "open_source.12_merge_another.dont_forget_number": "N'oubliez pas de saisir le numéro de la requête pull avec laquelle vous avez contribué!",
  "open_source.12_merge_another.pixel_fail": "Vous ne pouvez plus compter votre contribution Open Pixel Art!",
  "open_source.12_merge_another.pr_not_found": "Nous n'avons pas trouvé la requête pull #{prNumber} dans le répertoire '{repository}' de {repositoryOwner}!",
  "open_source.12_merge_another.pr_dont_belong": "Nous avons trouvé la requête pull #{prNumber} dans le répertoire '{repository}' de {repositoryOwner}, mais elle n'appartient pas à votre utilisateur GitHub '{TQ_GITHUB_USERNAME}'!",
  "open_source.12_merge_another.pr_closed": "Nous avons trouvé la requête pull #{prNumber} dans le répertoire '{repository}' de {repositoryOwner}, mais elle a été fermée sans être fusionnée!",
  "open_source.12_merge_another.pr_not_merged": "Nous avons trouvé la requête pull #{prNumber} dans le répertoire '{repository}' de {repositoryOwner}, mais elle n'a pas encore été fusionnée!",
  "open_source.12_merge_another.success": "Nous avons trouvé la requête pull #{prNumber} dans le répertoire '{repository}' de {repositoryOwner} et elle a été fusionnée! Félicitations pour votre contribution open source!",
  "open_source.12_merge_another.error": `Une erreur s'est produite lors de la tentative de validation de la fusion de votre requête pull! 
  {err}`,
  "open_source.events.speak_village_leader": "Je pense que je dois parler au chef du village avant de pouvoir aller plus loin dans la forêt.",
  "open_source.events.down_the_forest": "Il semblerait que le chemin vers la forêt soit dégagé. Maintenant, pour découvrir <em>la Flamme de l'Open Source...",
  "open_source.events.brush.cant_get_through": "Hum. Je ne peux pas passer dans ces broussailles, même avec <em>la Flamme de l'Open Source</em>. Je dois aller plus loin dans la forêt et revenir plus tard."
}