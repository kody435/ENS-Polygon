require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://crimson-side-energy.matic-testnet.discover.quiknode.pro/21a62fa28cca3231fdbc4f8453352acd0dd65aaf/",
      accounts: ["70e780214a83ef51d4156a6724ada1f85ec25926ccb921a36256a000d3cbfd16"],
    },
  },
};
