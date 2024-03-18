# Annef-js

Annef-js is a Node.js module that provides various cryptographic utilities, including random hex string generation, AES-256-CBC encryption and decryption, and fetching data from a URL.

## Installation

Install the module using npm: `npm install annef-js`

## Usage
```javascript
const crypticUtils = require('cryptic-utils');

// Generate a random hex string of length 16
const randomHex = crypticUtils.generateRandomHexString(16);
console.log('Random Hex:', randomHex);

// Encrypt and Decrypt Data
const data = 'Hello, World!';
const key = '0123456789abcdef0123456789abcdef'; // 32 bytes for AES-256-CBC
const iv = '00000000000000000000000000000000'; // 16 bytes for AES-256-CBC
const encryptedData = crypticUtils.encryptData(data, key, iv);
console.log('Encrypted Data:', encryptedData);
const decryptedData = crypticUtils.decryptData(encryptedData, key, iv);
console.log('Decrypted Data:', decryptedData);

// Fetch Data from URL
const url = 'https://jsonplaceholder.typicode.com/posts/1';
crypticUtils.fetchDataFromURL(url)
  .then(data => console.log('Fetched Data:', data))
  .catch(error => console.error('Error:', error));
```

