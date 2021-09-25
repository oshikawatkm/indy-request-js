const { Endpoint } = require("../endpoint");


class CredentialDefinition extends Endpoint {

  async create(body) {
    try {
      let response = await this.axios.post(`/credential-definitions`, body);
      return {
        status:   response.status,
        result:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async created({ cred_def_id, issuer_did, schema_id, schema_issuer_did, schema_name, schema_version}) {
    try {
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
    } catch(err) {
      this.handleError(err);
    }
  }

  async getOne(cred_def_id) {
    try {
      let response = await this.axios.get(`/credential-definitions/${cred_def_id}`);
      return {
        status:   response.status,
        result:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}


module.exports.CredentialDefinition = CredentialDefinition;