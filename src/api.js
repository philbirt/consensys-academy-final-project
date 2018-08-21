import axios from 'axios';
import IPFS from 'ipfs-api';

export function post(requestUrl, data) {
  return new Promise((resolve, reject) => {
    axios.post(
      requestUrl,
      JSON.stringify(data),
      { headers: { 'Content-Type': 'application/json' } },
    ).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      //handle error
      reject(error);
    });
  });
}

export function get(requestUrl, data) {
  return new Promise((resolve, reject) => {
    axios.get(
      requestUrl,
      { headers: { 'Content-Type': 'application/json' } },
    ).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      console.log('error', error);
      //handle error
      reject(error);
    });
  });
}

export function getBeneficiaries() {
  return get('http://localhost:8180/beneficiaries');
}

export async function getIpfsData(ipfsUri) {
  const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
  let ipfsObj = await ipfs.get(ipfsUri);
  return ipfsObj[0].content.toString('utf8');
}

export function mintApi(toAddress, beneficiaryId, name, price) {
  return post(
    'http://localhost:8180/mint',
    {
      toAddress,
      beneficiaryId,
      name,
      price,
    }
  )
}
