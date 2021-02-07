const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Yeterli Yetkin Yok :x:')
  if(!args[0]) return message.reply("Ne Kadar Mesaj Silicem ?");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**${args[0]}** Adet Mesaj Uzaya Fırlatıldı 🚀.`)
  });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temizle'],
  permLevel: 0,
};

exports.help = {
  name: 'sil',
  description: 'Mesaj siler',
  usage: 'sil <miktar>',
} ////////