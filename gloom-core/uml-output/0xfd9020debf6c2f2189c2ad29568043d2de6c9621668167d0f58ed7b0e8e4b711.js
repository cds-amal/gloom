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
      functionName: 'sellerDelivery',
      contractName: 'Escrow',
      arguments: [],
      actions: [
        {
          type: 'callexternal',
          address: '0x2b65C5404dFBF876957EF1839a14cF132aEf9140',
          contextHash: '0xb4107b90da7669855a41c8af3c6191670d5ee9c9814da4206ca9ec98f5a50f72',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'transferFrom',
          contractName: 'MikeToken',
          arguments: [
            {
              name: 'sender',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x736c200178e105405a1708FB4EcFedcB1b1ac5BE',
                  rawAsHex: '0x000000000000000000000000736c200178e105405a1708fb4ecfedcb1b1ac5be'
                }
              }
            },
            {
              name: 'recipient',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x0c3329B9831E6A2fe595Ecba59865B3EE4Ca1592',
                  rawAsHex: '0x0000000000000000000000000c3329b9831e6a2fe595ecba59865b3ee4ca1592'
                }
              }
            },
            {
              name: 'amount',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x56bc75e2d63100000"),
                  rawAsBN: BigNumber("0x56bc75e2d63100000")
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
                  functionName: 'sub',
                  contractName: 'SafeMath',
                  arguments: [
                    {
                      name: 'a',
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
                      name: 'b',
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
                      name: 'errorMessage',
                      value: {
                        type: {
                          typeClass: 'string',
                          location: 'memory',
                          typeHint: 'string'
                        },
                        kind: 'value',
                        value: {
                          kind: 'valid',
                          asString: 'ERC20: transfer amount exceeds balance'
                        }
                      }
                    }
                  ],
                  returnKind: 'return',
                  returnValues: [
                    {
                      name: undefined,
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                      }
                    }
                  ]
                },
                {
                  type: 'callinternal',
                  actions: [],
                  functionName: 'add',
                  contractName: 'SafeMath',
                  arguments: [
                    {
                      name: 'a',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                      }
                    },
                    {
                      name: 'b',
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
                    }
                  ],
                  returnKind: 'return',
                  returnValues: [
                    {
                      name: undefined,
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
                    }
                  ]
                }
              ],
              functionName: '_transfer',
              contractName: 'ERC20',
              arguments: [
                {
                  name: 'sender',
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x736c200178e105405a1708FB4EcFedcB1b1ac5BE',
                      rawAsHex: '0x000000000000000000000000736c200178e105405a1708fb4ecfedcb1b1ac5be'
                    }
                  }
                },
                {
                  name: 'recipient',
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x0c3329B9831E6A2fe595Ecba59865B3EE4Ca1592',
                      rawAsHex: '0x0000000000000000000000000c3329b9831e6a2fe595ecba59865b3ee4ca1592'
                    }
                  }
                },
                {
                  name: 'amount',
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
                }
              ],
              returnKind: 'return',
              returnValues: []
            },
            {
              type: 'callinternal',
              actions: [],
              functionName: '_msgSender',
              contractName: 'Context',
              arguments: [],
              returnKind: 'return',
              returnValues: [
                {
                  name: undefined,
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: true
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x0c3329B9831E6A2fe595Ecba59865B3EE4Ca1592',
                      rawAsHex: '0x0000000000000000000000000c3329b9831e6a2fe595ecba59865b3ee4ca1592'
                    }
                  }
                }
              ]
            },
            {
              type: 'callinternal',
              actions: [],
              functionName: '_msgSender',
              contractName: 'Context',
              arguments: [],
              returnKind: 'return',
              returnValues: [
                {
                  name: undefined,
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: true
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x0c3329B9831E6A2fe595Ecba59865B3EE4Ca1592',
                      rawAsHex: '0x0000000000000000000000000c3329b9831e6a2fe595ecba59865b3ee4ca1592'
                    }
                  }
                }
              ]
            },
            {
              type: 'callinternal',
              actions: [],
              functionName: 'sub',
              contractName: 'SafeMath',
              arguments: [
                {
                  name: 'a',
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
                  name: 'b',
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
                  name: 'errorMessage',
                  value: {
                    type: {
                      typeClass: 'string',
                      location: 'memory',
                      typeHint: 'string'
                    },
                    kind: 'value',
                    value: {
                      kind: 'valid',
                      asString: 'ERC20: transfer amount exceeds allowance'
                    }
                  }
                }
              ],
              returnKind: 'return',
              returnValues: [
                {
                  name: undefined,
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                  }
                }
              ]
            },
            {
              type: 'callinternal',
              actions: [],
              functionName: '_approve',
              contractName: 'ERC20',
              arguments: [
                {
                  name: 'owner',
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x736c200178e105405a1708FB4EcFedcB1b1ac5BE',
                      rawAsHex: '0x000000000000000000000000736c200178e105405a1708fb4ecfedcb1b1ac5be'
                    }
                  }
                },
                {
                  name: 'spender',
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x0c3329B9831E6A2fe595Ecba59865B3EE4Ca1592',
                      rawAsHex: '0x0000000000000000000000000c3329b9831e6a2fe595ecba59865b3ee4ca1592'
                    }
                  }
                },
                {
                  name: 'amount',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                  }
                }
              ],
              returnKind: 'return',
              returnValues: []
            }
          ],
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
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x736c200178e105405a1708FB4EcFedcB1b1ac5BE'
}

module.exports = txlog;