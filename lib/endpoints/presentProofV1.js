const { Endpoint } = require("../endpoint");

class PresentProofV1 extends Endpoint {

  async createRequest(body) {
    let response = this.axios.post('/present-proof/create-request', body)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async records({ connection_id, role, state, thread_id }) {
    let response = this.axios.get('/present-proof/records', { 
      connection_id, 
      role, 
      state, 
      thread_id
    })
    return {
      status:   response.status,
      results:  response.data
    }
  }


  async getRecoed(pres_ex_id) {
    let response = this.axios.get(`/present-proof/records/${pres_ex_id}`,)
    return {
      status:   response.status,
      results:  response.data
    }
  }


  async deleteRecords(pres_ex_id) {
    let response = this.axios.delete(`/present-proof/records/${pres_ex_id}`,)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async recordsCredentials(pres_ex_id, { count, extra_query, referent, start }) {
    let response = this.axios.delete(`/present-proof/records/${pres_ex_id}/credentials`, { 
      count, 
      extra_query, 
      referent, 
      start 
    })
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async recordsProblemReport(pres_ex_id, body) {
    let response = this.axios.post(`/present-proof/records/${pres_ex_id}/problem-report`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async recordsSendPresentation(pres_ex_id, body) {
    let response = this.axios.post(`/present-proof/records/${pres_ex_id}/problem-report`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async recordsVerifyPresentation(pres_ex_id) {
    let response = this.axios.post(`/present-proof/records/${pres_ex_id}/verify-presentation`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }


  async sendProposal(body) {
    let response = this.axios.post(`/present-proof/send-proposal`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }


  async sendRequest(body) {
    let response = this.axios.post(`/present-proof/send-request`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }
}

module.exports.PresentProofV1 = PresentProofV1;