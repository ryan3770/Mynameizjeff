exports.run = (client, message, args) => {
const Discord = require('discord.js');
message.delete()
message.channel.createWebhook(`${client.user.username} Assistant`, `./images/pikachu_kanto.png`).then(wb => new Discord.WebhookClient(wb.id, wb.token).send(message.content.split(" ").slice(1).join(" ")));
}