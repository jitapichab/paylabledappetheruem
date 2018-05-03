pragma solidity ^0.4.0;

contract PagarContrato {

    function PagarContrato() payable { }
    
    function PagarMas() payable {}
  
    function Cobrar(uint amount)  {
            msg.sender.transfer(amount);
       }
    
    function AcumuladoContrato() view returns (uint) {
        return this.balance;
    }
}