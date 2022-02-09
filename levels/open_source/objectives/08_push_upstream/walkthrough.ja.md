# 上流へのプッシュ

## ローカルとリモート

gitリポジトリは、場所に応じて2種類あります。お使いのコンピューターにクローンしたバージョンは、`local`リポジトリと呼ばれます。GitHub上の元のバージョンとフォークしたコピーは、`remote`リポジトリと呼ばれます。

現在、あなたの新しいピクセル変更内容は、ローカルリポジトリ内のお使いのコンピューターにのみ存在します。それを世界と共有するには、上流のリモートリポジトリに送信する必要があります。

上流への送信には、`git push`コマンドを使用します。このコマンドを実行する前に、いくつかの引数とフラグを追加する必要があります。

## 上流

ローカルの変更をリモートリポジトリに送信するプロセスは、gitでは、上流へのプッシュと呼ばれます。「上流」とは、ローカルで作業しているものと同じ名前のリモートブランチを示す用語です。

前の手順で`git branch`コマンドを使用しブランチを作成しましたが、それはローカルのみに存在します。リモートリポジトリにもブランチを作成するには、プッシュする際に、`--set-upstream`フラグを使用する必要があります。

コマンドは次のようになります。

```bash
git push --set-upstream
```

## 上流とは源流（origin）です。

`--set-upstream`フラグは、このパズルの最初の部分です。しかし、上流は私たちのリモートリポジトリの場所をまだ把握していません。ターミナルで次のコマンドを実行します。

```bash
git remote  -v
```

次のような行が表示されます。

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

これらのURLは、「Open Pixel Art」フォークのオリジナルのローカルコピーを作成するためにクローンしたURLと同じものであることにお気づきかもしれません。これは、`git`が私たちのリモートフォークをリンクしたためです。

これらのURLの左側に`origin`という語があります。これは、初めてgitでクローンを行うときに、最初にリンクされたリモートリポジトリにgitが割り当てるデフォルト名です。

上流の`origin`リモートリポジトリにプッシュするように指定するには、`--set-upstream`フラグの後にそれをパラメータとして追加する必要があります。

コマンドは次のようになります。

```bash
git push --set-upstream origin
```

## 名前を付ける

最後に、私たちがローカルブランチをリモートリポジトリにプッシュする際にgitが知る必要があるのは、ブランチ名です。新しいリモートブランチには、ローカルブランチ名と同じ名前を付けたいところです。

`git push`コマンドに、これまで作業してきたローカルブランチ名を、最後のパラメータとして渡します。

最終的なコマンドは次のようになります。

```bash
git push --set-upstream origin <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

実行してみましょう。GitHubのユーザー名とパスワードを入力するように求められ、すべてがGitHubにアップロードされます。

## 確認

GitHubリポジトリをチェックし、ブランチがそこにあることを確認します。

新しいブランチのURLは、次のようになります。

\[https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

GitHubのUIを使用し、このビューに移動することもできます。URLを記憶する必要はありません。

## ハックしましょう！

ローカルのブランチをリモートフォークにプッシュし、［`HACK`］を押します。