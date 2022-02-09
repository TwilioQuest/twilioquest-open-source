module.exports = {
  "open_source.druid_default.display_name": "ドルイドの村人",
  "open_source.druid_default.hello": "Hello! はじめまして!",
  "open_source.druid_guard.display_name": "ドルイドの衛兵",
  "open_source.druid_guard_forbidden_leader.apologies": `旅のお方、すみませんが、ここには入れないんです。
  まずは村のリーダーと話してみてください。
  リーダーの許可があれば、お通ししましょう。`,
  "open_source.druid_guard_forbidden.peace": `旅のお方、お待ちください。この先はまだ危険なため、お通しできません。
  また後ほどおいでいただければ、安全になっているかもしれません。`,
  "open_source.druid_guard.peace": "旅のお方、お待ちください。問題を引き起こすよりも、プルリクエストを作成してくださいね。",
  "open_source.druid_leader.display_name": "ドルイドのリーダー",
  "open_source.druid_leader.thank_you": `召喚に応えてくださり感謝します。聞いていただきたい火急の問題は、
  <span class='highlight'>オープンソースの炎</span>への道です。
  炎へと続く森の道をふさぐ
  障害物を取り除いてくだされば、大変助かります。
  衛兵にはあなたを通すように言いつけておきます。`,
  "open_source.events.brush.open_source_flame": "「<em>オープンソースの炎</em>」で、この茂みを焼いて道を開くことができればいいんだが。",
  "open_source.01_create_github.enter_github_account": "GitHubアカウントのユーザー名を入力してください。",
  "open_source.01_create_github.username_found": "GitHubユーザー「{username}」が見つかりました。よくできました!",
  "open_source.01_create_github.username_notfound": "GitHubユーザー「{username}」が見つかりませんでした。ユーザー名にタイプミスはありませんか?",
  "open_source.01_create_github.username_error": `GitHubユーザー名の検証中に問題が発生しました 
  {err}`,
  "open_source.02_fork_project.success": "Open Pixel Artリポジトリのフォークが見つかりました。よくできました!",
  "open_source.02_fork_project.repository_not_found": "GitHubユーザー{TQ_GITHUB_USERNAME}が所有する'open-pixel-art'という名前のリポジトリが見つかりませんでした。フォークを正しく命名していますか?",
  "open_source.02_fork_project.error": `Open Pixel Artのフォークの検証中に問題が発生しました。 
  {err}`,
  "open_source.03_install_git.git_installed": "お使いのコンピューターにgitがインストールされました。",
  "open_source.03_install_git.git_not_found": "システムパスにgitコマンドが見つかりませんでした。TwilioQuestのプレイ中に初めてgitをインストールした場合は、TwilioQuestがコマンドの存在を確認するために、ゲームを終了して再起動する必要がある場合があります。",
  "open_source.03b_configure_git.git_not_found": "お使いのコンピューターにコマンドラインgitがインストールされていません。",
  "open_source.03b_configure_git.email_error": "電子メールが正しく設定されていません。",
  "open_source.03b_configure_git.username_not_found": "ユーザー名が正しく設定されていません。",
  "open_source.03b_configure_git.email_not_configured": "電子メールと名前が正しく設定されました",
  "open_source.03b_configure_git.error": `gitの設定の検証中に問題が発生しました。
  {err}`,
  "open_source.04_git_clone.dont_forget_path": "リポジトリのファイルパスを入力するのを忘れないでください。",
  "open_source.04_git_clone.path_not_found": "指定されたパスにディレクトリが見つかりませんでした。 -> {repositoryFilePath}",
  "open_source.04_git_clone.package_not_found": "指定されたリポジトリにパッケージファイルが見つかりませんでした。クローンを正しく作成しましたか?-> {packagePath}",
  "open_source.04_git_clone.package_not_correct": "リポジトリ内のパッケージファイルが、正しいプロジェクトのものではありませんでした。クローンを正しく作成しましたか?-> {packagePath}",
  "open_source.04_git_clone.success": "Open Pixel Artリポジトリを正しくクローンできました。",
  "open_source.04_git_clone.error": `リポジトリのクローンの検証中に問題が発生しました。 
  {err}`,
  "open_source.05_git_branch.dont_forget_branch": "作成したブランチ名を、忘れずに入力してください。",
  "open_source.05_git_branch.branch_not_found": "リポジトリに「'{branchName}'」という名前のブランチが見つかりませんでした。",
  "open_source.05_git_branch.branch_found": "ブランチ「'{branchName}'」は見つかりましたが、チェックアウトされていません。",
  "open_source.05_git_branch.success": "ブランチ「'{branchName}'」が正しく作成されチェックアウトされました。",
  "open_source.05_git_branch.error": `ブランチの作成の検証中に問題が発生しました。 
  {err}`,
  "open_source.06_make_edits.pixels_not_found": "提供されたリポジトリにpixels.jsonファイルが見つかりませんでした。削除しましたか?-> {pixelsPath}",
  "open_source.06_make_edits.pixel_not_found_on_git": "_data/pixels.jsonファイルに、gitユーザー名「{TQ_GITHUB_USERNAME}」のピクセルが見つかりませんでした。",
  "open_source.06_make_edits.commit_not_found": "「_data/pixels.json」ファイルに、gitユーザー名「{TQ_LOCAL_GIT_USER_NAME}」でのコミットが見つかりませんでした。変更をコミットしましたか?",
  "open_source.06_make_edits.success": "新しいピクセルが正しく追加され、確定されました。",
  "open_source.06_make_edits.error": `新しいピクセルの追加の検証中に問題が発生しました。 
  {err}`,
  "open_source.06b_commit_hash.local_git_user_error": "申し訳ありません。コミットハッシュ'{commitHash}'のauthorのリスト中に、ローカルgitユーザー'{TQ_LOCAL_GIT_USER_NAME}'は含まれません。",
  "open_source.06b_commit_hash.try_git_show": "'git show {commitHash}'コマンドを実行し、今しがた提供したコミットを見てみてください。",
  "open_source.06b_commit_hash.success": "author'{TQ_LOCAL_GIT_USER_NAME}'のピクセルコミットを見つけました。",
  "open_source.06b_commit_hash.error": `ピクセルコミットの検証中に問題が発生しました。 
  {err}`,
  "open_source.07_sync_master.remote_not_found": "'upstream'という名前のローカルリモートは見つかりませんでした。作成済みでしょうか?",
  "open_source.07_sync_master.upstream_found": "'upstream'リモートが見つかりましたが、URLに誤りがあるようです。  こちらが正しい形です: https://github.com/twilio-labs/open-pixel-art.git  git remote -vをターミナルで実行し、確認してください。",
  "open_source.07_sync_master.repo_not_connected": `Open Pixel Artリポジトリに接続できませんでした。 
  {statusMessage}`,
  "open_source.07_sync_master.repo_not_found": `ユーザー'{TQ_GITHUB_USERNAME}'の'open-pixel-art'リポジトリが見つかりませんでした。 
  {statusMessage}`,
  "open_source.07_sync_master.open_pixel": "Open Pixel Artリポジトリと、ユーザー{TQ_GITHUB_USERNAME}の'open-pixel-art'リポジトリが同期していません。最後の同期より後に、新しい変更が追加された可能性があります。もう一度同期してみてください。",
  "open_source.07_sync_master.success": "Open Pixel Artリポジトリと、ユーザー'{TQ_GITHUB_USERNAME}'の'open-pixel-art'リポジトリは同期しています。今後、ほかのユーザーがリポジトリに変更を加えることで、同期が切れる可能性があります。",
  "open_source.07_sync_master.error": `Open Pixel Artフォークの同期の検証中に問題が発生しました。 
  {err}`,
  "open_source.07b_merge_master.latest_commit_not_found": "マスター'{latestMasterCommit}'の最新のコミットは、ブランチ'{TQ_OPEN_PIXEL_ART_BRANCH}'に見つかりませんでした。",
  "open_source.07b_merge_master.latest_commit_found": "マスターの最新のコミットがブランチ'{TQ_OPEN_PIXEL_ART_BRANCH}'に見つかりました。",
  "open_source.07b_merge_master.error": `ブランチへのマスターのマージの検証中に問題が発生しました。 
  {error}`,
  "open_source.08_push_upstream.branch_found": "ユーザー「'{TQ_GITHUB_USERNAME}'」のリモートリポジトリに、ブランチ「'{TQ_OPEN_PIXEL_ART_BRANCH}'」が見つかりました。",
  "open_source.08_push_upstream.branch_not_found": "ユーザー'{TQ_GITHUB_USERNAME}'のリモートリポジトリ「open-pixel-art」に、自分のブランチ'{TQ_OPEN_PIXEL_ART_BRANCH}'が見つかりませんでした。",
  "open_source.08_push_upstream.error": `Open Pixel Artブランチの検証中に問題が発生しました。 
  {err}`,
  "open_source.09_make_pr.pr_not_found": "Open Pixel Artリモートリポジトリに、プルリクエスト#{prNumber}が見つかりませんでした。",
  "open_source.09_make_pr.pr_found_wrong_user": "Open Pixel Artリモートリポジトリにプルリクエスト#{prNumber}が見つかりましたが、GitHubユーザー「'{TQ_GITHUB_USERNAME}'」には属していません。",
  "open_source.09_make_pr.success": "GitHubユーザー「'{TQ_GITHUB_USERNAME}'」用のOpen Pixel Artリモートリポジトリに、プルリクエスト#{prNumber}が見つかりました。",
  "open_source.09_make_pr.error": `Open Pixel Artのプルリクエストの検証中に問題が発生しました。 
  {err}`,
  "open_source.11_check_merge.pr_not_found": "Open Pixel Artリモートリポジトリに、プルリクエスト#{TQ_OPEN_PIXEL_ART_PR_NUMBER}が見つかりませんでした。",
  "open_source.11_check_merge.pr_found_closed": "Open Pixel Artリモートリポジトリに、プルリクエスト#{TQ_OPEN_PIXEL_ART_PR_NUMBER}が見つかりましたが、マージされずに閉じられました。",
  "open_source.11_check_merge.pr_not_merged": "Open Pixel Artリモートリポジトリにプルリクエスト#{TQ_OPEN_PIXEL_ART_PR_NUMBER}が見つかりましたが、まだマージされていません。",
  "open_source.11_check_merge.success": "Open Pixel Artリモートリポジトリにプルリクエスト#{TQ_OPEN_PIXEL_ART_PR_NUMBER}が見つかり、マージされています。オープンソースへの貢献、おめでとうございます!",
  "open_source.11_check_merge.error": "Open Pixel Artプルリクエストのマージの検証中に問題が発生しました。",
  "open_source.12_merge_another.dont_forget_owner": "貢献したプロジェクトのリポジトリ所有者名を、忘れずに入力してください。",
  "open_source.12_merge_another.dont_forget_name": "貢献したリポジトリ名を、忘れずに入力してください。",
  "open_source.12_merge_another.dont_forget_number": "貢献したプルリクエスト番号を、忘れずに入力してください。",
  "open_source.12_merge_another.pixel_fail": "Open Pixel Artの貢献をもう一度数えることはできません。",
  "open_source.12_merge_another.pr_not_found": "{repositoryOwner}のリポジトリ「'{repository}'」に、プルリクエスト番号「#{prNumber}」が見つかりませんでした。",
  "open_source.12_merge_another.pr_dont_belong": "{repositoryOwner}のリポジトリ「'{repository}'」に、プルリクエスト番号「#{prNumber}」が見つかりましたが、GitHubユーザー「'{TQ_GITHUB_USERNAME}'」に属していません。",
  "open_source.12_merge_another.pr_closed": "{repositoryOwner}のリポジトリ「'{repository}'」に、プルリクエスト番号「#{prNumber}」が見つかりましたが、マージされずに閉じられました。",
  "open_source.12_merge_another.pr_not_merged": "{repositoryOwner}のリポジトリ「'{repository}'」にプルリクエスト番号「#{prNumber}」が見つかりましたが、まだマージされていません。",
  "open_source.12_merge_another.success": "{repositoryOwner}のリポジトリ「'{repository}'」にプルリクエスト番号「#{prNumber}」が見つかり、マージされています。オープンソースへの貢献、おめでとうございます!",
  "open_source.12_merge_another.error": `プルリクエストのマージの検証中に問題が発生しました。 
  {err}`,
  "open_source.events.speak_village_leader": "森の奥へとさらに進む前に、村のリーダーに話しかける必要があると思う。",
  "open_source.events.down_the_forest": "そうすれば森に分け入る道がはっきりするだろう。今、<em>「オープンソースの炎」を見つけるには...",
  "open_source.events.brush.cant_get_through": "ふむ。「<em>オープンソースの炎</em>」をもってしてもこの茂みは通り抜けられない。森にさらに分け入り、しばらくしてから戻る必要があります。"
}