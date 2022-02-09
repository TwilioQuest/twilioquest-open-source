# フォークを同期する

## Gitは分散システムです

Gitの重要な側面の1つは、分散しているということです。これは、システムに「上流」や「下流」という概念がないということでもあります。

すべてのリポジトリには同じgit履歴とコードのスナップショットが含まれています。それでも、物事を整理するためにオープンソースコミュニティで使われる用語がいくつかあります。特別な用語ではないことを心に留めておいてください。

## ローカルとリモート

リポジトリの便利な分類の1つ目は、`local`と`remote`です。お使いのコンピューターにクローンしたバージョンは、`local`リポジトリと呼ばれます。GitHub上の元のバージョンとフォークしたコピーは、`remote`リポジトリと呼ばれます。

あなたによる変更は、フォークにプッシュするまでの間だけ、ローカルリポジトリに存在します。オープンソースプロジェクトで厄介なのは、ほかの開発者もそれぞれの変更をプッシュしているということです。

## ほかの開発者による変更を取得する方法

ここで作業している間に、あなたのローカルにない新しい変更がGitHubにアップロードされたかもしれません。初めに私たちのOpen Pixel Artフォークをこのコンピューターにクローンしたときには、リモートリポジトリとしてリンクしました。

リンクされたリポジトリの一覧は、`git remote`コマンドで表示できます。`-v`コマンドを追加すると、リモートの情報をさらに表示できます。例えば、リンクされたgitリポジトリのURLなどです。

```bash
git remote  -v
```

`git remote`を実行すると、次のような行が表示されます: 

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

しかし、ほかの開発者が変更するのはあなたのフォークではなく、オリジナルです。そのため、別のリモートリポジトリを追加する必要があります。通常、これは`upstream`と呼ばれます。

## 上流リモートを追加する方法

まずは、[オリジナルのOpen Pixel Artプロジェクト](https://github.com/twilio-labs/open-pixel-art)のgitリポジトリのURLが必要です。これはブラウザのURLによく似ており、末尾に`.git`が付いています。このURLは、最初に[このリポジトリをGitHubのドキュメントからクローンした](https://help.github.com/en/articles/cloning-a-repository)ときと同様に取得できます。

URLはこのような見た目ですが、今後使用するリポジトリごとに異なります。

```bash
https://github.com/twilio-labs/open-pixel-art.git
```

では、`git remote`の`add`機能を使用します。実行したいコマンドはこのような見た目です: 

```bash
git remote add upstream https://github.com/twilio-labs/open-pixel-art.git
```

`git remote add`が実行中のコマンド、`upstream`が作成中のリモートの名前、そして`https://github.com/twilio-labs/open-pixel-art.git`はGitHubのOpen Pixel Artプロジェクトリポジトリから来ています。

もう一度`git remote -v`を実行し、`upstream`が正しく作成されたことを確認しましょう。今度は、`origin`と`upstream`の両方が表示されるはずです。

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
upstream	https://github.com/twilio-labs/open-pixel-art.git (fetch)
upstream	https://github.com/twilio-labs/open-pixel-art.git (push)
```

## 私たちのフォークをリモートと同期しよう

GitHubには、2つのリモートリポジトリを直接同期するための機能はありません。

1. その代わりに、オリジナルのOpen Pixel Artリポジトリから`master`ブランチのコードをローカルでプルします。
2. 次に、そのコードを私たちのローカルリポジトリの`master`ブランチとマージします。
3. 最後に、更新された`master`ブランチを私たちのフォークにプッシュします。

これで、私たちの3つのリポジトリがすべて同期します。

**1\.**まず、私たちのマスターブランチに切り替える必要があります: 

```bash
git checkout master
```

マスターブランチに切り替えると、コードが初めにクローンしたときの状態に戻ります。`_data/pixels.json`ファイルをチェックしても、追加したピクセルは表示されません。

でも、心配はいりません。自分のブランチ`<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`に戻れば、変更は確かにそこに存在します。

**2\.**次に`git pull`コマンドを使用し、最近設定した私たちの`upstream`リポジトリからコードを取得します。プルする`master`ブランチも指定する必要があります。

```bash
git pull upstream master
```

**3\.**プルコマンドの実行後に、ローカル`master`と`open-pixel-art` `master`のコードのすべての差分について詳細に述べたメッセージが表示されます。大量のファイルとなることもあれば、すでに最新の状態ですと表示されることもあるでしょう。

変更を取得した場合は、それらを自分のフォークにプッシュする必要があります。これはgit pushコマンドを実行することで行います。

```bash
git push
```

これにより、`master`ブランチのローカルの変更を、自分のフォークの`master`ブランチにプッシュします。これで、マスター、ローカルマスター、そしてopen-pixel-artのマスターブランチのフォークのgit履歴がすべて同期されました。

## 確認

それぞれのリポジトリでの最新のコミットのリストは、これらのURLで確認できます。必ず更新し、自分のフォークとオリジナルのリポジトリで最新のコミットが同じになるようにしてください。

あなたが最後に同期した後に、新しいコミットが現れたかもしれません。この学習用リポジトリでは、特にそれがよく起こります。なぜなら、プルリクエストが自動的に承認されてマージされるからです。

[https://github.com/twilio-labs/open-pixel-art/commits/master](https://github.com/twilio-labs/open-pixel-art/commits/master)

\[https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master](https://github.com/\<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master)

リポジトリのマスターブランチを同期し、右にある［`HACK`］を押します。