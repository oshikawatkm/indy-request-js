const { Endpoint } = require("../endpoint");


class Introduction extends Endpoint {

  async receiveInvitation(conn_id, target_connection_id, { message }) {
    try {
      let response = await this.axios.post(`/connections/${conn_id}/start-introdction`, {
        target_connection_id,
        message
      });
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}


module.exports.Introduction = Introduction;