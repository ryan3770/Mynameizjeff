exports.run = (client, message, args) => {
const config = require('../config.json');
let sigh = message.content.split(" ").slice(1);
let psymsg = sigh.join(" ");
message.channel.send('Reported!');
client.users.get(config.botownerid).send(`${message.author.tag} from ${message.guild.name} have reported: ` + psymsg);
}
