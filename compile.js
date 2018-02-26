const path = require('path'); // cross - platform compatibility
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

//use console.log(solc.compile(source,1)) to show output with  node compile.js
module.exports = solc.compile(source,1).contracts[':Inbox'];
