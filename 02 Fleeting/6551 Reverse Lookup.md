## Scope
- plug in NFT address
- completes a bi-directional lookup to see
	- what accounts own that NFT and if they’re TBAs or just wallets
	- What NFTs does that address own
- Returns that data into relational nodes using reactflow

## Problems to Solve
- Initial address will have two API calls
	- Check who owns the address
	- Check what the address owns 
- With the first result that address will be checked if it’s a TBA. If it is, will use getNFT to retrieve the next NFT address that will be put into the loop
- With the second result that address will be used to if there are any assets owned by the wallet, and pass those into the loop

## Step by Step

- User provides address 
- Determine if address is wallet or smart contract 
- If wallet
	- Get assets owned by wallet
- If smart contract 
	- Check if TBA
	- Check if NFT
- If TBA
	- Use getNFT to see what NFT owns the TBA
	- Check what TBA owns 
- If NFT
	- Get info about NFT
	- Check what wallet owns NFT
- Loop until process is null

Smaller steps
- Use TBA address to start out 
	- Root node
- Use getNFT
	- Child node
- See if it owns anything else 
	- Child node