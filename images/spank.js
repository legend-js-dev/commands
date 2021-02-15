const { Canvas } = require("discord-utils.js")

module.exports = {
name: "spank",
run: async (client, message, args) => {
let user = message.author
let user2 = message.mentions.users.first() || message.guild.members.cache.get(args[0]).user || message.guild.members.cache.find(m=> m.user.username.toLowerCase() === args.join(" ")).user || message.guild.members.cache.find(m=> m.displayName.toLowerCase() === args.join(" ")).user
let avatar = user.displayAvatarURL()
let avatar2 = user2.displayAvatarURL()
let image = await Canvas.spank(avatar, avatar2)
message.channel.send({
files: [{
name: "image.png",
attachment: image
}]
})
}
}
