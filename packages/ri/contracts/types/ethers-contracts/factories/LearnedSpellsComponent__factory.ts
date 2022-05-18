/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LearnedSpellsComponent, LearnedSpellsComponentInterface } from "../LearnedSpellsComponent";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getEntities",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "learnedSpells",
        type: "uint256[]",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getRawValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "indexer",
        type: "address",
      },
    ],
    name: "registerIndexer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "value",
        type: "uint256[]",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002390380380620023908339810160408190526200003491620001a9565b600080546001600160a01b0319166001600160a01b038316908117909155819063f303477030620000827f89ec2bcf380cbef712db0a97c10ddf79a760b2f0852abd97c1a5a21d749255cc90565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015620000c957600080fd5b505af1158015620000de573d6000803e3d6000fd5b50505050604051620000f0906200018d565b604051809103906000f0801580156200010d573d6000803e3d6000fd5b50600280546001600160a01b0319166001600160a01b03929092169190911790556040516200013c906200019b565b604051809103906000f08015801562000159573d6000803e3d6000fd5b50600380546001600160a01b03929092166001600160a01b0319928316179055600180549091163317905550620001db9050565b6104388062001a6e83390190565b6104ea8062001ea683390190565b600060208284031215620001bc57600080fd5b81516001600160a01b0381168114620001d457600080fd5b9392505050565b61188380620001eb6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063946aadc61161008c578063b361be4611610066578063b361be4614610214578063b8bc073d14610227578063cccf7a8e14610247578063f2fde38b1461026a57600080fd5b8063946aadc6146101c0578063963e9eb0146101d3578063ab9dbd07146101e657600080fd5b80634cc82215116100c85780634cc822151461016557806375c0669c1461017a5780638b2829471461018d5780638da5cb5b146101a057600080fd5b80630ff4c916146100ef57806330b67baa1461011857806331b933b91461015d575b600080fd5b6101026100fd366004611180565b61027d565b60405161010f9190611199565b60405180910390f35b6000546101389073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010f565b6101026102a4565b610178610173366004611180565b61035f565b005b6101786101883660046111dd565b61067f565b61017861019b36600461131f565b610807565b6001546101389073ffffffffffffffffffffffffffffffffffffffff1681565b6101786101ce3660046113b2565b610bcd565b6101026101e13660046113fe565b610bfd565b6040517f89ec2bcf380cbef712db0a97c10ddf79a760b2f0852abd97c1a5a21d749255cc815260200161010f565b610102610222366004611440565b610c32565b61023a610235366004611180565b610cf0565b60405161010f91906114f7565b61025a610255366004611180565b610d92565b604051901515815260200161010f565b6101786102783660046111dd565b610e26565b6060600061028a83610cf0565b80602001905181019061029d919061150a565b9392505050565b600254604080517f410d59cc000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff169163410d59cc9160048083019260009291908290030181865afa158015610314573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261035a919081019061150a565b905090565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e45520000000000000000000000000060448201526064015b60405180910390fd5b60035460008281526004602052604090819020905173ffffffffffffffffffffffffffffffffffffffff90921691636526db7a9161042291611603565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101849052604401600060405180830381600087803b15801561047d57600080fd5b505af1158015610491573d6000803e3d6000fd5b50506002546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff9091169250634cc822159150602401600060405180830381600087803b15801561050157600080fd5b505af1158015610515573d6000803e3d6000fd5b50505060008281526004602052604081206105319250906110aa565b60005b6005548110156105f15760058181548110610551576105516116d5565b6000918252602090912001546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690634cc8221590602401600060405180830381600087803b1580156105c657600080fd5b505af11580156105da573d6000803e3d6000fd5b5050505080806105e990611704565b915050610534565b506000546040517fd803064a0000000000000000000000000000000000000000000000000000000081523060048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063d803064a90604401600060405180830381600087803b15801561066457600080fd5b505af1158015610678573d6000803e3d6000fd5b5050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610700576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e45520000000000000000000000000060448201526064016103dc565b61072a817f4ede9a2d00000000000000000000000000000000000000000000000000000000610eee565b610790576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f476976656e2061646472657373206973206e6f7420616e20696e64657865722e60448201526064016103dc565b600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610888576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e45520000000000000000000000000060448201526064016103dc565b6002546040517f1003e2d20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690631003e2d290602401600060405180830381600087803b1580156108f457600080fd5b505af1158015610908573d6000803e3d6000fd5b505060035460008581526004602052604090819020905173ffffffffffffffffffffffffffffffffffffffff9092169350636526db7a925061094991611603565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101859052604401600060405180830381600087803b1580156109a457600080fd5b505af11580156109b8573d6000803e3d6000fd5b505050600083815260046020908152604090912083516109dd935090918401906110e7565b50600354815160208301206040517f771602f700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9092169163771602f791610a44918690600401918252602082015260400190565b600060405180830381600087803b158015610a5e57600080fd5b505af1158015610a72573d6000803e3d6000fd5b5050505060005b600554811015610b3c5760058181548110610a9657610a966116d5565b6000918252602090912001546040517f0216b83800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690630216b83890610af79086908690600401611763565b600060405180830381600087803b158015610b1157600080fd5b505af1158015610b25573d6000803e3d6000fd5b505050508080610b3490611704565b915050610a79565b506000546040517faf104e4000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063af104e4090610b979030908690869060040161177c565b600060405180830381600087803b158015610bb157600080fd5b505af1158015610bc5573d6000803e3d6000fd5b505050505050565b610bf8838383604051602001610be49291906117ba565b604051602081830303815290604052610807565b505050565b6060610c298383604051602001610c159291906117ba565b604051602081830303815290604052610c32565b90505b92915050565b600354815160208301206040517f796c5e94000000000000000000000000000000000000000000000000000000008152600481019190915260609173ffffffffffffffffffffffffffffffffffffffff169063796c5e9490602401600060405180830381865afa158015610caa573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c2c919081019061150a565b6000818152600460205260409020805460609190610d0d906115b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d39906115b0565b8015610d865780601f10610d5b57610100808354040283529160200191610d86565b820191906000526020600020905b815481529060010190602001808311610d6957829003601f168201915b50505050509050919050565b6002546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810183905260009173ffffffffffffffffffffffffffffffffffffffff169063cccf7a8e90602401602060405180830381865afa158015610e02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2c919061180f565b60015473ffffffffffffffffffffffffffffffffffffffff163314610ea7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e45520000000000000000000000000060448201526064016103dc565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000610ef983610f0a565b8015610c295750610c298383610f6e565b6000610f36827f01ffc9a700000000000000000000000000000000000000000000000000000000610f6e565b8015610c2c5750610f67827fffffffff00000000000000000000000000000000000000000000000000000000610f6e565b1592915050565b604080517fffffffff00000000000000000000000000000000000000000000000000000000831660248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f01ffc9a7000000000000000000000000000000000000000000000000000000001790529051600091908290819073ffffffffffffffffffffffffffffffffffffffff87169061753090611028908690611831565b6000604051808303818686fa925050503d8060008114611064576040519150601f19603f3d011682016040523d82523d6000602084013e611069565b606091505b50915091506020815110156110845760009350505050610c2c565b8180156110a05750808060200190518101906110a0919061180f565b9695505050505050565b5080546110b6906115b0565b6000825580601f106110c6575050565b601f0160209004906000526020600020908101906110e4919061116b565b50565b8280546110f3906115b0565b90600052602060002090601f016020900481019282611115576000855561115b565b82601f1061112e57805160ff191683800117855561115b565b8280016001018555821561115b579182015b8281111561115b578251825591602001919060010190611140565b5061116792915061116b565b5090565b5b80821115611167576000815560010161116c565b60006020828403121561119257600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156111d1578351835292840192918401916001016111b5565b50909695505050505050565b6000602082840312156111ef57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461029d57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561128957611289611213565b604052919050565b600082601f8301126112a257600080fd5b813567ffffffffffffffff8111156112bc576112bc611213565b6112ed60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611242565b81815284602083860101111561130257600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561133257600080fd5b82359150602083013567ffffffffffffffff81111561135057600080fd5b61135c85828601611291565b9150509250929050565b60008083601f84011261137857600080fd5b50813567ffffffffffffffff81111561139057600080fd5b6020830191508360208260051b85010111156113ab57600080fd5b9250929050565b6000806000604084860312156113c757600080fd5b83359250602084013567ffffffffffffffff8111156113e557600080fd5b6113f186828701611366565b9497909650939450505050565b6000806020838503121561141157600080fd5b823567ffffffffffffffff81111561142857600080fd5b61143485828601611366565b90969095509350505050565b60006020828403121561145257600080fd5b813567ffffffffffffffff81111561146957600080fd5b61147584828501611291565b949350505050565b60005b83811015611498578181015183820152602001611480565b838111156114a7576000848401525b50505050565b600081518084526114c581602086016020860161147d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610c2960208301846114ad565b6000602080838503121561151d57600080fd5b825167ffffffffffffffff8082111561153557600080fd5b818501915085601f83011261154957600080fd5b81518181111561155b5761155b611213565b8060051b915061156c848301611242565b818152918301840191848101908884111561158657600080fd5b938501935b838510156115a45784518252938501939085019061158b565b98975050505050505050565b600181811c908216806115c457607f821691505b6020821081036115fd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600080835481600182811c91508083168061161f57607f831692505b60208084108203611657577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b81801561166b576001811461169a576116c7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616895284890196506116c7565b60008a81526020902060005b868110156116bf5781548b8201529085019083016116a6565b505084890196505b509498975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361175c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b82815260406020820152600061147560408301846114ad565b73ffffffffffffffffffffffffffffffffffffffff841681528260208201526060604082015260006117b160608301846114ad565b95945050505050565b6020815281602082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156117f357600080fd5b8260051b80856040850137600092016040019182525092915050565b60006020828403121561182157600080fd5b8151801515811461029d57600080fd5b6000825161184381846020870161147d565b919091019291505056fea2646970667358221220094f960df71e1e8e153d37ee7a239a027c88fff133bdc447a380bf974df94a7164736f6c634300080d0033608060405234801561001057600080fd5b50610418806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80634cc82215116100505780634cc822151461009f578063949d225d146100b2578063cccf7a8e146100c357600080fd5b80631003e2d21461006c578063410d59cc14610081575b600080fd5b61007f61007a3660046102e9565b6100e6565b005b610089610138565b6040516100969190610302565b60405180910390f35b61007f6100ad3660046102e9565b610190565b600054604051908152602001610096565b6100d66100d13660046102e9565b610286565b6040519015158152602001610096565b6100ef81610286565b156100f75750565b600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630155565b6060600080548060200260200160405190810160405280929190818152602001828054801561018657602002820191906000526020600020905b815481526020019060010190808311610172575b5050505050905090565b61019981610286565b6101a05750565b600080546101b090600190610346565b815481106101c0576101c0610384565b906000526020600020015460006001600084815260200190815260200160002054815481106101f1576101f1610384565b6000918252602080832090910192909255828152600191829052604081205481549092919081908490811061022857610228610384565b90600052602060002001548152602001908152602001600020819055506001600082815260200190815260200160002060009055600080548061026d5761026d6103b3565b6001900381819060005260206000200160009055905550565b60008054810361029857506000919050565b60008281526001602052604081205490036102d45781600080815481106102c1576102c1610384565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b6000602082840312156102fb57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561033a5783518352928401929184019160010161031e565b50909695505050505050565b60008282101561037f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220306162261924bfa673cd43a39edda8526afef2615cf36bb707b4d6df0e25306264736f6c634300080d0033608060405234801561001057600080fd5b506104ca806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063796c5e9411610050578063796c5e941461009457806385edea13146100bd578063a0265ff8146100eb57600080fd5b80636526db7a1461006c578063771602f714610081575b600080fd5b61007f61007a366004610379565b61010e565b005b61007f61008f366004610379565b61023d565b6100a76100a236600461039b565b610286565b6040516100b491906103b4565b60405180910390f35b6100dd6100cb36600461039b565b60009081526020819052604090205490565b6040519081526020016100b4565b6100fe6100f9366004610379565b6102e6565b60405190151581526020016100b4565b61011882826102e6565b610120575050565b6000828152602081905260409020805461013c906001906103f8565b8154811061014c5761014c610436565b6000918252602080832090910154848352828252604080842060018452818520868652909352909220548154811061018657610186610436565b6000918252602080832090910192909255838152600182526040808220848352808452818320548684528385529183208584529381905283549193909291849081106101d4576101d4610436565b6000918252602080832090910154835282810193909352604091820181209390935584835260018252808320848452825280832083905584835290829052902080548061022357610223610465565b600190038181906000526020600020016000905590555050565b61024782826102e6565b15610250575050565b60009182526020828152604080842080546001808552838720868852855292862081905585845291820181558452922090910155565b600081815260208181526040918290208054835181840281018401909452808452606093928301828280156102da57602002820191906000526020600020905b8154815260200190600101908083116102c6575b50505050509050919050565b600082815260208190526040812054810361030357506000610373565b60008381526001602090815260408083208584529091528120549003610355576000838152602081905260408120805484929061034257610342610436565b9060005260206000200154149050610373565b50600082815260016020908152604080832084845290915290205415155b92915050565b6000806040838503121561038c57600080fd5b50508035926020909101359150565b6000602082840312156103ad57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156103ec578351835292840192918401916001016103d0565b50909695505050505050565b600082821015610431577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212208c218a8c7d3ab9222585f9b09c88ea5422fcaa84788321247b9fcd758613a5a964736f6c634300080d0033";

type LearnedSpellsComponentConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LearnedSpellsComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LearnedSpellsComponent__factory extends ContractFactory {
  constructor(...args: LearnedSpellsComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LearnedSpellsComponent";
  }

  deploy(world: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<LearnedSpellsComponent> {
    return super.deploy(world, overrides || {}) as Promise<LearnedSpellsComponent>;
  }
  getDeployTransaction(world: string, overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  attach(address: string): LearnedSpellsComponent {
    return super.attach(address) as LearnedSpellsComponent;
  }
  connect(signer: Signer): LearnedSpellsComponent__factory {
    return super.connect(signer) as LearnedSpellsComponent__factory;
  }
  static readonly contractName: "LearnedSpellsComponent";
  public readonly contractName: "LearnedSpellsComponent";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LearnedSpellsComponentInterface {
    return new utils.Interface(_abi) as LearnedSpellsComponentInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LearnedSpellsComponent {
    return new Contract(address, _abi, signerOrProvider) as LearnedSpellsComponent;
  }
}