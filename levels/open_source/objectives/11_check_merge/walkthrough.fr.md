# L'heure de la fusion&nbsp;!

## Qu'est-ce qu'une fusion&nbsp;?

Une fusion est un terme venant de Git désignant le réassemblage de deux branches. Lorsque vous avez dupliqué (fork) le répertoire et créé une nouvelle branche, vous avez créé une autre version de l'historique contenant un nouveau code. Le processus de fusion réinsère cet historique dans le projet principal afin que tout le monde puisse bénéficier de votre code.

## Collaboration&nbsp;!

Lorsque vous ouvrez une demande d'extraction pour un projet open source, vous collaborez avec les gestionnaires de ce projet pour fusionner votre code.

Pour l'Open Pixel Art Project, nous n'avons pas besoin de parler à qui que ce soit&nbsp;! Nous disposons de certains outils qui vont automatiquement s'assurer que votre demande d'extraction est valide et la fusionner.

## Conflits de fusion

Parfois, GitHub vous informe que vous êtes confronté à un conflit de fusion et que votre code ne peut pas être fusionné automatiquement. Cela signifie que vous devez aider Git à déterminer à quoi doit ressembler le code final.

Cela peut être dû à de nombreux facteurs, notamment le fait que deux développeurs différents ont modifié la même ligne de code simultanément.

[GitHub contient des informations sur la résolution des conflits de fusion maintenues à jour](https://help.github.com/en/articles/about-merge-conflicts). Les conflits peuvent parfois être résolus dans leur éditeur en ligne et parfois il faut transmettre une nouvelle validation via Push.

## Comment savoir quand ma demande d'extraction a été fusionnée&nbsp;?

Lorsque vous collaborez avec les responsables d'un projet, vous devez leur laisser le temps de vous répondre. Une fois que vous aurez eu une conversation et que vous aurez modifié votre code, les propriétaires décideront de terminer la fusion&nbsp;!

Vous recevrez des notifications de GitHub [en fonction de vos paramètres](https://help.github.com/en/articles/about-notifications) qui peuvent vous indiquer la date de fusion de votre code.

Étant donné que nos outils examineront automatiquement \[votre demande d'extraction](https://github.com/twilio-labs/open-pixel-art/pull/\<%= env.TQ_OPEN_PIXEL_ART_PR_NUMBER.value %>), vous devriez pouvoir revenir à cette demande d'extraction dans quelques minutes afin de passer à une demande d'extraction fusionnée&nbsp;!

## Hack&nbsp;!

Une fois que \[votre demande d'extraction](https://github.com/twilio-labs/open-pixel-art/pull/\<%= env.TQ_OPEN_PIXEL_ART_PR_NUMBER.value %>) a été fusionnée, cliquez sur `HACK` pour que TwilioQuest puisse la confirmer pour vous&nbsp;!