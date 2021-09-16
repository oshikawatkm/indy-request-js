const { Endpoint } = require("../endpoint");


class CredentialDefinition extends Endpoint {

  async create(body) {
    let response = await this.axios.post(`/credential-definitions`, body);
    return {
      status:   response.status,
      result:  response.data
    }
  }

  async created({ cred_def_id, issuer_did, schema_id, schema_issuer_did, schema_name, schema_version}) {
    let response = await this.axios.get('/credential-definitions/created', {
      params: {
        cred_def_id, 
        issuer_did, 
        schema_id,
        schema_issuer_did,
        schema_name,
        schema_version
      }
    });
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async getOne(cred_def_id) {
    let response = await this.axios.get(`/credential-definitions/${cred_def_id}`);
    return {
      status:   response.status,
      result:  response.data
    }
  }

}


module.exports.CredentialDefinition = CredentialDefinition;