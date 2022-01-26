# Envio de Upstream

## Local vs. remoto

Os repositórios Git vêm em dois tipos, dependendo de onde eles estão localizados. A versão clonada no seu próprio computador é chamada de repositório `local`. A versão original no GitHub e a cópia bifurcada são chamadas de repositórios `remote`.

Agora, a nova alteração de pixel só vive em seu computador em um repositório local. Para compartilhá-la com o mundo, você precisa enviá-la para um repositório remoto.

Faremos isso com o comando `git push`. Precisamos adicionar alguns argumentos e sinalizadores ao comando antes de executá-lo.

## Upstream

O processo de envio de alterações locais para um repositório remoto é chamado de upstream no git. “Upstream” é um termo que se refere ao branch remoto com o mesmo nome daquele em que você está trabalhando localmente.

Quando você fez o branch anteriormente com o comando `git branch`, você apenas o criou localmente. Precisamos usar o sinalizador `--set-upstream` quando enviamos para criar o branch no repositório remoto também.

O comando agora se parece com:

```bash
git push --set-upstream
```

## Onde está o upstream? Origem!

O sinalizador `--set-upstream` é a primeira parte do quebra-cabeça! No entanto, o upstream ainda não sabe onde encontrar o repositório remoto. Execute o seguinte comando no seu terminal:

```bash
git remote  -v
```

Você verá algumas linhas parecidas com estas:

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

Você pode reconhecer os URLs como os mesmos que clonou para criar a cópia local original do fork Open Pixel Art. Isso porque o `git` vinculou o fork remoto para nós.

À esquerda dos URLs você verá a palavra `origin`. Este é o nome padrão que o git atribui ao primeiro repositório remoto vinculado quando você faz um clone inicial do git.

Para especificar que queremos enviar o upstream para o repositório remoto `origin` precisamos adicioná-lo como um parâmetro após o sinalizador `--set-upstream`.

O comando agora se parece com o seguinte:

```bash
git push --set-upstream origin
```

## Como chamamos isso?

A última coisa que o git precisa saber sobre como estamos enviando nosso branch local para o repositório remoto é o nome do branch. Queremos chamar o novo branch remoto com o mesmo nome do branch local.

Passe o nome do branch local em que você está trabalhando como o parâmetro final para o comando `git push`.

Seu comando final deve ficar assim:

```bash
git push --set-upstream origin <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Vá em frente e execute! Será solicitado que você insira o nome de usuário e senha do GitHub e, em seguida, tudo deve ser carregado no GitHub.

## Verificar

Confira no repositório do GitHub para ter certeza de que o branch está lá agora.

O url do novo branch deve ser semelhante ao seguinte:

\[https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

Você também pode navegar para essa visualização usando a IU do GitHub, não há necessidade de memorizar URLs.

## Hack!

Depois de enviar o branch local ao fork remoto, vá em frente e pressione `HACK`!