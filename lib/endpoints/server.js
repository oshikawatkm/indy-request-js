const { Endpoint } = require("../endpoint");

class Server extends Endpoint {

  async features({ query }) {
    let response = await this.axios.get('/feaures', { params: { query }});
    return {
      status: response.status,
      result: response.data
    };
  };

  async plugins() {
    let response = await this.axios.get('/plugins');
    return {
      status: response.status,
      result: response.data
    };
  };

  async shutdown() {
    let response = await this.axios.get('/shutdown');
    return {
      status: response.status,
      result: response.data
    };
  };

  async status() {
    let response = await this.axios.get('/status');
    return {
      status: response.status,
      result: response.data
    };
  };

  async statusConfig() {
    let response = await this.axios.get('/status/config');
    return {
      status: response.status,
      result: response.data
    };
  };

  async statusLive() {
    let response = await this.axios.get('/status/live');
    return {
      status: response.status,
      result: response.data
    }
  }

  async statusReady() {
    let response = await this.axios.get('/status/ready');
    return {
      status: response.status,
      result: response.data
    };
  };

  async statusReady() {
    let response = await this.axios.post('/status/reset');
    return {
      status: response.status,
      result: response.data
    };
  };
}

module.exports.Server = Server;