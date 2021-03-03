const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x0c3329B9831E6A2fe595Ecba59865B3EE4Ca1592',
      contextHash: '0xd4d043924af776e08124778920c5edc8e33ecd758be7e61037e27de8797c03e5',
      value: BigNumber("0xde0b6b3a7640000"),
      kind: 'function',
      isDelegate: false,
      functionName: 'buyerPayment',
      contractName: 'Escrow',
      arguments: [],
      actions: [],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0xfeB9e9b0CDD97c1aD2343715001FF7818DA5a000'
}

module.exports = txlog;
