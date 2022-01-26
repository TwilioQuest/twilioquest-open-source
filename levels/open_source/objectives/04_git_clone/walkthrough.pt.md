# Clones

## O que é clonagem?

Uma das principais coisas que o git permite que você faça é criar uma cópia local do código hospedado do servidor de outra pessoa. O processo de fazer essa cópia é chamado de clonagem. Faremos uma cópia local do repositório do Open Pixel Art no GitHub usando o comando `git clone`.

## Como clonar?

A ferramenta de linha de comando do git fornece um comando chamado `clone` para permitir que você faça isso. Esse comando requer que você obtenha o URL para o repositório git que deseja clonar.

O GitHub mantém a [documentação sobre como obter o URL](https://help.github.com/en/articles/cloning-a-repository) de um repositório hospedado do GitHub. Este artigo orienta todo o processo de clonagem, mas também o examinaremos aqui.

No GitHub, você deve encontrar um URL que começa com `https://` e termina em `.git`. Deve ser parecido com isto:

```
https://github.com/twilio-labs/open-pixel-project
```

Assim que tiver este URL, execute o comando `git clone` em seu terminal com o URL depois dele:

```
git clone https://github.com/twilio-labs/open-pixel-project
```

Agora o processo de clonagem começa!

## Alterar diretório

Assim que o repositório terminar a clonagem, você pode abrir esses novos arquivos. Eles serão uma cópia exata dos arquivos no estado atual no GitHub.

Para validar se o clone funcionou corretamente, precisaremos do caminho completo do arquivo do projeto recém-clonado. Digite o seguinte comando de mudança de diretório, `cd`, para inserir o novo diretório.

```
cd open-pixel-art
```

Se você executar o comando list, `ls` (ou `dir` no Windows), verá uma lista de nomes de arquivos como `package.json` e `README.md`.

```
ls
```

## Diretório de trabalho atual

Agora que temos nosso repositório recém-clonado aberto no terminal, precisamos obter o caminho. Podemos executar o comando de diretório de trabalho atual, `pwd`, para descobrir esse caminho.

```
pwd
```

Se você abrir esse diretório no explorador de arquivos ou no editor de texto de sua escolha, também pode visualizar seu clone do repositório do Open Pixel Art.

## Validar!

Copie o caminho do arquivo para o repositório clonado que você obteve do comando `pwd`. Cole o caminho do arquivo no campo à direita e pressione `HACK`!