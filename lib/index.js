/*!
 * index.js - Main Entry Point
 */
"use strict";



if (typeof Promise === "undefined") {
  require("es6-promise").polyfill();
}

if (typeof Buffer === "undefined") {
  (global || window).Buffer = require("buffer").Buffer;
}

if (typeof process === "undefined") {
  (global || window).process = require("process");
}

if (!process.version) {
  process.version = "";
}

module.exports = {
  ActionMenu: require("./endpoints/actionMenu"),
  BasicMessage: require("./endpoints/basicMessage"),
  Connection: require("./endpoints/connection"),
  Credential: require("./endpoints/credential"),
  CredentialDefinition: require("./endpoints/credentialDefinition"),
  Introduction: require("./endpoints/introduction"),
  IssueCredential: require("./endpoints/issueCredential"),
  JsonId: require("./endpoints/jsonId"),
  Ledger: require("./endpoints/ledger"),
  OutOfBand: require("./endpoints/outOfBand"),
  PresentProofV1: require("./endpoints/presentProofV1"),
  Resolver: require("./endpoints/resolver"),
  Revocation: require("./endpoints/Revocation"),
  Schema: require("./endpoints/schema"),
  Server: require("./endpoints/server"),
  TrustPing: require("./endpoints/trustPing"),
  Wallet: require("./endpoints/wallet")
};