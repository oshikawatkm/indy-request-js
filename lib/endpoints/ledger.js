const { Endpoint } = require("../endpoint");


class Ledger extends Endpoint {

  async registerNym(did, verkey, { alias, role }) {
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
  }
  
  async rotatePublicDidKeypair() {
    let response = await this.axios.patch('/ledger/rotate-public-did-keypair');
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async didVerkey(did) {
    let response = await this.axios.get('/ledger/did-verkey', { did });
    return {
      status:   response.status,
      results:  response.data
    }
  }

  
  async didEndpoint(did, { endpoint_type }) {
    let response = await this.axios.get('/ledger/did-endpoint', { did, endpoint_type });
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async taa() {
    let response = await this.axios.get('/ledger/taa');
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async taaAccept(body) {
    let response = await this.axios.post('/ledger/taa/accept', { body });
    return {
      status:   response.status,
      results:  response.data
    }
  }

}


module.exports.Ledger = Ledger;