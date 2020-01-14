const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
	


	let chanel = message.mentions.channels.first()
	if(!chanel) return message.reply("Lütfen güvenlik mesajlarının gideceği kanalı etiketle")

		db.set(`güvenlik_${message.guild.id}`, chanel.id)
	 const basari = new Discord.RichEmbed()
	.setDescription(`Güvenlik kanalı başarıyla <${chanel}> olarak ayarlandı`)
	return message.channel.send(basari)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 4
};

exports.help = {
	name: "güvenlik"
}