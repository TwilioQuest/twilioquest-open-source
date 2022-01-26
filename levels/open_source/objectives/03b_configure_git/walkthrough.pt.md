# Configuração do Git

## Como configurar?

O arquivo de configuração global do Git pode ser editado usando o comando `git config` em seu terminal. Há muitas opções diferentes que permitem personalizar o git para o seu fluxo de trabalho específico.

Só precisaremos definir duas opções para usar `git` com o GitHub nesta missão. Essas duas configurações são nome de usuário e e-mail globais. Os comandos a seguir definirão esses comandos para nós. Estamos usando o sinalizador `--global` para que possamos usar esse mesmo nome e e-mail para cada projeto `git`.

## Mostrar os comandos

Antes de executar este comando, substitua `John Doe` pelo seu nome. Certifique-se de deixar as aspas!

```
git config --global user.name "John Doe"
```

Antes de executar este comando, substitua `johndoe@example.com` pelo endereço de e-mail registrado do GitHub.

```
git config --global user.email johndoe@example.com
```

## Verificar!

Para garantir que você configurou tudo corretamente, execute o seguinte comando:

```
git config --list
```

Você deve ver seu conjunto de `user.name` e `user.email` com os valores corretos!

## Faça Hack!

Depois de verificar se o git está configurado corretamente, pressione `HACK`!