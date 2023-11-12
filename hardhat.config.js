require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-mainnet.g.alchemy.com/v2/FkLjSiHJFJyCYFEktfHeOVdPQk5-6F7Y",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

