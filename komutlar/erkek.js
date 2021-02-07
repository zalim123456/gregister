
const Discord = require('discord.js');

const db = require('quick.db')

exports.run = async (client, message, args) => {

  let rol1 = "802930109451206716" /// alıncak rol id
  let rol2 = "802930590243356696" ///// erkek rol id
  let tag = "Ϯ"
  let kkanal = "802652126806802491"//kayıt kanalı id
  let yetkili = "802652126727372832" //Yekili rol ıd
  let isim = args[1]
  let yas = args[2];
  let kisi = message.mentions.members.first() || client.users.get(args[0]) || message.guild.members.get(args[0])
  
   if(!message.member.roles.has("802652126727372832")) return message.channel.send("Yetkin yok üzgünüm")
  if(message.channel.id !== kkanal) return message.channel.send("Bu Komudu Sadece Kayıt Kanalında Kullanabilirsin")
    if(!kisi) return message.channel.send("Kayıt ediceğiniz kişiyi etiketleyin")

  if (!isim) return message.reply('İsim girin ')

  if (!yas) return message.reply('Yaş girin')

  db.add(`kayıtsayı_${message.author.id}`, 1)

  message.channel.send("Başarı ile kayıt edildi.");

  kisi.setNickname(`${tag} ${isim} | ${yas}`)

  kisi.removeRole(message.guild.roles.get(rol1));

 kisi.addRole(message.guild.roles.get(rol2));


}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["e"],

  permLevel: 0

}

exports.help = {

  name: "erkek-kayıt",

  description: "Kayıt olmanızı sağlar.",

  usage: "kayıt-ol"

}