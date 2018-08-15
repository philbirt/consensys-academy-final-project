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
import { buildJson } from './src/utils/buildJson';

const web3 = new Web3(new Web3.providers.HttpProvider("https://localhost:9594"));

app.post('/mint', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
  const bodyJson = Buffer.from(JSON.stringify(buildJson()))

  ipfs.add(bodyJson, (err, ipfsObj) => {
    let ipfsHash = ipfsObj[0].path;
    const account = web3.eth.accounts.privateKeyToAccount(process.env.PKEY);
    const sha = Web3Utils.soliditySha3(ipfsHash);
    const sig = account.sign(sha);

    const responseBody = {
      token_uri: ipfsHash,
      v: web3.utils.hexToNumber(sig.v),
      r: sig.r,
      s: sig.s
    }

    res.send(JSON.stringify(responseBody));
  });
});

app.listen(process.env.PORT || 8180);
