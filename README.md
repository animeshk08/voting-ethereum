# codefundo2k19

## Secure voting using blockchain

### Introduction

Cryptocurrencies are being used widely and gaining popularity. The main theme of all
cryptocurrencies are a transfer of value between two peers without needing a central authority,
such as a bank or financial institution; it is distributed and decentralized. Blockchain is a
technology behind all cryptocurrencies. It’s a constantly growing ledger that keeps a permanent
record of all the transactions that have taken place, in a secure, chronological and immutable
way that makes peer to peer value transfer possible. Value can be anything. In the case of
cryptocurrencies, it takes the meaning of money. Whereas in gaming it can take the form of
points.
In electoral voting, the value can take the form of a vote. In this paper, we will show how
blockchain can be used to transfer votes between two peers. In our case, one peer is the voter
and the other is the candidate who receives the vote. We will explain how blockchain can be
employed in mass electoral voting procedures in a more secure way without needing a central
authority body. 
We will explain a voting system using blockchain that is more robust, tamperproof (immutable to voting changes either by the voter or by any other third parties) and cost effective.

### Our Idea

- ![Explanation](https://github.com/mananpoddar/codefundo2k19/blob/master/Secure_Voting%20System_Using_BlockChain.png)

- For our system, we will consider 3 major components.
  - 1.) The Election Commission(EC) (or any agency wanting to vote)
  - 2.) Our System
  - 3.) The Users

- The election commission will have their own database and servers seperate from our system. Our system will control the blockchain services
where the election and voting process and count will take place.

- The election commission will carry out the registration process which is similar to getting your voterID. This registration process will use Biometrics for identity(face recognition and finger print).
This way the election commission will this way generate its own database separate from our system intervention.

- Now our system will provider an interface for the users to register for the election process for a given session like 2019 election.
The user will be asked for various credentials that he used while registering on the election commission system(VoterID generation), this would include the biometric ID data that our system would take in.
Our system will now also ask for a "secret message" from the user that he has to keep secret and safe with him. We will also generate a "reference number" which is random and give it to user.
The User has to keep both of these information safe and private. Our system does not store this secret message and the reference number on the backend servers at all. 
On the client side itself we will generate a hash of the secret message and reference number and send the hash and the biometric credentials to the election commission.
If the biometrics match, then the election commission stores the hash mapped to the voterID and signals our system that the operation was successful.
If the biometrics do not match then we do not allow user to take any further action. On success, we generate a public address(and private key denoting the wallet/account) for that user on our blockchain.
We do not store the hash or any user info on our database, we just create a wallet on our blockchain if the user is authorized by the election commission.

- The contestants for the election can also follow similar steps except, we send back the public address of the contestant to the election commission to store it on their database.
This public address is like the "symbol/ID" against which other users can vote by transacting from their own wallet on the blockchain to the contestant's wallet.

- For voting, the user will go to a "voting page". There he has to enter the secret message + reference number that he got earlier. The system will take it and generate a hash. It will send back the hash to the Election commision. The election commission will validate it and say if the user if allowed or not.
If yes then our system will allow them to cast a vote by allowing their wallet to transact 1 token to the public addresses of one of the contestants. We will restrict our blockchain to allow only one transaction from one account. This way this vote will be one to one.

- This way the balance in the public address wallets of the contestants is their vote count. And we can get the winner.
- After the voting session is over, we can invalidate all the hashes in the election commision database and remove all the wallet accounts associated with the system. This allows multiple elections for same list of voters in the database.
- Since the users are allowed to transact only after the hash matches and transact only once, we ensure no one votes twice and votes cannot be forged
- Also since the election commission does not have a mapping of the voterID to the public wallet address of users, they cannot trace back who voted for whom. This gives anonymity to the users

- Thus our system ensures anonymity of users, stops vote forging and does not allow same user to vote again.
