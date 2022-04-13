/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

const fs=require('fs');
const privateKey=fs.readFileSync(".secret").toString();

const projectId="c379acf15dd44861b0344c5f1328af05";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
 mumbai: {
   url:'https://polygon-mumbai.infura.io/v3/c379acf15dd44861b0344c5f1328af05',
   accounts: [privateKey]
 },
 mainnet:{
    url:'https://polygon-mainnet.infura.io/v3/c379acf15dd44861b0344c5f1328af05',
    

 }

// // mainnet: {

//   }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}