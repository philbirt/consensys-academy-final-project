import 'babel-polyfill';
import MinterContract from '../build/contracts/Minter.json';

import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { observer, inject } from 'mobx-react';

import getWeb3 from './web3';
import { getBeneficiaries } from './api';

import Benemint from './svg/benemint';
import WaveIcon from './svg/wave-icon';
import SmileyIcon from './svg/smiley-icon';
import Benefit from './components/benefit';
import Collectible from './components/collectible';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Muli;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #00bf99;
  padding: 30px 0px;
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
`;

const Description = styled.div`
  width: 700px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0px 20px;
`;

const Subheader = styled.div`
  width: 100%;
  padding: 30px 0px;
  background-color: ${props => (props.error ? '#e9573f' : '#66d8c1')};

  max-height: ${props => (props.hasItems ? '400px' : '110px')};
  transition: all .3s ease-in-out;

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.25);
`;

const SubheaderDescription = styled.div`
  width: calc(100% - 120px);
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
`;

const Benefits = styled.div`
  display: flex;
  margin: 100px 0px;
`;

const HelloAccount = styled.div`
  font-size: 21px;
  font-weight: bold;
  color: #ffffff;
`;

const HelloItems = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

const Separator = styled.div`
  margin: 15px 0px;
`;

const SmileWrapper = styled.div`
  width: 120px;
`;

const Collectibles = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar { display: none; }
`;

@inject('store')
@observer
class Index extends Component {
  constructor(props) {
    super(props);

    this.web3Store = this.props.store.web3Store;
    this.userStore = this.props.store.userStore;

    this.state = {
      beneficiaries: [],
      collectibleData: [],
    }
  }

  componentWillMount() {
    getWeb3.then(results => {
      this.web3Store.updateWeb3(results.web3);

      this.instantiateContract();
      this.instantiateAccount();
      this.fetchBeneficiaries();
    })
    .catch((e) => {
      console.log(e);
      console.log('Error finding web3.');
    })
  }

  fetchBeneficiaries() {
    getBeneficiaries().then((response) => {
      this.setState({beneficiaries: response.data });
    });
  }

  async instantiateContract() {
    let contract = new this.web3Store.web3.eth.Contract(
      MinterContract.abi,
      MinterContract.networks['4447'].address,
      { from: this.state.account }
    );

    this.web3Store.updateContract(contract);
  }

  instantiateAccount() {
    this.web3Store.web3.eth.getAccounts((error, accounts) => {
      this.web3Store.updateAccount(accounts[0])
      this.userStore.updateCollectibleData();
    });
  }

  renderCollectibles() {
    return this.userStore.collectibleData.map((collectible, index) => {
      return (
        <Collectible
          key={index}
          name={collectible.name}
          price={collectible.price}
          beneficiary={collectible.beneficiary}
        />
      );
    });
  }

  renderSubheader() {
    const { account } = this.web3Store;
    const { collectibleData } = this.userStore;

    if (account) {
      return (
        <Subheader hasItems={collectibleData.length > 0}>
          <SmileWrapper>
            <SmileyIcon width={50} height={50} className={css`margin: 0px 30px;`} />
          </SmileWrapper>
          <SubheaderDescription>
            <HelloAccount>Hello {account}</HelloAccount>
            { collectibleData.length === 0 &&
              <HelloItems>Why don't you try minting a mint above?</HelloItems>
            }
            { collectibleData.length > 0 &&
              <Collectibles>{this.renderCollectibles()}</Collectibles>
            }
          </SubheaderDescription>
        </Subheader>
      );
    } else {
      return (
        <Subheader error>
          <WaveIcon width={50} height={50} className={css`margin: 0px 30px;`} />
          <SubheaderDescription>
            Hello! Please sign in to MetaMask
          </SubheaderDescription>
        </Subheader>
      );
    };
  }

  renderBenefits() {
    return this.state.beneficiaries.map((benefit, i) => {
      return (
        <Benefit
          key={benefit.id}
          id={benefit.id}
          name={benefit.name}
          address={benefit.address}
          image={benefit.image}
        />
      );
    });
  }

  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          <Header>
            <Benemint width={210} height={40} className={css`margin: 0px 20px;`} />
            <Description>
              This dApp will allow a user to choose from a set of mints,
              give them a name, and specify an amount to be donated to their favorite mint company.
              <Separator />
              Upon completion an ERC721 token representing their mint will be minted,
              forever signifying their love and support for mints.
            </Description>
          </Header>
        </HeaderWrapper>
        { this.renderSubheader() }
        <Benefits>
          { this.renderBenefits() }
        </Benefits>
      </Wrapper>
    );
  }
}

export default Index;
