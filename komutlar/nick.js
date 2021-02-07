const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`Yetkin Yetmiyor.`)
 let isim = args[1]
  let yas = args[2];
let kisi = message.mentions.users.first();
 let tag = "Ϯ" //tagınız
 
if(!kisi) return message.channel.send(
"Bir kullanıcı etiketle")
 
if(!isim) return message.channel.send(
"Bir İsim Girmelisin");
 
 
message.guild.members.get(kisi.id).setNickname(`${tag} ${isim} | ${yas}`)
message.channel.send(`İsim başarıyla değiştirildi.`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
 
exports.help = {
    name: 'nick',
    
}