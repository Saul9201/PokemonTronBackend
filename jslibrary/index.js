const userStateEnum = [
    'quiet',
    'onFight',
    'waiting'
];

module.exports = {

    tronWeb: false,
    contract: false,

    // Constructor
    async setTronWeb(tronWeb, contractAddress) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress);
    },

    // Utils Functions
    getDefaultAccountAddress() {
        return this.tronWeb.defaultAddress.base58;
    },

    setDefaultPrivateKey(pivateKey) {
        this.tronWeb.setPrivateKey(pivateKey);
    },

    async getBalance(address) {
        const res = await this.tronWeb.trx.getBalance(address);
        return Number(this.tronWeb.fromSun(res));
    },

    // Call functions
    async getCeoAddress(inHex){
        const res = await this.contract.ceoAddress().call();
        if(inHex)
            return this.tronWeb.address.toHex(res);
        else
            return this.tronWeb.address.fromHex(res);
    },

    async getCfoAddress(inHex){
        const res = await this.contract.cfoAddress().call();
        if(inHex)
            return this.tronWeb.address.toHex(res);
        else
            return this.tronWeb.address.fromHex(res);
    },

    async getCooAddress(inHex){
        const res = await this.contract.cooAddress().call();
        if(inHex)
            return this.tronWeb.address.toHex(res);
        else
            return this.tronWeb.address.fromHex(res);
    },

    async getMinBetAllowed() {
        var res = (await this.contract.minBetAllowed().call()).toNumber();
        return this.tronWeb.fromSun(res);
    },

    async getPercentContractProfit() {
        return (await this.contract.percentContractProfit().call()).toNumber();
    },

    async getContractProfit() {
        var res = (await this.contract.contractProfit().call()).toNumber();
        return this.tronWeb.fromSun(res);
    },

    async getCurrentFight(){
        return (await this.contract.currentFight().call()).toNumber();
    },

    async getUserProfile(userAddress) {
        const userProf = await this.contract.userProfiles(userAddress).call();
        let result = {};
        for(let key in userProf) {
            switch (key) {
                case 'currentBet':
                    result[key] = Number(this.tronWeb.fromSun(userProf[key].toNumber()));
                    break;
                case 'pendingWithdrawals':
                    result[key] = Number(this.tronWeb.fromSun(userProf[key].toNumber()));
                    break;
                case 'state':
                    result[key] = userStateEnum[userProf[key]];
                    break;
                case 'currentFight':
                    result[key] = userProf[key].toNumber();
                    break;
                case 'wins':
                    result[key] = userProf[key].toNumber();
                    break;
                default:
                    result[key] = userProf[key];
                    break;
            }
        }
        return result;
    },

    async getUserPokemons(userAddress) {
        return (await this.contract.getUserPokemons(userAddress).call()).map(item=>Number(item));
    },

    async getUserItems(userAddress) {
        return (await this.contract.getUserItems(userAddress).call()).map(item=>Number(item));
    },

    async getUserPokemonsToSale(userAddress) {
        return (await this.contract.getUserPokemonsToSale(userAddress).call()).map(item=>Number(item));
    },

    async getUserCurrentBet(address) {
        return (await this.getUserProfile(address)).currentBet;
    },

    async getUserState(address) {
        return (await this.getUserProfile(address)).state;
    },

    async getUserCurrentFight(address) {
        return (await this.getUserProfile(address)).currentFight;
    },

    async getUserPendingWithdrawals(address) {
        return (await this.getUserProfile(address)).pendingWithdrawals;
    },

    async getUserPoints(address) {
        return (await this.getUserProfile(address)).wins;
    },

    async getIsNewUser(userAddress) {
        return (await this.getUserPokemons(userAddress)).length === 0;
    },

    async getCategoryPrice(indexCat) {
        return Number(this.tronWeb.fromSun(await this.contract.getCategoryPrice(indexCat).call()));
    },

    async getCategoryTokenPrice(indexCat) {
        return (await this.contract.getCategoryTokenPrice(indexCat).call()).toNumber();
    },

    async getCategoryOffertPrice(indexCat) {
        return Number(this.tronWeb.fromSun(await this.contract.getCategoryOffertPrice(indexCat).call()));
    },

    async getCategoryOffertTokenPrice(indexCat) {
        return (await this.contract.getCategoryOffertTokenPrice(indexCat).call()).toNumber();
    },

    async getCategoryPokemons(indexCat) {
        return (await this.contract.getCategoryPokemons(indexCat).call()).map(v=>Number(v));
    },

    async getCategory(indexCat){
        const price = await this.getCategoryPrice(indexCat);
        const tokenPrice = await this.getCategoryTokenPrice(indexCat);
        const offertPrice = await this.getCategoryOffertPrice(indexCat);
        const offertTokenPrice = await this.getCategoryOffertTokenPrice(indexCat);
        const pokemons = await this.getCategoryPokemons(indexCat);
        return {
            price,
            tokenPrice,
            offertPrice,
            offertTokenPrice,
            pokemons
        }
    },

    async getFreeCategory(){
        return await getCategory(0);
    },

    async getCategoriesCount() {
        return (await this.contract.getCategoriesCount().call()).toNumber();
    },

    async getTopUsers(n, users){
        let topUsers = [];

        for (let index = 0; index < users.length; index++) {
            const userAddr = users[index];
            let points = await this.getUserPoints(userAddr);
            topUsers.push({
                user: userAddr,
                points: points
            });
        }
        return topUsers.sort((a,b)=>(b.points-a.points)).slice(0, n);
    },

    async getPokemonMarketplaceOnIndex(index) {
        let pokSale = await this.contract.pokemonMarketplace(index).call();
        return {
            pokemonType: Number(pokSale.pokemonType),
            owner: this.tronWeb.address.fromHex(pokSale.owner), 
            price: Number(this.tronWeb.fromSun(pokSale.price))
        };
    },

    async getPokemonMarketplaceCount() {
        return (await this.contract.getPokemonMarketplaceCount().call()).toNumber();
    },

    async getPokemonMarketplace() {
        const marketplaceLength = await this.getPokemonMarketplaceCount();
        let pokMarketplace = [];
        for (let index = 0; index < marketplaceLength; index++) {
            pokMarketplace.push((await this.getPokemonMarketplaceOnIndex(index)));
        }
        return pokMarketplace;
    },

    async getRandom(top) {
        return (await this.contract.random(top).call()).toNumber();
    },

    async getDefaultAccountBalance() {
        return await this.getBalance(this.getDefaultAccountAddress());
    },

    async getContractBalance() {
        return await this.getBalance(this.contract.address);
    },

    async getTokenBalance(address) {
        return (await this.contract.balanceOf(address).call()).toNumber();
    },

    async getFrozenTokenBalanceOf(address) {
        return (await this.contract.frozenBalanceOf(address).call()).toNumber();
    },

    async getUnfrozenTokenBalanceOf(address) {
        return (await this.contract.unfrozenBalanceOf(address).call()).toNumber();
    },

    async getFrozenTokensAddress() {
        return this.tronWeb.address.fromHex(await this.contract.unfrozenBalanceOf(address).call());
    },

    async getUserTokensToUnfreeze(address) {
        return (await this.contract.tokensToUnfreeze(address).call()).toNumber();
    },

    async getTotalDividends(inSun) {
        return inSun ?
                Number(await this.contract.dividends().call())
            :
                Number(this.tronWeb.fromSun(await this.contract.dividends().call()));
    },

    async getTotalFrozenSupply() {
        return (await this.contract.totalFrozenSupply().call()).toNumber();
    },

    async isDividendsActived() {
        return await this.contract.dividendsActived().call();
    },

    async getCurrentDividends() {
        let divActiv = await this.isDividendsActived();
        let totalFrozenTokens = await this.getTotalFrozenSupply();
        if(!divActiv || totalFrozenTokens === 0)
            return 0;

        let totalDiv = await this.getTotalDividends(true);
        let myFrozenTokens = await this.getFrozenTokenBalanceOf(this.getDefaultAccountAddress());
        return Number(this.tronWeb.fromSun(myFrozenTokens*totalDiv/totalFrozenTokens)).toFixed(2);
    },

    async getUsersWithFrozenTokens() {
        return await this.contract.getUsersWithFrozenTokens().call();
    },

    async getItemTrxPrices() {
        return (await this.contract.getItemTrxPrices().call()).map(v=>Number(v));
    },
    
    async getItemTokenPrices() {
        return (await this.contract.getItemTokenPrices().call()).map(v=>Number(v));
    },

    // Send functions
    async setCEO(newCeoAddress){
        return await this.contract.setCEO(newCeoAddress).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setCFO(newCfoAddress){
        return await this.contract.setCFO(newCfoAddress).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setCOO(newCooAddress){
        return await this.contract.setCOO(newCooAddress).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async mintTokenTo(user, amount){
        return await this.contract.mintTokenTo(user, amount).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },
    async burnTokenTo(user, amount){
        return await this.contract.burnTokenTo(user, amount).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },
    async setPointTo(user, amount){
        return await this.contract.setPointTo(user, amount).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setMinBetAllowed(newMinBetAllowed){
        return await this.contract.setMinBetAllowed(this.tronWeb.toSun(newMinBetAllowed)).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setPercentContractProfit(newPercentProfits){
        return await this.contract.setPercentContractProfit(newPercentProfits).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async insertBet(amount){
        return await this.contract.insertBet().send({
            callValue: this.tronWeb.toSun(amount),
            shouldPollResponse: true
        });
    },

    // Esta funcion retorn un entero que es la pelea
    // este se debe guardar para posteriormente llamar a setWinner con el user ganador de la pelea
    async initFight(gamers){
        return (await this.contract.initFight(gamers).send({
            callValue: 0,
            shouldPollResponse: true
        })).toNumber();
    },

    // Esta funcion setea una pelea especifica si la pelea ya exciste la resetea con los jugadores 
    // que recive en el paramentro gamers
    async initThisFight(gamers, fight){
        return await this.contract.initThisFight(gamers, fight).send({
            callValue: 0
        });
    },

    async setWinner(fightIndex, winner){
        return await this.contract.setWinner(fightIndex, winner).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async withdrawCFO(amount, to){
        to = to!=0 ? to : this.getDefaultAccountAddress();
        return await this.contract.withdrawCFO(this.tronWeb.toSun(amount), to).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async withdraw(){
        return await this.contract.withdraw().send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    // Pokemon en base 0
    async givePokemonTo(userAddr, pokemonIndex) {
        return await this.contract.givePokemonTo(userAddr, pokemonIndex).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async removePokemonTo(userAddr, pokemonIndex) {
        return await this.contract.removePokemonTo(userAddr, pokemonIndex).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async giveItemTo(userAddr, itemIndex) {
        return await this.contract.giveItemTo(userAddr, itemIndex).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async removeItemTo(userAddr, itemIndex) {
        return await this.contract.removeItemTo(userAddr, itemIndex).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async addCategory(priceCategory, tokenPriceCategory, offertPriceCategory, offertTokenPriceCategory, pokemonsCategory) {
        return await this.contract.addCategory(
            this.tronWeb.toSun(priceCategory),
            tokenPriceCategory,
            this.tronWeb.toSun(offertPriceCategory),
            offertTokenPriceCategory,
            pokemonsCategory
        ).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setCategory(indexCateg, priceCategory, tokenPriceCategory, offertPriceCategory, offertTokenPriceCategory, pokemonsCategory) {
        return await this.contract.setCategory(
            indexCateg,
            this.tronWeb.toSun(priceCategory),
            tokenPriceCategory,
            this.tronWeb.toSun(offertPriceCategory),
            offertTokenPriceCategory,
            pokemonsCategory
        ).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setCategoryPrice(indexCateg, priceCategory) {
        return await this.contract.setCategoryPrice(indexCateg, this.tronWeb.toSun(priceCategory)).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setCategoryTokenPrice(indexCateg, tokenPriceCategory) {
        return await this.contract.setCategoryTokenPrice(indexCateg, tokenPriceCategory).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setCategoryOffertPrice(indexCateg, offertPriceCategory) {
        return await this.contract.setCategoryOffertPrice(indexCateg, this.tronWeb.toSun(offertPriceCategory)).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setCategoryOffertTokenPrice(indexCateg, offertTokenPriceCategory) {
        return await this.contract.setCategoryOffertTokenPrice(indexCateg, offertTokenPriceCategory).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setCategoryPokemons(indexCateg, pokemons) {
        return await this.contract.setCategoryPokemons(indexCateg, pokemons).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async buyPokemon(indexCateg, amount) {
        return (await this.contract.buyPokemon(indexCateg).send({
            callValue: this.tronWeb.toSun(amount),
            shouldPollResponse: true
        })).toNumber();
    },

    async buy3Pokemons(indexCateg, amount) {
        let res = await this.contract.buy3Pokemons(indexCateg).send({
            callValue: this.tronWeb.toSun(amount),
            shouldPollResponse: true
        });
        return res.map(v => Number(v));
    },

    async buy3PokemonsWithTokens(indexCateg) {
        let res = await this.contract.buy3PokemonsWithTokens(indexCateg).send({
            callValue: 0,
            shouldPollResponse: true
        });
        return res.map(v => Number(v));
    },

    async buyPokemonWithToken(indexCateg) {
        return (await this.contract.buyPokemonWithToken(indexCateg).send({
            callValue: 0,
            shouldPollResponse: true
        })).toNumber();
    },

    async sellPokemon(pokemon, pokemonPrice) {
        return await this.contract.sellPokemon(pokemon, this.tronWeb.toSun(pokemonPrice)).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async stopSellingPokemon(pokemonMarketplaceIndex) {
        return await this.contract.stopSellingPokemon(pokemonMarketplaceIndex).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async buyPokemonFromMarketplace(pokemonMarketplaceIndex, amount) {
        return await this.contract.buyPokemonFromMarketplace(pokemonMarketplaceIndex).send({
            callValue: this.tronWeb.toSun(amount),
            shouldPollResponse: true
        });
    },

    ////// FUNCIONAMIENTO DE freeze, unfreeze, try unfreeze
    //
    // El user llamara a esta funcion cuando quiera descongelar sus tokens
    // para lo cual el amount debe ser menor o igual q la cantidad de tokens congelados
    // La cantidad de tokens que el user decea descongelar se guardara en un mapping al cual se puede
    // acceder mediante getUserTokensToUnfreeze(owner) mediante el cual el COO puede asegurar que dicho user
    // quiere descongelar sus tokens
    // el COO sera el unico encargado de llamar a unfreezeTokens para descongelar los tokens de este user
    // para lo cual debera esperar 24 horas a partir de que el user muestre su dicposicion a descongelar los tokens
    // para hacer se puede notificar desde el frontend al backend cuando se llame a esta funcion (tryUnfreezeTokens)
    // o tambien se puede escuchar al evento TryUnfreeze(address indexed owner, uint256 value) desde el backend
    // y comensar un conteo de 24 horas antes de que el el coo llame a unfreezeTokens para descongelar los tokens del user
    // OJO: si el user llama varias veces a la funcion tryUnfreezeTokens antes de que se termine el conteo entonces
    // se debe resetear este conteo con la nueva dispocicion. Es decir que si yo llamo a tryUnfreezeTokens(10)
    // entonces:
    // 1: debo tener >=10 tokens congelado
    // 2: si no llamo mas a tryUnfreezeTokens se me deben descongelar los tokens en 24 horas
    // 3: Si antes de que se cumplan las 24 horas vuelvo a llamar a tryUnfreezeTokens(11)
    //    se me deben retirar 11 tokens(si tengo suficientes) pero dentro de 24 horas
    //    a partir de que llame a tryUnfreezeTokens(11)
    async freezeTokens(amount) {
        return await this.contract.freezeTokens(amount).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async unfreezeTokens(owner, amount) {
        return await this.contract.unfreezeTokens(owner, amount).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async tryUnfreezeTokens(amount) {
        return await this.contract.tryUnfreezeTokens(amount).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    // returna true si el pokemon fue reclamado correctamente false en caso contrario
    async claimFreePokemon(pokemonType) {
        return await this.contract.claimFreePokemon(pokemonType).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async activateDividends() {
        return await this.contract.activateDividends().send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async deactivateDividends() {
        return await this.contract.deactivateDividends().send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async rewardDistribution() {
        return await this.contract.rewardDistribution().send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async rewardDistributionManualy() {
        let users = this.getUsersWithFrozenTokens();
        for (let index = 0; index < users.length; index++) {
            const userAddress = users[index];
            await this.rewardUserDistribution(userAddress);
        }
        await this.resetDividends();
    },

    async rewardUserDistribution(userAddress) {
        return await this.contract.rewardUserDistribution(userAddress).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async resetDividends() {
        return await this.contract.resetDividends().send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setItemTrxPrices(itemTrxPrices) {
        return await this.contract.setItemTrxPrices(itemTrxPrices).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async setItemTokenPrices(itemTokenPrices) {
        return await this.contract.setItemTokenPrices(itemTokenPrices).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },

    async buyItem(indexItem, amount) {
        return await this.contract.buyItem(indexItem).send({
            callValue: this.tronWeb.toSun(amount),
            shouldPollResponse: true
        });
    },

    async buyItemWithToken(indexItem) {
        return await this.contract.buyItemWithToken(indexItem).send({
            callValue: 0,
            shouldPollResponse: true
        });
    },
    
};

// export default utils;
