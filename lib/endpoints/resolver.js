const { Endpoint } = require("../endpoint");

class Resolver extends Endpoint {

  async resolve(did) {
    let response = await this.axios.get(`/resolver/resolve/${did}`)
    return {
      status: response.status,
      result: response.data
    }
  }

}

module.exports.Resolver = Resolver;