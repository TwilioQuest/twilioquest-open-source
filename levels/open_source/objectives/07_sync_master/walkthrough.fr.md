# Synchroniser une fork

## Git est un système distribué

L'un des aspects importants de Git est sa distribution. Cela signifie essentiellement que le système ne contient aucun élément «&nbsp;en amont&nbsp;» ou «&nbsp;en aval&nbsp;» inhérent.

Chaque répertoire (aussi appelé «&nbsp;repo&nbsp;») contient le même historique Git et les mêmes snapshots de votre code. Cela dit, il existe plusieurs conventions de dénomination que la communauté open source utilise pour assurer le suivi des éléments. Rappelez-vous seulement qu'ils n'ont rien de spécial&nbsp;!

## Local ou distant

La première classification utile des repos est `local` ou `remote`. La version que vous avez clonée sur votre propre ordinateur est appelée répertoire `local`. La version d'origine sur GitHub et la copie que vous avez dupliquée sont appelées répertoires `remote`.

Vos modifications ne sont appliquées dans votre repo local que jusqu'à ce que vous les transmettiez via Push vers votre fork. L'une des difficultés à travailler sur un projet open source est que d'autres développeurs apportent également des modifications&nbsp;!

## Comment obtenir leurs modifications&nbsp;?

Pendant que vous travaillez ici, il est possible que de nouvelles modifications aient été chargées sur GitHub que vous n'avez pas localement&nbsp;! Lorsque vous avez cloné la fork Open Pixel Art Fork sur cet ordinateur, vous l'avez liée en tant que repo distant.

Vous pouvez afficher tous les répertoires liés à l'aide de la commande `git remote`. L'ajout de la commande `-v` donne plus d'informations sur les repos distants, comme l'URL du répertoire Git à laquelle il est lié.

```bash
git remote  -v
```

Lorsque vous exécutez `git remote`, quelques lignes s'affichent au format suivant&nbsp;:

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

Cependant, d'autres développeurs ne modifieront pas votre fork, mais changeront l'original. Vous devez ajouter un autre répertoire distant. Selon la convention, appelez-le `upstream`.

## Comment ajouter le répertoire distant en amont&nbsp;?

Tout d'abord, vous avez besoin de l'URL du repo Git [du projet Open Pixel Art d'origine](https://github.com/twilio-labs/open-pixel-art). Elle est très similaire à l'URL du navigateur et se termine par `.git`. Pour obtenir cette URL, suivez les mêmes étapes que lors [du clonage initial de ce repo à partir de la documentation GitHub](https://help.github.com/en/articles/cloning-a-repository).

L'URL est au format suivant (elle sera différente pour tout autre répertoire que vous utiliserez à l'avenir)&nbsp;:

```bash
https://github.com/twilio-labs/open-pixel-art.git
```

Vous allez maintenant utiliser la fonctionnalité `add` de `git remote`. La commande à exécuter s'affiche au format suivant&nbsp;:

```bash
git remote add upstream https://github.com/twilio-labs/open-pixel-art.git
```

`git remote add` est la commande exécutée, `upstream` est le nom de la télécommande créée et `https://github.com/twilio-labs/open-pixel-art.git` provient du repo du projet Open Pixel Art sur GitHub.

Exécutez `git remote -v` encore une fois pour vérifier que `upstream` est correctement créé. La commande devrait afficher `origin` et `upstream`.

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
upstream	https://github.com/twilio-labs/open-pixel-art.git (fetch)
upstream	https://github.com/twilio-labs/open-pixel-art.git (push)
```

## Synchroniser votre fork avec le répertoire distant

GitHub ne dispose d'aucune fonctionnalité permettant de synchroniser directement deux répertoires distants.

1. Au lieu de cela, vous allez extraire localement le code de la branche `master` du repo Open Pixel Art d'origine.
2. Ensuite, vous allez le fusionner avec la branche `master` du repo local.
3. Enfin, vous transmettrez via Push la branche `master` mise à jour vers la fork.

Cette procédure permet de synchroniser les trois répertoires.

**1\.** Tout d'abord, passez sur la branche master&nbsp;:

```bash
git checkout master
```

La sélection de la branche master ramène le code à l'état dans lequel il se trouvait lors du clonage initial. Si vous vérifiez le fichier `_data/pixels.json`, vous ne verrez plus le pixel ajouté.

Ne vous inquiétez pas&nbsp;! Si vous revenez à votre branche, `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`, vos modifications sont toujours là.

**2\.** Maintenant, utilisez la commande `git pull` pour obtenir le code du répertoire `upstream` récemment configuré. Vous devez également spécifier la branche `master` configurée pour la commande pull.

```bash
git pull upstream master
```

**3\.** Après avoir exécuté la commande pull, un message s'affiche. Il répertorie toutes les différences de code entre la branche `master` locale et la branche `master` du repo `open-pixel-art`. Il peut s'agir d'une tonne de fichiers ou bien vous pouvez recevoir un message indiquant que vous êtes déjà à jour&nbsp;!

Si vous avez obtenu des modifications, vous devez les transmettre via Push à votre fork. Pour ce faire, exécutez la commande git push.

```bash
git push
```

Cette commande permet de transmettre via Push vos modifications locales de la branche `master` vers la branche `master` de votre fork. L'historique Git de la fork pour la branche master, la branche master locale et la branche master du répertoire open-pixel-art est maintenant synchronisé&nbsp;!

## Verify

Pour afficher la liste des derniers commits sur chaque répertoire, consultez ces URL. N'oubliez pas d'actualiser pour vous assurer que le dernier commit est le même sur votre fork et le repo d'origine.

Il est possible que de nouveaux commits soient apparus depuis votre dernière synchronisation&nbsp;! Cette situation est particulièrement fréquente dans ce repo d'apprentissage où les requêtes pull sont automatiquement approuvées et fusionnées&nbsp;!

[https://github.com/twilio-labs/open-pixel-art/commits/master](https://github.com/twilio-labs/open-pixel-art/commits/master)

\[https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master](https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master)

Une fois que vous avez synchronisé les branches master des trois répertoires, cliquez sur `HACK` à droite&nbsp;!