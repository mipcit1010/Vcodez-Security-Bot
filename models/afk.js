/**
 *  ๐ Axontic Beta โ Vcodez Development ๐งช
 * ๐จ @Masterious#2218 ยฆ @lostfaye แ#1268 ยฆ @aledlb8#1196 ๐
 *  ๐ Unauthorized Duplication is Prohibited ๐ฅ
 */

const mongoose = require('mongoose');
let Schema = new mongoose.Schema({
  Guild: String,
  Member: String,
  Content: String,
  TimeAgo: String
})
module.exports = mongoose.model('afk', Schema)