const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Ravers', () => {
  let Ravers;
  let ravers;
  let owner;
  let addr1;
  beforeEach(async function () {
    Ravers = await hre.ethers.getContractFactory('Ravers');
    ravers = await Ravers.deploy();
    [owner, addr1] = await ethers.getSigners();
  });
  describe('Deployment', () => {
    it('should return the correct name and symbol', async () => {
      await ravers.deployed();
      expect(await ravers.name()).to.equal('Ravers');
      expect(await ravers.symbol()).to.equal('RAV');
    });
    it('should return the correct owner', async () => {
      await ravers.deployed();

      expect(await ravers.owner()).to.equal(owner.address);
    });
    it('should assign the correct mint rate', async () => {
      const mintRate = ethers.utils.parseEther('0.01').toString();

      expect((await ravers.mintRate()).toString()).to.equal(mintRate);
    });
  });
  describe('Minting', () => {
    beforeEach(async function () {
      const overrides = { value: ethers.utils.parseEther('0.01') };
      await ravers.safeMint(addr1.address, overrides);
    });
    it('should mint correctly', async () => {
      expect(await ravers.ownerOf('0')).to.equal(addr1.address);
    });
    it('should provide the correct token URI', async () => {
      expect(await ravers.tokenURI('0')).to.equal(
        'ipfs://QmeDizPmMPH9ymDA68EwMrq4iA36RrRzV3Zi3SAT2amQGa/0'
      );
    });
    it('should transfer tokens correctly', async () => {
      await ravers.connect(addr1).approve(owner.address, 0);
      await ravers['safeTransferFrom(address,address,uint256)'](
        addr1.address,
        owner.address,
        0
      );
      expect(await ravers.ownerOf('0')).to.equal(owner.address);
    });
  });
});
