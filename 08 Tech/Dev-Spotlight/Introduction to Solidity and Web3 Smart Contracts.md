# Introduction to Solidity and Web3 Smart Contract
If you want to start building decentralized blockchain applications then there's not better place to start than Solidity and Smart Contracts. Bitcoin was the first blockchain that took the world by storm, but it was primarily a blockchain for decentralized finance. It wasn't until the emergence of Ethereum where blockchains evolved from ledgers into computers, and that computer was dubbed the "Ethereum Virtual Machine" or "EVM" for short. The EVM uses Solidity Smart Contract that are compiled into byte code, which are then deployed on the Ethereum network. There the Smart Contract lives, just like a backend server, where it can do functions, store data, and more. Before we get too far into what Smart Contracts can do, let's go over Solidity first. 

## What is Solidity?

As mentioned before Solidity is a specially crafted, statically-typed, programming language used to write Smart Contracts on Ethereum and the EVM. Since it's statically-typed it has a lot of similarities to Java in the way variables are declared. On the other hand it has some parts that feel like Rust with it's strong type system and features like borrowing and ownership. Solidity is pretty unique, and can be a little challenging to learn. Thankfully you can start out slow and simple, and slowly build complexity into your code like any other language. With it's ability to import other libraries, you can also lean on existing smart contract standards and modules to help bootstrap projects. With Solidity being released in 2014, there are a plethora of resources to learn and get started, and a great place to start [is their website](https://soliditylang.org/). 

## What are Smart Contracts?

In technical terms Smart Contracts are compiled Solidity byte code that runs programs on the EVM. Simply put, they're a set of instructions or programs that run on a decentralized blockchain. Since blockchains work as peer-to-peer network, it gives these Smart Contracts a trust-less state to applications. This concept of "code is law" may not be perfect, but it has made ideas such as crypto currency, decentralized governance, supply chain integrity, and NFTs possible. Something that the Ethereum quickly realized is that there needed to be a standard for Smart Contracts, because without them there would be hard for decentralized applications (also known as "dApps") to work together and provide a basis for security. Through this Ethereum introduced EIPs (Ethereum Improvement Proposals) and ERCs (Ethereum Request Comment), which are similar to amendments being drafted and being put into place but in this context they are voted upon with decentralized governance. A few common examples of standardized smart contracts would include ERC-20 for tokens, and ERC-721 or ERC-1155 for NFTs. These are the basis from which developers can build on EVM, including things like USDC by Circle, which is a stablecoin pegged to the US Dollar. 

## Smart Contract Basics

Now let's look at a real Smart Contract to grasp some of the basics, and a good place to start would be ERC-20. From the [example given the Ethereum Foundation](https://ethereum.org/en/developers/tutorials/understand-the-erc-20-token-smart-contract/), here is what an ERC-20 Smart Contract would look like. 

```solidity
pragma solidity ^0.8.0;

interface IERC20 {

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);


    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}


contract ERC20Basic is IERC20 {

    string public constant name = "ERC20Basic";
    string public constant symbol = "ERC";
    uint8 public constant decimals = 18;


    mapping(address => uint256) balances;

    mapping(address => mapping (address => uint256)) allowed;

    uint256 totalSupply_ = 10 ether;


   constructor() {
	    balances[msg.sender] = totalSupply_;
    }

    function totalSupply() public override view returns (uint256) {
	    return totalSupply_;
    }

    function balanceOf(address tokenOwner) public override view returns (uint256) {
        return balances[tokenOwner];
    }

    function transfer(address receiver, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender]-numTokens;
        balances[receiver] = balances[receiver]+numTokens;
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }

    function approve(address delegate, uint256 numTokens) public override returns (bool) {
        allowed[msg.sender][delegate] = numTokens;
        emit Approval(msg.sender, delegate, numTokens);
        return true;
    }

    function allowance(address owner, address delegate) public override view returns (uint) {
        return allowed[owner][delegate];
    }

    function transferFrom(address owner, address buyer, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][msg.sender]);

        balances[owner] = balances[owner]-numTokens;
        allowed[owner][msg.sender] = allowed[owner][msg.sender]-numTokens;
        balances[buyer] = balances[buyer]+numTokens;
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
}
```

We won't go over all of this, and I would recommend going through the aforementioned article for that, but let's look at a few pieces up close. 

In the very beginning we declare what version of Solidity we'll be using, which helps make sure we use the right compiler when the time comes.

```solidity
pragma solidity ^0.8.0;
```

Next you'll see an interface, much like one you would see in Typescript, which includes all the functions we must implement for our smart contract to meet the ERC-20 standard. 

```solidity
interface IERC20 {

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);


    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
```

Most Smart Contract functions can be split into three camps: read, write, and events. An example of a read function would be `totalSupply()` which would give the caller the total amount of the token. 

```solidity
function totalSupply() public override view returns (uint256) {
	return totalSupply_;
}
```

If we look at each piece of this function we would deduce the following:
- `function` - what we are declaring, vs `events`
- `totalSupply()` - the name of the function
- `public` - declares scope so it can be called outside the contract
- `override` - since the ERC-20 interface already has a function called `totalSupply_` this keyword will allow us to override the original declaration. 
- `view` - this is a state mutability specifier, and it indicates that the function does not effect the contract's storage/state and it does not emit events. 
- `returns` - specifies the return type of the function, which in this case would be an unsigned integer of 256 bits. 

Inside the function it simply calls the ERC-20 interface function of `totalSupply_`, but let's look at one more function. 

```solidity
function transfer(address receiver, uint256 numTokens) public override returns (bool) {
    require(numTokens <= balances[msg.sender]);
     balances[msg.sender] = balances[msg.sender]-numTokens;
    balances[receiver] = balances[receiver]+numTokens;
    emit Transfer(msg.sender, receiver, numTokens);
    return true;
}
```

Now this one gets a bit more complicated, but it essentially moves tokens from one wallet who owns this ERC-20 token to another wallet. Fist it checks to make sure that the sender has enough tokens to send based on what was inputed, then it subtracts the balance from the user, sends the token to the recipient, then returns an event of who sent the tokens, who received them and how many tokens total were sent. 

Where Smart Contracts get interesting is when you have to interact with them from a client side application or backend. In order to transfer an ERC-20 token with a wallet signer who is sending, a designated recipient, and an amount, your application will need to have several things: 
- An Ethereum Node or provider - In order to interact with a blockchain directly, you have to run or more commonly rent one through a service like Alchemy or Infura. 
- The Smart Contract ABI - The ABI (Application Binary Interface) is how you can send functions through an Ethereum Node RPC and the smart contract can recognize it. 
- A Web3 Library - Depending on what programming language you are using, like Javascipt, you will need something like Web3.js or Ethers.js to send requests to a Smart Contract with the ABI through the Ethereum node. 
All of this put together can get pretty exhausting and look something [like this](https://community.infura.io/t/web3-js-how-to-send-erc-20-tokens/6671). 

```javascript
const Web3 = require("web3");

async function main() {
    // Configuring the connection to an Ethereum node
    const network = process.env.ETHEREUM_NETWORK;
    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        )
    );

    var fs = require('fs');
    var jsonFile = "ct_abi.json";

    var parsed=JSON.parse(fs.readFileSync(jsonFile));
    var abi = parsed.abi;

    const tokenAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
    const toAddress = "<insert_here_the_token_destination_address>"

    // Creating a signing account from a private key
    const signer = web3.eth.accounts.privateKeyToAccount(
        process.env.SIGNER_PRIVATE_KEY
    );
    web3.eth.accounts.wallet.add(signer);

    const contract = new web3.eth.Contract(abi, tokenAddress, { from: signer.address } )
    let amount = web3.utils.toHex(web3.utils.toWei("1"));  
 
     // Creating the transaction object
     const tx = {
         from: signer.address,
         to: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
         value: "0x0",
         data: contract.methods.transfer(toAddress, amount).encodeABI(),
         gas: web3.utils.toHex(5000000),
         nonce: web3.eth.getTransactionCount(signer.address),
         maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
         chainId: 5,
         type: 0x2
     };
 
     signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey)
     console.log("Raw transaction data: " + signedTx.rawTransaction)
 
     // Sending the transaction to the network
     const receipt = await web3.eth
         .sendSignedTransaction(signedTx.rawTransaction)
         .once("transactionHash", (txhash) => {
             console.log(`Mining transaction ...`);
             console.log(`https://${network}.etherscan.io/tx/${txhash}`);
         });
     // The transaction is now on chain!
     console.log(`Mined in block ${receipt.blockNumber}`);
 
 }

require("dotenv").config();
main();
```

When you start getting into wallets and either having users connect their own or you have to start handling custody wallets, it can get even more messy. On the other hand, there are providers out there like Circle which provide simpler REST APIs that most developers are used to which make transferring a token like USDC much simpler:

```bash
curl --request POST \ 
--url 'https://api.circle.com/v1/w3s/user/transactions/transfer' \ 
--header 'X-User-Token: $USER_TOKEN' \ 
--header 'Content-Type: application/json' \ 
--header 'authorization: Bearer $ENV_API_KEY:ID:SECRET$' \ 
--data '{ "userId": "ext_user_id_1", "idempotencyKey": "$UUIDv4$", "amounts": [".0001"], "destinationAddress": "0x6E5eAf34c73D1CD0be4e24f923b97CF38e10d1f3", "tokenId": "3495b830-d0f9-524b-89c0-4408274fed6e", "walletId": "01899cf2-d415-7052-a207-f9862157e546", "feeLevel": "MEDIUM" }'
```

This is truly only the beginning of what you can do with Solidity and Smart Contracts, and its essential you know the basics to excel in building Web3 dApps. A great place to start is the [Developers Page](https://ethereum.org/en/developers/) on Ethereum.org, which has loads of resources to start building Smart Contracts. If you're looking into building DeFi applications and handle user wallets and token transfers, [Circle offers a wide range of services and APIs](https://www.circle.com/en/developers) ranging from customer owned wallets to developer owned wallets. With these tools, the possibilites are only within your own imagination. 