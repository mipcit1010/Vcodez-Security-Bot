/**
 *  ๐ Axontic Beta โ Vcodez Development ๐งช
 * ๐จ @Masterious#2218 ยฆ @lostfaye แ#1268 ยฆ @aledlb8#1196 ๐
 *  ๐ Unauthorized Duplication is Prohibited ๐ฅ
 */

const { Schema, model } = require('mongoose');
const newModel = new Schema({
  Guild: String,
  Prefix: String,
})
module.exports = model('prefix', newModel)