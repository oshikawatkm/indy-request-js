const { Endpoint } = require("../endpoint");

class Schema extends Endpoint {

  async create(body) {
    let response = await this.axios.post('/schemas', body);
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