require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/-TvD4yfDsiwdaJOjBNC9GJ9XyqWcr3Hb",
      accounts: [ "65ede56f8c3b0e7d3d41863f5b7829d5b1c7840c037cdf4fe57ca84fd54ba039" ]
    }
  }
};
