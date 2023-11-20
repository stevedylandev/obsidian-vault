# Cairo Post Outline

### Target Audience: 
* Solidity and Rust developers
* Crypto devs
* Developers interested in entering the blockchain sphere
* dApp builders who consider which platform to build on.

**Main Take away: Cairo is the most efficient language for generating validity proofs** 
Main topic (SEO Keyword): smart contract language
Secondary SEO keywords (to choose from): 
* layer 2 language
* smart contract developers
* web3 developers 
* web3 coding language

⠀Take aways: 
* Cairo is a Turing-complete programming language for efficiently writing STARK-provable programs for general computation. 
* Purpose-built language and virtual machine optimized for efficient proof generation, overcoming limitations of general purpose VMs. Allows processing millions of transactions in a single proof.
* Superior scalability compared to other zkRollups/zkEVMs, future-proofed to integrate advances in proving technology.
* Cairo is an ergonomic language inspired by Rust, that abstracts away cryptographic details, and offers smooth coding flow.
* Enhanced security against quantum computing attacks.
* Cairo greatly improves the developer experience with a Rust-like syntax and by abstracting away the limitations that were present in Cairo Zero (e.g. write once memory), simplifying contract writing and reducing the chance for bugs.

Title of Blog Post: 

Outline: 
* TL;DR
  * TBD
* **Intro/background**
  * Introducing Cairo - An ergonomic, Turing-complete, programming language for efficiently writing STARK-provable programs for general computation. 
  * Benefits of Solidity
  * Benefits of Rust
  * Cairo taking the best of both, specially designed for efficient proof generation  
* **Main message** - Details about Cairo
  * Purpose Built for proof generation
  * Superior Stability to zkRollups/zkEVMs 
  * Rust inspired, abstracts cryptographic details 
  * Enhanced security against possible future quantum computing attacks 
  * Cairo greatly improves the developer experience with a Rust-like syntax and by abstracting away the limitations that were present in Cairo Zero (e.g. write once memory), simplifying contract writing and reducing the chance for bugs.
* **Summary**
* **Call to Action**
  * To learn more about Cairo visit the Cairo book ~[https://www.cairo-lang.org/](https://www.cairo-lang.org/)~ 

⠀To talk to other Cairo devs, join our Discord community ~[https://discord.gg/qypnmzkhbc](https://discord.gg/qypnmzkhbc)~

TL:DR 
- Solidity is the language of choice for writing EVM programs, and Rust for writing fast and type safe programs. 
- Cairo, an ergonomic, Turning-complete programming language, falls in the sweet spot between the two in order to write Starknet validity proofs. 

When it comes to writing code for blockchain, there are several languages that come to mind. Solidity is perhaps the most popular as it’s used in chains like Ethereum, where it’s compiled to byte code and run on the Ethereum Virtual Machine (EVM). The only problem is that Ethereum doesn’t scale well, and moments like the [CryptoKitties Congestion Crisis](https://consensys.io/blog/the-inside-story-of-the-cryptokitties-congestion-crisis) prove the need for a better solution. Layer 2 blockchain solutions have been appearing left and right to help solve this problem, taking the approach of rolling up transactions and then sending them on a layer 1 chain like Ethereum. Standing out among the others is Starknet, a validity proof rollup featuring a native language called Cairo. This web3 coding language was built because of the special needs required to run Starknet, particularly writing STARK provable executions. To better understand Cairo it helps to compare it against Solidity, which most web3 developers are familiar with, as well as Rust from which it was inspired from. 

One thing Solidity has going for itself is the popularity amount web3 developers. Writing a Solidity smart contract is akin to the “hello world” of blockchain. There are so many resources to smart contract standards as well as guides on how to customize them for your needs, so most developers can figure how to accomplish their goals on-chain. Things like ERC-20, ERC-721, and ERC-1155 are key factors in the Ethereum ecosystem to make it functional and run, despite the slower speeds and high transaction fees. While Solidity also has the ability to run on other EVM compatible chains, there is still the downside of how it processes the code and then imitations there within. In order to scale and run transactions faster, you need something custom built to handle validity proofs.  

Solidity may be the language of choice for most web3 developers, where it lacks is its abilities outside the EVM. There are times when you need more versatility to achieve a programatic end goal. Rust is one of those languages that while it has a steeper learning curve than Solidity, is much more tied to how computers run code,  maintaining memory and thread safety. It gives the programs you write much more speed, performance, and security. These are the things you need when you have to go beyond the restrictions of the EVM. It’s because of these reasons it’s no surprise that Rust is labeled the most admired programming language in the [2023 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2023/#section-admired-and-desired-programming-scripting-and-markup-languages). With all the great things about Rust, one thing it lacks is a good developer experience when writing cryptographic proofs. 

Cairo takes the best of both of these languages and creates something truly unique: a specially designed Turing-complete and ergonomic language for validating proofs on Starknet. Since Ethereum is slow and has high gas fees, there are many Layer 2 blockchains that strive to do the opposite: provide users with speed and low transactions fees through bundling. Starknet is a unique layer 2 solution as it does validity proofs of transactions, rather than the more popular zero-knowledge proof rollups. To achieve this, a new language was needed to run faster than Solidity, while also abstracting harder to use cryptography features. Thus comes the birth of Cairo, giving web3 developers a chance to build with their existing knowledge of Solidity and adapt to run faster and more capable smart contract programs. 

Instead of reinventing the wheel, the people behind Cairo made the wise decision to model the language after Rust. The goal was to make something that could handle validity proofs, but also remain safe and familiar to use. It imitates Rust in the way it keeps type safety as well as memory safety, which in turn helps reduce the number of bugs while writing it. Furthermore, the features pulled from Rust with cryptography abstractions helps keep future programs safe from the potential threat of quantum computation attacks. In the end you get a unique, web3 developer friendly language that can be used to run some of the fastest programs on blockchain, opening doors that were not possible on Solidity. 

To further help illustrate, let’s compare a function across all three languages. This example is from [this guide](https://www.cairo-lang.org/moving-from-solidity-to-cairo/) on how web3 developers can migrate from Solidity to Cairo.  

Solidity
```
function is_cairo_fun() public view returns (uint8, uint8) {
  uint8 yes = yes;
  uint8 no = no;
  return (yes, no);
}
```
Cairo
```
#[view]
fn is_cairo_fun() -> (u8, u8) {
  let yes = yes_var::read();
  let no = no_var::read();
  return (yes, no);
}
```
Rust
```
fn is_cairo_fun() -> (u8, u8) {
    let yes: u8 = yes;
    let no: u8 = no;
    (yes, no)
}
```

If you compare the three, you can see we have a lot of similarities. One of those is the type safety being implemented, ensuring the right types are being used and returned in the function. Another thing you might notice is the function type. Solidity has a `public views` modifier to help clarify how the function would work on the blockchain, while Rust does not, so Cairo implements this with the `#[view]` to satisfy then needs of blockchain development. Cairo also implements similar formatting and return statements to help those who are migrating from Solidity. With these slight differences, Cairo achieves a smooth experience for web3 developers looking to migrate from Solidity to achieve the impossible on Starknet. 

Solidity, Rust, and Cairo are not in a content for “which language is best.” They all have their unique rolls to accomplish certain tasks: Solidity for layer 1 blockchains, Rust for fast and safe programs, and Cairo for making fast and safe validity proof programs on Starknet. Of the three Cairo has some of the biggest benefits as it has much to gain and learn from the other two, creating a web3 developer paradise of sorts to make something unlike anything before on the blockchain. Want to learn more and start programming in Cairo? Be sure to check out the [Cairo Book](https://www.cairo-lang.org/) with everything you need to get started! There is also no need to be intimidated when learning a new language when you have access to the Cairo community through their [Discord server](https://discord.gg/qypnmzkhbc). We can’t wait to see what you build with Cairo and Starknet!  