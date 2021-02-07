
const Discord = require('discord.js');

const db = require('quick.db')

exports.run = async (client, message, args) => {

  let rol1 = "802930590243356696" /// alıncak rol id
  let alrol = "802930120893136906"
  let unreg = "802930109451206716"
  let kisi = message.mentions.members.first() || client.users.get(args[0]) || message.guild.members.get(args[0])
  
   if(!message.member.roles.has("802652126727372832")) return message.channel.send("Yetkin yok üzgünüm")
 
    if(!kisi) return message.channel.send("Kaydını İptal Ediceğiniz kişiyi etiketleyin")


  db.add(`kayıtsayı_${message.author.id}`, 1)

  message.channel.send("Başarı ile Kaydı İptal Edildi.");

  

  kisi.removeRole(message.guild.roles.get(rol1));
kisi.removeRole(message.guild.roles.get(alrol));
  
  kisi.addRole(message.guild.roles.get(unreg));
   


}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["kayıt-iptal"],

  permLevel: 0

}

exports.help = {

  name: "kayıtiptal",

  description: "Kayıt olmanızı sağlar.",

  usage: "kayıt-ol"

}