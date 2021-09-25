const { Endpoint } = require("../endpoint");


class Ledger extends Endpoint {

  async registerNym(did, verkey, { alias, role }) {
    try {
      let response = await this.axios.post('/ledger/register-nym', {
        did,
        verkey,
        alias,
        role
      });
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }
  
  async rotatePublicDidKeypair() {
    try {
      let response = await this.axios.patch('/ledger/rotate-public-did-keypair');
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async didVerkey(did) {
    try {
      let response = await this.axios.get('/ledger/did-verkey', { did });
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  
  async didEndpoint(did, { endpoint_type }) {
    try {
      let response = await this.axios.get('/ledger/did-endpoint', { did, endpoint_type });
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async taa() {
    try {
      let response = await this.axios.get('/ledger/taa');
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async taaAccept(body) {
    try {
      let response = await this.axios.post('/ledger/taa/accept', { body });
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}


module.exports.Ledger = Ledger;