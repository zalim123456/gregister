const Discord = require("discord.js");

const mapping = {
  " ": "   ",
   "0": "<a:sifir:805815067940880395>",
  "1": "<a:bir:805815061029322772>",
  "2": "<a:iki:805815067341619280>",
  "3": "<a:u_:805815067329298453>",
  "4": "<a:dort:805815066934247425>",
  "5": "<a:bes:805815067920695327>",
  "6": "<a:alti:805815067136098305>",
  "7": "<a:yedi:805815067655536650>",
  "8": "<a:sekiz:805815068351529012>",
  "9": "<a:dokuz:805815067416723467>",
  "!": "❕",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};
let tags = 'Ϯ'
"abcdefghijklmnopqr".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  
  let offlinesayi = message.guild.members.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '<a:sag:806128582023315457> **Çevrimdışı Kişi** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '<a:sag:806128582023315457> **Sunucudaki Kişi:** ' + 
    `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let online = message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size;;
  let offline2 =  '<a:sag:806128582023315457> **Çevrimiçi Kişi:** ' +
     `${online}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")

  let tagsayi = message.guild.members.filter(m => m.user.username.includes(tags)).size
    let tag = '<a:sag:806128582023315457> **Tagdaki :** ' +
      `${tagsayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
const embed = new Discord.RichEmbed()
.setTitle('<a:noseelmas:806124188434825236> Sunucu İstatistikleri')
.setColor('BLACK')
.setDescription('' + sunucu + '\n \n' + offline2 + '\n \n' + offline + '\n \n'+ tag)
.setFooter('')

  message.channel.send(embed)
  let onnl = `**Toplam Üye:** ${sunucu}\n**Aktif Üye:** ${offline2}\n**Tagdaki Üye:** ${tag}`
message.channel.setTopic(onnl)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};