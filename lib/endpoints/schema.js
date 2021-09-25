const { Endpoint } = require("../endpoint");

class Schema extends Endpoint {

  async create({ conn_id, create_transaction_for_endorser }, body) {
    try {
      let response = await this.axios.post('/schemas', body, { params: { conn_id, create_transaction_for_endorser }});
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async created({ schema_id, schema_issuer_did, schema_name, schema_version }) {
    try {
      let response = await this.axios.get('/schemas/created', {
        params: {
          schema_id, 
          schema_issuer_did, 
          schema_name, 
          schema_version
        }
      });
      return {
        status:   response.status,
        result:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async getOne(schema_id) {
    try {
      let response = await this.axios.get(`/schemas/${schema_id}`);
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}

module.exports.Schema = Schema;