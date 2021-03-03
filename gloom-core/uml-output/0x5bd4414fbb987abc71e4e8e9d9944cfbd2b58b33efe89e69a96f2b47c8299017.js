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
              value: { kind: 'valid', asString: 'Pausable: paused' }
            }
          }
        ],
        decodingMode: 'full'
      }
    }
  ],
  origin: '0x08e93c4BAccEBA7510d63b89E4c8496F6C8B34A4'
}

module.exports = txlog;
