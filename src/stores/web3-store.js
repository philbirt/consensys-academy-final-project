import { observable, action, computed } from 'mobx';

export default class Web3Store {
  @observable account = null
  @observable web3 = null
  @observable contract = null

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
}
