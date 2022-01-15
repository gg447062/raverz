const fs = require('fs');

const seed = () => {
  const CID = {
    0: 'https://gateway.pinata.cloud/ipfs/QmR8j5oUQA3z4vrFEP3rpsXUoN5hgykJWBsvXQ5XuQkmkT/',
    1: 'https://gateway.pinata.cloud/ipfs/QmZgipRr33s8FATpR6czRvC1WZCBK33A3ypQb9rELvMrcS/',
    2: 'https://gateway.pinata.cloud/ipfs/QmY6ZLbAYmwQ7KuavzmdjCt5pVn2LA1RWrnuCZaHdtjwuS/',
  };

  for (let i = 0; i < 6970; i++) {
    let url;
    if (i <= 2323) {
      url = CID[0];
    } else if (i <= 4646) {
      url = CID[1];
    } else {
      url = CID[2];
    }
    const metadata = {
      name: `Ravers #${i}`,
      description: 'a raver',
      image: `${url}${i}.png`,
    };

    fs.writeFileSync(`./metadata/${i}`, JSON.stringify(metadata));
    console.log(`json file ${i} written`);
  }
};

seed();
