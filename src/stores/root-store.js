import Web3Store from './web3-store';
import UserStore from './user-store';
import TransactionStore from './transaction-store';

class RootStore {
  constructor() {
    this.web3Store = new Web3Store(this);
    this.userStore = new UserStore(this);
    this.transactionStore = new TransactionStore(this);
  }
}

export default new RootStore();
