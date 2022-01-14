import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const Minter = () => {
  const { enableWeb3, isWeb3EnableLoading, isWeb3Enabled } = useMoralis();

  const mint = () => {
    //mint
  };

  useEffect(() => {
    if (!isWeb3Enabled) {
      enableWeb3();
    }
  }, []);

  return (
    <button disabled={isWeb3EnableLoading} onClick={mint}>
      mint
    </button>
  );
};

export default Minter;
