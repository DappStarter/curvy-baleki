require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom process outside venture stomach cost ranch pulp hard light army gesture'; 
let testAccounts = [
"0xe0834b5d38911fb6acf016ae449d539ab59f636923d50f5d0d9527fd3f547172",
"0x3f51177e501474f4770052030c41caeecf0b3f190f4c2bf3b9d2a4089a7c339b",
"0xd0f05d52dc00732b012211ccebf4556b4db77f127b5001e1b682beb811fc0031",
"0x642c95f1f6a39e941440c25d8827005d9ad65d3e34d5fae00abdcff8ee83ef33",
"0xfefc6c93e3936577bf36eb92e01e2254dc89e8aefe82d4cbb7949a0ad345b8a3",
"0x73fda2c8a0d0639add53f01138d5b2ecdbf8d341dcf018b88a8790c90b050378",
"0x9d58b38da8fff3ce8f8f5595e5b27bba13893bc3d9afa593b922416c7f1f0645",
"0x61d310bff17d4fc26ff3b01914da6242fad22e86def4747c3c9fbda1b519e2b3",
"0x9a31ac8bfb4276092e67b6be085906944b2e523ae42f288714ef711fde48941f",
"0xe32f86822546d0a23163d3ba15168e14bd865f28dbbfd0c6bf41d74fb3590524"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


