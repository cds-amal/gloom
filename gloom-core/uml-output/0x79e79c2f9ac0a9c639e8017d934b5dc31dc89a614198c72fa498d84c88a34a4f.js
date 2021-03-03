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
      functionName: 'sellerWithdraw',
      contractName: 'Escrow',
      arguments: [],
      actions: [
        {
          type: 'callinternal',
          actions: [],
          functionName: 'bothOk',
          contractName: 'Escrow',
          arguments: [],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: true }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x736c200178e105405a1708FB4EcFedcB1b1ac5BE',
          contextHash: null,
          value: BigNumber("0xde0b6b3a7640000"),
          kind: 'message',
          isDelegate: false,
          functionName: undefined,
          contractName: undefined,
          arguments: undefined,
          actions: [],
          data: '0x',
          returnKind: 'return'
        }
      ],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x736c200178e105405a1708FB4EcFedcB1b1ac5BE'
}

module.exports = txlog;
