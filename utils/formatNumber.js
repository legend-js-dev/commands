const { Utils } = require("discord-utils.js")

module.exports = {
name: "formatNumber",
run: async (client, message, args) => {
let num = args[0]
if (!num) return message.channel.send("Provide The Number!")
if (isNaN(num)) return message.channel.send("NaN")
try {
let result = await Utils.formatNumber(num)
return message.channel.send(result)
} catch (error) {
console.log(error)
}
}
}
