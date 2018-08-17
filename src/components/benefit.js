const contract = require('truffle-contract');
import MinterContract from '../../build/contracts/Minter.json';

import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import Button from './button';
import Transaction from './transaction';
import Spinner from '../svg/spinner';
import PencilIcon from '../svg/pencil-icon';
import EtherIcon from '../svg/ether-icon';
import CheckmarkCircleIcon from '../svg/checkmark-circle-icon';
import CheckmarkBlueIcon from '../svg/checkmark-blue-icon';
import LoaderDots from '../svg/loader-dots';

import { mintApi, getIpfsImage } from '../api';

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

class Benefit extends Component {
  constructor(props) {
    super(props);

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

  handleSubmit = async (e) => {
    this.setState({ submitted: true, creatingAvatar: true });

    mintApi(
      this.props.account,
      this.props.id,
      this.state.name,
      this.state.price
    ).then((response) => {
      const { ipfsUri, nonce, v, r, s } = response.data;
      this.setState({ creatingAvatar: false, avatarCreated: true, sendingToBlockchain: true });

      const minterContract = contract(MinterContract);
      minterContract.setProvider(this.props.web3.currentProvider);

      minterContract.deployed().then((minterInstance) => {
        // console.log(this.props.account, this.props.id, ipfsUri, nonce,v,r,s);
        minterInstance.mintTo(
          this.props.account, this.props.id, ipfsUri, nonce, v, r, s,
          { from: this.props.account, value: this.props.web3.utils.toWei(this.state.price, 'ether') }
        ).then('transactionHash', (transactionHash) => {
          this.props.web3.eth.getTransactionReceipt(transactionHash).then((txReceipt) => {
            console.log("LOGS");
            console.log(txReceipt['logs'][0]['data']);
          });
        });
      });
    });
  }

  onTransactionComplete = () => {
    this.setState({
      name: '',
      price: '',
      submitted: false,
      creatingAvatar: false,
      avatarCreated: false,
      sendingToBlockchain: false,
      sentToBlockchain: false,
      transactionInProgress: false,
      transactionCompleted: false,
    });
  }

  buttonDisabled() {
    return !(this.state.price && this.state.name);
  }

  async fetchImage() {
    getIpfsImage(this.props.image).then((response) => {
      this.setState({loadedImage: response.data });
    });
  }

  render() {
    return (
      <Wrapper>
        {
          this.state.submitted &&
          <Transaction
            creatingAvatar
            onComplete={this.onTransactionComplete}
            creatingAvatar={this.state.creatingAvatar}
            avatarCreated={this.state.avatarCreated}
            sendingToBlockchain={this.state.sendingToBlockchain}
            sentToBlockchain={this.sendingToBlockchain}
            transactionInProgress={this.transactionInProgress}
            transactionCompleted={this.transactionCompleted}
          />
        }
        <BenefitImage dangerouslySetInnerHTML={{ __html: this.state.loadedImage }} />
        <Inputs>
          <NameInputWrapper>
            <PencilIcon width={20} height={20} className={css`margin: 0px 8px 0px 0px;`} />
            <NameInput
              placeholder="Your new mint's name"
              maxLength={20}
              value={this.state.name}
              onChange={this.updateName}
            />
          </NameInputWrapper>
          <PriceInput
            placeholder='0 ETH'
            value={this.state.price}
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
        { this.props.account && <Button handleClick={this.handleSubmit} text='Mint me' disabled={this.buttonDisabled()} /> }
      </Wrapper>
    );
  }
}

export default Benefit;
