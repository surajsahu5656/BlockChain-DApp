# **Blockchain and Cryptocurrency Guide**

## **Introduction**
### Created by [Satoshi Nakamoto](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) in 2008

---
## **Text Encryption Overview**
- **Plain Text** → No encryption
- **Encoding** → Example: Base64
- **Hashing** → Example: SHA-256
- **Encryption** → Types:
  - **Symmetric Encryption**
  - **Asymmetric Encryption**

### **Types of Keys**
1. **Public Key** - Used for encryption.
2. **Private Key** - Used for asymmetric encryption (kept secret).

### **Symmetric Encryption**
- Uses the same public key for both encryption and decryption.
- The key is shared between the sender and receiver.

### **Asymmetric Encryption**
- Uses a public key for encryption and a private key for decryption.
- The public key can be shared with anyone, but the private key must remain secret.

---
## **Bitcoin Wallet**
- A wallet consists of a **Private/Public Key Pair**.
- **Private Key** - A secret number.
- **Public Key** - A publicly known number.

### **Bitcoin Address**
- A public key corresponding to a private key.
- Works like an email address to receive payments.

### **Transactions**
- **Inputs** → Amount of bitcoins sent from one address to another.
- **Outputs** → Amount of bitcoins received at another address.
- **Signature** → Proof of authorization to spend funds.

### **Mining**
- The process of verifying transactions and adding them to the blockchain.
- Miners receive rewards for finding valid blocks.
- **Difficulty** is adjusted every 2 weeks.

---
## **What is Blockchain?**
A **blockchain** is a decentralized, digital ledger technology that records transactions across a network of computers. Each transaction is grouped into a **block**, forming a chronological and immutable chain.

### **Features of Blockchain:**
✅ **Decentralized** - No single entity controls the network.
✅ **Secure & Tamper-proof** - Uses cryptographic hashing.
✅ **Transparent** - Publicly verifiable transactions.
✅ **Applications** - Cryptocurrencies, supply chain, voting systems, and smart contracts.

---
## **MetaMask**
- A cryptocurrency wallet & browser extension for **Ethereum** blockchain.
- Enables interaction with **decentralized applications (dApps)**.
- Supports **Ether (ETH), tokens, and NFTs**.

---
## **Geth (Go Ethereum)**
Geth is a command-line interface (CLI) for running an **Ethereum node**.

### **How to Create a Private Blockchain Network**
1) **Install Geth** on your system.
2) **Create a folder** (e.g., `PrivateEthereum`).
3) **Make a `genesis.json` file** and save it inside the folder.
4) **Execute the genesis file**:
   ```sh
   geth --datadir ./data init ./genesis.json
   ```
5) **Initialize the private network**:
   ```sh
   geth --datadir .\data\ --nodiscover
   ```

### **How to Connect to Ethereum Mainnet**
Run the following command:
```sh
geth attach ipc://./pipe/geth.ipc
```

### **How to Create an Account on Ethereum Mainnet**
Run:
```sh
personal.newAccount()
```
Then, create your password.

### **How to Mine on Ethereum Private Network**
1) Set the miner account:
   ```sh
   miner.setEtherbase(eth.accounts[0])
   ```
2) Start mining:
   ```sh
   miner.start(1)
   ```
3) Check miner balance:
   ```sh
   eth.getBalance(eth.accounts[0])
   ```

---
## **How to Visualize Solidity Smart Contracts**
1) Install **Docker** on your OS.
2) Pull the **Solgraph** Docker image:
   ```sh
   sudo docker pull devopstestlab/solgraph
   ```
3) Create a directory:
   ```sh
   mkdir data && cd data
   ```
4) Write the smart contract and save it as `MyContract.sol`.
5) Run:
   ```sh
   docker run -it --rm -v $PWD:/data devopstestlab/solgraph
   ```

---
## **Security Audits for Smart Contracts**

### **Using Slither**
1) Pull Slither Docker image:
   ```sh
   docker pull trailofbits/eth-security-toolbox
   ```
2) Create an audit directory:
   ```sh
   mkdir audit && cd audit
   ```
3) Write your smart contract (`SimpleStorage.sol`).
4) Run:
   ```sh
   docker run -it --rm -v $PWD:/data trailofbits/eth-security-toolbox
   ```
5) Open another terminal and get the container ID:
   ```sh
   sudo docker container ls
   ```
6) Copy your file inside the container:
   ```sh
   sudo docker cp $(pwd)/SimpleStorage.sol "container-id":/home/ethsec
   ```
7) Analyze the contract:
   ```sh
   slither SimpleStorage.sol
   ```

### **Using Mythril**
1) Pull Mythril Docker image:
   ```sh
   sudo docker pull mythril/myth
   ```
2) Create an audit directory:
   ```sh
   mkdir audits2 && cd audits2
   ```
3) Write your smart contract (`Ballot.sol`).
4) Analyze it:
   ```sh
   myth analyze Ballot.sol
   ```

### **Using Surya**
1) Install npm:
   ```sh
   sudo apt install npm
   ```
2) Install Surya:
   ```sh
   sudo npm install -g surya
   ```
3) Write your smart contract (`Storage.sol`).
4) Parse it:
   ```sh
   surya parse Storage.sol
   ```
5) Flatten the contract:
   ```sh
   surya flatten Storage.sol
   ```

### **Using Manticore**
1) Pull the Manticore Docker image:
   ```sh
   sudo docker pull trailofbits/manticore
   ```
2) Create an audit directory:
   ```sh
   mkdir audits2 && cd audits2
   ```
3) Write your smart contract (`Storage.sol`).
4) Run Manticore:
   ```sh
   manticore Storage.sol
   ```

---
## **Conclusion**
This guide provides an overview of blockchain, cryptocurrency, encryption, Ethereum networks, and security auditing tools for smart contracts. By following these steps, developers can enhance their knowledge of blockchain security and create robust decentralized applications.

🚀 **Stay secure and keep innovating in blockchain technology!**

