var keythereum = require("keythereum");

var datadir = "/home/servidores/nodo/";
var address= "0xceec53a1a93cd7246e422a20db99a4e548539b6a";
const password = "1234";

var keyObject = keythereum.importFromFile(address, datadir);
var privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString('hex'));