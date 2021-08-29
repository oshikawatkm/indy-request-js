const { Endpoint } = require("../endpoint");

class BasicMessage extends Endpoint {

  async sendMessage(conn_id, content) {
    let response = await this.axios.post(`/connections/${conn_id}/send-message`, { 
     content
    })
    return {
      status: response.status,
      result: response.data
    }
  }

    // private

}

module.exports.BasicMessage = BasicMessage;