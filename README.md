Clone the repo and cd into it git clone https://github.com/symfoni/hardhat-react-boilerplate.git MyProject && cd MyProject
Install deps with yarn yarn or npm npm install
Start hardhat npx hardhat node --watch


It runs up a Hardhat node, compile contracts, generates typescript interfaces, creates React context and instantiates your contract instances and factories with frontend provider.
Open up a new terminal
Enter the frontend directory: cd frontend
Install dependencies: npm install
Import seed phrase in Metamask. The default mnemonic currently used by hardhat is test test test test test test test test test test test junk
Please note that you need to sign out from your current Metamask wallet to import a new one. Instead of logging out, you can use a new browser profile to do your Ethereum development:
Click your profile icon in the top right corner of Chrome (right next to the hamburger menu icon)
Click "Add"
Give the profile a name and click "Add"
In this new browser window, install Metamask and import the keyphrase above
Ensure Metamask RPC is set to http://localhost:8545 and chainID 31337.
Start the React app: npm start
The frontend should open at http://localhost:3000/

Because of this default hardhat.config.ts it will first try to connect with an injected provider like Metamask (web3modal package does this).

If nothing found it will try to connect with your hardhat node. On localhost and hardhat nodes it will inject your mnemonic into the frontend so you have a "browser wallet" that can both call and send transactions. NB! Dont ever put a mnemonic with actual value here.

In hardhat.config.ts there is example on how to instruct your hardhat-network to use mnemonic or privatekey.

const config: HardhatUserConfig = {
  react: {
    providerPriority: ["web3modal", "hardhat"],
  },
};
Ensure you are useing RPC to http://localhost:8545.

You may also need to set the chainID to 31337 if you are useing Hardhat blockchain development node.

Invalid nonce.
eth_sendRawTransaction
  Invalid nonce. Expected X but got X.
Reset your account in Metamask.