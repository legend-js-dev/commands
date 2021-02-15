const { Utils } = require("discord-utils.js")

module.exports = {
name: "reverse",
run: async (client, message, args) => {
let text = args.join(" ")
if (!text) return message.channel.send("Provide The Text!")
try {
let res = await Utils.reverse(text)
return message.channel.send(res)
} catch (error) {
console.log(error)
} 
}
}
