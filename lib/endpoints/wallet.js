const { Endpoint } = require("../endpoint");

class Wallet extends Endpoint {

  // @endpoint:  GET /wallet/did
  // @param {String} did [DID of interest]
  // @param {String} key_type [Key type to query for.]
  // @param {String} method [DID method to query for. e.g. sov to only fetch indy/sov DIDs]
  // @param {String} posture [Whether DID is current public DID, posted to ledger but current public DID, or local to the wallet]
  // @param {String} verkey [Verification key of interest]
  async did({ did, key_type, method, posture, verkey }) {
    let response = await this.axios.get('/wallet/did', {
      params: {
        did, 
        key_type, 
        method, 
        posture, 
        verkey 
      }
    })
    return {
      status: response.status,
      results: response.data.results
    }
  }

  // @endpoint:  GET /wallet/did
  // @body {String} did [DID of interest]
  // @body {String} key_type [Key type to query for.]
  async didCreate(body) {
    if (!this.validateDidBody(body)) {
      throw new Error('Invalid request Body.');
    }
    let response = await this.axios.post('/wallet/did/create', body);
    return {
      status: response.status,
      result: response.data
    }
  }


  // @endpoint:  PATCH /wallet/did/local/rotate-keypair
  // @body {String} did [DID of interest]
  async didLocalRotateKeypair(did) {
    let response = await this.axios.patch('/wallet/did/local/rotate-keypair', {
      did
    })
    return {
      status: response.status,
      result: response.data
    }
  }


  // @endpoint:  GET /wallet/did/public
  async didPublic() {
    let response = await this.axios.get('/wallet/did/public')
    return {
      status: response.status,
      result: response.data
    }
  }


  // @endpoint:  POST /wallet/did/public
  async postDidPublic(did) {
    let response = await this.axios.post('/wallet/did/public', { did })
    return {
      status: response.status,
      result: response.data
    }
  }


  // @endpoint:  GET /wallet/get-did-endpoint
  // @param {String} did [DID of interest]
  async getDidEndpoint(did) {
    let response = await this.axios.get('/wallet/get-did-endpoint', {
      did
    })
    return {
      status: response.status,
      result: response.data
    }
  }


  // @endpoint:  POST /wallet/set-did-endpoint
  async setDidEndpoint(body) {
    let response = await this.axios.get('/wallet/get-did-endpoint', body)
    return {
      status: response.status,
      result: response.data
    }
  }


  // private

  validateDidBody(requestBody){
    if (requestBody.method !== "sov") {
      return false;
    }
    if (requestBody.options.key_type = "ed25519" || "bls12381g2") {
      return true;
    }
  }

}

module.exports.Wallet = Wallet;

