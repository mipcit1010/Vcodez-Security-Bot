/**
 *  ๐ Axontic Beta โ Vcodez Development ๐งช
 * ๐จ @Masterious#2218 ยฆ @lostfaye แ#1268 ๐
 * ๐ Unauthorized Duplication is Prohibited ๐ฅ
 */


const { MessageButton, Discord, MessageEmbed, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector } = require('discord.js');
const warns = require("../../models/warns")
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const db = require('quick.db')
const fetch = require("node-fetch");

module.exports = {
    name: 'resetwarns',
    aliases: ['removeallpunishments', 'removeallwarns'],
    category: "๐ก๏ธ Moderation",
    run: async (client, message, args) => {
      if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`${client.emojino} **You cant use this!**`);
      
      let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")    
      
      const user = message.mentions.users.first();
      const nouser = new MessageEmbed()
      .setColor(ee.wrongcolor)
      .setThumbnail(es.thumb ? es.footericon : null)
      .setFooter(es.footertext, es.footericon)
      .setTitle(`${client.emojino} Please add a Member you want to reset their warns!`)
      .setDescription(`Usage: \`${client.config.prefix}resetwarns @User\``)

      const nowarns = new MessageEmbed()
      .setColor(ee.wrongcolor)
      .setThumbnail(es.thumb ? es.footericon : null)
      .setFooter(es.footertext, es.footericon)
      .setTitle(`${client.emojino} \`${user.tag}\` has __no__ warnings!`)
      
      if (!user) return message.reply({ embeds: [nouser] });
        
      let params = { Guild: message.guild.id, User: user.id }
      warns.findOne(params, async(err, data) => {
        if(!data) return message.reply({ embeds: [nowarns] })

        data.delete()

        const banmessage = new MessageEmbed()
      .setColor(ee.color)
      .setFooter(es.footertext, es.footericon)
      .setThumbnail(user.displayAvatarURL()) 
      .setTitle(`${client.emojiyes} Reset all warnings of: \`${user.tag}\`!`)
        
      message.reply({ embeds: [banmessage] });
      })
    }
}

/**
 *  ๐ Axontic Beta โ Vcodez Development ๐งช
 * ๐จ @lostfaye แ#1268 ยฆ @aledlb8#1196 ๐
 *  ๐ Unauthorized Duplication is Prohibited ๐ฅ
 */