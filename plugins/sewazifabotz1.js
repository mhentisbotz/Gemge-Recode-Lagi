let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪SEWA MIKAZUBOT⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ • *Sewa Mikazu Md*          
║│ *LANGSUNG KE*
║│ *OWNER*
╰─────────❉
📮 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ *_Tolong jangan dispam_*
_____••••••••• 
⬣━〔Store By Asyraf〕━⬣
▌│█║▌║▌║║▌║▌║█│▌`.trim()
  const button = {
        buttonText: '↱ 🄺🄻🄸🄺 🅂🄸🄽🄸 ↲',
        description: kontol,
        sections:  [{title: "STORE SEWA", rows: [
        {title: 'Menu utama mikazu', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Nomor owner mikazu', description: "kalau mau sewa silahkan cht owner mikazu", rowId:".owner"},
        {title: 'RULES', description: "rules mikazu bot", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(sewazifabotz1|botz1)$/i
handler.help = ['sewazifabotz1']
module.exports = handler
