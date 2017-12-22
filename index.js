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
let sigh = message.content.split(" ").slice(1);
let psymsg = sigh.join(" ");
message.channel.send('Reported!');
client.users.get(config.botownerid).send(`${message.author.tag} from ${message.guild.name} have reported: ` + psymsg);
}

exports.run = (client, message, args) => {
    let argss = message.content.split(" ").slice(1);
    let tempmsg = argss.join(" ");
    message.delete();
    return message.channel.send(tempmsg);
}
