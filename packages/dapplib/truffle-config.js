require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain history idea narrow fringe that'; 
let testAccounts = [
"0x79a7d3453cb9f226dcb5b41418cf3572b0e0f33a7c5847ed762a37fbd2cc9c84",
"0x7d83cb469a7ce3ec0468f71fa9170c83502fb8132c428ca5433e9b1a30a3f277",
"0x0533d8ea9f2140814b95244b58a03d46724ced277befb3b75b7b932760e78052",
"0x16f9cf5b135c7c79d5fa5fb3413ac7bb7fcca03a90a3be641a3ec30136da1edc",
"0xe7290141891d917b06930d59853b749777a5a6d768ac15c47ba796ef3e2efef4",
"0x5d75ce10929be4368622fc02d33414d26f50d0e7af0d78219ccf47f6c6a190fc",
"0x8b99606634e03e31c202a5b44d823b432e1827fdd2458f46035831d91e883326",
"0x6659631e3a7aa0fd05ef71d29fd081a73e7cf0b24c9c0eab496984ee7d932434",
"0x81d4bbe6e1f7baffcb2466fbe9e36482fc75e46ac3431fe10b5b54186b460c85",
"0x8f2ae605f8191f603418322836ee55392954ff3cf7283e86d54929c42f51db21"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
