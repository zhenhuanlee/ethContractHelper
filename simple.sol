contract Token{
    address public owner;
    mapping (address => uint) public balances;
    event Sent(address from, address to, uint amount);

    function Token(){
        owner = msg.sender;
        balances[owner] = 100000000;
    }
    function send(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }

    function balanceOf(address _owner) constant returns (uint256 balance) {
        return balances[_owner];
    }
}