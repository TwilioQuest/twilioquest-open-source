# Abrir uma pull request

## Pull Requests

Enviamos as alterações ao GitHub, então agora vamos pedir ao projeto Open Pixel Art para extraí-las!

Uma pull request é uma forma de outros desenvolvedores solicitarem ao proprietário de um repositório que inclua as alterações sugeridas. Começamos especificando a `base` ou o destino da pull request Em seguida, escolhemos o branch apropriado para o qual fizemos upload para `compare` (comparar) no repositório base.

## As partes da pull request

O GitHub mantém [documentação sobre como usar a interface do usuário para abrir uma pull request de um repositório que foi feito o fork](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork).

Queremos ter certeza de que estamos abrindo uma pull request no branch `master` do projeto `open-pixel-art`. Isso significa que temos certeza de que ele está definido como a base de nossa pull request.

O repositório que foi feito o fork deve ser definido como o repositório principal. O branch criado, <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>, deve ser definido como branch de comparação.

Este URL deve levá-lo diretamente para a tela de criação da pull request do GitHub com os branches `base` e `compare` já configurados:

[https://github.com/twilio-labs/open-pixel-art/compare/master...<%= env.TQ_GITHUB_USERNAME.value %>:<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/twilio-labs/open-pixel-art/compare/master...<%= env.TQ_GITHUB_USERNAME.value %>:<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

## Criar pull request

Depois de configurar corretamente a pull request, clique no botão grande `Create Pull Request`. Isso abrirá um formulário de editor no qual você pode especificar o título e a mensagem da pull request.

Essa mensagem começa com uma mensagem predefinida que você pode ajustar para falar sobre o que sua pull request contém. Essa mensagem é criada usando algo chamado [markdown, sobre o qual você pode saber mais aqui](https://guides.github.com/features/mastering-markdown/).

Muitos repositórios para os quais você contribui no futuro terão essas predefinições personalizadas. A predefinição para o Open Pixel Art tem uma lista de verificação de itens que você deve conferir antes de abrir.

Devemos ter aderido a eles quando adicionamos nosso pixel, mas verifique-os agora! As caixas de seleção no markdown do GitHub são criadas com o código `- [ ]`. Para marcá-los como verificados, coloque um `x` entre os colchetes, para que eles fiquem assim `- [ x ]`.

Depois de confirmar a lista de verificação, clique no botão `Create Pull Request`!

## Números de pull requests

Cada pull request aberta no GitHub recebe um número para que você possa consultá-la posteriormente. Você pode encontrar esse número na tela Pull request ao lado do título de sua pull request. Você também pode encontrar o mesmo número no URL de sua pull request.

```bash
https://github.com/twilio-labs/open-pixel-art/pull/<PULL_REQUEST_NUMBER>
```

Se você perdeu a pull resquest, pode encontrar [todas as pull resquest que abriu no GitHub](https://github.com/pulls).

## Clique em HACK!

Digite o número de sua pull request na entrada à direita e clique em `HACK` para concluir este desafio!