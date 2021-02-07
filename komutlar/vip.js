
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

 
  let rol2 = "802930152627109928" ///// Vip Rol


  let kisi = message.mentions.members.first() || client.users.get(args[0]) || message.guild.members.get(args[0])
  
   if(!message.member.roles.has("802652126727372832")) return message.channel.send("Yetkin yok üzgünüm")
    if(!kisi) return message.channel.send("Vip Rol verilecek kişiyi etiketleyin")

  
  db.add(`kayıtsayı_${message.author.id}`, 1)

  message.channel.send("Başarı ile Vip Rolü Verildi.");

 kisi.addRole(message.guild.roles.get(rol2));


}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["vip-ver"],

  permLevel: 0

}

exports.help = {

  name: "vip",

  description: "Vip olmanızı sağlar.",

  usage: "Vip xd"

}