# Hora do pixel

Agora que temos nosso projeto copiado localmente e um branch de desenvolvimento criado, estamos prontos para fazer nossa contribuição. Mas antes disso acontecer, precisamos configurar o projeto e colocá-lo em funcionamento! Desta forma, podemos conferir as alterações em nosso próprio computador antes de levá-las de volta ao GitHub para que todos possam ver.

## Node.js e NPM

O projeto Open Pixel Art é criado com base em Node.js e também usa `npm`. Este objetivo pressupõe que você entenda como `npm` funciona e o tenha instalado.

Se você não estiver familiarizado com essas ferramentas, siga este [guia de instalação para obter o Node.js](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/). Depois de ter o Node.js instalado, será possível copiar e colar ocultamente os comandos `npm` neste objetivo.

## Instale as dependências do projeto

Agora que você tem Node.js e `npm` instalados, na pasta principal do projeto Open Pixel Art, execute o seguinte comando:

```
npm install
```

Isso faz o download de todas as dependências de código que este projeto precisa para ser executado no seu computador. Agora, você deve ver as mensagens de status conforme as dependências são instaladas.

Esse processo pode levar algum tempo!

## Inicialize

Agora que o projeto está instalado e configurado, vamos iniciá-lo localmente. Execute o seguinte comando no diretório raiz do repositório:

```
npm start
```

Isso inicia um servidor da Web local em seu computador que esteja executando a própria versão pessoal do projeto open pixel. No terminal, depois que o servidor tiver iniciado, você verá um URL impresso que normalmente será:

```url
http://localhost:8080
```

Abra esta página no navegador da Web para ver sua própria página de projeto Open Pixel Art ao vivo!

## Pixels.json

Agora que podemos ver nossos pixels localmente, vamos aprender como alterá-los! Abra o projeto Open Pixel Art em um editor de texto de sua escolha! Agora, abra o arquivo localizado em `_data/pixels.json`.

Dentro desse arquivo, você encontra uma matriz JSON objetos de pixel que se parecem com isto:

```diff
{
  "data": [
    { "y": 1, "x": 1, "color": "#F22F46", "username": "<UNCLAIMED>" },
    { "y": 1, "x": 2, "color": "#F22F46", "username": "<UNCLAIMED>" },
    { "y": 1, "x": 3, "color": "#F22F46", "username": "<UNCLAIMED>" },
    ...
  ]
}
```

## Propriedades do objeto de pixel

- `x`: A coordenada x do pixel. 0 é a coluna mais à esquerda de pixels
- `y`: A coordenada y do pixel. 0 é a linha mais inferior de pixels
- `color`: A cor que o pixel deve ter como código hexadecimal (por exemplo #ff0000 para vermelho)
- `username`: O nome de usuário do GitHub que você usará para criar a pull request

Crie uma nova linha no arquivo `_data/pixels.json` que se pareça com isso:

```diff
{
  "data": [
+    { "y": 1, "x": 2, "color": "#FFFF00", "username": "cedric" },
    { "y": 1, "x": 3, "color": "#F22F46", "username": "<UNCLAIMED>" },
    ...
  ]
}
```

Agora você deve ver o novo pixel em seu URL hospedado localmente!

## Mantenha tudo organizado!

Verifique se a adição de pixel ao `_data/pixels.json` foi inserida em ordem classificada. Ele deve começar com `y` e depois `x`. Também adicionamos uma tarefa npm que pode ser executada para fazer essa classificação para você!

```bash
npm run sort:open-pixels
```

Depois de adicionar o novo pixel, execute-o em seu terminal para reclassificar o arquivo de pixels!

## Confirme se tudo continua funcionando!

Vamos executar um comando final `npm` antes de finalizarmos nossa mudança. Esse comando é chamado de `npm test`. A maioria dos projetos open source tem um conjunto de testes automáticos. Isso ajuda a garantir que você não tenha feito nada para quebrar o projeto com suas alterações!

Abra uma nova guia ou janela Terminal e execute o seguinte comando:

```
npm test
```

Você deve ver que nenhum teste falhou, todos eles devem dizer `passed`. Isso significa que tudo ainda está funcionando!

## Como confirmar a mudança?

Você finalmente adicionou um pixel à tela e confirmou que não estragou nada!

Agora, precisamos informar ao `git` que estamos satisfeitos com as mudanças. Fazemos isso criando algo chamado `commit`. Um commit é um instantâneo de sua base de código capturado no tempo.

## Como crio o commit?

A primeira etapa é adicionar os arquivos que você deseja confirmar. Você só precisa adicionar os arquivos que deseja alterar, portanto, para esse commit, só adicionaremos nosso arquivo atualizado `_data/pixels.json`.

```
git add _data/pixels.json
```

Para verificar se você adicionou os arquivos corretos, execute o seguinte comando:

```
git status
```

Este comando mostrará quais arquivos estão prestes a ser comitados em verde. O arquivo `_data/pixels.json` deve ser o único listado!

Agora, precisamos usar o comando `git commit` para finalizar as alterações. Também adicionamos um sinalizador `-m` a esse comando para que possamos adicionar uma mensagem que acompanha o commit.

A parte `feat(pixels):` antes da mensagem ser adicionada para que o projeto Open Pixel Art possa analisar programaticamente mensagens de commit. Você pode saber mais sobre isso conferindo o [Padrão convencional de commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

```
git commit -m "feat(pixels): add my new pixel"
```

## Hackear!

Este objetivo tinha muitas etapas! Mas agora você tem um pixel novo e pronto para compartilhá-lo com o mundo. Pressione `HACK` para confirmar que o pixel foi alterado e comitado corretamente.