const { Canvas } = require("discord-utils.js")

module.exports = {
name: "trigger",
aliases: ["triggered"],
run: async (client, message, args) => {
let user = message.mentions.users.first() || message.author
let avatar = user.displayAvatarURL()
let image = await Canvas.trigger(avatar)
message.channel.send({
files: [{
name: "image.gif",
attachment: image
}]
})
}
}
