const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
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
                              asAddress: '0x1838BbE94ac853f3DE6Dd7105B665Ad1b59d930c',
                              rawAsHex: '0x0000000000000000000000001838bbe94ac853f3de6dd7105b665ad1b59d930c'
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
                          address: '0x55a8402D05ad0215D9921898D22c2AF82f303abf',
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
                                  asAddress: '0x1838BbE94ac853f3DE6Dd7105B665Ad1b59d930c',
                                  rawAsHex: '0x0000000000000000000000001838bbe94ac853f3de6dd7105b665ad1b59d930c'
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
                              asAddress: '0x1838BbE94ac853f3DE6Dd7105B665Ad1b59d930c',
                              rawAsHex: '0x0000000000000000000000001838bbe94ac853f3de6dd7105b665ad1b59d930c'
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
                          asAddress: '0x1838BbE94ac853f3DE6Dd7105B665Ad1b59d930c',
                          rawAsHex: '0x0000000000000000000000001838bbe94ac853f3de6dd7105b665ad1b59d930c'
                        }
                      }
                    }
                  ],
                  returnKind: 'return',
                  returnValues: []
                },
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
                              asAddress: '0x675b34DAb2Fc085D42FB69c01f506AAfaa3B5043',
                              rawAsHex: '0x000000000000000000000000675b34dab2fc085d42fb69c01f506aafaa3b5043'
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
                          address: '0x55a8402D05ad0215D9921898D22c2AF82f303abf',
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
                                  asAddress: '0x675b34DAb2Fc085D42FB69c01f506AAfaa3B5043',
                                  rawAsHex: '0x000000000000000000000000675b34dab2fc085d42fb69c01f506aafaa3b5043'
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
                              asAddress: '0x675b34DAb2Fc085D42FB69c01f506AAfaa3B5043',
                              rawAsHex: '0x000000000000000000000000675b34dab2fc085d42fb69c01f506aafaa3b5043'
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
                          asAddress: '0x675b34DAb2Fc085D42FB69c01f506AAfaa3B5043',
                          rawAsHex: '0x000000000000000000000000675b34dab2fc085d42fb69c01f506aafaa3b5043'
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
              returnKind: 'return',
              returnValues: []
            }
          ],
          returnKind: 'return',
          returnValues: []
        }
      ],
      data: '0x99c672270000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000020000000000000000000000001838bbe94ac853f3de6dd7105b665ad1b59d930c000000000000000000000000675b34dab2fc085d42fb69c01f506aafaa3b5043',
      returnKind: 'return'
    }
  ],
  origin: '0x4aa2D6F71E8892e8Ddf764344e46c339C6085820'
}

module.exports = txlog;
