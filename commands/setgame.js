exports.run = (client, message, args) => {
const config = require('../config.json');
let game = message.content.split(' ').slice(1)
let playing = game.join(' ')
if(message.author.id === config.botownerid){
message.reply("New Game Set");
client.user.setGame(playing)
}else {
message.reply("I only follows my master's command.")
}
  
}
