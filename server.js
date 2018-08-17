require('dotenv').config()
const express = require('express');
const http = require('http');
const cors = require('cors');
var bodyParser = require('body-parser')
const Web3 = require('web3');
const Web3Utils = require('web3-utils');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

import IPFS from 'ipfs-api';

import { beneficiaries } from './src/beneficiaries';
import { buildJson, generateNonce } from './src/utils';

const web3 = new Web3(new Web3.providers.HttpProvider("https://localhost:9594"));

app.post('/mint', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  let { toAddress, beneficiaryId, name, price } = req.body;
  toAddress = web3.utils.toChecksumAddress(toAddress);

  const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
  const bodyJson = Buffer.from(JSON.stringify(buildJson(
    toAddress,
    beneficiaryId,
    name,
    price,
  )))

  ipfs.add(bodyJson, (err, ipfsObj) => {
    let ipfsUri = ipfsObj[0].path;
    const account = web3.eth.accounts.privateKeyToAccount(process.env.PKEY);
    const nonce = generateNonce();
    const sha = Web3Utils.soliditySha3(
      { t: 'address', v: toAddress },
      { t: 'string', v: ipfsUri },
      { t: 'uint8', v: beneficiaryId },
      { t: 'uint256', v: nonce },
      { t: 'uint256', v: price }
    );

    const sig = account.sign(sha);

    const responseBody = {
      ipfsUri,
      nonce,
      v: web3.utils.hexToNumber(sig.v),
      r: sig.r,
      s: sig.s
    }

    res.send(JSON.stringify(responseBody));
  });
});

app.get('/beneficiaries', function(req, res) {
  res.send(JSON.stringify(beneficiaries))
});

app.listen(process.env.PORT || 8180);
