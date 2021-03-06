const { ActionMenu } = require("./endpoints/actionMenu")
const { BasicMessage } = require("./endpoints/basicMessage")
const { Connection } = require("./endpoints/connection")
const { CredentialDefinition } = require("./endpoints/credentialDefinition")
const { Introduction } = require("./endpoints/introduction")
const { IssueCredentialV1 } = require("./endpoints/issueCredentialV1")
const { IssueCredentialV2 } = require("./endpoints/issueCredentialV2")
const { JsonId } = require("./endpoints/jsonId")
const { Ledger } =  require("./endpoints/ledger")
const { OutOfBand } = require("./endpoints/outOfBand")
const { PresentProofV1 } = require("./endpoints/presentProofV1")
const { PresentProofV2 } = require("./endpoints/presentProofV2")
const { Resolver } = require("./endpoints/resolver")
// const { Revocation } = require("./endpoints/Revocation")
const { Schema } = require("./endpoints/schema")
const { Server } =  require("./endpoints/server")
const { TrustPing } = require("./endpoints/trustPing")
const { Wallet } = require("./endpoints/wallet")
const { Agent } = require("./agent")
const { Credential } = require("./endpoints/credential")

module.exports.ActionMenu = ActionMenu;
module.exports.BasicMessage = BasicMessage;
module.exports.Connection = Connection;
module.exports.CredentialDefinition = CredentialDefinition;
module.exports.Credential = Credential;
module.exports.Introduction = Introduction;
module.exports.IssueCredentialV1 = IssueCredentialV1;
module.exports.IssueCredentialV2 = IssueCredentialV2;
module.exports.JsonId = JsonId;
module.exports.Ledger = Ledger;
module.exports.OutOfBand = OutOfBand;
module.exports.PresentProofV1 = PresentProofV1;
module.exports.PresentProofV2 = PresentProofV2;
module.exports.Resolver = Resolver;
// module.exports.Revocation = Revocation;
module.exports.Schema = Schema;
module.exports.Server = Server;
module.exports.TrustPing = TrustPing;
module.exports.Wallet = Wallet;
module.exports.Agent = Agent;