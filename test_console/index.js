const TronWeb = require('tronweb');
import pokemonUtils from '../jslibrary';

// Peligro MainNet
// const fullNode = "https://api.trongrid.io";
// const privateKey = '24a2c6aee136eb1188a0cbf3035539088a772f5c9e9fc3fb6b83a97adb975871';
// const contractAddress = 'TDzwSTA52wNPWKdhm3y24qznvhZi82hr3a';

// const fullNode = "http://127.0.0.1:9090";
// const privateKey = 'ae55a0be228891876205d277a3f525e3aef779585312b7c362f0f08f7747a2b9';
// import pokemonArtifacts from "../build/contracts/Pokemon.json";
// const contractAddress = pokemonArtifacts.networks['9090'].address;

// const fullNode = "https://api.shasta.trongrid.io";
// const privateKey = 'ae55a0be228891876205d277a3f525e3aef779585312b7c362f0f08f7747a2b9';
// import pokemonArtifacts from "../build/contracts/Pokemon.json";
// const contractAddress = pokemonArtifacts.networks['*'].address;


const tronWeb = new TronWeb(
    fullNode,
    fullNode,
    fullNode,
    privateKey,
)

async function testCalls() {
    ////////////////////////////////////Calls//////////////////////////////////////////////
    // get CEO, CFO, COO
    console.log();
    console.log("get CEO, CFO, COO");
    const ceo = await pokemonUtils.getCeoAddress();
    const cfo = await pokemonUtils.getCfoAddress();
    const coo = await pokemonUtils.getCooAddress();
    console.log(ceo);
    console.log(cfo);
    console.log(coo);
    
    // getMinBetAllowed
    console.log();
    console.log("getMinBetAllowed");
    const mba= await pokemonUtils.getMinBetAllowed();
    console.log(mba);
    
    // getPercentContractProfit
    console.log();
    console.log("getPercentContractProfit");
    const pcp = await pokemonUtils.getPercentContractProfit();
    console.log(pcp);
    
    // getContractProfit
    console.log();
    console.log("getContractProfit");
    const contPr= await pokemonUtils.getContractProfit();
    console.log(contPr);

    // getCurrentFight
    console.log();
    console.log("getCurrentFight");
    const cf= await pokemonUtils.getCurrentFight();
    console.log(cf);
    
    // getUserProfile
    console.log();
    console.log("getUserProfile");
    const userProf = await pokemonUtils.getUserProfile('TAWbJ9JjzWsgLBNc4t4f694ZNe6UtGvnYZ');
    console.log(userProf);

    // getUserPokemons
    console.log();
    console.log("getUserPokemons");
    const userPokemons = await pokemonUtils.getUserPokemons('TAWbJ9JjzWsgLBNc4t4f694ZNe6UtGvnYZ');
    console.log(userPokemons);

    // getUserItems
    console.log();
    console.log("getUserItems");
    const userItems = await pokemonUtils.getUserItems('TAWbJ9JjzWsgLBNc4t4f694ZNe6UtGvnYZ');
    console.log(userItems);
    
    // getUserPokemonsToSale
    console.log();
    console.log("getUserPokemonsToSale");
    const userPokToSale = await pokemonUtils.getUserPokemonsToSale('TAWbJ9JjzWsgLBNc4t4f694ZNe6UtGvnYZ');
    console.log(userPokToSale);

    // getUserCurrentBet
    console.log();
    console.log("getUserCurrentBet");
    try {
        const cBet = await pokemonUtils.getUserCurrentBet( 
            'TArKkyq5npQRzHn5tGBBUvZyLUMu422BTN'
        );
        console.log(cBet);
        console.log("Success");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }
    
    // getUserState
    console.log();
    console.log("getUserState");
    try {
        const userState = await pokemonUtils.getUserState( 
            'TArKkyq5npQRzHn5tGBBUvZyLUMu422BTN'
        );
        console.log(userState);
        console.log("Success");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }
    
    // getUserCurrentFight
    console.log();
    console.log("getUserCurrentFight");
    try {
        const userCurrFight = await pokemonUtils.getUserCurrentFight( 
            'TArKkyq5npQRzHn5tGBBUvZyLUMu422BTN'
        );
        console.log(userCurrFight);
        console.log("Success");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }
    

    // getUserPendingWithdrawals
    console.log();
    console.log("getUserPendingWithdrawals");
    try {
        const upw = await pokemonUtils.getUserPendingWithdrawals( 
            'TArKkyq5npQRzHn5tGBBUvZyLUMu422BTN'
        );
        console.log(upw);
        console.log("Success");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }

    // getUserPoints
    console.log();
    console.log("getUserPoints");
    const userPoints = await pokemonUtils.getUserPoints('TAWbJ9JjzWsgLBNc4t4f694ZNe6UtGvnYZ');
    console.log(userPoints);

    // getIsNewUser
    console.log();
    console.log("getIsNewUser");
    const isNewUs = await pokemonUtils.getIsNewUser('TAWbJ9JjzWsgLBNc4t4f694ZNe6UtGvnYZ');
    console.log(isNewUs);

    // getCategoryPrice
    console.log();
    console.log("getCategoryPrice");
    try {
        const catPrice = await pokemonUtils.getCategoryPrice(0);
        console.log(catPrice);
        console.log("Success");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }

    // getTopUsers
    console.log();
    console.log("getTopUsers");
    try {
        const topUs = await pokemonUtils.getTopUsers(2, [
            'TArKkyq5npQRzHn5tGBBUvZyLUMu422BTN',
            'TYsyTqzQcgSjhSBub6TyHVN5UMCoV1BaRr',
            'TGZsjWcw4YfE86xwRiXmtxUTf8Yf5dwKj9',
            'TPMHN89Bq7CDCkhZan5UhsH5VkLxZqi7wj',
            'TTY5o5rijJ8SBgGyNP657mojmjeQdn2uNQ'
        ]);
        console.log(topUs);
        console.log("Success");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }
    
    // getPokemonMarketplaceCount
    console.log();
    console.log("getPokemonMarketplaceCount");
    try {
        const pokemonMarketplaceCount = await pokemonUtils.getPokemonMarketplaceCount();
        console.log(pokemonMarketplaceCount);
        console.log("Success");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }

    // getPokemonMarketplace
    console.log();
    console.log("getPokemonMarketplace");
    try {
        const pokemonMarketplace = await pokemonUtils.getPokemonMarketplace();
        console.log(pokemonMarketplace);
        console.log("Success");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }

    // getRandom
    console.log();
    console.log("getRandom");
    const max = 20;
    let r = await pokemonUtils.getRandom(max);
    // console.log(r >= 0 && r <= max);
    console.log(r);

}

async function testingFullLogic() {

    const usersToGamePK = [
        '4dd50d1810b87291c885d2a857271211a662d092650ca563fdeab29f2e9f201d',
        'bb282695f5327d901beabf48b999fa02340e5266e2619e064c0178af4f9609a9',
        'a0896ecc186e5e9b3e887fe9f94d0d3302f5ac0c68815dd05cb0a766687c48cb',
        'e7b7fd6bf498ff024ad49c6f080ead112664df5e0f03f689644085cf9cd9ca8b',
        '5d8b9d86420d98cd87bfb8f452387a1ea74d2f727d025fb5793d951db2724933',
        'cc53ea9631f865c5cdd154d93367c47801b68f6f06894a5f99a70d0490f6022f',
        '31eb2a181b76b0f447b76c43e9d62e26009438006008aa4b1b834218d495ee29',
        '753d47ad21608386543721f12bfd2c66bb203e61440f1ec0759b15b4f42b1a83',
        '83943fdd652050638bbc805727226a9c7dc35d25f4b7664567460007c79a7eae',
        'f79151adf56e3ca50bbdbfe7e58f99484c783ce22f1aa23258da8b2cb1f64712'
    ];

    const ammountToBet = 200;

    // Inserting bet from array of gamers (usersToGamePK)
    let currentPrivateKey = pokemonUtils.tronWeb.defaultPrivateKey;
    for(let index in usersToGamePK) {
        let pkey = usersToGamePK[index]; 
        pokemonUtils.setDefaultPrivateKey(pkey);
        console.log(`Profile of ${pokemonUtils.getDefaultAccountAddress()}`);
        console.log(await pokemonUtils.getUserProfile(pokemonUtils.getDefaultAccountAddress()));
        console.log("Inserting bet from user " + pokemonUtils.getDefaultAccountAddress());
        await pokemonUtils.insertBet(ammountToBet);
        console.log(await pokemonUtils.getUserProfile(pokemonUtils.getDefaultAccountAddress()));
    }
    pokemonUtils.setDefaultPrivateKey(currentPrivateKey);

    console.log("Gamers profiles:");
    for (const key in usersToGamePK) {
        const pKey = usersToGamePK[key];
        console.log(await pokemonUtils.getUserProfile(pokemonUtils.tronWeb.address.fromPrivateKey(pKey)));
    }

    // Initializing Fight
    console.log("Initializing fight");
    let fightId = await pokemonUtils.initFight(usersToGamePK.map(val=>pokemonUtils.tronWeb.address.fromPrivateKey(val)));
    console.log(`Fight id = ${fightId}`);

    console.log("Gamers profiles:");
    for (const key in usersToGamePK) {
        const pKey = usersToGamePK[key];
        console.log(await pokemonUtils.getUserProfile(pokemonUtils.tronWeb.address.fromPrivateKey(pKey)));
    }

    // Setting First in array as winner
    console.log("Setting Winner");
    await pokemonUtils.setWinner(fightId, pokemonUtils.tronWeb.address.fromPrivateKey(usersToGamePK[0]))
    
    console.log("Gamers profiles:");
    for (const key in usersToGamePK) {
        const pKey = usersToGamePK[key];
        console.log(await pokemonUtils.getUserProfile(pokemonUtils.tronWeb.address.fromPrivateKey(pKey)));
    }

    // Withdraw CFO
    console.log(`Contract profit ${await pokemonUtils.getContractProfit()}`);
    console.log("Withdrawing contract profits");
    await pokemonUtils.withdrawCFO(0, 0);
    console.log(`Contract profit ${await pokemonUtils.getContractProfit()}`);

    // Withdraw winner
    currentPrivateKey = pokemonUtils.tronWeb.defaultPrivateKey;
    pokemonUtils.setDefaultPrivateKey(usersToGamePK[0]);
    console.log("Profile winner");
    console.log(await pokemonUtils.getUserProfile(pokemonUtils.tronWeb.address.fromPrivateKey(usersToGamePK[0])));
    console.log("Withdrawing founds to winner");
    await pokemonUtils.withdraw();
    console.log("Profile winner");
    console.log(await pokemonUtils.getUserProfile(pokemonUtils.tronWeb.address.fromPrivateKey(usersToGamePK[0])));
    pokemonUtils.setDefaultPrivateKey(currentPrivateKey);

}

async function testSends() {
    ///////////////////////////////Sends////////////////////////////////////

    // CFO and COO
    console.log();
    console.log("Testing Set COO");
    const currentCEO = await pokemonUtils.getCeoAddress();
    console.log(`Current CEO: ${currentCEO}`);
    const newCEO = 'TAJikgETo4bbiA7LfFX2eydZkPgXToadLK';
    console.log(`Setting CEO to ${newCEO}`);
    await pokemonUtils.setCEO(newCEO);
    console.log(`Current CEO: ${await pokemonUtils.getCeoAddress()}`);
    // console.log(`Setting COO to ${currentCOO} again`);
    // await pokemonUtils.setCOO(currentCOO);
    // console.log(`Current COO: ${await pokemonUtils.getCooAddress()}`);

    // console.log();
    // console.log("Testing Set CFO");
    // const currentCFO = await pokemonUtils.getCfoAddress();
    // console.log(`Current CFO: ${currentCFO}`);
    // const newCFO = 'TTY5o5rijJ8SBgGyNP657mojmjeQdn2uNQ';
    // console.log(`Setting CFO to ${newCFO}`);
    // await pokemonUtils.setCFO(newCFO);
    // console.log(`Current CFO: ${await pokemonUtils.getCfoAddress()}`);
    // console.log(`Setting CFO to ${currentCFO} again`);
    // await pokemonUtils.setCFO(currentCFO);
    // console.log(`Current CFO: ${await pokemonUtils.getCfoAddress()}`);

    // // MinBetAlowed
    // console.log();
    // console.log("Testing SetMinBetAllowed");
    // const currentMinBet = Number(await pokemonUtils.getMinBetAllowed());
    // console.log(`Current min bet allowed: ${currentMinBet}`);
    // console.log(`Setting min bet allowed to ${currentMinBet + 2}`);
    // await pokemonUtils.setMinBetAllowed(currentMinBet + 2);
    // console.log(`Current min bet allowed: ${await pokemonUtils.getMinBetAllowed()}`);
    // console.log(`Setting min bet allowed to ${currentMinBet} again`);
    // await pokemonUtils.setMinBetAllowed(currentMinBet);
    // console.log(`Current min bet allowed: ${await pokemonUtils.getMinBetAllowed()}`);
    
    // // SetPercentContractProfit
    // console.log();
    // console.log("Testing SetPercentContractProfit");
    // const currentPercentContractProf = Number(await pokemonUtils.getPercentContractProfit());
    // console.log(`Current percent contract profit: ${currentPercentContractProf}`);
    // console.log(`Setting percent contract profit to ${currentPercentContractProf + 2}`);
    // await pokemonUtils.setPercentContractProfit(currentPercentContractProf + 2);
    // console.log(`Current percent contract profit: ${await pokemonUtils.getPercentContractProfit()}`);
    // console.log(`Setting percent contract profit to ${currentPercentContractProf} again`);
    // await pokemonUtils.setPercentContractProfit(currentPercentContractProf);
    // console.log(`Current percent contract profit: ${await pokemonUtils.getPercentContractProfit()}`);

    // // Inserting Bet
    // console.log(`Profile of ${pokemonUtils.getDefaultAccountAddress()}`);
    // console.log(await pokemonUtils.getUserProfile(pokemonUtils.getDefaultAccountAddress()));
    // console.log("Inserting bet from user " + pokemonUtils.getDefaultAccountAddress());
    // await pokemonUtils.insertBet(100);
    // console.log(await pokemonUtils.getUserProfile(pokemonUtils.getDefaultAccountAddress()));
}

async function testingSincCategories(){
    let newCategories = [
        {
            price: 0,
            tokenPrice: 0,
            offertPrice: 0,
            offertTokenPrice: 0,
            pokemons: [ 1, 2, 3 ]
        },
        {
            price: 10,
            tokenPrice: 3,
            offertPrice: 20,
            offertTokenPrice: 4,
            pokemons: [ 4, 5, 6 ]
        },
        {
            price: 30,
            tokenPrice: 10,
            offertPrice: 60,
            offertTokenPrice: 20,
            pokemons: [ 7,8,9,10,11]
        },
        {
            price: 40,
            tokenPrice: 15,
            offertPrice: 70,
            offertTokenPrice: 30,
            pokemons: [ 12, 13, 14, 15, 16]
        },
    ];
    let catCount = await pokemonUtils.getCategoriesCount();
    console.log("catCount: "+ catCount);    
    for (let index = 0; index < newCategories.length; index++) {
        const v = newCategories[index];
        if(index >= catCount){
            await pokemonUtils.addCategory(v.price,v.tokenPrice,v.offertPrice,v.offertTokenPrice,v.pokemons);
        }
        else {
            await pokemonUtils.setCategory(index, v.price, v.tokenPrice,v.offertPrice,v.offertTokenPrice,v.pokemons);
        }
    }
    catCount = await pokemonUtils.getCategoriesCount();
    console.log("catCount: "+catCount);
    let categs = [];
    for (let index = 0; index < catCount; index++) {
        categs.push(await pokemonUtils.getCategory(index));
    }
    console.log("Categories:");
    console.log(categs);
    
    
}

async function testingSetCategory(){
    let catCount = await pokemonUtils.getCategoriesCount();
    console.log("catCount: "+ catCount);
    if(catCount===0) return;    
    let index = catCount - 1;
    console.log("Category "+index);
    const originalcat = await pokemonUtils.getCategory(index)
    console.log(originalcat);
    
    console.log("Setting full category");        
    await pokemonUtils.setCategory(index, 100, 50, 200, 100, [2,3,5,7,11,13,17,23]);
    let c = await pokemonUtils.getCategory(index)
    console.log("Category "+ index);
    console.log(c);

    console.log("Setting price");        
    await pokemonUtils.setCategoryPrice(index, 101);
    c = await pokemonUtils.getCategory(index)
    console.log("Category "+ index);
    console.log(c);

    console.log("Setting tokenPrice");        
    await pokemonUtils.setCategoryTokenPrice(index, 51);
    c = await pokemonUtils.getCategory(index)
    console.log("Category "+ index);
    console.log(c);

    console.log("Setting offertPrice");    
    await pokemonUtils.setCategoryOffertPrice(index, 201);
    c = await pokemonUtils.getCategory(index)
    console.log("Category "+ index);
    console.log(c);
    
    console.log("Setting offertTokenPrice");
    await pokemonUtils.setCategoryOffertTokenPrice(index, 101);
    c = await pokemonUtils.getCategory(index)
    console.log("Category "+ index);
    console.log(c);
    
    console.log("Setting pokemons");
    await pokemonUtils.setCategoryPokemons(index, [1,2,3,4,5,6,7]);
    c = await pokemonUtils.getCategory(index)
    console.log("Category "+ index);
    console.log(c);

    console.log("Setting category "+index+ " to original");
    await pokemonUtils.setCategory(index, originalcat.price, originalcat.tokenPrice, originalcat.offertPrice, originalcat.offertTokenPrice, originalcat.pokemons)
    c = await pokemonUtils.getCategory(index)
    console.log("Category "+ index);
    console.log(c);
}

async function testingBuyPokemon(){
    console.log(await pokemonUtils.getCategory(1));
    console.log(pokemonUtils.getDefaultAccountAddress());
    console.log(await pokemonUtils.getDefaultAccountBalance());
    
    // let currentUser = await pokemonUtils.getUserProfile(pokemonUtils.getDefaultAccountAddress());
    // currentUser.pokemons = await pokemonUtils.getUserPokemons(pokemonUtils.getDefaultAccountAddress());
    // console.log(currentUser);
    // console.log("Balance:");
    // console.log(await pokemonUtils.getDefaultAccountBalance());
    // console.log("Comprando pokemon");

    console.log(await pokemonUtils.getUserPokemons(pokemonUtils.getDefaultAccountAddress()))
    let res = await pokemonUtils.buy3Pokemons(1,20);
    console.log(res);
    console.log(await pokemonUtils.getUserPokemons(pokemonUtils.getDefaultAccountAddress()))
    console.log(await pokemonUtils.getDefaultAccountBalance());

    // console.log("Balance:");
    // console.log(await pokemonUtils.getDefaultAccountBalance());
    // currentUser.pokemons = await pokemonUtils.getUserPokemons(pokemonUtils.getDefaultAccountAddress());
    // console.log(currentUser);
}

async function testingGiveRemovePokemon() {
    console.log(await pokemonUtils.getUserPokemons('TAbvizgg5yVFUDZterrt7FLTvxSSWz9Nxr'))
    await pokemonUtils.removePokemonTo('TAbvizgg5yVFUDZterrt7FLTvxSSWz9Nxr', 0);
    console.log(await pokemonUtils.getUserPokemons('TAbvizgg5yVFUDZterrt7FLTvxSSWz9Nxr'))
}

async function testingTokens() {
    console.log(await pokemonUtils.getTokenBalance(pokemonUtils.getDefaultAccountAddress()));
    console.log(await pokemonUtils.getFrozenTokenBalanceOf(pokemonUtils.getDefaultAccountAddress()));
    console.log(await pokemonUtils.getUnfrozenTokenBalanceOf(pokemonUtils.getDefaultAccountAddress()));
    // try {
    //     console.log(await pokemonUtils.freezeTokens(20));
    // } catch (error) {
    //     console.error(error);        
    // }
    
}


async function main(){
    await pokemonUtils.setTronWeb(tronWeb, contractAddress);

    // Tests
    console.log(`Testing contract on address ${contractAddress}`);
    // await testCalls();
    // await testSends();
    // console.log(`Contract profit ${await pokemonUtils.getContractProfit()}`);
    console.log(`Contract Balance ${await pokemonUtils.getBalance(pokemonUtils.getDefaultAccountAddress())}`);
    // await testingTokens();


    // await testingSincCategories();
    // await testingSetCategory();
    // await testingBuyPokemon();
    // await testingGiveRemovePokemon();

}

main();