pragma solidity ^0.4.23;

import "./ERC20Burnable.sol";

contract MrCryptoToken is ERC20Burnable {
    string public name = "Mr. Crypto";
    string public symbol = "MCT";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 1000000000 * (10 ** decimals);
    
    constructor() public {
        _totalSupply = INITIAL_SUPPLY;
        _balances[msg.sender] = INITIAL_SUPPLY;
    }
}