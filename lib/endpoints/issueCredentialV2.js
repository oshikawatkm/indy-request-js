const { Endpoint } = require("../endpoint");

class IssueCredentialV2 extends Endpoint {

  // @endpoint: /issue-credential/records
  // @param {String} connection_id [Connection identifier]
  // @param {String} role [Role assigned in credential exchange]
  // @param {String} state [Available values : proposal_sent, proposal_received, offer_sent, offer_received, request_sent, request_received, credential_issued, credential_received, credential_acked]
  // @param {String} thread_id [Thread identifier]
  async records({connection_id, role, state, thread_id}){
    let response = await this.axios.get('/issue-credential-2.0/records', {
      params: {
        connection_id,
        role,
        state,
        thread_id
      }
    })
    return {
      status:   response.status,
      results:  response.data.results
    }
  }

  // @endpoint: GET /issue-credential/records/{cred_ex_id}
  // @param {String} cred_ex_id [Credential exchange identifier]
  async record(cred_ex_id) {
    let response = await this.axios.get(`/issue-credential-2.0/records/${cred_ex_id}`);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  // @endpoint: POST /issue-credential/create
  async create(body) {
    let response = await this.axios.post('/issue-credential-2.0/create', body)
  
    return {
      status:   response.status,
      results:  response.data
    }
  }

  // @endpoint: POST /issue-credential/create-offer
  async create(body) {
    let response = await this.axios.post('/issue-credential-2.0/create-offer', body)
  
    return {
      status:   response.status,
      results:  response.data
    }
  }

  // @endpoint: POST /issue-credential/send
  async send(body) {
    let response = await this.axios.post('/issue-credential-2.0/send', body)
    return {
      status:   response.status,
      results:  response.data
    }
  }


  // @endpoint: POST /issue-credential/send-proposal
  async sendProposal(body) {
    let response = await this.axios.post('/issue-credential-2.0/create-proposal', body)
    return {
      status:   response.status,
      results:  response.data
    }
  }
  

  // @endpoint: POST /issue-credential/send-offer
  async sendOffer(body) {
    let response = await this.axios.post('/issue-credential-2.0/create-offer', body)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  // @endpoint: POST /issue-credential/records/{cred_ex_id}/send-offer
  // @param {String} cred_ex_id [Credential exchange identifier]
  async recordsSendOffer(cred_ex_id, body) {
    let response = await this.axios.post(`/issue-credential-2.0/records/${cred_ex_id}/send-offer`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  // @endpoint: POST /issue-credential/records/{cred_ex_id}/send-request
  // @param {String} cred_ex_id [Credential exchange identifier]
  async recordsSendRequest(cred_ex_id, body) {
    let response = await this.axios.post(`/issue-credential-2.0/records/${cred_ex_id}/send-request`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }


  // @endpoint: POST /issue-credential/records/{cred_ex_id}/issue
  // @param {String} cred_ex_id [Credential exchange identifier]
  async recordsIssue(cred_ex_id, body) {
    let response = await this.axios.post(`/issue-credential-2.0/records/${cred_ex_id}/issue`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }


  // @endpoint: POST /issue-credential/records/{cred_ex_id}/store
  // @param {String} cred_ex_id [Credential exchange identifier]
  async recordsStore(cred_ex_id, body) {
    let response = await this.axios.post(`/issue-credential-2.0/records/${cred_ex_id}/store`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }


  // @endpoint: POST /issue-credential/revoke
  // @param {String} cred_ex_id [Credential exchange identifier]
  // @param {String} rev_reg_id [Revocation registry identifier]
  // @param {Boolean} publish [(True) publish revocation to ledger immediately, or (False) mark it pending (default value)]
  async revoke(cred_ex_id, rev_reg_id, { publish }) {
    let response = await this.axios.post(`/issue-credential-2.0/records/${cred_ex_id}/store`, {
      rev_reg_id,
      publish
    });
    return {
      status:   response.status,
      results:  response.data
    }
  }

  
  // @endpoint: POST /issue-credential/publish-revocations
  async publishRevocations(body) {
    let response = await this.axios.post(`/issue-credential-2.0/publish-revocations`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  // @endpoint: POST /issue-credential/clear-pending-revocations
  async publishRevocations(body) {
    let response = await this.axios.post(`/issue-credential-2.0/clear-pending-revocations`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  // @endpoint: POST /issue-credential/records/{cred_ex_id}/remove
  // @param {String} cred_ex_id [Credential exchange identifier]
  async publishRevocations(cred_ex_id) {
    let response = await this.axios.post(`/issue-credential-2.0/recoeds/${cred_ex_id}/remove`);
    return {
      status:   response.status,
      results:  response.data
    }
  }


  // @endpoint: POST /issue-credential/records/{cred_ex_id}/problem-report
  // @param {String} cred_ex_id [Credential exchange identifier]
  async recordsProblemReport(cred_ex_id, body) {
    let response = await this.axios.post(`/issue-credential-2.0/recoeds/${cred_ex_id}/problem-report`, body);
    return {
      status:   response.status,
      results:  response.data
    }
  }

  // private

}

module.exports.IssueCredentialV2 = IssueCredentialV2;