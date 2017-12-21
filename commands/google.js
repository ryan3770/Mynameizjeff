exports.run = (client, message, args) => {

message.channel.send(`http://www.google.co.in/search?hl=en&ie=ISO-8859-1&q=${message.content.split(' ').slice(1).join(' ').replace(/ /g, '+')}`)
}
