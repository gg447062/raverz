const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Ravers', function () {
  it('Should return the correct owner', async function () {
    const Ravers = await ethers.getContractFactory('Ravers');
    const ravers = await Ravers.deploy();
    const owner = await ethers.getSigner();
    await ravers.deployed();
    expect(await ravers.owner()).to.equal(owner.address);
  });
  it('Should mint correctly', async function() {
    const Ravers = await ethers.getContractFactory('Ravers');
    const ravers = await Ravers.deploy();
    await ravers.deployed()

    await ravers.mint({value=0.01})
  })
});
