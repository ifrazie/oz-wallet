// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
async function main () {
  // deploy MoolahCoin contract
  const MoolahCoin = await ethers.getContractFactory('MoolahCoin');
  console.log('Deploying MoolahCoin...');
  const moolahcoin = await MoolahCoin.deploy();
  await moolahcoin.deployed();
  console.log('MoolahCoin deployed to:', moolahcoin.address);

  const Condos = await ethers.getContractFactory('Condos');
  console.log('Deploying Condos...');
  const condos = await Condos.deploy();
  await condos.deployed();
  console.log('Condos deployed to:', condos.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
