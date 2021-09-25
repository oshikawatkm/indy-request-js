const { Endpoint } = require("../endpoint");

class OutOfBand extends Endpoint {

  async createInvitation(body) {
    try {
      let response = await this.axios.post('/out-of-band/create-invitation', body);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }
  
  async receiveInvitation(body) {
    try {
      let response = await this.axios.post('/out-of-band/receive-invitation', body);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}

module.exports.OutOfBand = OutOfBand;