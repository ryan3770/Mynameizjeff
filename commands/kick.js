exports.run = (client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You pleb, you don't have the permission to use this command.");
if(message.mentions.users.size === 0) return message.reply("Please mention a user to kick.");
if (!message.mentions.users.first()) return message.reply("That user does not seem valid.");

if (args.length > 0){
let reason = message.content.split(" ").slice(2).join(" ");
}else{
let reason = "Unknown!"
}

message.guild.member(message.mentions.users.first()).kick().then(member => {
message.channel.send(`**${member.user.username}** was kicked by ${message.author.username}.\nReason: ` + reason);
}).catch(console.error)

}