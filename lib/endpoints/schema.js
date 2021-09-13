const { Endpoint } = require("../endpoint");

class Schema extends Endpoint {

  async create({ conn_id, create_transaction_for_endorser }, body) {
    let response = await this.axios.post('/schemas', body, { params: { conn_id, create_transaction_for_endorser }});
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async created({ schema_id, schema_issuer_did, schema_name, schema_version }) {
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
      results:  response.data
    }
  }

  async getOne(schema_id) {
    let response = await this.axios.get(`/schemas/${schema_id}`);
    return {
      status:   response.status,
      results:  response.data
    }
  }

}

module.exports.Schema = Schema;