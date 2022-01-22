import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';

const ADDRESS = '0x3780Cd5d6E4F1521dD34125021A312cB12D52c30';
const ABI = require('../../artifacts/contracts/Ravers.sol/Ravers.json').abi;
const openseaURL =
  'https://testnets.opensea.io/assets/0x3780cd5d6e4f1521dd34125021a312cb12d52c30';

const Minter = ({ user }) => {
  const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3 } = useMoralis();
  const [minting, setMinting] = useState(false);
  const [url, setUrl] = useState(null);

  const mint = async () => {
    if (isWeb3Enabled && !minting) {
      setMinting(true);
      const address = user.get('ethAddress');
      const ravers = new web3.eth.Contract(ABI, ADDRESS);
      const price = await ravers.methods.mintRate().call();
      ravers.methods
        .safeMint(address)
        .send({ from: address, value: price })
        .on('receipt', (receipt) => {
          const tokenId = receipt.events.Transfer.returnValues.tokenId;
          setUrl(`${openseaURL}/${tokenId}`);
          setMinting(false);
        });
    }
  };

  useEffect(async () => {
    await enableWeb3();
  }, []);

  return (
    <React.Fragment>
      <button disabled={isWeb3EnableLoading} onClick={mint}>
        {minting ? 'minting...' : 'mint'}
      </button>
      {url && (
        <a href={url} target="_blank">
          VIEW NFT
        </a>
      )}
    </React.Fragment>
  );
};

export default Minter;
