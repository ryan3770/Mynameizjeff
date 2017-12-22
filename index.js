const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "?";
const botownerid = "280749589974482945";

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`); 
  client.users.get(botownerid).send("Hi owner, I am back after a restart.")
}); 

exports.run = (client, message, args) => {
message.react('🏓');
message.channel.send('Pong?').then(sent => {
    sent.edit(`:ping_pong:Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
});
}

client.on('message', message => { 
  if (message.content.startsWith(prefix + 'infosam')) { 
    message.channel.send('*the coolest guy in server*'); 
  }
});
