const { parseRange, parseCache } = require('../lib/parser')

module.exports = {
  request: {
    priceRange: {
      params: {
        ServiceCode: 'AmazonApiGateway',
        Filters: {
          location: 'Asia Pacific (Tokyo)',
          operation: 'ApiGatewayRequest'
        }
      },
      parse: priceList => parseRange(priceList[0])
    }
  },
  cache: {
    params: {
      ServiceCode: 'AmazonApiGateway',
      Filters: {
        location: 'Asia Pacific (Tokyo)',
        operation: 'RunInstances'
      }
    },
    parse: priceList => parseCache(priceList)
  }
}