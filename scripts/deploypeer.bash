#!/bin/bash
Geth --networkid 15 --datadir nodo --nodiscover --rpc --rpcaddr localhost --rpcport 8545 --rpcapi "web3,eth,net,personal"   --rpccorsdomain "*"" --fast
