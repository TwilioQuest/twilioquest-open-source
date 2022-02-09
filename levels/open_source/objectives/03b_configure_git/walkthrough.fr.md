# Configurer le Git

## Comment effectuer la configuration&nbsp;?

Pour modifier le fichier de configuration globale de Git, utilisez la commande `git config` de votre terminal. Il existe de nombreuses options différentes qui vous permettent de personnaliser Git en fonction de votre propre workflow.

Pour cette mission, vous n'aurez que deux options à définir pour utiliser `git` avec GitHub. Ces deux paramètres sont votre nom d'utilisateur global et votre adresse e-mail. Les commandes suivantes définissent ces paramètres pour vous. Utilisez l'indicateur `--global` afin d'utiliser le même nom et la même adresse e-mail pour chaque projet `git`.

## Montrez-moi les commandes

Avant d'exécuter cette commande, remplacez `John Doe` par votre nom. N'oubliez pas de laisser les guillemets&nbsp;!

```
git config --global user.name "John Doe"
```

Avant d'exécuter cette commande, remplacez `johndoe@example.com` par votre adresse e-mail GitHub enregistrée.

```
git config --global user.email johndoe@example.com
```

## Vérifiez&nbsp;!

Pour vérifier que tout est correctement configuré, exécutez la commande suivante&nbsp;:

```
git config --list
```

Les valeurs définies de votre `user.name` et de votre `user.email` doivent être correctes&nbsp;!

## Publiez&nbsp;!

Une fois que vous avez vérifié que Git est correctement configuré, appuyez sur `HACK`&nbsp;!