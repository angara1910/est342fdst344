const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {



    let user = message.mentions.members.first() 

    let member = db.fetch(`para_${message.author.id}`)


    if (!user) {
        return message.channel.send('you forgot to mention somebody.')
    }
    if (!args[1]) {
        return message.channel.send('Please specify an amount.')
    }
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Negative money can not be paid.')
    }

    if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }

    message.channel.send(`${message.author.tag}, You successfully paid ${user.user.username} ${args[1]}$.`)
    db.add(`para_${user.id}`, args[1])
    db.subtract(`para_${message.author.id}`, args[1])




}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'transfer',
  description: 'kralol',
  usage: 'kralol'
};