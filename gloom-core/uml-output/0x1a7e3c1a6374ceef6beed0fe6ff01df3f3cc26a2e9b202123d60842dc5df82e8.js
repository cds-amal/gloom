const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x0c3329B9831E6A2fe595Ecba59865B3EE4Ca1592',
      contextHash: '0xd4d043924af776e08124778920c5edc8e33ecd758be7e61037e27de8797c03e5',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'startWithdraw',
      contractName: 'Escrow',
      arguments: [],
      actions: [],
      returnValues: [
        {
          value: {
            type: { typeClass: 'bool', typeHint: 'bool' },
            kind: 'value',
            value: { asBoolean: true }
          }
        }
      ],
      returnKind: 'return'
    }
  ],
  origin: '0xce812eb317C014b2d9d7173eF37979fa2239F3B1'
}

module.exports = txlog;
