const { Endpoint } = require("../endpoint");


class ActionMenu extends Endpoint {

  async close(conn_id) {
    let response = await this.axios.post(`/action-menu/${conn_id}/close`);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async fetch(conn_id) {
    let response = await this.axios.post(`/action-menu/${conn_id}/fetch`);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async perform(conn_id, { body }) {
    let response = await this.axios.post(`/action-menu/${conn_id}/perform`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async request(conn_id) {
    let response = await this.axios.post(`/action-menu/${conn_id}/request`);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async sendMenu(conn_id, { body }) {
    let response = await this.axios.post(`/action-menu/${conn_id}/sendMenu`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }


}


module.exports.ActionMenu = ActionMenu;