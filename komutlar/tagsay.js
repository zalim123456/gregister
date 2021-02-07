const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

   
  let tag = "Ϯ"//Tag
    const tagsay = new Discord.RichEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(`Tagımızıda Baya Üye Varmış :)`)
        .addField("Tagdaki üye sayısı", message.guild.members.filter(m => m.user.username.includes(tag)).size)
    message.channel.send(tagsay);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tag-say'],
    permLevel: 0
};

exports.help = {
    name: 'tagsay',
    
};