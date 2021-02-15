const { Canvas } = require("discord-utils.js")

module.exports = {
name: "wasted",
run: async (client, message, args) => {
let user = message.mentions.users.first() || message.author
let avatar = user.displayAvatarURL()
let image = await Canvas.wasted(avatar)
message.channel.send({
files: [{
name: "image.png",
attachment: image
}]
})
}
}
