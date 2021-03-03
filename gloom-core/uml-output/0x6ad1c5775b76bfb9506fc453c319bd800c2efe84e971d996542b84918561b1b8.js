const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xDb06A9E66E6DfB7C4557B6310203A9493953f4DA',
      contextHash: null,
      value: BigNumber("0x0"),
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
          functionName: 'setupBidders',
          contractName: 'Auction',
          arguments: [
            {
              name: '_bidderDeposit',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0xde0b6b3a7640000"),
                  rawAsBN: BigNumber("0xde0b6b3a7640000")
                }
              }
            },
            {
              name: '_bidderAddresses',
              value: {
                type: {
                  typeClass: 'array',
                  baseType: {
                    typeClass: 'address',
                    kind: 'specific',
                    payable: false
                  },
                  kind: 'dynamic',
                  location: 'calldata',
                  typeHint: 'address[]'
                },
                kind: 'value',
                value: [
                  {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x1838BbE94ac853f3DE6Dd7105B665Ad1b59d930c',
                      rawAsHex: '0x0000000000000000000000001838bbe94ac853f3de6dd7105b665ad1b59d930c'
                    }
                  },
                  {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x675b34DAb2Fc085D42FB69c01f506AAfaa3B5043',
                      rawAsHex: '0x000000000000000000000000675b34dab2fc085d42fb69c01f506aafaa3b5043'
                    }
                  }
                ]
              }
            }
          ],
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: 'setupBidders',
              contractName: 'Auction',
              arguments: [
                {
                  name: '_bidderDeposit',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: {
                      asBN: BigNumber("0xde0b6b3a7640000"),
                      rawAsBN: BigNumber("0xde0b6b3a7640000")
                    }
                  }
                },
                {
                  name: '_bidderAddresses',
                  value: {
                    type: {
                      typeClass: 'array',
                      baseType: {
                        typeClass: 'address',
                        kind: 'specific',
                        payable: false
                      },
                      kind: 'dynamic',
                      location: 'calldata',
                      typeHint: 'address[]'
                    },
                    kind: 'value',
                    value: [
                      {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x1838BbE94ac853f3DE6Dd7105B665Ad1b59d930c',
                          rawAsHex: '0x0000000000000000000000001838bbe94ac853f3de6dd7105b665ad1b59d930c'
                        }
                      },
                      {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x675b34DAb2Fc085D42FB69c01f506AAfaa3B5043',
                          rawAsHex: '0x000000000000000000000000675b34dab2fc085d42fb69c01f506aafaa3b5043'
                        }
                      }
                    ]
                  }
                }
              ],
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
      data: '0x99c672270000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000020000000000000000000000001838bbe94ac853f3de6dd7105b665ad1b59d930c000000000000000000000000675b34dab2fc085d42fb69c01f506aafaa3b5043',
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
