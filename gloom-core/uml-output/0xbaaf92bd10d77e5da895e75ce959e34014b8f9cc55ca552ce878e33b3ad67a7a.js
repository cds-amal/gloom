const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xAf9798905714E8F781A06D08C5172e1Ed1620Bc0',
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
              asAddress: '0x9221b7F7AFB96adBBEE4bc6D003Cc6f598ACdEA3',
              rawAsHex: '0x0000000000000000000000009221b7f7afb96adbbee4bc6d003cc6f598acdea3'
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
              address: '0x47A066001ECa54318fEA5eDAF1D8E5F6078FfbEE',
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
              address: '0x47A066001ECa54318fEA5eDAF1D8E5F6078FfbEE',
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
                  address: '0x9221b7F7AFB96adBBEE4bc6D003Cc6f598ACdEA3',
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
                          asAddress: '0x08e93c4BAccEBA7510d63b89E4c8496F6C8B34A4',
                          rawAsHex: '0x00000000000000000000000008e93c4bacceba7510d63b89e4c8496f6c8b34a4'
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
                              asAddress: '0x08e93c4BAccEBA7510d63b89E4c8496F6C8B34A4',
                              rawAsHex: '0x00000000000000000000000008e93c4bacceba7510d63b89e4c8496f6c8b34a4'
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
              data: '0xc350a1b500000000000000000000000008e93c4bacceba7510d63b89e4c8496f6c8b34a40000000000000000000000000000000000000000000000056bc75e2d631000000000000000000000000000000bc529c00c6401aef6d220be8c6ea1667f6ad93e',
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
                  asAddress: '0x9221b7F7AFB96adBBEE4bc6D003Cc6f598ACdEA3',
                  rawAsHex: '0x0000000000000000000000009221b7f7afb96adbbee4bc6d003cc6f598acdea3'
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
                  asHex: '0xc350a1b500000000000000000000000008e93c4bacceba7510d63b89e4c8496f6c8b34a40000000000000000000000000000000000000000000000056bc75e2d631000000000000000000000000000000bc529c00c6401aef6d220be8c6ea1667f6ad93e'
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
                  asAddress: '0x47A066001ECa54318fEA5eDAF1D8E5F6078FfbEE',
                  rawAsHex: '0x00000000000000000000000047a066001eca54318fea5edaf1d8e5f6078ffbee'
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
  origin: '0x08e93c4BAccEBA7510d63b89E4c8496F6C8B34A4'
}

module.exports = txlog;
