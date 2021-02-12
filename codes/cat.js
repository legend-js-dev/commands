const { random } = require("discord-utils.js")

module.exports = {
name: "communist",
description: "sends an image with the communist filter",
run: async (client, message, args) => {
let user = message.mentions.users.first() || message.author
let avatar = user.displayAvatarURL()
let image = await random.dog()
message.channel.send({
files: [{
name: "image.png",
attachment: image
}]
})
}
}
