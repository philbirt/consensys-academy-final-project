import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { observer, inject } from 'mobx-react';

import Button from './button';
import Transaction from './transaction';
import Spinner from '../svg/spinner';
import PencilIcon from '../svg/pencil-icon';
import EtherIcon from '../svg/ether-icon';
import CheckmarkCircleIcon from '../svg/checkmark-circle-icon';
import CheckmarkBlueIcon from '../svg/checkmark-blue-icon';
import LoaderDots from '../svg/loader-dots';

import { mintApi, getIpfsData } from '../api';

const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  margin: 0px 10px;
  padding: 10px 30px;

  width: 180px;
  height: 330px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.3);
`;

const Overlay = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BenefitImage = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Inputs = styled.div``;

const BeneficiaryName = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.29;
  letter-spacing: 0.1px;
  text-align: center;
  margin-top: 10px;
`;

const BeneficiaryAddress = styled.div`
  font-size: 6px;
  text-align: center;
  margin: 1px 0px 10px 0px;
`;

const NameInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const NameInput = styled.input`
  width: 165px;
  height: 21px;
  font-size: 14px;
  font-weight: bold;
  line-height: 2.86;

  border: 0;
  border-bottom: 1px solid #ccc;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #9b9b9b;
  }
`;

const PriceInput = styled.input`
  font-size: 14px;
  font-weight: 800;
  line-height: 1.63;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border-width: 0px;
  background-color: #eee;
  margin-top: 10px;
  text-align: center;
`;

@inject('store')
@observer
class Benefit extends Component {
  constructor(props) {
    super(props);

    this.transactionStore = props.store.transactionStore;
    this.web3Store = props.store.web3Store;
    this.userStore = props.store.userStore;

    this.state = {
      name: '',
      price: '',
      transactionInProgress: false,
      loadedImage: '<svg></svg>'
    };
  }

  componentWillMount() {
    this.fetchImage();
  }

  updateName = (e) => {
    this.setState({ name: e.target.value });
  }

  updatePrice = (e) => {
    this.setState({ price: e.target.value });
  }

  handleSubmit = (e) => {
    const { name, price } = this.state;
    const { contract, web3, account } = this.web3Store;
    const { id } = this.props;

    this.setState({ submitted: true });
    this.transactionStore.updateCreatingAvatar();

    mintApi(
      account,
      id,
      name,
      price
    ).then((response) => {
      const { ipfsUri, nonce, v, r, s } = response.data;

      this.transactionStore.updateAvatarCreated();
      this.transactionStore.updateSendingToBlockhain();

      contract.methods.mintTo(
        account,
        id,
        ipfsUri,
        nonce,
        v, r, s
      ).send({
        from: account,
        value: web3.utils.toWei(price, 'ether')
      }).on('transactionHash', (transactionHash) => {
        this.transactionStore.updateSentToBlockchain();
        this.transactionStore.updateTransactionInProgress();
      }).on('confirmation', (confirmationNumber, receipt) => {
        if (this.transactionStore.inProgress && confirmationNumber === 6) {
          this.transactionStore.updateTransactionCompleted();
        }
      });
    });
  }

  onTransactionComplete = () => {
    this.setState({ submitted: false, name: '', price: '' });
    this.transactionStore.clearTransactionState();
    this.userStore.updateCollectibleData();
  }

  buttonDisabled() {
    return !(this.state.price && this.state.name) || this.transactionStore.inProgress;
  }

  async fetchImage() {
    const imageData = await getIpfsData(this.props.image);
    this.setState({loadedImage: imageData });
  }

  render() {
    const { submitted, loadedImage, name, price } = this.state;
    const { account } = this.web3Store;

    return (
      <Wrapper>
        {
          submitted &&
          <Transaction onComplete={this.onTransactionComplete} />
        }
        <BenefitImage dangerouslySetInnerHTML={{ __html: loadedImage }} />
        <Inputs>
          <NameInputWrapper>
            <PencilIcon width={20} height={20} className={css`margin: 0px 8px 0px 0px;`} />
            <NameInput
              placeholder="Your new mint's name"
              maxLength={20}
              value={name}
              onChange={this.updateName}
            />
          </NameInputWrapper>
          <PriceInput
            placeholder='0 ETH'
            value={price}
            onChange={this.updatePrice}
            min='0'
            step='0.001'
            inputMode='decimal'
            pattern='[0-9]*\.?[0-9]{0,3}'
            type='number'
          />
        </Inputs>
        <BeneficiaryName>to {this.props.name}</BeneficiaryName>
        <BeneficiaryAddress>{this.props.address}</BeneficiaryAddress>
        { account && <Button handleClick={this.handleSubmit} text='Mint me' disabled={this.buttonDisabled()} /> }
      </Wrapper>
    );
  }
}

export default Benefit;
