# SEC-BlockChain-Sem2


# Blockchain
A blockchain is a decentralized digital ledger technology that records transactions across a network of computers. Each transaction is grouped into a "block," which is then added to a chain of other blocks, forming a chronological and immutable record of all transactions. This decentralized nature means that no single entity has control over the entire blockchain, making it resistant to tampering and fraud.

Blockchain technology enables secure and transparent peer-to-peer transactions without the need for intermediaries, such as banks or financial institutions. It is most commonly associated with cryptocurrencies like Bitcoin, but its applications extend beyond finance to areas such as supply chain management, voting systems, and smart contracts.




# MetaMask
MetaMask is a cryptocurrency wallet and browser extension that allows users to interact with decentralized applications (dApps) on the Ethereum blockchain. It serves as a bridge between your web browser and the Ethereum blockchain, enabling you to manage your Ethereum-based assets, such as Ether (ETH), tokens, and NFTs (non-fungible tokens).

![1](https://github.com/surajsahu5656/SEC-BlockChain-Sem2/assets/122232215/c4a95903-9f6a-4c3a-829b-e6206276cd42)




# Geth
Geth, short for "Go Ethereum," is one of the most popular implementations of an Ethereum node software. It is written in the Go programming language and serves as a command-line interface (CLI) for running an Ethereum node on a computer or server.




# How To Make A Private Blockchain Network

1) Install Geth on Your System.
   
2) Create a Folder (i.e Private Ethereum).
   
3) Make a genesis.json file for the gensis block and save into that folder.

<img width="233" alt="2" src="https://github.com/surajsahu5656/SEC-BlockChain-Sem2/assets/122232215/7c4f0694-ac03-4d93-b6ea-50de61f3bfd8">

4) Execute the genesis file by run the commands on terminal, given below.
   
         geth --datadir ./data init ./genesis.json

5) And then Initialize the private network by run command :
    
         geth --datadir .\data\ --nodiscover




# How To Connect With Ethereium Mainnet
**On cmd run command :** 

       geth attach ipc://./pipe/geth.ipc 




# How To Create Account On The Ethereum Mainnet
**On cmd run command:**   

        personal.newAccount()

**And then create your password.**




# How To Mine On The Ethereum Private Network
**After creating account , run the following the commands ;**

          miner.setEtherbase(eth.accounts[0])

          miner.start(1)

**And then miner balanced can be checked by run the following commmand;**

          eth.getBalance(eth.accounts[0])




# How To Visualize Solidity Smart Contracts

1.) **Install the docker on OS.**

2.) **Pull the docker image for solgraph by run this command on terminal :**

          sudo docker pull devopstestlab/solgraph

**Solgraph:** A tool to generate a DOT graph that visualises the function control flow of a Solidity contract and highlights potential security vulnerabilities.

3.) **Make a directory :** 

           mkdir data
           
4.) **Change the directory :** 

           cd data
           
5.) **Run the command :** 

           vim -vi
           
**And then write the smart contract and save the contract file with .sol extension.(i.e for example Mycontract.sol)**

![3](https://github.com/surajsahu5656/SEC-BlockChain-Sem2/assets/122232215/cd0e4645-fa41-4f7b-bff0-a38feeeda85d)

6.) **Then run the command :** 

          docker run -it --rm -v $PWD:/data devopstestlab/solgraph 

![4](https://github.com/surajsahu5656/SEC-BlockChain-Sem2/assets/122232215/a164b96a-4dd6-4dc1-a4f7-65fbeda8b49a)

![5](https://github.com/surajsahu5656/SEC-BlockChain-Sem2/assets/122232215/0fc1f9b7-c11b-4ef2-bb6f-282c860f61f6)





# Security Audits For Smart Contract Using Slither

**Slither:** An Solidity static analysis framework. Through its printers, it can map method visibility and modifiers, state variables that are read and written, identify calls, and print the inheritance graph of a smart contract.

1.) **Pull the docker image for slither by run this command on terminal :**

            docker pull trailofbits/eth-security-toolbox
      
2.) **Make a directory :** 

           mkdir audit
           
3.) **Change the directory :** 

           cd audit
           
4.) **Run the command :** 

           vim -vi
           
**And then write the smart contract and save the contract file with .sol extension.(for example SimpleStorage.sol)**

![5](https://github.com/surajsahu5656/SEC-BlockChain-Sem2/assets/122232215/4d8332a2-c2a4-490e-99ea-3be0a1312d1e)


5.) **Then run the command :** 

       docker run -it --rm -v $PWD:/data trailofbits/eth-security-toolbox

![7](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/91377970-7d26-45c5-904d-a0723a18bc30)


6.)**Open another terminal and Run the command to obtain container id:**

        sudo docker container ls
   
7.)**And then Run the command:**

        sudo docker cp $(pwd)/filename.sol “containner-id”:/home/ethsec

8.)**Run the command in the first terminal:**

       slither filename.sol
    
![8](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/afb54acf-b7e9-4b9c-8e09-7af892fc1ff7)


9.)**And then Run another command in the first terminal:**

      slither-check-erc filename.sol <contract name in code>
    
![9](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/0581412c-9659-4121-961a-98d1b8868786)




# Security audits for smart contract using Mythril:

1) **pull the docker image for Mythril by run command**

      sudo docker pull mythril/myth
   
2) **make a directory**
   
      mkdir audits2
   
3) **change the directory**
   
      cd audits2
   
4) **run the command**
   
      vim -vi
   
5) **And then write the smart contract and save the contract file with .sol extension.(for example Ballot.sol)**

![10](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/f9e39cb4-4bd4-41b2-9dce-8f4bde061d91)
![11](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/a80a8907-3c43-4ddb-b5fb-c13123cf556e)
![12](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/808be312-aa42-4779-84e6-94095e3e53a6)


6) **To analyse the smart contract run the command**

        myth analyze Ballot.sol

![13](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/0395d246-b319-42b3-8511-7533a0dc64a9)




# Security audits for smart contract using Surya:

1) **install npm by run the command**
   
      sudo apt install npm
   
2) **install surya**
   
     sudo npm install -g surya

3) **make a directory**
   
     mkdir audits2

4) **change the directory**
   
     cd audits2

5) **run command**
    
     vim -vi

6) **And then write the smart contract and save the contract file with .sol extension.(for example 
   Storage.sol)**

   ![14](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/a9ceac52-31ca-4e70-ae4d-a054f8ca4b8b)


7) **Then run the command**
   
      surya parse Storage.sol

**Parse :**  The parse command outputs a treefied AST object coming from the parser.

![15](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/5223a914-c409-4c25-a9b9-a31720b4b303)
![16](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/8e4e13c7-c7ec-4534-b412-33632520e480)
![17](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/7db1fdea-e82e-4eeb-b026-b7cb97672306)


8) **Then run another command**
   
       surya flatten Storage.sol
   
**Flatten :** The flatten command outputs a flattened version of the source code, with all import statements replaced by the corresponding source code. Import statements that reference a file that has already been imported, will simply be commented out.

![18](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/5cfe5d5d-a27a-4057-b867-1e4f6e016ce9)




# Security audits for solidity smart contract using manticore:

1) **pull the docker image for manticore**

         sudo docker pull trailofbits/manticore

![19](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/ca84141f-5a7e-4897-83f5-c54339ccfc44)


2) **make a directory**
   
      mkdir audits2
   
3) **change the directory**
   
      cd audits2
   
4) **run the command**
   
      vim -vi
   
5) **And then write the smart contract and save the contract file with .sol extension.(for example Storage.sol)**

![20](https://github.com/surajsahu5656/Sem2_SEC_BlockChain/assets/122232215/4ae37d42-afa7-4884-9cf7-287a0db5613c)


6) **Then run command**
   
      manticore Storage.sol






















   
