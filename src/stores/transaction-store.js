import { observable, action, computed } from 'mobx';

export default class TransactionStore {
  @observable creatingAvatar = false
  @observable avatarCreated = false
  @observable sendingToBlockchain = false
  @observable sentToBlockchain = false
  @observable transactionInProgress = false
  @observable transactionCompleted = false

  @computed get inProgress() {
    return this.creatingAvatar || this.avatarCreated || this.sendingToBlockchain || this.sentToBlockchain || this.transactionInProgress || this.transactionCompleted;
  }

  @computed get adoptionTokenURI() {
    return `https://gotem.com`;
  }

  @action
  updateCreatingAvatar = () => {
    this.creatingAvatar = true;
  }

  @action
  updateAvatarCreated = () => {
    this.creatingAvatar = false;
    this.avatarCreated = true;
  }

  @action
  updateSendingToBlockhain = () => {
    this.sendingToBlockchain = true;
  }

  @action
  updateSentToBlockchain = () => {
    this.sendingToBlockchain = false;
    this.sentToBlockchain = true;
  }

  @action
  updateTransactionInProgress = () => {
    this.transactionInProgress = true;
  }

  @action
  updateTransactionCompleted = () => {
    this.transactionInProgress = false;
    this.transactionCompleted = true;
  }

  @action
  clearTransactionState = () => {
    this.creatingAvatar = false;
    this.avatarCreated = false;
    this.sendingToBlockchain = false;
    this.sentToBlockchain = false;
    this.transactionInProgress = false;
    this.transactionCompleted = false;
  }

  @action
  updateTokenURI = (tokenURI) => {
    this.tokenURI = tokenURI;
  }

  @action
  updateTransactionHash = (transactionHash) => {
    this.transactionHash = transactionHash;
  }
}
