const { Endpoint } = require("../endpoint");

class JsonId extends Endpoint {

  async sign(body) {
    let response = this.axios.post(`/jsonId/sign`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async verify(body) {
    let response = this.axios.post(`/jsonId/verify`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }

}

module.exports.JsonId = JsonId;