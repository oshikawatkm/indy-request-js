const { Endpoint } = require("../endpoint");

class PresentProofV2 extends Endpoint {

  async createRequest(body) {
    let response = await this.axios.post('/present-proof-2.0/create-request', body)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async records({ connection_id, role, state, thread_id }) {
    let response = await this.axios.get('/present-proof-2.0/records', { params: { 
      connection_id, 
      role, 
      state, 
      thread_id
    }})
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async record(pres_ex_id) {
    let response = await this.axios.get(`/present-proof-2.0/records/${pres_ex_id}`,)
    return {
      status:   response.status,
      results:  response.data
    }
  }


  async deleteRecords(pres_ex_id) {
    let response = await this.axios.delete(`/present-proof-2.0/records/${pres_ex_id}`,)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async recordsCredentials(pres_ex_id, { count, extra_query, referent, start }) {
    let response = await this.axios.delete(`/present-proof-2.0/records/${pres_ex_id}/credentials`, { 
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
    let response = await this.axios.post(`/present-proof-2.0/records/${pres_ex_id}/problem-report`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async recordsSendPresentation(pres_ex_id, body) {
    let response = await this.axios.post(`/present-proof-2.0/records/${pres_ex_id}/send-presentation`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }

  async recordsVerifyPresentation(pres_ex_id) {
    let response = await this.axios.post(`/present-proof-2.0/records/${pres_ex_id}/verify-presentation`)
    return {
      status:   response.status,
      results:  response.data
    }
  }


  async sendProposal(body) {
    let response = await this.axios.post(`/present-proof-2.0/send-proposal`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }


  async sendRequest(body) {
    let response = await this.axios.post(`/present-proof-2.0/send-request`, body)
    return {
      status:   response.status,
      results:  response.data
    }
  }

}

module.exports.PresentProofV2 = PresentProofV2;