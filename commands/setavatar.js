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
