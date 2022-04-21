# Branching

Les branches sont comme une autre version de l'histoire. Lorsque vous créez une branche, son code est identique à votre ancien code. Cependant, une fois que vous avez effectué une modification, **seule** la nouvelle branche enregistre cette modification.

Cela signifie que vous disposez d'un endroit sûr pour tester les modifications de code sans craindre de rendre votre code inopérant à jamais. Vous pouvez avoir autant de branches différentes que vous le souhaitez. Cependant, pour cet objectif, vous allez créer une seule branche.

## Comment créer une branche&nbsp;?

Utilisez la commande `git branch` pour créer une branche dans un répertoire Git. Un exemple de commande est illustré ci-dessous. Remplacez `<BRANCH_NAME>` par le nom de la branche que vous souhaitez créer.

Il est préférable d'attribuer à votre branche un nom qui reflète les modifications apportées à celle-ci. Dans cette mission, vous allez créer un pixel. Il peut donc être judicieux de nommer votre branche `new-pixel`.

```
git branch <BRANCH_NAME>
```

Maintenant que vous avez créé une branche, imprimez la liste de toutes les branches de ce répertoire pour vous assurer que vous l'avez correctement créée.

```
git branch
```

Une liste contenant le nom de votre nouvelle branche doit s'imprimer sur votre terminal. Vous remarquerez également la présence d'une autre branche nommée `master`.

## Qu'est-ce qu'une branche master&nbsp;?

Chaque repo Git doit contenir au moins une branche. Par convention, cette branche par défaut est généralement appelée `master`. Il s'agit souvent de la version la plus stable et la plus récente d'un projet. Les nouvelles fonctions sont développées dans des branches comme celle que vous venez de créer, puis fusionnées dans la branche master.

Dans la liste des branches, vous remarquerez que le mot master est associé à un astérisque `*`. Cela signifie que vous êtes en train de modifier la branche `master`. Git utilise l'expression «&nbsp;checked out&nbsp;» (extrait) pour décrire la branche sélectionnée.

## Comment utiliser la nouvelle branche&nbsp;?

Maintenant que vous savez que vous êtes dans la branche `master` et non dans votre nouvelle branche, extrayez votre nouvelle branche.

Git fournit la commande `checkout` pour vous permettre de basculer entre les branches. Utilisez la commande suivante avec le nom `<BRANCH_NAME>` remplacé pour passer à votre nouvelle branche.

```
git checkout <BRANCH_NAME>
```

Si vous souhaitez revenir à la branche master (ou à toute autre branche) à l'avenir, exécutez `git checkout` avec un nom de branche différent.

```
git checkout master
```

## Vérifiez mon travail&nbsp;!

Vous devriez maintenant avoir créé et extrait votre branche. Vous allez modifier le code de cette branche dans le prochain objectif&nbsp;! Pour l'instant, saisissez le nom de votre branche dans le champ à droite et cliquez sur `HACK`&nbsp;!