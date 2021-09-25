const { Endpoint } = require("../endpoint");

class TrustPing extends Endpoint {

  async sendPing(conn_id, { comment }) {
    try {
      let response = await this.axios.post(`/connections/${conn_id}/send-ping`, {
        comment
      })
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}

module.exports.TrustPing = TrustPing;