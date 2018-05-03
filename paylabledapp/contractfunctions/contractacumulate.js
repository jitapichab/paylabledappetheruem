Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contract_abidefinition='[{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Cobrar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AcumuladoContrato","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"PagarMas","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}]';
var  abiDefinition= JSON.parse(contract_abidefinition);
var    contract = web3.eth.contract(abiDefinition);
var   instance = contract.at("0x0c6a14ccbdaaade20ed00f912a6e2cb6699b9c60");
var instance1= contract.at("0x72b8fa51985328f279fe522d40984616ea47acc1");
console.log(instance)
var consulta=instance1.AcumuladoContrato.call();
console.log(consulta);