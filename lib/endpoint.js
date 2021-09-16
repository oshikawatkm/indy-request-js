const axiosBase = require('axios');

class Endpoint {

  constructor(agent) {
    this.method = agent.method;
    this.host = agent.host;
    this.port = agent.port;

    this.axios = this.setAxios();
  }

  // private
  setAxios() {
    let address = this.host;
    if (this.port) {
      address = address + ":" + this.port
    }
    return axiosBase.create({
      baseURL: `${this.method}://${address}`,
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });
  }

}

module.exports.Endpoint = Endpoint;