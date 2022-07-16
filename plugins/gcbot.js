let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
*_📮:PENCET DIBAWAH_*`.trim()
  const button = {
        buttonText: 'group mikazu',
        description: GROUP MIKAZU MD,
        sections:  [{title: "groub pilihan", rows: [
        {title: '🎐› Group', description: "join kuy", rowId:".zifa1"},
        {title: '🎀› Group', description: "join kuy", rowId:".zifa1"},
        {title: '🧸› group', description: "join kuy", rowId:".zifa1"},
        {title: '🔮› group', description: "join kuy", rowId:".zifa1"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot)$/i
handler.help = ['gcbot']
module.exports = handler
