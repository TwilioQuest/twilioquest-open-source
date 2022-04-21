# Ouvrir une pull request

## Pull requests

Nous avons apporté nos modifications à GitHub, alors demandons à présent au projet Open Pixel Art de les intégrer&nbsp;!

Une pull request permet aux autres développeurs de demander au propriétaire d'un répertoire d'inclure les modifications qu'ils suggèrent. Commençons par spécifier la `base` ou la cible de notre pull request. Ensuite, nous choisissons la branche appropriée que nous avons chargée pour utiliser `compare` avec le répertoire de base.

## Composition de notre pull request

GitHub maintient à jour [la documentation sur l'utilisation de son interface utilisateur pour ouvrir une pull request à partir d'un répertoire forké](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork).

Nous voulons nous assurer que nous ouvrons une pull request pour la branche `master` du projet `open-pixel-art`. En d'autres termes, nous nous assurons qu'elle est définie comme la base de notre pull request.

Votre répertoire forké doit être défini comme repo principal. La branche que vous avez créée, \<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>, doit être définie comme branche de comparaison.

Cette URL vous permet d'accéder directement à l'écran GitHub de création de pull request avec vos branches `base` et `compare` déjà configurées&nbsp;:

\[https://github.com/twilio-labs/open-pixel-art/compare/master...\<%= env.TQ_GITHUB_USERNAME.value %>:\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/twilio-labs/open-pixel-art/compare/master...\<%= env.TQ_GITHUB_USERNAME.value %>:\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

## Créer une pull request

Une fois que vous avez correctement configuré la pull request, cliquez sur le gros bouton `Create Pull Request`. Un formulaire d'éditeur s'ouvre, dans lequel vous pouvez spécifier le titre et le message de la pull request.

Ce message commence par un message prédéfini que vous pouvez modifier pour préciser ce que contient votre pull request. Ce message est créé à l'aide d'un élément appelé [Markdown, que vous pouvez découvrir ici](https://guides.github.com/features/mastering-markdown/).

De nombreux repos auxquels vous contribuerez plus tard auront ce genre de réglages customisés prédéfinis. Le réglage prédéfini d'Open Pixel Art contient une liste de vérification d'éléments à inspecter avant l'ouverture.

Normalement, tout devrait être en ordre depuis que nous avons ajouté notre pixel, mais vérifiez quand même&nbsp;! Les cases à cocher de GitHub Markdown sont créées avec le code `- [ ]`. Pour les cocher, placez un `x` entre les crochets afin qu'ils ressemblent à ceci `- [ x ]`.

Une fois que vous avez validé la checklist, cliquez sur le bouton `Create Pull Request`&nbsp;!

## Numéros de pull request

Chaque pull request ouverte sur GitHub se voit attribuer un numéro afin que vous puissiez la référencer ultérieurement. Vous trouverez ce numéro sur l'écran Pull Request, à côté du titre de votre pull request. Vous retrouverez également ce même numéro dans l'URL de votre pull request.

```bash
https://github.com/twilio-labs/open-pixel-art/pull/<PULL_REQUEST_NUMBER>
```

Si vous avez perdu votre pull request, vous pouvez accéder à [toutes les pull requests que vous avez ouvertes sur GitHub](https://github.com/pulls).

## Cliquez sur HACK&nbsp;!

Saisissez le numéro de votre pull request dans le champ à droite, puis cliquez sur `HACK` pour terminer ce défi&nbsp;!