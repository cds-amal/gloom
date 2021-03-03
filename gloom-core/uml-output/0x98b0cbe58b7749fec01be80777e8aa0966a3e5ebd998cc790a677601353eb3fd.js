const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xCA86598f3386C6C94dfACf23cAab371FB5AFB04b',
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
                      asAddress: '0x67C9683f137D94c589f677B47B8957bC5dA723FE',
                      rawAsHex: '0x00000000000000000000000067c9683f137d94c589f677b47b8957bc5da723fe'
                    }
                  }
                ]
              }
            }
          ],
          actions: [
            {
              type: 'callinternal',
              actions: [
                {
                  type: 'callinternal',
                  actions: [
                    {
                      type: 'callinternal',
                      actions: [],
                      functionName: 'isInvitedBidder',
                      contractName: 'Auction',
                      arguments: [
                        {
                          name: 'bidderAddress',
                          value: {
                            type: {
                              typeClass: 'address',
                              kind: 'specific',
                              payable: false
                            },
                            kind: 'value',
                            value: {
                              asAddress: '0x67C9683f137D94c589f677B47B8957bC5dA723FE',
                              rawAsHex: '0x00000000000000000000000067c9683f137d94c589f677b47b8957bc5da723fe'
                            }
                          }
                        }
                      ],
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
                    },
                    {
                      type: 'callinternal',
                      actions: [
                        {
                          type: 'callexternal',
                          address: '0xAf9798905714E8F781A06D08C5172e1Ed1620Bc0',
                          contextHash: '0xd1c70e30a1b3a733298f359a24708f0e06a60b47701ff66290ccbeafd2b9ead2',
                          value: BigNumber("0x0"),
                          kind: 'function',
                          isDelegate: false,
                          functionName: 'registerBidder',
                          contractName: 'AuctionFactory',
                          arguments: [
                            {
                              name: 'bidder',
                              value: {
                                type: {
                                  typeClass: 'address',
                                  kind: 'specific',
                                  payable: false
                                },
                                kind: 'value',
                                value: {
                                  asAddress: '0x67C9683f137D94c589f677B47B8957bC5dA723FE',
                                  rawAsHex: '0x00000000000000000000000067c9683f137d94c589f677b47b8957bc5da723fe'
                                }
                              }
                            }
                          ],
                          actions: [],
                          returnValues: [],
                          returnKind: 'return'
                        }
                      ],
                      functionName: 'registerBidderAtFactory',
                      contractName: 'Auction',
                      arguments: [
                        {
                          name: 'bidderAddress',
                          value: {
                            type: {
                              typeClass: 'address',
                              kind: 'specific',
                              payable: false
                            },
                            kind: 'value',
                            value: {
                              asAddress: '0x67C9683f137D94c589f677B47B8957bC5dA723FE',
                              rawAsHex: '0x00000000000000000000000067c9683f137d94c589f677b47b8957bc5da723fe'
                            }
                          }
                        }
                      ],
                      returnKind: 'return',
                      returnValues: []
                    }
                  ],
                  functionName: 'inviteBidder',
                  contractName: 'Auction',
                  arguments: [
                    {
                      name: 'bidderAddress',
                      value: {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x67C9683f137D94c589f677B47B8957bC5dA723FE',
                          rawAsHex: '0x00000000000000000000000067c9683f137d94c589f677b47b8957bc5da723fe'
                        }
                      }
                    }
                  ],
                  returnKind: 'return',
                  returnValues: []
                }
              ],
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
                          asAddress: '0x67C9683f137D94c589f677B47B8957bC5dA723FE',
                          rawAsHex: '0x00000000000000000000000067c9683f137d94c589f677b47b8957bc5da723fe'
                        }
                      }
                    ]
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
      data: '0x99c672270000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000067c9683f137d94c589f677b47b8957bc5da723fe',
      returnKind: 'return'
    }
  ],
  origin: '0x08e93c4BAccEBA7510d63b89E4c8496F6C8B34A4'
}

module.exports = txlog;
