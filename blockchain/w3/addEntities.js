const Web3 = require('web3');
const VotingContractArtifact = require('../build/contracts/Voting.json');

const HDWalletProvider = require('truffle-hdwallet-provider');
const rpc_endpoint = 'http://ethdnxd24-dns-reg1.eastus.cloudapp.azure.com:8540';
const fs = require('fs');
const mnemonic = fs.readFileSync("../metamask_wallet.txt").toString().trim();

const contractABI = VotingContractArtifact["abi"];
const contractAddress = VotingContractArtifact["networks"]["10101010"]["address"];

const web3 = new Web3(new HDWalletProvider(mnemonic, rpc_endpoint));
const contract = new web3.eth.Contract(contractABI, contractAddress);

const defaultSender = "0x38D4010731de6dee73F15aF71c886AB0e49f5122";

const addVoter = async (hash) => {

    try {
        return await contract.methods.addVoter(hash).send({from: defaultSender})
    }catch(err) {
        return null;
    }
};

const addCandidate = async (hash) => {

    try {
        return await contract.methods.addVoter(hash).send({from: defaultSender})
    }catch(err) {
        return null;
    }
};

module.exports = {
    addVoter,
    addCandidate
};