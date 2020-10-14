exportações.textTnC = () => {
    return `
O código-fonte / bot é um programa de código aberto (gratuito) escrito em Javascript, você pode usar, copiar, modificar, combinar, publicar, distribuir, sublicenciar e / ou vender cópias sem remover o autor principal do código-fonte / bot .
Ao usar este código-fonte / bot, você concorda com os seguintes Termos e Condições:
- O código-fonte / bot não armazena seus dados em nossos servidores.
- O código-fonte / bot não é responsável pelos stickers que você faz desse bot e pelos vídeos, imagens e outros dados que você obtém do código-fonte / bot.
- O código-fonte / bot não pode ser usado para serviços que visam / contribuem para:
    • sexo / tráfico humano
    • jogos de azar
    • comportamento viciante prejudicial
    • crime
    • violência (a menos que necessário para proteger a segurança pública)
    • queima de floresta / desmatamento
    • discurso de ódio ou discriminação com base na idade, sexo, identidade de gênero, raça, sexualidade, religião, nacionalidade
Código-fonte BOT: https://github.com/YogaSakti/imageToSticker
Biblioteca NodeJS WhatsApp: https://github.com/open-wa/wa-automate-nodejs
Atenciosamente, Yoga Sakti.
}

ports.textMenu = (pushname) => {
    return `
Olá, $ {pushname || ''}! 👋️
Aqui estão alguns dos recursos deste bot! ✨
Fabricante de adesivos:
1. * # adesivo *
Para converter uma imagem em adesivo, envie a imagem com a legenda #sticker ou responda à imagem que foi enviada com #sticker.
2. * # adesivos * _ <URL da imagem> _
Para mudar a imagem do url para um adesivo.
3. * # gifsticker * _ <Giphy URL> _ / * # stickergif * _ <Giphy URL> _
Para transformar um GIF em um adesivo (somente Giphy)
Downloader:
1. * # tiktok * _ <post / url do vídeo> _
Retornará vídeo tiktok.
2. * # fb * _ <url de postagem / vídeo> _
Retornará o link de download de vídeo do Facebook.
3. * # ig * _ <post / url do vídeo> _
Retornará o link de download do vídeo do Instagram.
4. * # twt * _ <url de postagem / vídeo> _
Retornará o link de download de vídeo do Twitter.
Etc:
1. * # tnc *
Exibe os termos e condições do bot.
Espero que você tenha um ótimo dia! ✨`
}

exportações.textAdmin = () => {
    return `
⚠ [* Grupo de administradores apenas *] ⚠
Aqui estão alguns dos recursos de administração de grupo incluídos neste bot!
1. * # kick * @user
Removendo membros do grupo (pode ser mais de 1).
2. * # promova * @user
Promova membros para administradores do grupo.
3. * # rebaixar * @user
Rebaixar administradores de grupo.
3. * # tagall *
Menção de todos os membros do grupo.
}
