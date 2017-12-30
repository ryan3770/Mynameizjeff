exports.run = (client, message, args) => {

var shiny = Math.floor(Math.random() * 16);
if(shiny == 1) {
shiny='xy-animated-shiny'
}else {
shiny='xy-animated'
}
let party = Math.floor(Math.random() * 719);
message.channel.send({file: `https://pldh.net/media/pokemon/gen6/${shiny}/${party}.gif`});
}