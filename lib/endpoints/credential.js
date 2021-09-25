const { Endpoint } = require("../endpoint");

class Credential extends Endpoint {

  async getList({alias = '', initiator = '', invitation_key = '', my_did = '', state = '', their_did = '', their_role = ''}){
    try {
      this.axios = await  this.axios.get('/credential', {
        params: {
          alias,
          initiator,
          invitation_key,
          my_did,
          state,
          their_did,
          their_role
        }
      })
    } catch(err) {
      this.handleError(err);
    }
  }

  // @endpoint:  DELETE /credential/mime-types/{credential_id}
  // @param {String} credential_id [(*required) Connection identifier]
  async mimeTypes(credential_id) {
    try {
      let response = await this.axios.get(`/credential/mime-types/${credential_id}`);
      return {
        status: response.status,
        result: response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  // @endpoint:  DELETE /credential/revoked/{credential_id}
  // @param {String} credential_id [(*required) Connection identifier]
  // @param {String} from [Earliest epoch of revocation status interval of interest]
  // @param {String} from [Latest epoch of revocation status interval of interest]
  async revoked(credential_id, { from, to }) {
    try {
      let response = await this.axios.get(`/credential/revoked/${credential_id}`, {
        params: {
          from,
          to
        }
      });
      return {
        status: response.status,
        result: response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  // @endpoint:  GET /credential/w3c/{credential_id}
  // @param {String} credential_id [(*required) Connection identifier]
  async mimeTypes(credential_id) {
    try {
      let response = await this.axios.get(`/credential/w3c/${credential_id}`);
      return {
        status: response.status,
        result: response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  // @endpoint:  DELETE /credential/w3c/{credential_id}
  // @param {String} credential_id [(*required) Connection identifier]
  async mimeTypes(credential_id) {
    try {
      let response = await this.axios.delete(`/credential/w3c/${credential_id}`);
      return {
        status: response.status,
        result: response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  // @endpoint:  GET /credential/{credential_id}
  // @param {String} credential_id [(*required) Connection identifier]
  async mimeTypes(credential_id) {
    let response = await this.axios.get(`/credential/${credential_id}`);
    return {
      status: response.status,
      result: response.data
    }
  }


  // @endpoint:  DELETE /credential/{credential_id}
  // @param {String} credential_id [(*required) Connection identifier]
  async deleteOne(credential_id) {
    try {
      let response = await this.axios.delete(`/credential/${credential_id}`);
      return {
        status: response.status,
        result: response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  // @endpoint:  GET /credential/{credential_id}
  // @param {String} count [Maximum number to retrieve]
  // @param {String} start [Start index]
  // @param {String} wql   [(JSON) WQL query]
  async getList({ count, start, wql }){
    try { 
      let response = await this.axios.get('/credentials', {
        params: {
          count, 
          start, 
          wql 
        }
      })
      return {
        status:   response.status,
        results:  response.data.results
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  // @endpoint:  POST/credential/w3c
  // @body 
  // @param {String} count [Maximum number to retrieve]
  // @param {String} start [Start index]
  // @param {String} wql   [(JSON) WQL query]
  async w3c({ body, count, start, wql }){
    try {
      let response = await this.axios.post('/credentials/w3c', {
        params: {
          body, 
          count,
          start,
          wql 
        }
      })
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

}

module.exports.Credential = Credential;