# Devenir le maître de la fusion

## Qu'est-ce qu'une fusion&nbsp;?

Lorsque vous avez extrait les commits du répertoire Open Pixel Art d'origine dans votre repo local, tout s'est déroulé sans problème. Cela est dû au fait que vous n'avez modifié aucun fichier sur cette branche.

Cependant, vous avez apporté des modifications à votre branche pixel `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>` avec le commit du nouveau pixel. Il est probable que, lorsque vous avez extrait les commits du projet Open Pixel Art, quelqu'un d'autre ait également ajouté un nouveau pixel. Afin de rapprocher ces modifications qui affectent le même code, nous devons passer par un processus de fusion.

Parfois, Git peut déterminer automatiquement à quoi doit ressembler le code fusionné. Si je modifie la première ligne d'un fichier et que vous modifiez la 200e ligne, Git peut reconnaître que ces deux lignes doivent être intégrées au fichier final. Cependant, si je modifie la 3e ligne et que vous modifiez la 5e, les choses se compliquent un peu.

Lorsque des modifications de ce type se produisent et que Git ne peut pas déterminer automatiquement le résultat final, nous devons l'aider en décidant manuellement quel code doit entrer dans le fichier final. Nous appelons cette situation un conflit de fusion.

## Conflit&nbsp;!

Les conflits de fusion peuvent être difficiles à résoudre. Si vous demandez aux développeurs ce qu'ils aiment le moins quand ils travaillent avec Git et le contrôle de versions, la plupart vous diront «&nbsp;résoudre les conflits de fusion&nbsp;». Nous ne disons pas cela pour vous effrayer, mais pour vous informer que les développeurs les plus expérimentés ont eux aussi des difficultés avec ce processus&nbsp;! Cela peut être un vrai casse-tête&nbsp;!

Heureusement, puisque vous ne modifiez qu'une seule ligne du fichier `_data/pixels.json`, la résolution des conflits de fusion devrait être simple.

Pour maîtriser complètement le sujet, il faudrait une mission supplémentaire... GitHub fournit des [informations plus détaillées sur les conflits de fusion et leurs causes](https://help.github.com/en/articles/about-merge-conflicts). Il propose également [un guide détaillé sur la façon de résoudre les conflits avec la ligne de commande](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line).

## Comment puis-je fusionner&nbsp;?

Tout d'abord, nous devons retourner à notre branche contenant le pixel. Cela nous permettra de réintégrer notre pixel dans le fichier `_data/pixels.json`&nbsp;!

```bash
git checkout <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Maintenant, puisque nous ne disposons plus du dernier code master, nous allons lancer le processus pour fusionner la branche `master` avec notre branche actuelle `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`.

```bash
git merge master
```

Lorsque vous avez exécuté la commande de fusion, vous avez probablement vu beaucoup de résultats vous expliquant comment la fusion s'est déroulée. Git vous indiquera s'il a tenté de fusionner automatiquement des fichiers et s'il y a eu des conflits lors de la tentative de fusion.

Si vous n'avez vu aucun message `CONFLICT`, alors vous avez de la chance&nbsp;! Git n'a pas eu besoin d'aide pour résoudre votre problème de fusion&nbsp;!

Nous pouvons obtenir plus d'informations sur l'état actuel de notre fusion en exécutant la commande `git status`. Elle nous fournira beaucoup d'informations.

Elle indiquera que nous devons résoudre manuellement une fusion `You have unmerged paths.` et nous donnera une commande pour annuler notre fusion `git merge --abort` en cas d'erreur.

En outre, au bas de cette commande, le résultat contient une liste des chemins non fusionnés dans lesquels nous devons résoudre les conflits. Si vous venez d'ajouter un pixel, vous verrez quelque chose comme&nbsp;:

```bash
Unmerged paths:
  (use "git add <file>..." to mark resolution)

	both modified:   _data/pixels.json
```

[It's time to resolve the conflicts!](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line) (L'heure est venue de résoudre des conflits&nbsp;!)

Une fois que vous avez résolu vos conflits de fusion, vous devez effectuer un commit sur cette résolution pour que Git connaisse votre décision finale&nbsp;! Nous mettons les `-m` inactifs de côté cette fois-ci pour pouvoir utiliser le message de fusion généré automatiquement par Git.

## Commit

```
git commit
```

Si vous exécutez cette commande et que vous voyez un message `error: Committing is not possible because you have unmerged files.` ou quelque chose du même genre, c'est que votre fusion n'est pas encore résolue&nbsp;!

Si vous n'avez pas vu le message ci-dessus, cela signifie que votre éditeur de texte Git a besoin que vous écriviez votre message commit&nbsp;!

L'outil par défaut qui s'ouvre pour modifier le message commit est Vim. Il s'agit d'un éditeur de texte de ligne de commande qui peut être un peu déroutant si vous ne l'avez jamais utilisé auparavant. Pour enregistrer ce message dans Vim, il y a plusieurs étapes à suivre.

1. Appuyez d'abord sur la touche `ESC` pour passer en mode Commande.
2. Saisissez `:` pour lancer une commande.
3. Tapez `w` pour demander à Vim d'écrire vos modifications dans le fichier.
4. Tapez `q` pour demander à Vim de quitter.
5. Appuyez sur `ENTER` pour exécuter votre commande Vim.

Si tout fonctionne correctement, vous devriez revenir dans le terminal, hors de Vim&nbsp;!

## Verify

Nous allons vérifier que tout fonctionne en exécutant `git status` une dernière fois. Nous devrions maintenant voir un message comme `nothing to commit, working tree clean` indiquant que tout est à jour.

Par ailleurs, exécutons `git log` pour trouver notre commit de fusion. Votre commit le plus récent doit contenir le message que vous avez saisi dans Vim pour le commit. Si le message a été généré automatiquement, il se présentera comme suit&nbsp;:

```bash
Merge branch 'master' into <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Une fois que vous avez fusionné votre master à la branche `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`, appuyez sur `HACK` à droite&nbsp;!