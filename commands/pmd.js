exports.run = (client, message, args) => {

let pmdicon = message.content.split(' ').slice(1);
message.channel.send({file: `http://www.pokestadium.com/assets/img/sprites/misc/pmd2/${pmdicon}.png`});
}