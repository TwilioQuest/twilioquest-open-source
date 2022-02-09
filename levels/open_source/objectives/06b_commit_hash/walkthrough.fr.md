# Logging Git

## Qu'est-ce qu'un commit hash&nbsp;?

Git effectue le suivi d'une série de snapshots de votre code sous forme de liste de commits. Cette liste de commits est appelée `git history` d'un répertoire. Afin de trouver ces snapshots ultérieurement, ils sont tous affectés à une longue chaîne unique et aléatoire appelée `commit hash`.

## Historique Git

Pour afficher l'historique Git de votre répertoire, exécutez la commande `git log` dans votre terminal. Une liste de chaque commit de votre répertoire s'ouvre dans le terminal. Vous pouvez `scroll up and down this list with your arrow keys`, en commençant par le commit le plus récent, puis revenez au premier commit. Pour `exit this view by hitting the Q`, appuyez sur la touche&nbsp;Q.

## Réglage précis du log

Comme vous pouvez l'imaginer, parcourir chaque commit dans un historique Git serait difficile et peu efficace. Pour vous aider, `git log` dispose [de nombreuses options](https://git-scm.com/docs/git-log) pour affiner vos résultats de recherche&nbsp;!

## Juste mes commits&nbsp;!

Pour trouver votre commit pixel, utilisez l'indicateur `--author`&nbsp;!

L'une des options `git log` fournies vous permet de filtrer les commits uniquement par un auteur fourni. Exécutez cette commande pour afficher uniquement vos commits Git&nbsp;!

```
git log --author="<%= env.TQ_LOCAL_GIT_USER_NAME.value %>"
```

## Quel est mon hash&nbsp;?

Après avoir exécuté `git log` avec l'indicateur de l'auteur, beaucoup d'informations s'affichent telles que l'auteur, la date et le message du commit. Une longue chaîne telle que `b256b5e67556d331ca6876d137db4f61a1eb031a` s'affiche en haut de votre commit. Il s'agit de votre hash de commit&nbsp;!

## Verify

Copiez la chaîne de hash de votre commit de pixel dans le champ à droite et appuyez sur `HACK`&nbsp;!