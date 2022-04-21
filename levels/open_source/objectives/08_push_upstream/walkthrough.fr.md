# Publier upstream

## Local ou distant

Les répertoires (aussi appelé "répos") Git se déclinent en deux versions selon leur emplacement. La version que vous avez clonée sur votre propre ordinateur est appelée répertoire `local`. La version d'origine sur GitHub et la copie que vous avez dupliquée sont appelées répertoires `remote`.

Pour l'instant, votre nouvelle modification de pixel n'existe que sur votre ordinateur, dans un répertoire local. Pour le partager avec le monde entier, vous devez l'envoyer vers un répertoire distant.

C'est ce que nous allons le faire avec la commande `git push`. Nous devons ajouter des arguments et des indicateurs à cette commande avant de l'exécuter.

## Upstream

En anglais, le processus d'envoi des modifications locales vers un répertoire distant s'appelle «&nbsp;push upstream&nbsp;» (littéralement, pousser en amont) dans Git. «&nbsp;Upstream&nbsp;» est un terme qui fait référence à la branche distante du même nom que celle sur laquelle vous travaillez localement.

Lorsque vous avez créé votre branche avec la commande `git branch` précédemment, vous ne l'avez créée que localement. Nous devons utiliser l'indicateur `--set-upstream` si nous voulons aussi publier votre branche sur le répo distant.

Voici à quoi ressemble notre commande maintenant&nbsp;:

```bash
git push --set-upstream
```

## Upstream, c'est où&nbsp;? C'est l'origine&nbsp;!

L'indicateur `--set-upstream` est la première pièce de notre puzzle&nbsp;! Cependant, l'upstream ne sait pas encore où trouver notre répo distant. Dans le terminal, exécutez la commande suivante&nbsp;:

```bash
git remote  -v
```

Vous allez voir plusieurs lignes qui ressemblent à ceci&nbsp;:

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

Vous reconnaîtrez peut-être les URL que vous avez clonées pour créer la copie locale originale de votre fork Open Pixel Art. C'est parce que `git` s'est occupé de connecter notre fork distante pour nous.

À gauche de ces URL, vous verrez le mot `origin`. Il s'agit du nom par défaut que Git attribue à votre premier répo distant connecté quand vous effectuez un clone Git initial.

Pour spécifier que nous voulons envoyer upstream vers notre répertoire `origin` distant, nous devons l'ajouter en tant que paramètre après l'indicateur `--set-upstream`.

Notre commande se présente désormais comme suit&nbsp;:

```bash
git push --set-upstream origin
```

## Comment l'appelons-nous&nbsp;?

La dernière chose que Git a besoin de savoir sur la façon dont nous publions notre branche locale vers notre répo distant est le nom de la branche. Nous souhaitons appeler notre nouvelle branche distante de la même manière que notre branche locale.

Transmettez le nom de la branche locale sur laquelle vous avez travaillé comme paramètre final pour la commande `git push`.

Votre commande finale doit ressembler à ceci&nbsp;:

```bash
git push --set-upstream origin <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Allez-y, lancez-la&nbsp;! On vous demandera d'entrer votre nom d'utilisateur et votre mot de passe GitHub, puis tout sera chargé sur GitHub.

## Verify

Jetez un œil à votre répo GitHub pour vous assurer que votre branche est bien présente.

L'URL de votre nouvelle branche doit ressembler à ce qui suit&nbsp;:

\[https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

Nul besoin de mémoriser les URL, vous pouvez simplement accéder à cette vue via l'interface utilisateur de GitHub.

## Hack&nbsp;!

Une fois que vous avez publié votre branche locale vers votre fork distante, continuez et appuyez sur `HACK`&nbsp;!