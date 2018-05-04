var express = require('express');
var router = express.Router();
var Web3= require("web3");
var web3=null;
var contract_abidefinition=null;
var abiDefinition=null;
var  contract=null;
var instance=null;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index/index');
});

router.post('/collectmoney:id/', function(req,res){
  var collectMoney=req.params.id;
  return res.json({data1: collectMoney});
});

router.post('/getaccounts/', function(req,res){
  Web3 = require('web3') 
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  contract_abidefinition='[{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Cobrar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AcumuladoContrato","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"PagarMas","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}]';
  abiDefinition= JSON.parse(contract_abidefinition);
  contract = web3.eth.contract(abiDefinition);
  instance= contract.at("0x9aa94202f2e40654db87b6715fd0078b1e55c4f2");
  web3.eth.getAccounts(function (error, result) {
    if (error) {
       console.log(error);
    } else {
        accounts = result;
        console.log(accounts);
        return res.json({dataaccount:accounts});
    }
  });
});

router.post('/unlockaccount/:id/:other', function(req,res){
  var account = req.params.id;
  var password = req.params.other;
  console.log(account);
  console.log(password);
  web3.personal.unlockAccount(account, password,function(error, result)  {
    
            // console.log(error,result)
            if(error){
              return res.json({datapassword: " password is wrong"});
            } else {
                // Result = True if unlocked, else false
                var str = "the account  " + account.substring(0,20)+'...it has been unlock';
                console.log(str);
                return res.json({datapassword: str});
                if(result){
                    console.log(result);
                } else {
                    // This does not get called - since and error is returned for incorrect password :-)
                    str = 'Incorrect Password???';
                    console.log("password is wrong");
                }
                
                
            }
        });
});

router.post('/lockaccount/:id', function(req,res){
  var account = req.params.id;
  console.log(account);
  web3.personal.lockAccount(account, function(error, result){
      
              console.log(error,result)
              if(error){
                  console.log(error);
              } else {
                  var str ="the account "+ account.substring(0,20)+'...it has been lock';
                  console.log(str);
                  return res.json({datalock: str});
              }
          });

});

router.post('/consultbalance/:id', function(req,res){
  var account = req.params.id;
  console.log(account);
  
  return res.json({databalance:web3.eth.getBalance(account)});        

});

router.post('/collectmoney/:id/:other/', function(req,res){
  var collect=req.params.id;
  var account=req.params.other;

  var  txnObject = {
    from: account,
    gas: 3000000
}

var collectTx=instance.Cobrar.sendTransaction(collect,txnObject);
  console.log(collectTx);
  return res.json({datacollect:collectTx});        

});

router.post('/verifymoney/', function(req,res){
  
  var consult=instance.AcumuladoContrato.call();
  console.log(consult);
  return res.json({dataverify:consult});        

});





module.exports = router;
