module.exports = {
  "open_source.druid_default.hello": "Olá! Prazer em conhecer você!",
  "open_source.druid_guard_forbidden_leader.apologies": `Desculpe viajante, mas você não pode entrar aqui. Converse com 
  nosso líder na aldeia primeiro. Com a permissão dele, podemos deixar 
  você entrar.`,
  "open_source.druid_guard_forbidden.peace": `Paz, viajante. O caminho além ainda não é seguro, e não podemos deixar você
  passar. Volte mais tarde e o caminho pode estar liberado.`,
  "open_source.druid_guard.peace": "Paz, viajante. Você pode criar mais solicitações de recebimento do que problemas.",
  "open_source.druid_leader.thank_you": `Agradecemos por responder à nossa convocação. O problema mais urgente que requer
  sua atenção é o caminho para a 
  <span class='highlight'>Flame of Open Source</span> (Chama do código aberto). Seria um ótimo 
  serviço se você pudesse desbloquear o caminho pela floresta até a chama.
  Vou cuidar para que meus guardas deixem você passar.`,
  "open_source.events.brush.open_source_flame": "Ainda bem que a <em>The Flame of Open Source</em> (Chama do código aberto) pode me ajudar a queimar esse mato.",
  "open_source.01_create_github.enter_github_account": "Insira o nome de usuário da sua conta do GitHub!",
  "open_source.01_create_github.username_found": "Encontramos seu usuário do GitHub, {username}. Bom trabalho!",
  "open_source.01_create_github.username_notfound": "Não foi possível encontrar o usuário do GitHub, {username}. Há um erro de digitação no nome de usuário?",
  "open_source.01_create_github.username_error": `Algo deu errado quando tentamos validar seu nome de usuário do GitHub 
  {err}`,
  "open_source.02_fork_project.success": "Encontramos seu fork do repositório Open Pixel Art! Bom trabalho!",
  "open_source.02_fork_project.repository_not_found": "Não foi possível encontrar um repositório chamado “open-pixel-art” de propriedade do usuário do GitHub, {TQ_GITHUB_USERNAME}. Seu fork está corretamente nomeado?",
  "open_source.02_fork_project.error": `Algo deu errado quando tentamos validar seu fork Open Pixel Art! 
  {err}`,
  "open_source.03_install_git.git_installed": "Encontramos o git instalado em seu computador!",
  "open_source.03_install_git.git_not_found": "Não encontramos o comando git no caminho do seu sistema. Se você instalou o git pela primeira vez ao jogar o TwilioQuest, talvez seja necessário sair e reiniciar o jogo no TwilioQuest para garantir que o comando esteja presente.",
  "open_source.03b_configure_git.git_not_found": "Não encontramos a linha de comando git instalada no seu computador!",
  "open_source.03b_configure_git.email_error": "Não encontramos o seu e-mail configurado corretamente!",
  "open_source.03b_configure_git.username_not_found": "Não encontramos o nome de usuário configurado corretamente!",
  "open_source.03b_configure_git.email_not_configured": "Parece que seu e-mail e nome estão configurados corretamente!",
  "open_source.03b_configure_git.error": `Algo deu errado quando tentamos validar a configuração do seu git!
  {err}`,
  "open_source.04_git_clone.dont_forget_path": "Não se esqueça de fornecer um caminho de arquivo de repositório!",
  "open_source.04_git_clone.path_not_found": "Não foi possível encontrar um diretório no caminho fornecido. -> {repositoryFilePath}",
  "open_source.04_git_clone.package_not_found": "Não foi possível encontrar o arquivo de pacote no repositório fornecido! Ele foi clonado corretamente? -> {packagePath}",
  "open_source.04_git_clone.package_not_correct": "O arquivo de pacote nesse repositório não era para o projeto correto! Ele foi clonado corretamente? -> {packagePath}",
  "open_source.04_git_clone.success": "Parece que você clonou o repositório Open Pixel Art corretamente!",
  "open_source.04_git_clone.error": `Algo deu errado quando tentamos validar o clone do seu repositório! 
  {err}`,
  "open_source.05_git_branch.dont_forget_branch": "Não se esqueça de fornecer o nome do branch que você criou!",
  "open_source.05_git_branch.branch_not_found": "Não foi possível encontrar o branch nomeado '{branchName}' em seu repositório!",
  "open_source.05_git_branch.branch_found": "Encontramos seu branch '{branchName}', mas parece que você ainda não fez a verificação!",
  "open_source.05_git_branch.success": "Parece que você criou e verificou o branch '{branchName}' corretamente!",
  "open_source.05_git_branch.error": `Ocorreu um problema ao tentar validar a criação do seu branch! 
  {err}`,
  "open_source.06_make_edits.pixels_not_found": "Não foi possível encontrar o arquivo pixels.json no repositório fornecido! Ele foi removido? -> {pixelsPath}",
  "open_source.06_make_edits.pixel_not_found_on_git": "Não encontramos um pixel no arquivo _data/pixels.json com seu nome de usuário git, {TQ_GITHUB_USERNAME}!",
  "open_source.06_make_edits.commit_not_found": "Não encontramos uma confirmação com seu nome de usuário git, {TQ_LOCAL_GIT_USER_NAME}, no arquivo “_data/pixels.json”! Você confirmou suas alterações?",
  "open_source.06_make_edits.success": "Parece que você adicionou e confirmou corretamente seu novo pixel!",
  "open_source.06_make_edits.error": `Ocorreu um problema ao tentar validar a adição do seu novo pixel! 
  {err}`,
  "open_source.06b_commit_hash.local_git_user_error": "Desculpe! O hash de confirmação '{commitHash}' não tem seu usuário git local '{TQ_LOCAL_GIT_USER_NAME}' listado como autor!",
  "open_source.06b_commit_hash.try_git_show": "Tente o comando “git show {commitHash}“ para ver a confirmação específica que você acabou de fornecer.",
  "open_source.06b_commit_hash.success": "Encontramos sua confirmação de pixel para o autor '{TQ_LOCAL_GIT_USER_NAME}'!",
  "open_source.06b_commit_hash.error": `Algo deu errado quando tentamos validar sua confirmação de pixel! 
  {err}`,
  "open_source.07_sync_master.remote_not_found": "Não encontramos um local remoto chamado “upstream”! Você já criou um?",
  "open_source.07_sync_master.upstream_found": "Encontramos seu local remoto “upstream”, mas parece que ele não tem o URL correto.  Deve ser assim: https://github.com/twilio-labs/open-pixel-art.git  Execute git remote -v em seu terminal para verificá-lo!",
  "open_source.07_sync_master.repo_not_connected": `Não foi possível conectar-se ao repositório do Open Pixel Art! 
  {statusMessage}`,
  "open_source.07_sync_master.repo_not_found": `Não foi possível encontrar o repositório “open-pixel-art” para seu usuário '{TQ_GITHUB_USERNAME}'! 
  {statusMessage}`,
  "open_source.07_sync_master.open_pixel": "O repositório do Open Pixel Art e o repositório “open-pixel-art” para seu usuário \"{TQ_GITHUB_USERNAME} are out of sync (fora de sincronia)\"! Novas alterações podem ter sido adicionadas desde sua última sincronização. Tente sincronizar novamente!",
  "open_source.07_sync_master.success": "O repositório Open Pixel Art e o repositório “open-pixel-art” para seu usuário '{TQ_GITHUB_USERNAME}' estão sincronizados! Eles podem ficar fora de sincronia no futuro, pois outros usuários fazem alterações no repositório!",
  "open_source.07_sync_master.error": `Algo deu errado quando tentamos validar se seu fork Open Pixel Art estava sincronizado! 
  {err}`,
  "open_source.07b_merge_master.latest_commit_not_found": "A confirmação mais recente no master '{latestMasterCommit}' não foi encontrado em seu branch '{TQ_OPEN_PIXEL_ART_BRANCH}'!",
  "open_source.07b_merge_master.latest_commit_found": "Encontramos a confirmação mais recente no master em seu branch '{TQ_OPEN_PIXEL_ART_BRANCH}'!",
  "open_source.07b_merge_master.error": `Algo deu errado quando tentamos validar se seu branch tinha o master mesclado! 
  {err}`,
  "open_source.08_push_upstream.branch_found": "Encontramos seu branch '{TQ_OPEN_PIXEL_ART_BRANCH}' em seu repositório remoto para o usuário '{TQ_GITHUB_USERNAME}'!",
  "open_source.08_push_upstream.branch_not_found": "Não foi possível encontrar seu branch '{TQ_OPEN_PIXEL_ART_BRANCH}' em seu repositório remoto “open-pixel-art” para o usuário '{TQ_GITHUB_USERNAME}'!",
  "open_source.08_push_upstream.error": `Algo deu errado quando tentamos validar seu branch Open Pixel Art! 
  {err}`,
  "open_source.09_make_pr.pr_not_found": "Não foi possível encontrar a pull request #{prNumber} no repositório remoto do Open Pixel Art!",
  "open_source.09_make_pr.pr_found_wrong_user": "Encontramos a pull request #{prNumber} no repositório remoto do Open Pixel Art, mas ela não pertence ao seu usuário do GitHub '{TQ_GITHUB_USERNAME}'!",
  "open_source.09_make_pr.success": "Encontramos sua pull request #{prNumber} no repositório remoto do Open Pixel Art para seu usuário do GitHub '{TQ_GITHUB_USERNAME}'!",
  "open_source.09_make_pr.error": `Algo deu errado quando tentamos validar sua pull request no Open Pixel Art! 
  {err}`,
  "open_source.11_check_merge.pr_not_found": "Não foi possível encontrar a pull request #{TQ_OPEN_PIXEL_ART_PR_NUMBER} no repositório remoto do Open Pixel Art!",
  "open_source.11_check_merge.pr_found_closed": "Encontramos a pull request #{TQ_OPEN_PIXEL_ART_PR_NUMBER} no repositório remoto do Open Pixel Art, mas ela foi fechada sem ser mesclada!",
  "open_source.11_check_merge.pr_not_merged": "Encontramos a pull request #{TQ_OPEN_PIXEL_ART_PR_NUMBER} no repositório remoto do Open Pixel Art, mas ela ainda não foi mesclada!",
  "open_source.11_check_merge.success": "Encontramos a pull request #{TQ_OPEN_PIXEL_ART_PR_NUMBER} no repositório remoto do Open Pixel Art e ela foi mesclada! Parabéns pela sua contribuição ao open source!",
  "open_source.11_check_merge.error": "Algo deu errado quando tentamos validar se sua pull request no Open Pixel Art foi mesclada!",
  "open_source.12_merge_another.dont_forget_owner": "Não se esqueça de inserir o nome do proprietário do repositório para cujo projeto você contribuiu!",
  "open_source.12_merge_another.dont_forget_name": "Não se esqueça de inserir o nome do repositório para o qual você contribuiu!",
  "open_source.12_merge_another.dont_forget_number": "Não se esqueça de inserir o número da pull request com a qual você contribuiu!",
  "open_source.12_merge_another.pixel_fail": "Você não pode contar sua contribuição para o Open Pixel Art novamente!",
  "open_source.12_merge_another.pr_not_found": "Não foi possível encontrar a pull request #{prNumber} no repositório '{repository}'do {repositoryOwner}!",
  "open_source.12_merge_another.pr_dont_belong": "Encontramos a pull request #{prNumber} no repositório '{repository}'do {repositoryOwner}, mas ela não pertence ao seu usuário do GitHub '{TQ_GITHUB_USERNAME}'!",
  "open_source.12_merge_another.pr_closed": "Encontramos a pull request #{prNumber} no repositório '{repository}'do {repositoryOwner}, mas ela foi fechada sem ser mesclado!",
  "open_source.12_merge_another.pr_not_merged": "Encontramos a pull request #{prNumber} no repositório '{repository}'do {repositoryOwner}, mas ela ainda não foi mesclada!",
  "open_source.12_merge_another.success": "Encontramos a pull request #{prNumber} no repositório '{repository}' do {repositoryOwner}e ela foi mesclada! Parabéns pela sua contribuição ao open source!",
  "open_source.12_merge_another.error": `Algo deu errado quando tentamos validar se sua pull request foi mesclada! 
  {err}`,
  "open_source.events.speak_village_leader": "Acho que preciso falar com o líder da vila antes de poder prosseguir para a floresta.",
  "open_source.events.down_the_forest": "Parece que o caminho para a floresta está limpo. Agora, para encontrar <em>The Flame of Open Source (Chama do código aberto)...",
  "open_source.events.brush.cant_get_through": "Humm. Não consigo passar por esse arbusto mesmo com <em>The Flame of Open Source (Chama do código aberto)</em>. Preciso prosseguir para a floresta e voltar mais tarde.",
  "open-source.events.notification": "Já concluí tudo na <span class='highlight'>Floresta do código-fonte aberto</span> por enquanto!",
  "open-source.events.log": "Já concluí tudo na Floresta do código-fonte aberto por enquanto!"
}