const { Endpoint } = require("../endpoint");


class ActionMenu extends Endpoint {

  async close(conn_id) {
    try {
      let response = await this.axios.post(`/action-menu/${conn_id}/close`);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async fetch(conn_id) {
    try {
      let response = await this.axios.post(`/action-menu/${conn_id}/fetch`);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async perform(conn_id, { body }) {
    try {
      let response = await this.axios.post(`/action-menu/${conn_id}/perform`, body);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async request(conn_id) {
    try {
      let response = await this.axios.post(`/action-menu/${conn_id}/request`);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async sendMenu(conn_id, { body }) {
    try {
      let response = await this.axios.post(`/action-menu/${conn_id}/sendMenu`, body);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


}


module.exports.ActionMenu = ActionMenu;