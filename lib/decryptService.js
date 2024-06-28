import CryptoJS from 'crypto-js';
const key = 'Nx123OTT0923J129'; // Nx123OTT0923J129 // T20TSportsANDNex

export function dataDecript(data) {
  let keys = CryptoJS.enc.Utf8.parse(key);
  let iv = CryptoJS.enc.Utf8.parse('');
  let decryptedData = CryptoJS.AES.decrypt(data, keys, {
    iv: iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  // return decryptedData.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
}

export function encryptData(data) {
  const jsonString = JSON.stringify(data);
  let keys = CryptoJS.enc.Utf8.parse(key);
  let encrypted = CryptoJS.AES.encrypt(jsonString, keys, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  const ciphertext = encrypted.toString();
  return ciphertext;
}
