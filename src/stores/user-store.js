import { observable, action, computed } from 'mobx';
import { getIpfsData } from '../api';

export default class UserStore {
  @observable collectibleData = []

  constructor(root) {
    this.root = root;
    this.web3Store = this.root.web3Store;
  }

  @computed get collectibleArray() {
    return this.collectibleData;
  }

  @action
  updateCollectibleData = () => {
    this.web3Store.contract.methods.tokensOf(this.web3Store.account).call().then((response) => {
      response.map((tokenId, index) => {
        this.web3Store.contract.methods.tokenUriById(tokenId).call().then((web3Response) => {
          getIpfsData(web3Response).then((response) => {
            const jsonResponse = JSON.parse(response);

            if (index === 0) {
              this.collectibleData = [jsonResponse];
            } else {
              this.collectibleData.push(jsonResponse);
            }
          });
        });
      });
    });
  }
}
