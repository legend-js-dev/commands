const { Utils } = require("discord-utils.js")

module.exports = {
name: "docs",
aliases: ["djs"],
run: async (client, message, args) => {
let text = args.join(" ")
if (!text) return message.channel.send("Provide the query!")
try {
let embed = await Utils.djsDocs(text)
return message.channel.send({
embed: embed
})
} catch (error) {
console.log(error)
}
}
}
