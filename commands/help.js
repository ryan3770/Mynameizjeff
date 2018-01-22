exports.run = (client, message, args) => {
const config = require('../config.json');
if(args[0] === 'admin'){
message.channel.send('**List Of Admin Commands**\n(Prefix: ' + config.modprefix + ')\n```\nreport\nsetstatus\nsetgame\nsetname\nsetavatar\nleave\neval```\n\n:information_source: Type *+help CommandName* to get details about the command.')
}else
if(args[0] === 'fun'){
message.channel.send('**List Of Fun Commands**\n(Prefix: '+ config.funprefix + ')\n```ping\nsay\nembed\nroll\n8ball\nraffle\nachievement\ngoogle\nhug\nmotivate\npokemon\nuserinfo```\n\n:information_source: Type *+help ModuleName* to get a list of commands of that module.')
}else
if(args[0] === 'modules'){
message.channel.send('**List Of Pokemon Commands**\n(Prefix: ' + config.pokemonprefix + ')\n```\nadmin\nfun\n```\n:information_source: Type *!help ModuleName* to get a list of commands of that module.')
}else
if(args[0] === 'embed'){
message.channel.send("**Info**\nSends an embed message.\n\n**Usage**\n+embed ")
}else
if(args[0] === 'report'){
message.channel.send("**Info**\nReports something to the bot owner.\n\n**Usage**\n+report")
}else
if(args[0] === 'say') {
message.channel.send("\n**Info**\nSends a message that you want the bot to say.\n\n**Usage**\n+say Hi");
}else
if(args[0] === "setgame"){
message.channel.send("**Info**\nSets the game that the bot is playing.\n*Requires Bot Ownership*\n\n**Usage**\n+setgame nothing")
}else
if(args[0] === "setname"){
message.channel.send("**Info**\nSets the name of bot.\n*Requires Bot Ownership*\n\n**Usage**\n+setname PikaBot")
}else
if(args[0] === 'setstatus') {
message.channel.send("**Info**\nSets the status of bot.\n*Requires Bot Ownership*\n\n**Usage**\n+setstatus Idle *or* +setstatus Online");
}else
if(args[0] === "help"){
message.channel.send("**Info**\nSends info and commands of the bot. Or gives info on a specific command or module.\n\n**Usage**\n!help or !help say")
}else
if(args[0] === "roll"){
message.channel.send("**Info**\nRolls a random number between 1 and 100.\n\n**Usage**\n+roll")
}else
if(args[0] === 'raffle'){
message.channel.send("**Info**\nGives a random member from the server.\n\n**Usage**\n+raffle")
}else
if(args[0] === "ping"){
message.channel.send("**Info**\nResponds with pong and shows how much it taken.\n\n**Usage**\n+ping")
}else
if(args[0] === "pokemon"){
message.channel.send("**Info**\nSends a Random Pokemon gif.\n\n**Usage**\n+random");
}else
if(args[0] === "botinfo"){
message.channel.send("**Info**\nGives info about bot, invite link and bot's discord server.\n\n**Usage**\n$botinfo")
}else
if(args[0] === "roles"){
message.channel.send("**Info**\nGives a full list server roles.\n\n**Usage**\n$roles")
}else
if(args[0] === "serverinfo"){
message.channel.send("**Alias**\nsinfo\n\n**Info**\nGives info about the server.\n\n**Usage**\n$sinfo")
}else
if(args[0] === "channelinfo"){
message.channel.send("**Alias**\ncinfo\n\n**Info**\nGives info about the channel.\n\n**Usage**\n$cinfo")
}else
if(args[0] === "userinfo"){
message.channel.send("\n\n**Info**\nGives info about a user.\n\n**Usage**\n+userinfo")
}else
if(args[0] === "stats"){
message.channel.send("**Info**\nGives detailed info about the bot.\n\n**Usage**\n$stats")
}else
if(args[0] === "setavatar"){
message.channel.send("**Info**\nSets the avatar of the bot, you must give a direct link of image.\n*Requires Bot Ownership*\n\n**Usage**\n+setavatar default *or* +setavatar http://")
}else
if(args[0] === "motivate"){
message.channel.send("**Info**\nSends a motivational message.\n\n**Usage**\n$motivate")
}else
if(args[0] === "leave"){
message.channel.send("**Info**\nTells the bot to leave a server, you must specify name of server.\n*Requires Bot Ownership*\n\n**Usage**\n+leave servername")
}else
if(args[0] === "dice"){
message.channel.send("**Info**\nRolls a dice and sends the image you rolled between 1 & 6.\n\n**Usage**\n+dice")
}else
if(args[0] === "servers"){
message.channel.send("**Info**\nGives a list of servers the bot is in.\n\n**Usage**\n$servers")
}else
if(message.content !== config.modprefix + "help"){
message.channel.send("No such command found.");
  }


}