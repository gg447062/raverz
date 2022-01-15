// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Ravers is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 public mintRate = 0.01 ether;

    constructor() ERC721("Ravers", "RAV") {}

    function _baseURI() internal pure override returns (string memory) {
        return "QmeDizPmMPH9ymDA68EwMrq4iA36RrRzV3Zi3SAT2amQGa/";
    }

    function safeMint(address to) public payable {
        require(msg.value >= mintRate, 'the minimum price is 0.01');
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }
}
