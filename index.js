require('dotenv').config();
const token = process.env.TOKEN;
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    if (message.content == 'TestMessage1') {
        message.channel.send(`You just wrote ${message.content}. I am a bot.`);
        message.channel.send(message);
        console.log(`${message.author.username} wrote: ${message.content}`);
    }
})

client.login(token);