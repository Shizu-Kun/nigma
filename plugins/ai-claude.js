const { Claude } = (await import("../scraper/claudeAi.js"))

let handler = async (m, {conn, text, usedPrefix, command}) => {

if (!text) return m.reply("use: /claude siapa presiden Indonesia")

try {
await m.react("💬")
let claude = new Claude(";")
const { result } = await claude.chat(text)
await conn.reply(m.chat, await result, m).then(_ => {
 m.react("🔥")
})
} catch (e) {
throw 'waduh bang kacau, gak tau gw '
}

}
handler.help = handler.command = ['claude']
handler.tags = ["ai"]


export default handler