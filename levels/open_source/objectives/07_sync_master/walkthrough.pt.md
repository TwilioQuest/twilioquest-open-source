# Sincronize um fork

## O Git é um sistema distribuído

Um aspecto importante do git é que ele é distribuído, e ser amplamente distribuído significa que não há “upstream” ou “downstream” inerentes no sistema.

Cada repositório contém o mesmo histórico do git e os instantâneos do seu código. Dito isso, há algumas convenções de nomenclatura que a comunidade de open source usa para ajudar a acompanhar as coisas. Lembre-se de que eles não são inerentemente especiais!

## Local vs. remoto

A primeira classificação útil de repositórios é `local` vs. `remote`. A versão clonada no seu próprio computador é chamada de repositório `local`. A versão original no GitHub e a cópia bifurcada são chamadas de repositórios `remote`.

Suas alterações serão feitas no repositório local somente até que você as leve de volta para o fork. Uma complicação de trabalhar em um projeto pen source é que outros desenvolvedores também estão executando as próprias mudanças!

## Como obter as alterações deles?

Enquanto você trabalha aqui, há uma chance de que novas alterações tenham sido carregadas no GitHub que você não tem localmente! Quando clonamos originalmente o fork Open Pixel Art neste computador, o vinculamos como um repositório remoto.

Você pode ver todos os repositórios vinculados usando o comando `git remote`. A adição do comando `-v` fornece mais informações sobre o remoto, como o URL do local do git vinculado a ele.

```bash
git remote  -v
```

Ao executar o `git remote`, você verá algumas linhas que se parecem com isso:

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

No entanto, outros desenvolvedores não farão alterações no seu fork, eles mudarão o original. Precisamos adicionar outro repositório remoto. Por convenção, vamos chamá-lo de `upstream`.

## Como adicionar o upstream remoto?

Primeiro, você precisa do URL do repositório git do [projeto original do Open Pixel Art](https://github.com/twilio-labs/open-pixel-art). Ele é muito semelhante ao URL do navegador e termina em `.git`. Você obtém este URL da mesma maneira que fez quando originalmente [clonou este repositório da documentação do GitHub](https://help.github.com/en/articles/cloning-a-repository).

O URL deve ser parecido com este, mas será diferente para qualquer outro repositório que você usar no futuro:

```bash
https://github.com/twilio-labs/open-pixel-art.git
```

Agora vamos usar a funcionalidade `add` do `git remote`. O comando que queremos executar se parece com isso:

```bash
git remote add upstream https://github.com/twilio-labs/open-pixel-art.git
```

`git remote add` é o comando que estamos executando, `upstream` é o nome do controle remoto que estamos criando e `https://github.com/twilio-labs/open-pixel-art.git` vem do repositório do projeto Open Pixel Art no GitHub.

Vamos executar `git remote -v` mais uma vez para verificar se criamos `upstream` corretamente. Ele deve mostrar ambos `origin` e `upstream` agora.

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
upstream	https://github.com/twilio-labs/open-pixel-art.git (fetch)
upstream	https://github.com/twilio-labs/open-pixel-art.git (push)
```

## Vamos sincronizar o fork com o controle remoto

Não há funcionalidade no GitHub para sincronizar dois repositórios remotos diretamente.

1. Em vez disso, vamos extrair o código no branch `master` do repositório original do Open Pixel Art localmente.
2. Em seguida, faça o merge com o branch `master` no repositório local.
3. Por fim, enviaremos o branch `master` atualizado de volta para o fork.

Isso terminará com todos os três repositórios sincronizados.

**1\.** Primeiro, precisamos mudar para o branch master:

```bash
git checkout master
```

Mudar para o branch master coloca o código de volta ao estado em que estava quando o clonamos originalmente. Se você verificar o arquivo `_data/pixels.json`, não verá mais o pixel adicionado.

Não se preocupe! Se você voltar ao branch `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`, as alterações ainda estarão sãs e salvas.

**2\.** Agora, usamos o comando `git pull` para obter o código do repositório `upstream` configurado recentemente. Precisamos especificar o branch `master` do qual extrair também.

```bash
git pull upstream master
```

**3\.** Depois de executar o comando extrair, você verá uma mensagem detalhando todas as diferenças de código entre seu local `master` e o `open-pixel-art` `master`. Pode ser uma tonelada de arquivos ou você pode receber uma mensagem de que já está atualizado!

Se você fez alterações, precisa colocá-las de volta no fork. Você pode fazer isso executando o comando push (enviar) do git.

```bash
git push
```

Isso enviará as alterações locais no branch `master` para o branch `master` do fork. Agora, o histórico git do fork para o master, nosso local master e o branch open-pixel-art master abertos estão todos sincronizados!

## Verificar

Você pode ver a lista de confirmações mais recentes em cada repositório visitando esses URLS. Certifique-se de atualizar para garantir que a confirmação mais recente seja a mesma no fork e no repositório original.

Há uma chance de que novas confirmações sejam exibidas desde que você fez a última sincronização! Isso é especialmente comum no repositório de aprendizagem em que as pull requests estão sendo aprovadas e mescladas automaticamente!

[https://github.com/twilio-labs/open-pixel-art/commits/master](https://github.com/twilio-labs/open-pixel-art/commits/master)

\[https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master](https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master)

Depois de sincronizar os branches master dos três repositórios, vá em frente e pressione `HACK` à direita!