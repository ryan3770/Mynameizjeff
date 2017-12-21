exports.run = (client, message, args) => {
const config = require('../config.json');
if(message.author.id !== config.botownerid) return message.reply('you are not my owner!!!');
let doit = message.content.split(" ").slice(1);
let pikapi = doit.join(" ");
message.reply('New Name Set!');
client.user.setUsername(pikapi);
}
