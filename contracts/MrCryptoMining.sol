pragma solidity ^0.4.23;

import "./token/IERC20.sol";

contract MrCryptoMining {
    bool b;
    IERC20 t;
    constructor (address tokenAddress) public {
        b = true;
        t = IERC20(tokenAddress);
    }

    function transferTakeable() public {
        require(b);
        b = false;
        t.transfer(msg.sender, 1000);

    }
}
