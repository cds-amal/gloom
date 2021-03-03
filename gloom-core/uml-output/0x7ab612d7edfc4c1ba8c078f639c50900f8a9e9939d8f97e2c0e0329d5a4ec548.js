const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xBf39eeB4bE3be5127DD71dC9efa5Fc0763639677',
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
              returnKind: 'revert',
              error: {
                kind: 'revert',
                abi: {
                  name: 'Error',
                  type: 'error',
                  inputs: [
                    {
                      name: '',
                      type: 'string',
                      internalType: 'string'
                    }
                  ]
                },
                status: false,
                arguments: [
                  {
                    value: {
                      type: { typeClass: 'string', typeHint: 'string' },
                      kind: 'value',
                      value: {
                        kind: 'valid',
                        asString: 'Sender not authorized'
                      }
                    }
                  }
                ],
                decodingMode: 'full'
              }
            }
          ],
          returnKind: 'unwind'
        }
      ],
      data: '0xf34eb206',
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
  origin: '0x203d27a0AC36fEb6e7bdE9256DC45804FB874e77'
}

module.exports = txlog;
