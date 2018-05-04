// conection params
Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
// commands protocol  json rpc  
console.log(web3.eth.getBalance(web3.eth.accounts[1]));

