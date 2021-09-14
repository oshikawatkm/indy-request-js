const { Endpoint } = require("../endpoint");


class CredentialDefinition extends Endpoint {

  async create(body) {
    let response = await this.axios.post(`/credential-definitions`, body);
    return {
      status:   response.status,
      result:  response.data
    }
  }

  async created(body) {
    let response = this.axios.get('/credential-definitions/created');
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async getOne(cred_def_id) {
    let response = this.axios.get(`/credential-definitions/${cred_def_id}`);
    return {
      status:   response.status,
      result:  response.data
    }
  }

}


module.exports.CredentialDefinition = CredentialDefinition;