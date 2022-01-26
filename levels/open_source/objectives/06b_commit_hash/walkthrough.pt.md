# Registro do Git

## O que é um hash de commit?

O Git funciona rastreando uma série de instantâneos de seu código como uma lista de commits. Essa lista de commits é chamada de `git history` do repositório. Para localizar esses instantâneos posteriormente, cada um deles recebe uma string longa, aleatória e exclusiva chamada de `commit hash`.

## Histórico do Git

Você pode visualizar o histórico de git do repositório executando o comando `git log` no seu terminal. Isso abre uma lista de cada confirmação no repositório no terminal. Você pode `scroll up and down this list with your arrow keys` começando com o mais recente e voltando até o primeiro compromisso. Você pode digitar `exit this view by hitting the Q`.

## Ajuste fino do log

Como você pode imaginar, rolar por todos os commits em um histórico de git seria esmagador e não muito eficaz. Para ajudar com isso, o `git log` vem com [muitas opções](https://git-scm.com/docs/git-log) para ajustar os resultados da busca!

## Apenas meus commits!

Para encontrar seu commit de pixel, vamos analisar o uso da sinalizador `--author`!

Uma das opções `git log` fornecidas permite que você filtre commits somente por um autor fornecido. Execute este comando para ver apenas seus commits do git!

```
git log --author="<%= env.TQ_LOCAL_GIT_USER_NAME.value %>"
```

## Qual é o meu hash?

Depois que você executou o `git log` com a sinalizador do autor, você verá muitas informações como autor, data e mensagem do commit. Na parte superior do commit, você verá uma string longa como `b256b5e67556d331ca6876d137db4f61a1eb031a`. Esse é seu hash de commit!

## Verificar

Copie essa string de hash de commit para o commit de pixel à direita e clique em `HACK`!