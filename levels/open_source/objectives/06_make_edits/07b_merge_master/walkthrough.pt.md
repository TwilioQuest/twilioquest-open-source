# Torne-se o mestre do merge

## O que é um merge?

Quando você extraiu os commits do repositório original do Open Pixel Art para o repositório local, tudo correu bem. Isso ocorre porque você não alterou nenhum arquivo no branch.

No entanto, você fez alterações no branch de pixels `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>` quando comitou um novo pixel. É provável que, quando você extraiu os commits do projeto Open Pixel Art, outra pessoa também adicionou um novo pixel. Para reconciliar essas alterações que afetam o mesmo código, precisamos passar por um processo de merge (mesclagem).

Às vezes, o git pode descobrir automaticamente como deve ser o código mesclado. Se eu editar a primeira linha de um arquivo e você editar a linha 200, o git consegue dizer que as duas linhas devem chegar ao arquivo final. No entanto, se eu editar a linha 3 e você editar a linha 5, as coisas ficam mais complicadas.

Quando mudanças como essa acontecem, em que o git não pode determinar o resultado automaticamente, precisamos ajudá-lo decidindo manualmente que código chegará ao arquivo final. Chamamos essa situação de conflito de merge (mesclagem).

## Conflito!

Mesclar conflitos pode ser um desafio. Se você perguntar aos desenvolvedores qual é a parte menos favorita de trabalhar com o git e o controle de versão, você ouvirá com frequência “resolver conflitos de merge (mesclagem)” como resposta. Não dizemos isso para assustá-lo, mas para informá-lo que mesmo os desenvolvedores mais experientes ainda têm problemas com esse processo! Pode ser realmente difícil!

Felizmente, como você está apenas mudando uma única linha do arquivo `_data/pixels.json`, sua resolução de conflito de merge (mesclagem) deve ser mais simples.

Cobrir completamente este tópico pode exigir uma missão extra inteira! O GitHub tem maiores [informações sobre quais são os conflitos de merge e suas causas](https://help.github.com/en/articles/about-merge-conflicts). Tem também [um guia detalhado sobre como resolver conflitos por meio da linha de comando](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line).

## Como fazer um merge?

Primeiro, precisamos retornar ao branch com o pixel. Isso nos levará de volta à adição de pixels no arquivo `_data/pixels.json` !

```bash
git checkout <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Agora, como já não temos o código mais recente do master, vamos iniciar o processo de merge para mesclar o branch `master` no branch atual, `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`.

```bash
git merge master
```

Quando você executou o comando merge, provavelmente deve ter visto uma grande quantidade de resultados informando como foi a mesclagem. O Git informa se tentou mesclar automaticamente qualquer arquivo e se houve conflitos ao tentar o merge.

Se você não viu nenhuma mensagem `CONFLICT`, então você está com sorte! O Git não precisa de ajuda para resolver seu merge!

Podemos obter mais informações sobre o estado atual do merge executando o comando `git status`. Isso nos dá muitas informações.

Ele nos informa que precisamos resolver manualmente um merge `You have unmerged paths.` e nos dá um comando para anular o merge `git merge --abort` caso tenhamos cometido um erro.

Além disso, na parte inferior deste comando, temos uma lista dos caminhos não mesclados nos quais precisamos resolver conflitos. Se você acabou de adicionar um pixel, verá algo como:

```bash
Unmerged paths:
  (use "git add <file>..." to mark resolution)

	both modified:   _data/pixels.json
```

[É hora de resolver os conflitos!](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line)

Depois de resolver os conflitos de merge, você precisa confirmar essa resolução para que o git saiba a decisão final! Estamos saindo do `-m` desta vez para que possamos usar a mensagem de merge gerada automaticamente pelo git.

## Commit

```
git commit
```

Se você executar este comando e vir uma mensagem como esta de `error: Committing is not possible because you have unmerged files.`, o merge ainda não foi resolvido!

Se você não viu a mensagem acima, isso significa que no editor de texto git você deve escrever sua mensagem de commit!

A ferramenta padrão que o git abre para editar a mensagem de commit é o vim. Este é um editor de texto somente de linha de comando que pode ser confuso se você nunca o usou antes. Para salvar esta mensagem dentro do vim, precisamos executar algumas etapas.

1. primeiro, pressione a tecla `ESC` para entrar no modo de comando
2. digite `:` para iniciar um comando
3. digite `w` para instruir o vim a gravar suas alterações no arquivo
4. digite `q` para instruir o vim a sair
5. pressione `ENTER` para executar seu comando vim

Se tudo funcionou corretamente, você deve estar de volta no terminal e fora do vim novamente!

## Verificar

Vamos verificar de novo se tudo está bem, executando o `git status` uma última vez. Agora, devemos ver uma mensagem como `nothing to commit, working tree clean` indicando que tudo está atualizado.

Além disso, vamos executar o `git log` para encontrar nosso commit do merge. O commit mais recente deve ter a mensagem inserida no vim para o commit. Se você deixou a mensagem gerada automaticamente, ela será parecida com isto:

```bash
Merge branch 'master' into <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Depois de fazer o merge no master no branch `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`, vá em frente e pressione `HACK` à direita!