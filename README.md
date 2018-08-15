# ERC721 Minter with beneficiary

This project will allow a user to choose from a set of characters, give them a name, and have an amount they specify be donated to the artist.

A central service (node/express) will take the user's input, create a json payload of the metadata, and upload it to IPFS. Once that file has been uploaded, the dApp will pass this IPFS uri to the smart contract to be stored on an ERC721 token. Along with uri to the metadata, the user will pass a payment along to the smart contract to be transferred to the beneficiary.

Once this process is complete, the user will be able to view all of their characters, stored on Ethereum + IPFS.

# Running locally

Install npm packages:
```
npm install
```

In one tab, run the development console:
```
truffle develop
```

Compile and migrate the smart contracts inside the development console:
```
compile
migrate
```

In a second tab, run the express server:
```
npm run server-start
```

In a third tab, run the webpack server, by default it serves the frontend on `http://localhost:8080`
```
npm run start
```

Navigate to `http://localhost:8080` to start using the dApp.

To run tests
```
truffle test
```
