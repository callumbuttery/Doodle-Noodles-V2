export const abi = [
  {
    contractName: "SmartContract",
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
    ],
    metadata:
      '{"compiler":{"version":"0.8.0+commit.c7dfd78e"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"/Users/danielbotha/Desktop/Tutorial/frontend_base_dapp/contracts/SmartContract.sol":"SmartContract"},"evmVersion":"istanbul","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"/Users/danielbotha/Desktop/Tutorial/frontend_base_dapp/contracts/SmartContract.sol":{"keccak256":"0xf68b8dd6deb9c9cbaf0e7d65fde8c28cdfc278fc8f2fbb3b3f6c136813ad7f2c","license":"MIT","urls":["bzz-raw://f014c5a95af54b67ba4b54ae3bdfa6d586bd9cb72873bda66b94fbbc5f0f8c52","dweb:/ipfs/Qma93XhCqFe7EgJ1bsmt9jyT1Wpy6ccTL7CezJ6jo24sSZ"]}},"version":1}',
    bytecode:
      "0x60c0604052600e60808190526d14db585c9d0810dbdb9d1c9858dd60921b60a090815261002f9160009190610042565b5034801561003c57600080fd5b50610116565b82805461004e906100db565b90600052602060002090601f01602090048101928261007057600085556100b6565b82601f1061008957805160ff19168380011785556100b6565b828001600101855582156100b6579182015b828111156100b657825182559160200191906001019061009b565b506100c29291506100c6565b5090565b5b808211156100c257600081556001016100c7565b6002810460018216806100ef57607f821691505b6020821081141561011057634e487b7160e01b600052602260045260246000fd5b50919050565b6101a0806101256000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806306fdde0314610030575b600080fd5b61003861004e565b60405161004591906100dc565b60405180910390f35b6000805461005b9061012f565b80601f01602080910402602001604051908101604052809291908181526020018280546100879061012f565b80156100d45780601f106100a9576101008083540402835291602001916100d4565b820191906000526020600020905b8154815290600101906020018083116100b757829003601f168201915b505050505081565b6000602080835283518082850152825b81811015610108578581018301518582016040015282016100ec565b818111156101195783604083870101525b50601f01601f1916929092016040019392505050565b60028104600182168061014357607f821691505b6020821081141561016457634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212209d29d4afac82de5cc0c17fe354f5f800a6b91db65f258553d52792390d523f3464736f6c63430008000033",
    deployedBytecode:
      "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c806306fdde0314610030575b600080fd5b61003861004e565b60405161004591906100dc565b60405180910390f35b6000805461005b9061012f565b80601f01602080910402602001604051908101604052809291908181526020018280546100879061012f565b80156100d45780601f106100a9576101008083540402835291602001916100d4565b820191906000526020600020905b8154815290600101906020018083116100b757829003601f168201915b505050505081565b6000602080835283518082850152825b81811015610108578581018301518582016040015282016100ec565b818111156101195783604083870101525b50601f01601f1916929092016040019392505050565b60028104600182168061014357607f821691505b6020821081141561016457634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212209d29d4afac82de5cc0c17fe354f5f800a6b91db65f258553d52792390d523f3464736f6c63430008000033",
    immutableReferences: {},
    generatedSources: [
      {
        ast: {
          nodeType: "YulBlock",
          src: "0:396:2",
          statements: [
            {
              nodeType: "YulBlock",
              src: "6:3:2",
              statements: [],
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "69:325:2",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "79:22:2",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "93:4:2",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "99:1:2",
                          type: "",
                          value: "2",
                        },
                      ],
                      functionName: {
                        name: "div",
                        nodeType: "YulIdentifier",
                        src: "89:3:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "89:12:2",
                    },
                    variableNames: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "79:6:2",
                      },
                    ],
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "110:38:2",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "140:4:2",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "146:1:2",
                          type: "",
                          value: "1",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "136:3:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "136:12:2",
                    },
                    variables: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulTypedName",
                        src: "114:18:2",
                        type: "",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "187:31:2",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "189:27:2",
                          value: {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "203:6:2",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "211:4:2",
                                type: "",
                                value: "0x7f",
                              },
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "199:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "199:17:2",
                          },
                          variableNames: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "189:6:2",
                            },
                          ],
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "167:18:2",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "160:6:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "160:26:2",
                    },
                    nodeType: "YulIf",
                    src: "157:2:2",
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "277:111:2",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "298:1:2",
                                type: "",
                                value: "0",
                              },
                              {
                                arguments: [
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "305:3:2",
                                    type: "",
                                    value: "224",
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "310:10:2",
                                    type: "",
                                    value: "0x4e487b71",
                                  },
                                ],
                                functionName: {
                                  name: "shl",
                                  nodeType: "YulIdentifier",
                                  src: "301:3:2",
                                },
                                nodeType: "YulFunctionCall",
                                src: "301:20:2",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "291:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "291:31:2",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "291:31:2",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "342:1:2",
                                type: "",
                                value: "4",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "345:4:2",
                                type: "",
                                value: "0x22",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "335:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "335:15:2",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "335:15:2",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "370:1:2",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "373:4:2",
                                type: "",
                                value: "0x24",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "363:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "363:15:2",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "363:15:2",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "233:18:2",
                        },
                        {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "256:6:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "264:2:2",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "253:2:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "253:14:2",
                        },
                      ],
                      functionName: {
                        name: "eq",
                        nodeType: "YulIdentifier",
                        src: "230:2:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "230:38:2",
                    },
                    nodeType: "YulIf",
                    src: "227:2:2",
                  },
                ],
              },
              name: "extract_byte_array_length",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "49:4:2",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "58:6:2",
                  type: "",
                },
              ],
              src: "14:380:2",
            },
          ],
        },
        contents:
          "{\n    { }\n    function extract_byte_array_length(data) -> length\n    {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n}",
        id: 2,
        language: "Yul",
        name: "#utility.yul",
      },
    ],
    deployedGeneratedSources: [
      {
        ast: {
          nodeType: "YulBlock",
          src: "0:1004:2",
          statements: [
            {
              nodeType: "YulBlock",
              src: "6:3:2",
              statements: [],
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "135:482:2",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "145:12:2",
                    value: {
                      kind: "number",
                      nodeType: "YulLiteral",
                      src: "155:2:2",
                      type: "",
                      value: "32",
                    },
                    variables: [
                      {
                        name: "_1",
                        nodeType: "YulTypedName",
                        src: "149:2:2",
                        type: "",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "173:9:2",
                        },
                        {
                          name: "_1",
                          nodeType: "YulIdentifier",
                          src: "184:2:2",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "166:6:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "166:21:2",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "166:21:2",
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "196:27:2",
                    value: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "216:6:2",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "210:5:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "210:13:2",
                    },
                    variables: [
                      {
                        name: "length",
                        nodeType: "YulTypedName",
                        src: "200:6:2",
                        type: "",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "243:9:2",
                            },
                            {
                              name: "_1",
                              nodeType: "YulIdentifier",
                              src: "254:2:2",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "239:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "239:18:2",
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "259:6:2",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "232:6:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "232:34:2",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "232:34:2",
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "275:13:2",
                    value: {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "284:4:2",
                    },
                    variables: [
                      {
                        name: "i",
                        nodeType: "YulTypedName",
                        src: "279:1:2",
                        type: "",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "347:90:2",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "headStart",
                                        nodeType: "YulIdentifier",
                                        src: "376:9:2",
                                      },
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "387:1:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "372:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "372:17:2",
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "391:2:2",
                                    type: "",
                                    value: "64",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "368:3:2",
                                },
                                nodeType: "YulFunctionCall",
                                src: "368:26:2",
                              },
                              {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "value0",
                                            nodeType: "YulIdentifier",
                                            src: "410:6:2",
                                          },
                                          {
                                            name: "i",
                                            nodeType: "YulIdentifier",
                                            src: "418:1:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "406:3:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "406:14:2",
                                      },
                                      {
                                        name: "_1",
                                        nodeType: "YulIdentifier",
                                        src: "422:2:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "402:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "402:23:2",
                                  },
                                ],
                                functionName: {
                                  name: "mload",
                                  nodeType: "YulIdentifier",
                                  src: "396:5:2",
                                },
                                nodeType: "YulFunctionCall",
                                src: "396:30:2",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "361:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "361:66:2",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "361:66:2",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "i",
                          nodeType: "YulIdentifier",
                          src: "308:1:2",
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "311:6:2",
                        },
                      ],
                      functionName: {
                        name: "lt",
                        nodeType: "YulIdentifier",
                        src: "305:2:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "305:13:2",
                    },
                    nodeType: "YulForLoop",
                    post: {
                      nodeType: "YulBlock",
                      src: "319:19:2",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "321:15:2",
                          value: {
                            arguments: [
                              {
                                name: "i",
                                nodeType: "YulIdentifier",
                                src: "330:1:2",
                              },
                              {
                                name: "_1",
                                nodeType: "YulIdentifier",
                                src: "333:2:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "326:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "326:10:2",
                          },
                          variableNames: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "321:1:2",
                            },
                          ],
                        },
                      ],
                    },
                    pre: {
                      nodeType: "YulBlock",
                      src: "301:3:2",
                      statements: [],
                    },
                    src: "297:140:2",
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "471:69:2",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "headStart",
                                        nodeType: "YulIdentifier",
                                        src: "500:9:2",
                                      },
                                      {
                                        name: "length",
                                        nodeType: "YulIdentifier",
                                        src: "511:6:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "496:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "496:22:2",
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "520:2:2",
                                    type: "",
                                    value: "64",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "492:3:2",
                                },
                                nodeType: "YulFunctionCall",
                                src: "492:31:2",
                              },
                              {
                                name: "tail",
                                nodeType: "YulIdentifier",
                                src: "525:4:2",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "485:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "485:45:2",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "485:45:2",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "i",
                          nodeType: "YulIdentifier",
                          src: "452:1:2",
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "455:6:2",
                        },
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "449:2:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "449:13:2",
                    },
                    nodeType: "YulIf",
                    src: "446:2:2",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "549:62:2",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "565:9:2",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "length",
                                      nodeType: "YulIdentifier",
                                      src: "584:6:2",
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "592:2:2",
                                      type: "",
                                      value: "31",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "580:3:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "580:15:2",
                                },
                                {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "601:2:2",
                                      type: "",
                                      value: "31",
                                    },
                                  ],
                                  functionName: {
                                    name: "not",
                                    nodeType: "YulIdentifier",
                                    src: "597:3:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "597:7:2",
                                },
                              ],
                              functionName: {
                                name: "and",
                                nodeType: "YulIdentifier",
                                src: "576:3:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "576:29:2",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "561:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "561:45:2",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "608:2:2",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "557:3:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "557:54:2",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "549:4:2",
                      },
                    ],
                  },
                ],
              },
              name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "104:9:2",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "115:6:2",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "126:4:2",
                  type: "",
                },
              ],
              src: "14:603:2",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "677:325:2",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "687:22:2",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "701:4:2",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "707:1:2",
                          type: "",
                          value: "2",
                        },
                      ],
                      functionName: {
                        name: "div",
                        nodeType: "YulIdentifier",
                        src: "697:3:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "697:12:2",
                    },
                    variableNames: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "687:6:2",
                      },
                    ],
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "718:38:2",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "748:4:2",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "754:1:2",
                          type: "",
                          value: "1",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "744:3:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "744:12:2",
                    },
                    variables: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulTypedName",
                        src: "722:18:2",
                        type: "",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "795:31:2",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "797:27:2",
                          value: {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "811:6:2",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "819:4:2",
                                type: "",
                                value: "0x7f",
                              },
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "807:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "807:17:2",
                          },
                          variableNames: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "797:6:2",
                            },
                          ],
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "775:18:2",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "768:6:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "768:26:2",
                    },
                    nodeType: "YulIf",
                    src: "765:2:2",
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "885:111:2",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "906:1:2",
                                type: "",
                                value: "0",
                              },
                              {
                                arguments: [
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "913:3:2",
                                    type: "",
                                    value: "224",
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "918:10:2",
                                    type: "",
                                    value: "0x4e487b71",
                                  },
                                ],
                                functionName: {
                                  name: "shl",
                                  nodeType: "YulIdentifier",
                                  src: "909:3:2",
                                },
                                nodeType: "YulFunctionCall",
                                src: "909:20:2",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "899:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "899:31:2",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "899:31:2",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "950:1:2",
                                type: "",
                                value: "4",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "953:4:2",
                                type: "",
                                value: "0x22",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "943:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "943:15:2",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "943:15:2",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "978:1:2",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "981:4:2",
                                type: "",
                                value: "0x24",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "971:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "971:15:2",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "971:15:2",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "841:18:2",
                        },
                        {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "864:6:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "872:2:2",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "861:2:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "861:14:2",
                        },
                      ],
                      functionName: {
                        name: "eq",
                        nodeType: "YulIdentifier",
                        src: "838:2:2",
                      },
                      nodeType: "YulFunctionCall",
                      src: "838:38:2",
                    },
                    nodeType: "YulIf",
                    src: "835:2:2",
                  },
                ],
              },
              name: "extract_byte_array_length",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "657:4:2",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "666:6:2",
                  type: "",
                },
              ],
              src: "622:380:2",
            },
          ],
        },
        contents:
          "{\n    { }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := tail\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        if gt(i, length)\n        {\n            mstore(add(add(headStart, length), 64), tail)\n        }\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n}",
        id: 2,
        language: "Yul",
        name: "#utility.yul",
      },
    ],
    sourceMap:
      "85:37:1:-:0;58:67;85:37;;58:67;85:37;;;-1:-1:-1;;;85:37:1;;;;;;-1:-1:-1;;85:37:1;;:::i;:::-;;58:67;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;58:67:1;;;-1:-1:-1;58:67:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;14:380:2;99:1;89:12;;146:1;136:12;;;157:2;;211:4;203:6;199:17;189:27;;157:2;264;256:6;253:14;233:18;230:38;227:2;;;310:10;305:3;301:20;298:1;291:31;345:4;342:1;335:15;373:4;370:1;363:15;227:2;;69:325;;;:::o;:::-;58:67:1;;;;;;",
    deployedSourceMap:
      "58:67:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;85:37;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:603:2:-;;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:4;297:140;311:6;308:1;305:13;297:140;;;406:14;;;402:23;;396:30;372:17;;;391:2;368:26;361:66;326:10;;297:140;;;455:6;452:1;449:13;446:2;;;525:4;520:2;511:6;500:9;496:22;492:31;485:45;446:2;-1:-1:-1;601:2:2;580:15;-1:-1:-1;;576:29:2;561:45;;;;608:2;557:54;;135:482;-1:-1:-1;;;135:482:2:o;622:380::-;707:1;697:12;;754:1;744:12;;;765:2;;819:4;811:6;807:17;797:27;;765:2;872;864:6;861:14;841:18;838:38;835:2;;;918:10;913:3;909:20;906:1;899:31;953:4;950:1;943:15;981:4;978:1;971:15;835:2;;677:325;;;:::o",
    source:
      '// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\ncontract SmartContract {\n  string public name = "Smart Contract";\n}\n',
    sourcePath:
      "/Users/danielbotha/Desktop/Tutorial/frontend_base_dapp/contracts/SmartContract.sol",
    ast: {
      absolutePath:
        "/Users/danielbotha/Desktop/Tutorial/frontend_base_dapp/contracts/SmartContract.sol",
      exportedSymbols: {
        SmartContract: [38],
      },
      id: 39,
      license: "MIT",
      nodeType: "SourceUnit",
      nodes: [
        {
          id: 34,
          literals: ["solidity", "^", "0.8", ".0"],
          nodeType: "PragmaDirective",
          src: "33:23:1",
        },
        {
          abstract: false,
          baseContracts: [],
          contractDependencies: [],
          contractKind: "contract",
          fullyImplemented: true,
          id: 38,
          linearizedBaseContracts: [38],
          name: "SmartContract",
          nodeType: "ContractDefinition",
          nodes: [
            {
              constant: false,
              functionSelector: "06fdde03",
              id: 37,
              mutability: "mutable",
              name: "name",
              nodeType: "VariableDeclaration",
              scope: 38,
              src: "85:37:1",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_string_storage",
                typeString: "string",
              },
              typeName: {
                id: 35,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "85:6:1",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              value: {
                hexValue: "536d61727420436f6e7472616374",
                id: 36,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "string",
                lValueRequested: false,
                nodeType: "Literal",
                src: "106:16:1",
                typeDescriptions: {
                  typeIdentifier:
                    "t_stringliteral_b8a3a97fe0424ea32c80310ab67353030a39285939d439fc8f9c2c9e48637731",
                  typeString: 'literal_string "Smart Contract"',
                },
                value: "Smart Contract",
              },
              visibility: "public",
            },
          ],
          scope: 39,
          src: "58:67:1",
        },
      ],
      src: "33:93:1",
    },
    legacyAST: {
      absolutePath:
        "/Users/danielbotha/Desktop/Tutorial/frontend_base_dapp/contracts/SmartContract.sol",
      exportedSymbols: {
        SmartContract: [38],
      },
      id: 39,
      license: "MIT",
      nodeType: "SourceUnit",
      nodes: [
        {
          id: 34,
          literals: ["solidity", "^", "0.8", ".0"],
          nodeType: "PragmaDirective",
          src: "33:23:1",
        },
        {
          abstract: false,
          baseContracts: [],
          contractDependencies: [],
          contractKind: "contract",
          fullyImplemented: true,
          id: 38,
          linearizedBaseContracts: [38],
          name: "SmartContract",
          nodeType: "ContractDefinition",
          nodes: [
            {
              constant: false,
              functionSelector: "06fdde03",
              id: 37,
              mutability: "mutable",
              name: "name",
              nodeType: "VariableDeclaration",
              scope: 38,
              src: "85:37:1",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_string_storage",
                typeString: "string",
              },
              typeName: {
                id: 35,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "85:6:1",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              value: {
                hexValue: "536d61727420436f6e7472616374",
                id: 36,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "string",
                lValueRequested: false,
                nodeType: "Literal",
                src: "106:16:1",
                typeDescriptions: {
                  typeIdentifier:
                    "t_stringliteral_b8a3a97fe0424ea32c80310ab67353030a39285939d439fc8f9c2c9e48637731",
                  typeString: 'literal_string "Smart Contract"',
                },
                value: "Smart Contract",
              },
              visibility: "public",
            },
          ],
          scope: 39,
          src: "58:67:1",
        },
      ],
      src: "33:93:1",
    },
    compiler: {
      name: "solc",
      version: "0.8.0+commit.c7dfd78e.Emscripten.clang",
    },
    networks: {
      1629528082590: {
        events: {},
        links: {},
        address: "0xa6fe8C397004F79160C6D2912A32a1B28fFc7A9B",
        transactionHash:
          "0x3a33ea3aaa7e06038e3e7dc28e8eec3ffcbf3111d22d0987ec44b603f9555680",
      },
    },
    schemaVersion: "3.4.1",
    updatedAt: "2021-08-21T06:43:44.169Z",
    networkType: "ethereum",
    devdoc: {
      kind: "dev",
      methods: {},
      version: 1,
    },
    userdoc: {
      kind: "user",
      methods: {},
      version: 1,
    },
  },
];
