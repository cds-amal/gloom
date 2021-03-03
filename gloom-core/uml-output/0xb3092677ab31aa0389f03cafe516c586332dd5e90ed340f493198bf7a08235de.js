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
      returnKind: 'revert',
      error: {
        kind: 'revert',
        abi: {
          name: 'Error',
          type: 'error',
          inputs: [ { name: '', type: 'string', internalType: 'string' } ]
        },
        status: false,
        arguments: [
          {
            value: {
              type: { typeClass: 'string', typeHint: 'string' },
              kind: 'value',
              value: { kind: 'valid', asString: 'Sender not authorized' }
            }
          }
        ],
        decodingMode: 'full'
      }
    }
  ],
  origin: '0x31d88A7d55a75c78d988103E075C6842f3Cb3128'
}

module.exports = txlog;
