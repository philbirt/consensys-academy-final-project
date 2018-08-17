import { observable, action, computed } from 'mobx';
import { ipfsUriToUrl, getIpfsImage } from '../api';

export default class Web3Store {
  @observable account = null
  @observable web3 = null
  @observable contract = null
  @observable collectibleData = []

  @action
  updateAccount = (account) => {
    this.account = account;
  }

  @action
  updateWeb3 = (web3) => {
    this.web3 = web3;
  }

  @action
  updateContract = (contract) => {
    this.contract = contract;
  }

  updateCollectibles = () => {
    this.collectibleData = [];

    this.contract.methods.tokensOf(this.account).call().then((response) => {
      response.map(tokenId => {
        this.contract.methods.tokenByUri(tokenId).call().then((response) => {
          getIpfsImage(ipfsUriToUrl(response)).then((response) => {
            this.collectibleData.push(response.data);
          });
        });
      });
    });
  }
}
