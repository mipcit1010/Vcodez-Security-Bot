const {
  MessageEmbed
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  duration
} = require(`${process.cwd()}/handlers/functions`)
const moment = require("moment")
module.exports = {
  name: "uptime",
  category: "๐ฐ Info",
  aliases: [""],
  usage: "uptime",
  description: "Returns the duration on how long the Bot is online",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix) => {
    let es = client.settings.get(message.guild.id, "embed");
    let ls = client.settings.get(message.guild.id, "language")
    let date = new Date()
    let timestamp = date.getTime() - Math.floor(client.uptime);
    message.reply({embeds: [new MessageEmbed()
      .setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
      .setFooter(es.footertext, es.footericon)
      .setTitle(eval(client.la[ls]["cmds"]["info"]["uptime"]["variable1"]))
      .setDescription(eval(client.la[ls]["cmds"]["info"]["uptime"]["variable2"]))
      .addField(eval(client.la[ls]["cmds"]["info"]["uptime"]["variablex_3"]), eval(client.la[ls]["cmds"]["info"]["uptime"]["variable3"])
      )]}
    );
  }
}
/**
 *  ๐ Axontic Beta โ Vcodez Development ๐งช
 * ๐จ @Masterious#2218 ยฆ @lostfaye แ#1268 ยฆ @aledlb8#1196 ๐
 *  ๐ Unauthorized Duplication is Prohibited ๐ฅ
 */