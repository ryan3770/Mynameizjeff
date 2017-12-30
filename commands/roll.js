exports.run = (client, message, args) => {
message.react('🎲');
message.reply('You rolled :game_die:' + Math.floor(Math.random() * 100));
}