Web3 = require('web3') 
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var account=web3.eth.coinbase;
var password="1234"
web3.personal.unlockAccount(account,password);
var pagarcontratoContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Cobrar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AcumuladoContrato","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"PagarMas","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}]);
var pagarcontrato = pagarcontratoContract.new(
   {
     from: web3.eth.coinbase, 
     data: '0x6080604052610155806100136000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063031e56b01461005c578063b2836bfc14610089578063c0531c96146100b4575b600080fd5b34801561006857600080fd5b50610087600480360381019080803590602001909291905050506100be565b005b34801561009557600080fd5b5061009e610108565b6040518082815260200191505060405180910390f35b6100bc610127565b005b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610104573d6000803e3d6000fd5b5050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b5600a165627a7a723058203288d79ccbd388ab49fe97f8fac471ca90320a684f1935e6856754742bc253610029', 
     gas: '4700000',
     value: '10000000000000000000000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
