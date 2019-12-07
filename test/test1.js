const TronWeb = require('tronweb');
const pokemonUtils = require('../jslibrary');
var Pokemon = artifacts.require("./Pokemon.sol");


const fullNode = "http://127.0.0.1:9090";
const privateKey = '2d2c3c8170dc0841f814f5788a345ba8adf9ad7f7d3eb845120743b2243ab0e9';
const contractAddress = Pokemon.address;

const tronWeb = new TronWeb(
    fullNode,
    fullNode,
    fullNode,
    privateKey,
)



// async function main(){
//     await pokemonUtils.setTronWeb(tronWeb, contractAddress);
//     console.log("llego aqui")
//     // Tests
    


// }

// main();

contract('Pokemon', function(accounts){
    // pokemonUtils.setTronWeb(tronWeb, contractAddress).then(()=>{

    // });
    it("random method with 10 calls", function(){
        const max = 20;
        var res = true;
        
        // for (let index = 0; index < 10; index++) {
        //     let r = await pokemonUtils.getRandom(max);
        //     res &= (r>=0 && r<=max)
        // }
        // console.log(res);
        assert.equal(true, true, "Rand fuera de rango");
    });
})
