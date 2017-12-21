const Discord = require('discord.js');
const client = new Discord.Client();
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

exports.run = (client, message, argss) => {

if (argss.length < 2){
return message.channel.sendMessage(`Dont mention me without any reason <@${message.author.id}>`);
}else 
if(message.content.toLowerCase().includes("hi")){
      return message.channel.sendMessage(`Hello **${message.author.username}** :smiley: `);
}else
if(message.content.toLowerCase().includes("how are you")){
      return message.channel.sendMessage(`Preety fine, what about you **${message.author.username}** ??`);
}else
if(message.content.toLowerCase().includes("get out")){
      return message.channel.sendMessage(`**${message.guild.owner.username}** Brought me here .... I will leave only if he says.... :stuck_out_tongue_winking_eye: `);
}

if(message.content.toLowerCase().includes("do you know")){
if (message.mentions.users.last() === ""){
    
}
}
}
