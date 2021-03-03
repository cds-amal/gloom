const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x55a8402D05ad0215D9921898D22c2AF82f303abf',
      contextHash: '0xd1c70e30a1b3a733298f359a24708f0e06a60b47701ff66290ccbeafd2b9ead2',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'createAuction',
      contractName: 'AuctionFactory',
      arguments: [
        {
          name: 'logic',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x65378459b9380a0feb31EA857992afbA146e95CD',
              rawAsHex: '0x00000000000000000000000065378459b9380a0feb31ea857992afba146e95cd'
            }
          }
        },
        {
          name: 'tokenAmount',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x56bc75e2d63100000"),
              rawAsBN: BigNumber("0x56bc75e2d63100000")
            }
          }
        },
        {
          name: 'tokenContractAddress',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
              rawAsHex: '0x0000000000000000000000000bc529c00c6401aef6d220be8c6ea1667f6ad93e'
            }
          }
        }
      ],
      actions: [
        {
          type: 'callinternal',
          actions: [
            {
              type: 'callexternal',
              address: '0xC6105D3a41cC62f10F914bb731c15191aeA91Ab1',
              contextHash: null,
              value: BigNumber("0x0"),
              kind: 'constructor',
              isDelegate: undefined,
              functionName: undefined,
              contractName: undefined,
              arguments: undefined,
              actions: [],
              salt: null,
              returnKind: 'return'
            },
            {
              type: 'callexternal',
              address: '0xC6105D3a41cC62f10F914bb731c15191aeA91Ab1',
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
                  functionName: 'initialize',
                  contractName: 'Auction',
                  arguments: [
                    {
                      name: '_seller',
                      value: {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: true
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x4aa2D6F71E8892e8Ddf764344e46c339C6085820',
                          rawAsHex: '0x0000000000000000000000004aa2d6f71e8892e8ddf764344e46c339c6085820'
                        }
                      }
                    },
                    {
                      name: '_tokenAmount',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: {
                          asBN: BigNumber("0x56bc75e2d63100000"),
                          rawAsBN: BigNumber("0x56bc75e2d63100000")
                        }
                      }
                    },
                    {
                      name: '_tokenContractAddress',
                      value: {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
                          rawAsHex: '0x0000000000000000000000000bc529c00c6401aef6d220be8c6ea1667f6ad93e'
                        }
                      }
                    }
                  ],
                  actions: [
                    {
                      type: 'callinternal',
                      actions: [
                        {
                          type: 'callinternal',
                          actions: [],
                          functionName: 'isConstructor',
                          contractName: 'Initializable',
                          arguments: [],
                          returnKind: 'return',
                          returnValues: [
                            {
                              name: undefined,
                              value: {
                                type: { typeClass: 'bool', typeHint: 'bool' },
                                kind: 'value',
                                value: { asBoolean: false }
                              }
                            }
                          ]
                        }
                      ],
                      functionName: 'initialize',
                      contractName: 'Auction',
                      arguments: [
                        {
                          name: '_seller',
                          value: {
                            type: {
                              typeClass: 'address',
                              kind: 'specific',
                              payable: true
                            },
                            kind: 'value',
                            value: {
                              asAddress: '0x4aa2D6F71E8892e8Ddf764344e46c339C6085820',
                              rawAsHex: '0x0000000000000000000000004aa2d6f71e8892e8ddf764344e46c339c6085820'
                            }
                          }
                        },
                        {
                          name: '_tokenAmount',
                          value: {
                            type: {
                              typeClass: 'uint',
                              bits: 256,
                              typeHint: 'uint256'
                            },
                            kind: 'value',
                            value: {
                              asBN: BigNumber("0x56bc75e2d63100000"),
                              rawAsBN: BigNumber("0x56bc75e2d63100000")
                            }
                          }
                        },
                        {
                          name: '_tokenContractAddress',
                          value: {
                            type: {
                              typeClass: 'address',
                              kind: 'specific',
                              payable: false
                            },
                            kind: 'value',
                            value: {
                              asAddress: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
                              rawAsHex: '0x0000000000000000000000000bc529c00c6401aef6d220be8c6ea1667f6ad93e'
                            }
                          }
                        }
                      ],
                      returnKind: 'return',
                      returnValues: []
                    }
                  ],
                  returnKind: 'return',
                  returnValues: []
                }
              ],
              data: '0xc350a1b50000000000000000000000004aa2d6f71e8892e8ddf764344e46c339c60858200000000000000000000000000000000000000000000000056bc75e2d631000000000000000000000000000000bc529c00c6401aef6d220be8c6ea1667f6ad93e',
              returnKind: 'return'
            }
          ],
          functionName: 'deployMinimal',
          contractName: 'ProxyFactory',
          arguments: [
            {
              name: '_logic',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x65378459b9380a0feb31EA857992afbA146e95CD',
                  rawAsHex: '0x00000000000000000000000065378459b9380a0feb31ea857992afba146e95cd'
                }
              }
            },
            {
              name: '_data',
              value: {
                type: {
                  typeClass: 'bytes',
                  kind: 'dynamic',
                  location: 'memory',
                  typeHint: 'bytes'
                },
                kind: 'value',
                value: {
                  asHex: '0xc350a1b50000000000000000000000004aa2d6f71e8892e8ddf764344e46c339c60858200000000000000000000000000000000000000000000000056bc75e2d631000000000000000000000000000000bc529c00c6401aef6d220be8c6ea1667f6ad93e'
                }
              }
            }
          ],
          returnKind: 'return',
          returnValues: [
            {
              name: 'proxy',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0xC6105D3a41cC62f10F914bb731c15191aeA91Ab1',
                  rawAsHex: '0x000000000000000000000000c6105d3a41cc62f10f914bb731c15191aea91ab1'
                }
              }
            }
          ]
        }
      ],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x4aa2D6F71E8892e8Ddf764344e46c339C6085820'
}

module.exports = txlog;
