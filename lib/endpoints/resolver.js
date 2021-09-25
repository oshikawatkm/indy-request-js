const { Endpoint } = require("../endpoint");

class Resolver extends Endpoint {

  async resolve(did) {
    try {
      let response = await this.axios.get(`/resolver/resolve/${did}`)
      return {
        status: response.status,
        result: response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}

module.exports.Resolver = Resolver;