Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
var contract_abidefinition='[{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Cobrar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AcumuladoContrato","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"PagarMas","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}]';
var  abiDefinition= JSON.parse(contract_abidefinition);
var contract = web3.eth.contract(abiDefinition);
var instance= contract.at("0x9aa94202f2e40654db87b6715fd0078b1e55c4f2");
var account= web3.eth.accounts[1];
var password= "1234";
web3.personal.unlockAccount(account,password);
console.log(collect);
var collect= 80000000000000000000;
var  txnObject = {
    from: web3.eth.accounts[1],
    gas: 3000000,
    value: collect
}
var collectTx=instance.PagarMas.sendTransaction(txnObject);
console.log(web3.eth.getBalance(web3.eth.accounts[1]));
console.log(collectTx);