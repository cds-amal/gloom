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
      functionName: 'pauseFactory',
      contractName: 'AuctionFactory',
      arguments: [],
      actions: [
        {
          type: 'callinternal',
          actions: [
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
                      asAddress: '0x2F75bb5114567a73FD6EC34e441253797E52b58a',
                      rawAsHex: '0x0000000000000000000000002f75bb5114567a73fd6ec34e441253797e52b58a'
                    }
                  }
                }
              ]
            },
            {
              type: 'callinternal',
              actions: [
                {
                  type: 'callinternal',
                  actions: [],
                  functionName: 'has',
                  contractName: 'Roles',
                  arguments: [
                    {
                      name: 'role',
                      value: {
                        type: {
                          typeClass: 'struct',
                          kind: 'local',
                          id: 'shimmedcompilationNumber(0):1661',
                          typeName: 'Role',
                          definingContractName: 'Roles',
                          location: 'storage'
                        },
                        kind: 'value',
                        value: [
                          {
                            name: 'bearer',
                            value: {
                              type: {
                                typeClass: 'mapping',
                                keyType: {
                                  typeClass: 'address',
                                  kind: 'specific',
                                  payable: false
                                },
                                valueType: { typeClass: 'bool', typeHint: 'bool' },
                                location: 'storage'
                              },
                              kind: 'value',
                              value: []
                            }
                          }
                        ]
                      }
                    },
                    {
                      name: 'account',
                      value: {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x2F75bb5114567a73FD6EC34e441253797E52b58a',
                          rawAsHex: '0x0000000000000000000000002f75bb5114567a73fd6ec34e441253797e52b58a'
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
                        value: { asBoolean: true }
                      }
                    }
                  ]
                }
              ],
              functionName: 'isPauser',
              contractName: 'PauserRole',
              arguments: [
                {
                  name: 'account',
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x2F75bb5114567a73FD6EC34e441253797E52b58a',
                      rawAsHex: '0x0000000000000000000000002f75bb5114567a73fd6ec34e441253797e52b58a'
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
                    value: { asBoolean: true }
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
                      asAddress: '0x2F75bb5114567a73FD6EC34e441253797E52b58a',
                      rawAsHex: '0x0000000000000000000000002f75bb5114567a73fd6ec34e441253797e52b58a'
                    }
                  }
                }
              ]
            }
          ],
          functionName: 'pause',
          contractName: 'Pausable',
          arguments: [],
          returnKind: 'return',
          returnValues: []
        }
      ],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x2F75bb5114567a73FD6EC34e441253797E52b58a'
}

module.exports = txlog;
