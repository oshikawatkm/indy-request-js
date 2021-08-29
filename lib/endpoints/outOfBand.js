const { Endpoint } = require("../endpoint");

class OutOfBand extends Endpoint {

  async createInvitation(body) {
    let response = await this.axios.post('/out-of-band/create-invitation', body);
    return {
      status:   response.status,
      results:  response.data
    }
  }
  
  async receiveInvitation(body) {
    let response = await this.axios.post('/out-of-band/receive-invitation', body);
    return {
      status:   response.status,
      results:  response.data
    }
  }

}

module.exports.OutOfBand = OutOfBand;