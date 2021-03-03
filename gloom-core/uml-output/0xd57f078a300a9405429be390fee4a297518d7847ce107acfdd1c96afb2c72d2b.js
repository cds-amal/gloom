const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x1fbe6a2326718AB7DD5359467920A766C78cc5a7',
      contextHash: null,
      value: BigNumber("0xde0b6b3a7640000"),
      kind: 'message',
      isDelegate: false,
      functionName: undefined,
      contractName: undefined,
      arguments: undefined,
      actions: [
        {
          type: 'callexternal',
          address: '0x65378459b9380a0feb31EA857992afbA146e95CD',
          contextHash: '0xe934f2513021051a0ea41081607919e1fdc5fd07ed695091038e39421d408472',
          value: null,
          kind: 'function',
          isDelegate: true,
          functionName: 'receiveSellerDeposit',
          contractName: 'Auction',
          arguments: [],
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: 'receiveSellerDeposit',
              contractName: 'Auction',
              arguments: [],
              returnKind: 'return',
              returnValues: []
            }
          ],
          returnKind: 'return',
          returnValues: []
        }
      ],
      data: '0xf34eb206',
      returnKind: 'return'
    }
  ],
  origin: '0x4aa2D6F71E8892e8Ddf764344e46c339C6085820'
}

module.exports = txlog;
