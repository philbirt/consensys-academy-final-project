import axios from 'axios';

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
      //handle error
      reject(error);
    });
  });
}

export function getBeneficiaries() {
  return get('http://localhost:8180/beneficiaries');
}

export function ipfsUriToUrl(ipfsUri) {
  return `https://ipfs.io/ipfs/${ipfsUri}`
}

export function getIpfsImage(ipfsUrl) {
  return get(ipfsUrl);
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
