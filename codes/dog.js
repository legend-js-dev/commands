const { random } = require("discord-utils.js")

module.exports = {
name: "dog",
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
