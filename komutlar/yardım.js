const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Yardım Menüsü`)
.setDescription(`
• ${prefix}erkek: Erkek kayıt
• ${prefix}kız: Kız Kayıt
• ${prefix}nick: İsim Değiştirir
• ${prefix}kayıt-say: Kayıt Sayar
• ${prefix}kayıt-iptal: Kaydı iptal Eder
• ${prefix}say: Say Komutu
• ${prefix}tag-say: Taglı Üye 
• ${prefix}sil: Mesaj siler

`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
)

//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
}