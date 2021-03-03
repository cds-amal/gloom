const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x55a8402D05ad0215D9921898D22c2AF82f303abf',
      contextHash: '0xf09b89d32da3ff65fb89f8b9a3a4eee883faa703ba3239601482bd0fc7903c58',
      value: BigNumber("0x0"),
      kind: 'constructor',
      isDelegate: undefined,
      functionName: undefined,
      contractName: 'AuctionFactory',
      arguments: [],
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
                  asAddress: '0xD53928Aea7C44739d7A87E66DB98cDef35b44bdB',
                  rawAsHex: '0x000000000000000000000000d53928aea7c44739d7a87e66db98cdef35b44bdb'
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
                          asAddress: '0xD53928Aea7C44739d7A87E66DB98cDef35b44bdB',
                          rawAsHex: '0x000000000000000000000000d53928aea7c44739d7a87e66db98cdef35b44bdb'
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
                }
              ],
              functionName: 'add',
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
                      asAddress: '0xD53928Aea7C44739d7A87E66DB98cDef35b44bdB',
                      rawAsHex: '0x000000000000000000000000d53928aea7c44739d7a87e66db98cdef35b44bdb'
                    }
                  }
                }
              ],
              returnKind: 'return',
              returnValues: []
            }
          ],
          functionName: '_addPauser',
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
                  asAddress: '0xD53928Aea7C44739d7A87E66DB98cDef35b44bdB',
                  rawAsHex: '0x000000000000000000000000d53928aea7c44739d7a87e66db98cdef35b44bdb'
                }
              }
            }
          ],
          returnKind: 'return',
          returnValues: []
        }
      ],
      salt: null,
      returnKind: 'return'
    }
  ],
  origin: '0xD53928Aea7C44739d7A87E66DB98cDef35b44bdB'
}

module.exports = txlog;
