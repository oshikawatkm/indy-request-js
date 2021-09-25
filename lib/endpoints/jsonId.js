const { Endpoint } = require("../endpoint");

class JsonId extends Endpoint {

  async sign(body) {
    try {
      let response = await this.axios.post(`/jsonId/sign`, body);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async verify(body) {
    try {
      let response = await this.axios.post(`/jsonId/verify`, body);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}

module.exports.JsonId = JsonId;