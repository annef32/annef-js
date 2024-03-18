const crypto = require('crypto');
const axios = require('axios');

// Generate a random hexadecimal string of given length
function generateRandomHexString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Encrypt data using AES-256-CBC algorithm
function encryptData(data, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv, 'hex'));
  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
}

// Decrypt data using AES-256-CBC algorithm
function decryptData(encryptedData, key, iv) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// Fetch data from a URL and return as JSON
async function fetchDataFromURL(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from URL: ' + error.message);
  }
}

module.exports = {
  generateRandomHexString,
  encryptData,
  decryptData,
  fetchDataFromURL
};
