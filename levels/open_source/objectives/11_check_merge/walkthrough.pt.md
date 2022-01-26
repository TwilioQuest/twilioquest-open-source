# Hora de merge!

## O que é um merge?

Um merge é um termo do git para reunir novamente dois branches. Quando você fez o fork do repositório e fez um novo branch, foi criada uma versão alternativa do histórico com um novo código nela. O processo de merge costura esse histórico de volta ao projeto principal para que todos possam se beneficiar do código.

## Colaboração!

Ao abrir uma pull request em um projeto open source, você colabora com os mantenedores desse projeto para fazer um merge do código.

Para o projeto Open Pixel Art, não precisamos falar com ninguém! Temos algumas ferramentas que certificarão que sua pull request é válida e irão fazer o merge automaticamente.

## Conflitos de merge

Às vezes, o GitHub informa que você se deparou com um conflito de merge e que seu código não pode ter o merge automaticamente. Isso significa que você precisa ajudar o git a descobrir como deve ser o código final.

Isso pode ser causado por muitas coisas, uma das quais é que dois desenvolvedores diferentes mudaram a mesma linha de código ao mesmo tempo.

[O GitHub tem informações sobre como resolver conflitos de merge sempre atualizadas](https://help.github.com/en/articles/about-merge-conflicts). Às vezes, isso pode ser resolvido no editor on-line e, às vezes, requer que um novo commit seja enviado.

## Como saber se a pull request teve o merge finalizado?

Ao colaborar com os mantenedores de um projeto, você precisa dar a eles tempo para responder. Depois de conversar e fazer as alterações no código, os proprietários decidirão terminar o merge!

Você receberá notificações do GitHub [baseadas nas configurações](https://help.github.com/en/articles/about-notifications) que podem informar quando seu código finalizar o merge.

Como nossas ferramentas revisam automaticamente \[sua pull request](https://github.com/twilio-labs/open-pixel-art/pull/\<%= env.TQ_OPEN_PIXEL_ART_PR_NUMBER.value %>), você deve conseguir voltar a esta pull request em alguns minutos para uma uma pull request já com o merge!

## Hack!

Depois que \[sua pull request](https://github.com/twilio-labs/open-pixel-art/pull/\<%= env.TQ_OPEN_PIXEL_ART_PR_NUMBER.value %>) tiver o merge com sucesso, clique em `HACK` para que o TwilioQuest possa confirmar para você!