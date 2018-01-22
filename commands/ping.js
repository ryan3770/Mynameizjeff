exports.run = (client, message, args) => {

message.channel.send('Pong?').then(sent => {
    sent.edit(`:ping_pong:Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
});
}