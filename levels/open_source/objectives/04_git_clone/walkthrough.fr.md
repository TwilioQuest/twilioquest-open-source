# Clones

## Qu'est-ce que le clonage&nbsp;?

L'une des principales fonctions de Git est la possibilité de faire une copie locale du code hébergé sur un autre serveur. Le processus de création de cette copie est appelé clonage. Vous allez créer une copie locale du répertoire Open Pixel Art sur GitHub à l'aide de la commande `git clone`.

## Comment effectuer un clonage&nbsp;?

L'outil de ligne de commande Git fournit une commande appelée `clone` pour vous permettre de le faire. Cette commande vous demande d'obtenir l'URL du repo Git à cloner.

GitHub conserve la [documentation sur la façon d'obtenir l'URL](https://help.github.com/en/articles/cloning-a-repository) d'un repo hébergé sur GitHub. Cet article vous guide tout au long du processus de clonage, mais les étapes sont également décrites ici.

Sur GitHub, vous devez trouver une URL qui commence par `https://` et se termine par `.git`. Elle devrait ressembler à ceci&nbsp;:

```
https://github.com/twilio-labs/open-pixel-project
```

Une fois que vous avez cette URL, exécutez la commande `git clone` sur votre terminal suivie de l'URL comme suit&nbsp;:

```
git clone https://github.com/twilio-labs/open-pixel-project
```

Le processus de clonage commence&nbsp;!

## Changer de répertoire

Une fois le clonage du répertoire terminé, vous pouvez ouvrir ces nouveaux fichiers. Il s'agit d'une copie exacte des fichiers dans leur état actuel sur GitHub.

Pour valider le bon fonctionnement du clone, vous avez besoin du chemin d'accès complet de votre nouveau projet cloné. Saisissez la commande de changement de répertoire suivante, `cd`, pour ouvrir votre nouveau répertoire.

```
cd open-pixel-art
```

Si vous exécutez la commande list, `ls` (ou `dir` sous Windows), une liste de noms de fichiers tels que `package.json` et `README.md` s'affiche.

```
ls
```

## Répertoire de travail actuel

Maintenant que votre repo nouvellement cloné est ouvert dans notre terminal, vous devez obtenir son chemin d'accès. Pour obtenir ce chemin d'accès, exécutez la commande de répertoire de travail actuel, `pwd`.

```
pwd
```

Si vous ouvrez ce répertoire dans l'explorateur de fichiers ou l'éditeur de texte de votre choix, vous pouvez également afficher le clone du repo Open Pixel Art.

## Validez&nbsp;!

Copiez le chemin d'accès au fichier dans votre repo cloné que vous avez obtenu à partir de la commande `pwd`. Collez ce chemin d'accès au fichier dans le champ à droite et appuyez sur `HACK`&nbsp;!