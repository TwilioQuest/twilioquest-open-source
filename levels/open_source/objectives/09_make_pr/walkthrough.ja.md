# プルリクエストを開く

## プルリクエスト

GitHubに変更をプッシュしました。では次に、Open Pixel Artプロジェクトにそれらの変更をプルしてもらいましょう。

プルリクエストとは、他の開発者がリポジトリの所有者に対し、提案した変更を含めるようにリクエストする方法です。まず、プルリクエストの`base`またはターゲットを指定します。次に、ベースリポジトリに対して`compare`（比較）するために、アップロードした適切なブランチを選択します。

## プルリクエストの一部

GitHubでは、[ユーザーインターフェイスを使用してフォークされたリポジトリからプルリクエストを開始する方法に関するドキュメント](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork)を用意しています。

`open-pixel-art`プロジェクトの`master`ブランチに対してプルリクエストを開始しようとしていることを確認します。これは、それがプルリクエストのベースとして設定されていることを確認することを意味します。

フォークされたリポジトリは、ヘッドリポジトリとして設定されている必要があります。作成したブランチ「\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>」は、比較ブランチとして設定する必要があります。

このURLを使用すると、`base`と`compare`のブランチがすでに設定された、GitHubプルリクエスト作成画面に直接移動できます。

\[https://github.com/twilio-labs/open-pixel-art/compare/master...\<%= env.TQ_GITHUB_USERNAME.value %>:\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/twilio-labs/open-pixel-art/compare/master...\<%= env.TQ_GITHUB_USERNAME.value %>:\<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

## プルリクエストを作成する

プルリクエストを正しく設定した後、大きな[`Create Pull Request`]ボタンをクリックします。エディターフォームが開き、プルリクエストのタイトルとメッセージを指定できます。

このメッセージは、プリセットメッセ―ジから始まりますが、これを調整してプルリクエストに含まれる内容を説明できます。このメッセージは、[マークダウンと呼ばれる記法で作成されており、こちらでその詳細を学ぶことができます](https://guides.github.com/features/mastering-markdown/)。

リポジトリの多くには、今後の貢献のために、これらのカスタマイズされたプリセットが用意されています。Open Pixel Artのプリセットには、開始する前に確認する項目のチェックリストがあります。

ピクセルを追加したときに、それらの確認事項に則しているはずですが、ここでも再度確認しましょう。GitHubマークダウンのチェックボックスは、コード、`- [ ]`で作成されています。チェックマークを付けるには、角括弧の間に`x`を挿入し、`- [ x ]`のように表示されるようにします。

チェックリストを確認した後、[`Create Pull Request`]ボタンをクリックします。

## プルリクエスト番号

GitHubで開かれたプルリクエストには、後で参照できるように番号が割り当てられます。この番号は、プルリクエスト画面のプルリクエストタイトルの横にあります。また、プルリクエストのURLにも同じ番号が表示されます。

```bash
https://github.com/twilio-labs/open-pixel-art/pull/<PULL_REQUEST_NUMBER>
```

プルリクエストを紛失した場合には、[GitHubで開かれたすべてのプルリクエスト](https://github.com/pulls)を探すことができます。

## [Hack]をクリック！

右側の入力フィールドにプルリクエストの番号を入力し、[`HACK`]をクリックしてこの課題を完了します。