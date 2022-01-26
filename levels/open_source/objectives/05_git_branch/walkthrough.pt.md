# Ramificar

Os branches são como uma versão alternativa do histórico. Quando você faz uma novo branch, seu código é idêntico ao código antigo. No entanto, depois de fazer uma alteração, **somente** o novo branch lembrará dessa alteração.

Isso significa que você tem um local seguro para testar as alterações de código sem se preocupar se elas quebrarão o código para sempre. Você pode ter tantos branches diferentes quanto quiser, mas só vamos criar um novo branch para esse objetivo.

## Como fazer um novo branch?

Use o comando `git branch` para criar um novo branch em um repositório git. Um exemplo de comando é mostrado abaixo. Substitua `<BRANCH_NAME>` pelo nome do branch que você deseja criar.

Normalmente, é uma boa ideia nomear o branch com algo que tenha a ver com as mudanças dentro dele. Nesta missão, vamos criar um novo pixel, por isso, pode ser uma boa ideia nomear o branch como `new-pixel`.

```
git branch <BRANCH_NAME>
```

Agora que você fez um novo branch, vamos imprimir a lista de todos os branches neste repositório para garantir que você tenha feito corretamente.

```
git branch
```

Deve ser impressa uma lista no seu terminal que inclua o nome do novo branch. Você também notará outro branch chamado `master`.

## Então, o que é master?

Cada repositório git precisa ter pelo menos um branch. Por convenção, esse branch padrão geralmente é chamado `master`. Frequentemente, esta é a versão mais atual e estável de um projeto. Novos recursos são desenvolvidos em branches como aquele que acabamos de criar e, em seguida, mesclados de volta ao master.

Na lista de branches, você nota que o master tem um asterisco `*` ao lado dele. Isso significa que você está fazendo alterações no banch `master` no momento. O git usa a frase "checked out" (conferido) para descrever qual branch você selecionou.

## Como usar o novo branch?

Agora que você sabe que está no branch `master` e não no novo branch, devemos conferir o novo branch.

O Git fornece o comando `checkout` para permitir que você alterne entre os branches. Use o seguinte comando com `<BRANCH_NAME>` substituído para alternar para o novo branch.

```
git checkout <BRANCH_NAME>
```

Se você quiser voltar para o master (ou qualquer outro branch) no futuro, execute `git checkout` com um nome de branch diferente.

```
git checkout master
```

## Verificar meu trabalho!

Agora, você deve ter criado um novo branch e feito a verificação. Faremos a mudança de código neste branch no próximo objetivo! Por enquanto, digite o nome do branch no campo à direita e clique em `HACK`!