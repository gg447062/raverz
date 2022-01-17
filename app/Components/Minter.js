import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const ADDRESS = '0x3780Cd5d6E4F1521dD34125021A312cB12D52c30';
const ABI = require('../../artifacts/contracts/Ravers.sol/Ravers.json').abi;

const Minter = ({ user }) => {
  const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3 } = useMoralis();
  let minting = false;
  const mint = async () => {
    if (isWeb3Enabled && !minting) {
      minting = true;
      const address = user.get('ethAddress');
      const ravers = new web3.eth.Contract(ABI, ADDRESS);
      const price = await ravers.methods.mintRate().call();
      const minted = ravers.methods
        .safeMint(address)
        .send({ from: address, value: price });

      setTimeout(() => {
        console.log(minted);
        minting = false;
      }, 3000);
    }
  };

  useEffect(async () => {
    await enableWeb3();
  }, []);

  return (
    <button disabled={isWeb3EnableLoading} onClick={mint}>
      mint
    </button>
  );
};

export default Minter;
