const { Canvas } = require("discord-utils.js")

module.exports = {
name: "bad",
description: "sends an image with the communist filter",
run: async (client, message, args) => {
let user = message.mentions.users.first() || message.author
let avatar = user.displayAvatarURL()
let image = await Canvas.bad(avatar)
message.channel.send({
files: [{
name: "image.png",
attachment: image
}]
})
}
}
