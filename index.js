const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "+";
const botownerid = "280749589974482945";
const http = require('http');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 1500);

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`); 
 client.users.get(botownerid).send("Hi owner, I am back after a restart.")
}); 


client.on('message', message => {
 let command = message.content.toLowerCase().slice(1).split(" ")[0];
  let args = message.content.toLowerCase().split(" ").slice(1);
  var commandFile;
  if (message.content.startsWith(prefix)){ 
  let commandFile = require(`./commands/${command}.js`);

commandFile.run(client,message,args);
}

});


