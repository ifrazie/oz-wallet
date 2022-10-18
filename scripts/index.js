// scripts/index.js
async function main () {
// Set up an ethers contract, representing our deployed MoolahCoin instance
    const address = '0x0A0a6f9b95D534808Af31E86511a49CE9660601d';
    const MoolahCoin = await ethers.getContractFactory('MoolahCoin');
    const moolahcoin = await MoolahCoin.attach(address);

    // Call the totalSupply() function of the deployed MoolahCoin contract
    const supply = await moolahcoin.totalSupply();
    console.log('MoolahCoin total supply is', supply.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });