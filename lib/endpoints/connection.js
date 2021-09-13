const { Endpoint } = require("../endpoint");

class Connection extends Endpoint {

  // @endpoint:  GET /connections
  async getList({ alias, connection_protocol, invitation_key, my_did, state, their_did, their_role}){
    let response = await this.axios.get('/connections', {
      params: {
        alias,
        connection_protocol,
        invitation_key,
        my_did,
        state,
        their_did,
        their_role
      }
    })
    return {
      status:   response.status,
      results:  response.data.results
    }
  }


  async createInvitation(body) {
    let response = await this.axios.post('/connections/create-invitation', body)
    return {
      status: response.status,
      result: response.data
    }
  }


  async createStatic({ alias, my_did, my_seed, their_did, their_endpoint, their_label, their_seed, their_verkey}) {
    let response = await this.axios.post('/connections/create-static', { 
      alias, 
      my_did, 
      my_seed, 
      their_did, 
      their_endpoint, 
      their_label, 
      their_seed, 
      their_verkey
    })
    return {
      status: response.status,
      result: response.data
    }
  }


  async receiveInvitation({ alias, auto_accept, mediation_id }, body) {
    let response = await this.axios.post('/connections/receive-invitation', body, {params: {
      alias, 
      auto_accept, 
      mediation_id
    }})
    return {
      status: response.status,
      result: response.data
    }
  }

  // @endpoint:  GET /connections/{conn_id}
  // @param {String} conn_id [(*required) Connection identifier]
  async getOne(conn_id) {
    let response = await this.axios.get(`/connections/${conn_id}`)
    return {
      status: response.status,
      result: response.data
    }
  }

  // @endpoint:  DELETE /connections/{conn_id}
  // @param {String} conn_id [(*required) Connection identifier]
  async deleteOne(conn_id) {
    let response = await this.axios.delete(`/connections/${conn_id}`)
    return {
      status: response.status,
      result: response.data
    }
  }
  
  // @endpoint:  POST /connections/{conn_id}/accept-invitation
  // @param {String} conn_id [(*required) Connection identifier]
  // @param {String} my_endpoint [My URL endpoint]
  async acceptInvitation(conn_id, { my_endpoint }) {
    let response = await this.axios.post(`/connections/${conn_id}/accept-request`, {
      my_endpoint
    })
    return {
      status: response.status,
      result: response.data
    }
  }

  // @endpoint:  GET /connections/{conn_id}/accept-request
  // @param {String} conn_id [(*required) Connection identifier]
  // @param {String} ref_id  [(*required) Inbound connection identifier]
  async acceptRequest(conn_id, ref_id) {
    let response = await this.axios.post(`/connections/${conn_id}/establish-inbound/${ref_id}`)
    return {
      status: response.status,
      result: response.data
    }
  }


  // @endpoint:  GET /connections/{conn_id}/metadata
  // @param {String} conn_id [(*required) Connection identifier]
  // @param {String} key  [Key to retrieve.]
  async getMetadata(conn_id, { key }) {
    let response = await this.axios.get(`/connections/${conn_id}/metadata`, {
      params: {
        key
      }
    })
    return {
      status: response.status,
      result: response.data
    }
  }

  // @endpoint:  POST /connections/{conn_id}/metadata
  // @param {String} conn_id [(*required) Connection identifier]
  // @param {String} metadata []
  async postMetadata(conn_id, { metadata }) {
    let response = await this.axios.post(`/connections/${conn_id}/metadata`, {
      metadata
    })
    return {
      status: response.status,
      result: response.data
    }
  }

}

module.exports.Connection = Connection;