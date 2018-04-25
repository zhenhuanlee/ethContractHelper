var Web3 = require('./web3.js-0.16.0/index');
var web3 = new Web3(new Web3.providers.HttpProvider("http://10.0.1.55:101"));

var zero_account = web3.eth.accounts[0]
var password = "123456"

web3.personal.unlockAccount(zero_account, password);

// get from remix
const data = '0x608060405233600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560006101000a81548160ff021916908360ff16021790555060006006553480156200007357600080fd5b506040805190810160405280600a81526020017f43727970746f20555344000000000000000000000000000000000000000000008152506040805190810160405280600481526020017f555344630000000000000000000000000000000000000000000000000000000081525060028060ff16600a0a630bfe257602836003908051906020019062000107929190620002a1565b50826004908051906020019062000120929190620002a1565b5081600560006101000a81548160ff021916908360ff160217905550620001568162000161640100000000026401000000009004565b505050505062000350565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515620001c057600080fd5b6006548260065401111515620001d557600080fd5b8160066000828254019250508190555081600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002e457805160ff191683800117855562000315565b8280016001018555821562000315579182015b8281111562000314578251825591602001919060010190620002f7565b5b50905062000324919062000328565b5090565b6200034d91905b80821115620003495760008160009055506001016200032f565b5090565b90565b61143f80620003606000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ca578063095ea7b31461015a57806318160ddd146101bf57806323b872dd146101ea578063313ce5671461026f5780636d1b229d146102a057806370a08231146102e557806395d89b411461033c57806397304ced146103cc578063a6f9dae114610411578063a9059cbb14610454578063be45fd62146104b9578063dd62ed3e14610536575b600080fd5b3480156100d657600080fd5b506100df6105ad565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011f578082015181840152602081019050610104565b50505050905090810190601f16801561014c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016657600080fd5b506101a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061064b565b604051808215151515815260200191505060405180910390f35b3480156101cb57600080fd5b506101d4610841565b6040518082815260200191505060405180910390f35b3480156101f657600080fd5b50610255600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610847565b604051808215151515815260200191505060405180910390f35b34801561027b57600080fd5b50610284610981565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102ac57600080fd5b506102cb60048036038101908080359060200190929190505050610994565b604051808215151515815260200191505060405180910390f35b3480156102f157600080fd5b50610326600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a6565b6040518082815260200191505060405180910390f35b34801561034857600080fd5b506103516109ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610391578082015181840152602081019050610376565b50505050905090810190601f1680156103be5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103d857600080fd5b506103f760048036038101908080359060200190929190505050610a8d565b604051808215151515815260200191505060405180910390f35b34801561041d57600080fd5b50610452600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610afb565b005b34801561046057600080fd5b5061049f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c96565b604051808215151515815260200191505060405180910390f35b3480156104c557600080fd5b5061051c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001919091929391929390505050610cbc565b604051808215151515815260200191505060405180910390f35b34801561054257600080fd5b50610597600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d06565b6040518082815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106435780601f1061061857610100808354040283529160200191610643565b820191906000526020600020905b81548152906001019060200180831161062657829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156106b557503373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b801561074757506000821480610746575060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b5b151561075257600080fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60065481565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156108d357600080fd5b816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506109788484846020604051908101604052806000815250610d8c565b90509392505050565b600560009054906101000a900460ff1681565b600061099f82611198565b9050919050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a855780601f10610a5a57610100808354040283529160200191610a85565b820191906000526020600020905b815481529060010190602001808311610a6857829003601f168201915b505050505081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610aeb57600080fd5b610af4826112d5565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b5757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610be25750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b1515610bed57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff285329298fd841af46eb83bbe90d1ebe2951c975a65b19a02f965f842ee69c560405160405180910390a250565b6000610cb43384846020604051908101604052806000815250610d8c565b905092915050565b6000610cfc33868686868080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050610d8c565b9050949350505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600080600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610df857503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b8015610e315750600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614155b8015610e6957508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614155b8015610e755750600084115b8015610ec0575083600760008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b8015610f4b5750600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484600760008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401115b1515610f5657600080fd5b83600760008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555083600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550843b90506000811115611126578473ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3386866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110bf5780820151818401526020810190506110a4565b50505050905090810190601f1680156110ec5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561110d57600080fd5b505af1158015611121573d6000803e3d6000fd5b505050505b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a36001915050949350505050565b600081600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115156111e757600080fd5b816006600082825403925050819055508160076000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561133357600080fd5b600654826006540111151561134757600080fd5b8160066000828254019250508190555081600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509190505600a165627a7a7230582060a49b1b5c2646478e4cb6fab43ee1ab348ab5dd058d32b9df25a4159a3cfdc40029'
const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"burnTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_holder","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"mintTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"}],"name":"ChangeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]

console.log(web3.eth.accounts[0])

function deploy() {
  var ambertokenContract = web3.eth.contract(abi);
  var ambertoken = ambertokenContract.new(
     {
       from: web3.eth.accounts[0], 
       data: data, 
       gas: '4700000'
     }, function (e, contract){
      console.log(e, contract);
      if (typeof contract.address !== 'undefined') {
           console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
      }
   })
}

function get_balance(address, contract_address) {
  let tknAddress = address.substring(2);
  let contractData = ('0x70a08231000000000000000000000000' + tknAddress);

  web3.eth.call({
    to: contract_address,
    data: contractData
    }, function(err, result) {
      if (result) { 
        var tokens = web3._extend.utils.toBigNumber(result).toString(); 
        // console.log('The balance is: ' + web3._extend.utils.fromWei(tokens, 'ether'));
        console.log('The balance is: ' + tokens);
      }
      else {
        console.log(err); // Dump errors here
      }
  });
}

function transfer(contract_address, data) {
  web3.eth.sendTransaction({
    from: zero_account,
    to: contract_address,
    data: data
  }, function(err, transactionHash) {
    if (!err) {
      console.log(transactionHash)
    } else {
      console.log(err)
    }

  })
}

function getTransactionReceipt(hash) {
  // web3.eth.getTransactionReceipt(hash).then(console.log);
  let log = web3.eth.getTransaction(hash);
  console.log(log);
  let receipt = web3.eth.getTransactionReceipt(hash);
  console.log(receipt);
}

// deploy()

let cadd = '0x1e1c347f793c263d74915f0c708cc98d297df21e'
// transfer(cadd, '');
get_balance('0xa51cfc05d258b48f1f56d49c423d42a56fe94df1', cadd);
// get_balance('0x3a68ccd0d6f119941fff9d86a10df5f457ad996b', cadd);
// getTransactionReceipt('0xb422e996ceafb4ffde9926c74dfaf5fbd0d1bd1e75699174446aaf4ea0debf75')
