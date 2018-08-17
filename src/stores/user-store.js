import { observable, action, computed } from 'mobx';

export default class UserStore {
  @observable collectibleData = []

  @action
  updateCollectibleData = () => {

  }
}
