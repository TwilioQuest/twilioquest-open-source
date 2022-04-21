# C'est l'heure du pixel

Maintenant que vous avez copié votre projet localement et créé une branche de développement, il est temps d'apporter votre contribution. Mais avant de le faire, vous devez configurer le projet et l'exécuter&nbsp;! De cette façon, vous pouvez vérifier vos modifications sur votre propre ordinateur avant de les transférer via Push vers GitHub pour que tout le monde puisse les voir.

## Node.js et NPM

Le projet Open Pixel Art est construit sur Node.js et utilise également `npm`. Cet objectif suppose que vous comprenez comment fonctionne `npm` et que vous l'avez installé.

Si vous ne connaissez pas ces outils, suivez ce [guide d'installation pour installer Node.js](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/). Une fois Node.js installé, vous devriez pouvoir copier et coller les commandes `npm` dans cet objectif.

## Installer les dépendances du projet

Maintenant que vous avez installé Node.js et `npm`, dans le dossier principal de votre projet Open Pixel Art, exécutez la commande suivante&nbsp;:

```
npm install
```

Cette action télécharge toutes les dépendances de code que ce projet doit exécuter sur votre ordinateur. À mesure que les dépendances s'installent, des messages de statut s'affichent.

Ce processus peut prendre un certain temps&nbsp;!

## Démarrage

Maintenant que votre projet est installé et configuré, démarrez-le localement. Exécutez la commande suivante dans le répertoire racine de votre répertoire&nbsp;:

```
npm start
```

Cette opération démarre un serveur Web local sur votre ordinateur qui exécute votre propre version du projet Open Pixel. Sur le terminal, une fois le serveur démarré, une URL doit s'imprimer au format suivant&nbsp;:

```url
http://localhost:8080
```

Ouvrez cette page dans votre navigateur Web pour afficher la page de votre propre projet Open Pixel Art&nbsp;!

## Pixels.json

Maintenant que vous pouvez afficher vos pixels localement, découvrez comment les modifier&nbsp;! Ouvrez le projet Open Pixel Art dans l'éditeur de texte de votre choix&nbsp;! Ensuite, ouvrez le fichier situé à l'emplacement `_data/pixels.json`.

Dans ce fichier, vous trouverez un tableau JSON d'objets pixel au format suivant&nbsp;:

```diff
{
  "data": [
    { "y": 1, "x": 1, "color": "#F22F46", "username": "<UNCLAIMED>" },
    { "y": 1, "x": 2, "color": "#F22F46", "username": "<UNCLAIMED>" },
    { "y": 1, "x": 3, "color": "#F22F46", "username": "<UNCLAIMED>" },
    ...
  ]
}
```

## Propriétés de l'objet pixel

- `x`: La coordonnée&nbsp;X de votre pixel. 0 est la colonne de pixels la plus à gauche
- `y`: La coordonnée&nbsp;Y de votre pixel. 0 est la ligne de pixels la plus en bas
- `color`: La couleur de votre pixel doit être un code hexadécimal (par exemple #ff0000 pour rouge)
- `username`: Le nom d'utilisateur GitHub que vous utiliserez pour créer la requête pull

Créez une nouvelle ligne dans le fichier `_data/pixels.json` au format suivant&nbsp;:

```diff
{
  "data": [
+    { "y": 1, "x": 2, "color": "#FFFF00", "username": "cedric" },
    { "y": 1, "x": 3, "color": "#F22F46", "username": "<UNCLAIMED>" },
    ...
  ]
}
```

Votre nouveau pixel devrait maintenant s'afficher sur votre URL hébergée localement&nbsp;!

## Organisez&nbsp;!

Assurez-vous que le pixel est ajouté au fichier `_data/pixels.json` de manière ordonnée. Il doit commencer par `y`, puis par `x`. Vous pouvez également exécuter une tâche npm afin d'effectuer ce tri pour vous&nbsp;!

```bash
npm run sort:open-pixels
```

Une fois que vous avez ajouté votre nouveau pixel, exécutez-le dans votre terminal pour classer à nouveau le fichier de pixels&nbsp;!

## Assurez-vous que tout fonctionne&nbsp;!

Avant de terminer les modifications, exécutez une dernière commande `npm`. Cette commande s'appelle `npm test`. La majorité des projets open source disposent d'une suite de tests automatiques. Cela vous permet de vérifier que vos modifications n'ont pas rendu le projet inopérant.

Ouvrez une nouvelle fenêtre de terminal et exécutez la commande suivante&nbsp;:

```
npm test
```

Aucun test ne doit avoir échoué. Ils doivent tous indiquer `passed`. Cela signifie que tout fonctionne&nbsp;!

## Comment confirmer mon changement&nbsp;?

Vous avez enfin ajouté un pixel au canevas et confirmé que vous n'avez rien perturbé&nbsp;!

Maintenant, vous devez indiquer à `git` que vous êtes satisfait de vos changements. Pour ce faire, créez un élément appelé `commit`. Un commit est un snapshot de votre base de code capturé dans le temps.

## Comment valider&nbsp;?

La première étape consiste à ajouter les fichiers que vous souhaitez valider. Il vous suffit d'ajouter les fichiers que vous souhaitez modifier. Pour ce commit, vous n'ajouterez que le fichier `_data/pixels.json` mis à jour.

```
git add _data/pixels.json
```

Pour vérifier que vous avez ajouté les bons fichiers, exécutez la commande suivante&nbsp;:

```
git status
```

Cette commande affiche en vert les fichiers sur le point d'être commit. Le fichier `_data/pixels.json` doit être le seul répertorié&nbsp;!

Vous devez maintenant utiliser la commande `git commit` pour finaliser vos modifications. Ajoutez également un indicateur `-m` à cette commande afin de pouvoir ajouter un message qui accompagne votre commit.

La partie `feat(pixels):` avant votre message est ajoutée afin que le projet Open Pixel Art puisse analyser les messages de commit par programmation. Pour en savoir plus, consultez [le Standard Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

```
git commit -m "feat(pixels): add my new pixel"
```

## Lancez-vous&nbsp;!

Cet objectif comportait de nombreuses étapes&nbsp;! Mais vous avez maintenant commit un nouveau pixel et êtes prêt à le partager avec le monde entier. Appuyez sur `HACK` pour confirmer que votre pixel a été modifié et commité correctement.