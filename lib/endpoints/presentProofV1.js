const { Endpoint } = require("../endpoint");

class PresentProofV1 extends Endpoint {

  async createRequest(body) {
    try {
      let response = await this.axios.post('/present-proof/create-request', body)
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async records({ connection_id, role, state, thread_id }) {
    try {
      let response = await this.axios.get('/present-proof/records', { 
        connection_id, 
        role, 
        state, 
        thread_id
      })
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  async record(pres_ex_id) {
    try {
      let response = await this.axios.get(`/present-proof/records/${pres_ex_id}`,)
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  async deleteRecords(pres_ex_id) {
    try {
      let response = await this.axios.delete(`/present-proof/records/${pres_ex_id}`,)
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async recordsCredentials(pres_ex_id, { count, extra_query, referent, start }) {
    try {
      let response = await this.axios.delete(`/present-proof/records/${pres_ex_id}/credentials`, { 
        count, 
        extra_query, 
        referent, 
        start 
      })
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async recordsProblemReport(pres_ex_id, body) {
    try {
      let response = await this.axios.post(`/present-proof/records/${pres_ex_id}/problem-report`, body)
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async recordsSendPresentation(pres_ex_id, body) {
    try {
      let response = await this.axios.post(`/present-proof/records/${pres_ex_id}/problem-report`, body)
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }

  async recordsVerifyPresentation(pres_ex_id) {
    try {
      let response = await this.axios.post(`/present-proof/records/${pres_ex_id}/verify-presentation`, body)
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  async sendProposal(body) {
    try {
      let response = await this.axios.post(`/present-proof/send-proposal`, body)
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }


  async sendRequest(body) {
    try {
      let response = await this.axios.post(`/present-proof/send-request`, body)
      return {
        status:   response.status,
        results:  response.data
      }
    } catch(err) {
      this.handleError(err);
    }
  }
}

module.exports.PresentProofV1 = PresentProofV1;