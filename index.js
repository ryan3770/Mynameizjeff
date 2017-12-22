const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "!";
const botownerid = "280749589974482945";

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`); 
  client.users.get(botownerid).send("Hi owner, I am back after a restart.")
}); 

client.on('message', message => { 
  if (message.content.startsWith(prefix + 'ping')) { 
    message.channel.send('Pong :ping_pong:'); 
  }
});

client.on('message', message => { 
  if (message.content.startsWith(prefix + 'infosam')) { 
    message.channel.send('*the coolest guy in server*'); 
  }
});

exports.run = (client, message, args) => {
const config = require('../config.json');
let newavatartime = message.content.split(" ").slice(1);
let blasty = newavatartime.join(" ");
if(message.author.id !== config.botownerid) return message.reply('you are not my owner!!!');
if(!blasty.startsWith('http')){
message.reply(`New Avatar Set : ./images/${blasty}.png`);
client.user.setAvatar(`./images/${blasty}.png`);
}else {
message.reply(`New Avatar Set : ${blasty}`);
client.user.setAvatar(blasty);
}

}
