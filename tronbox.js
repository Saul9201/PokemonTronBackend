module.exports = {
  networks: {
    development: {
      privateKey: 'bb282695f5327d901beabf48b999fa02340e5266e2619e064c0178af4f9609a9',
      userFeePercentage: 50,
      fee_limit: 1e9,
      fullHost: "http://127.0.0.1:9090",
      network_id: 9090
    },
    shasta: {
      privateKey: 'ae55a0be228891876205d277a3f525e3aef779585312b7c362f0f08f7747a2b9',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullNode: "https://api.shasta.trongrid.io",
      solidityNode: "https://api.shasta.trongrid.io",
      eventServer: "https://api.shasta.trongrid.io",
      network_id: "*"
    },
//     mainnet: {
// // Don't put your private key here:
//       privateKey: 'ae55a0be228891876205d277a3f525e3aef779585312b7c362f0f08f7747a2b9',
//       /*
//       Create a .env file (it must be gitignored) containing something like

//         export PK=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

//       Then, run the migration with:

//         source .env && tronbox migrate --network mainnet

//       */
//       consume_user_resource_percent: 30,
//       fee_limit: 100000000,

//       // tronbox 2.1.9+
//       fullHost: "https://api.trongrid.io",

//       // tronbox < 2.1.9
//       // fullNode: "https://api.trongrid.io",
//       // solidityNode: "https://api.trongrid.io",
//       // eventServer: "https://api.trongrid.io",

//       network_id: "*"
//     }
  }
}
