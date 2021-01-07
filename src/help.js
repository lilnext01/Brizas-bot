const help = (prefix) => {
	return `💎 Comandos do BrizasBot 💎  
🔰 Principais Comandos 🔰 

Comando: '${prefix}sticker' ou '${prefix}stiker'
Função: converter imagem / gif / vídeo em adesivo
Como Usar: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda 

Comando: '${prefix}sticker nobg' ou '${prefix}stiker nobg'
Função: converter imagem em adesivo removendo o fundo
Como Usar: reply image, or send image with caption 

Comando: '${prefix}toimg'
Função: converter adesivos em imagem
Como Usar: reply sticker 

🔰 Comandos de Memes 🔰  

Comando: '${prefix}meme'
Função: imagens aleatórias de meme [english]
Como Usar: Só escrever o comando

Comando: '${prefix}memeindo'
Função: imagens aleatórias de meme [indo]
Como Usar: Só escrever o comando

🔰 Comandos +18 🔰

Comando: '${prefix}loli'
Função: imagens aleatórias de loli
Como Usar: apenas envie o comando

Comando: '${prefix}nsfwloli'
Função: imagens aleatórias de hentai
Como Usar: basta enviar o comando
Obs: Funciona apenas no pv do bot

Comando: '${prefix}pack'
Função: Enviar um pacote de links +18
Como Usar: Basta enviar o comando

🔰 Outros Comandos 🔰 

Comando: '${prefix}gtts'
Função: converter texto em fala / áudio
Como Usar: '${prefix}gtts [la] [texto]'
Exemplo: '${prefix}gtts ja Oni-chan'

Comando: '${prefix}db'
Função: envia links de várias database de travazap
Como Usar: Só basta escrever o código

Comando:'${prefix}wppim'
Função: envia links de todos whatsapp imunes
Como usar: Só basta escrver o código

Comando: '${prefix}url2img'
Função: tirar uma captura de tela na web
Como Usar: *${prefix}url2img [tip] [url]*

Comando: '${prefix}simi'
Função: sua mensagem será respondida por simi
Como Usar: '${prefix}simi [texto]'

Comando: '${prefix}ocr'
Função: pegue o texto na foto
Como Usar: responder imagem ou enviar imagem com legenda 

Comando: '${prefix}wait'
Função: Pesquisa o anime na imagem [ O que anime é isso / aquilo ]
Como Usar: responder imagem ou enviar imagem com legenda 

Comando: '${prefix}setprefix'
Função: substituir prefixo
Como Usar: '${prefix}setprefix [text|optional]' 
Exemplo: '${prefix}setprefix ?'
Obs: This command can only be used by the bot owner 

🔰 Comandos de Grupos 🔰 

Comandos: '${prefix}'termux
Função: Mostra uma lista de comandos básicos do termux
Como usar: Só basta escrever o comando

Comandos: '${prefix}welcome'
Função: Ativa o modo boas-vindas do grupo
Como Usar: '${prefix}welcome 1' para ativar o modo welcome e '${prefix}simih 0' para desativar o modo welcome
Obs: Este comando pode ser usado se você for um administrador do grupo 

Comandos: '${prefix}linkgroup'
Função: pegue o link do grupo
Como Usar: just send the command
Obs: só pode ser usado quando o bot se torna admin, e quem enviar o comando é admin! 

Comandos: '${prefix}tagall'
Função: marca todos os membros do grupo, incluindo administradores também
Como Usar: apenas envie o comando
Obs: Este comando pode ser usado se você for um administrador do grupo 

Comandos: '${prefix}simih'
Função: ative o modo simi no grupo
Como Usar: '${prefix}simih 1' para ativar o modo simih e '${prefix}simih 0' para desativar o modo simih
Obs: Este comando pode ser usado se você for um administrador do grupo `
}

exports.help = help


