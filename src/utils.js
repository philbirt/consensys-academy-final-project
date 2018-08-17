import Web3 from 'web3';

export function buildJson(toAddress, beneficiaryId, name, price) {
  return {
    "address": toAddress,
    "name": name,
    "price": price,
    "beneficiary": {
      "id": beneficiaryId,
      "name": beneficiaryId,
    },
  };
}

export function generateNonce() {
  return parseInt(Math.random()*100000000000);
}
