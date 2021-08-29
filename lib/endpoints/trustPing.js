const { Endpoint } = require("../endpoint");

class TrustPing extends Endpoint {

  async sendPing(conn_id, { comment }) {
    let response = await this.axios.post(`/connections/${conn_id}/send-ping`, {
      comment
    })
    return {
      status:   response.status,
      results:  response.data
    }
  }

}

module.exports.TrustPing = TrustPing;