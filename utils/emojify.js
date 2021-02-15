const { Utils } = require("discord-utils.js")

module.exports = {
name: "emojify",
run: async (client, message, args) => {
let text = args.join(" ")
if (!text) return message.channel.send("Provide text to emojify!")
try {
let emojify = await Utils.emojify(text)
return message.channel.send(emojify)
} catch (error) {
console.log(error)
}
}
}
