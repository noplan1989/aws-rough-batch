const updatePrice = require('./updatePrice')
const { invalidate } = require('../../lib/cloudfront')
const { sendWarning } = require('../../lib/slack')
const CF_DIST_ID = process.env.CF_DIST_ID

exports.main = async (event, context, callback) => {
  try {
    await updatePrice()
    await invalidate(CF_DIST_ID, ['/json/fx.json'])

    callback(null, 'success')
  } catch (err) {
    await sendWarning(err)
    callback(err)
  }
}
