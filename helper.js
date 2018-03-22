var Web3 = require('./web3.js-0.16.0/index');
var web3 = new Web3(new Web3.providers.HttpProvider("http://10.0.1.55:101"));

var zero_account = web3.eth.accounts[0]
var password = "123456"

web3.personal.unlockAccount(zero_account, password);

// get from remix
const data = '0x606060405260066001556611c37937e08000600255341561001f57600080fd5b33600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060025460056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061100d806100d76000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100bf578063095ea7b31461014d57806318160ddd146101a757806323b872dd146101d0578063313ce567146102495780636d081d831461027257806370a08231146102eb57806395d89b411461033857806397668720146103c65780639890220b146103ff578063a9059cbb14610414578063dd62ed3e1461046e575b600080fd5b34156100ca57600080fd5b6100d26104da565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101125780820151818401526020810190506100f7565b50505050905090810190601f16801561013f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015857600080fd5b61018d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610513565b604051808215151515815260200191505060405180910390f35b34156101b257600080fd5b6101ba610605565b6040518082815260200191505060405180910390f35b34156101db57600080fd5b61022f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061060f565b604051808215151515815260200191505060405180910390f35b341561025457600080fd5b61025c610916565b6040518082815260200191505060405180910390f35b341561027d57600080fd5b6102d1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061091c565b604051808215151515815260200191505060405180910390f35b34156102f657600080fd5b610322600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b6d565b6040518082815260200191505060405180910390f35b341561034357600080fd5b61034b610bb6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561038b578082015181840152602081019050610370565b50505050905090810190601f1680156103b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103d157600080fd5b6103fd600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bef565b005b341561040a57600080fd5b610412610c8f565b005b341561041f57600080fd5b610454600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d66565b604051808215151515815260200191505060405180910390f35b341561047957600080fd5b6104c4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f5a565b6040518082815260200191505060405180910390f35b6040805190810160405280600881526020017f536f6172636f696e00000000000000000000000000000000000000000000000081525081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600254905090565b600081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156106dc575081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156106e85750600082115b80156107735750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401115b1561090a5781600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905061090f565b600090505b9392505050565b60015481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561097a57600080fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156109c95750600082115b8015610a545750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401115b15610b615781600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610b66565b600090505b9392505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6040805190810160405280600481526020017f536f61720000000000000000000000000000000000000000000000000000000081525081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4b57600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ceb57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f193505050501515610d6457600080fd5b565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610db75750600082115b8015610e425750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401115b15610f4f5781600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610f54565b600090505b92915050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a723058207eee59613a2a462a8d1dfca7109d87cae7b2a67f0909b51851a546174959eefa0029'
const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"zero_fee_transaction","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"central_Acccount","type":"address"}],"name":"set_centralAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"drain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]

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
        console.log('The balance is: ' + web3._extend.utils.fromWei(tokens, 'ether'));
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

let cadd = '0xbaCC7e626D5EbD10c171c0E25755de2eFD893875'
// transfer(cadd, data);
get_balance('0xa51cfc05d258b48f1f56d49c423d42a56fe94df1', cadd);
// get_balance('0x3a68ccd0d6f119941fff9d86a10df5f457ad996b', cadd);
// getTransactionReceipt('0xb422e996ceafb4ffde9926c74dfaf5fbd0d1bd1e75699174446aaf4ea0debf75')
