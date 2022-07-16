let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
*Group Mikazu Botz : https://bit.ly/3ax9GjJ*
`.trim()
conn.sendButton(m.chat, str, `Mikazu Md By Asyraf 6Youu`, `OWNER MIKAZU`, `.owner`, m)
}
handler.help = ['zifa1']
handler.tags = ['info']
handler.command = /^zifa1$/i

module.exports = handler
