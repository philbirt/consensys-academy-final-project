import Web3 from 'web3';
import { beneficiaryById } from './beneficiaries';

export function buildJson(toAddress, beneficiaryId, name, price) {
  return {
    "address": toAddress,
    "name": name,
    "price": price,
    "beneficiary": beneficiaryById(beneficiaryId),
  };
}

export function generateNonce() {
  return parseInt(Math.random()*100000000000);
}
