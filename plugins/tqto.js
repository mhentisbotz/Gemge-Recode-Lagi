let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonImg(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO
╭═══════════════════════
║╭──❉ 〔 TERIMAKASIH 〕 ❉──────
║│➸ *OWNER* : *_ASYRAF_*
║│➸ *BOT*: *_MIKAZU MD_*
║│➸ *_LAYANAN API_*
║│➸ *_ALYA_*
║│➸ *_BOTCAHX_*
║│➸ *_DAN YANG MEMBANTU BOT_*
║╭──❉  •BASE NURUTOMO
║╰──❉ •SC ORI RTXYZ
═════════════
`.trim(), watermark, 'OWNER MIKAZU', '.owner')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
