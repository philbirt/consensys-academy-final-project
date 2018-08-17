import 'babel-polyfill';
import MinterContract from '../build/contracts/Minter.json';

import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import getWeb3 from './web3';
import { getBeneficiaries } from './api';

import Benemint from './svg/benemint';
import WaveIcon from './svg/wave-icon';
import SmileyIcon from './svg/smiley-icon';
import Benefit from './components/benefit';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Muli;
`;

const Header = styled.div`
  width: 100%;
  background-color: #00bf99;
  padding: 30px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.25);
`;

const SubheaderDescription = styled.div`
  width: 860px;
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

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      account: null,
      contract: null,
      beneficiaries: [],
    }
  }

  componentWillMount() {
    getWeb3.then(results => {
      this.setState({
        web3: results.web3
      })

      this.instantiateAccount();
      this.instantiateContract();
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
    console.log(MinterContract.networks['4447'].address);

    let contract = new this.state.web3.eth.Contract(
      MinterContract.abi,
      MinterContract.networks['4447'].address,
      { from: this.state.account }
    );

    // contract.methods.minterAddress().call().then((response) => {
    //   console.log(response);
    // });

    this.setState({ contract });
  }

  instantiateAccount() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.setState({ account: accounts[0] });
    });
  }

  renderSubheader() {
    if (this.state.account) {
      return (
        <Subheader>
          <SmileyIcon width={50} height={50} className={css`margin: 0px 30px;`} />
          <SubheaderDescription>
            <HelloAccount>Hello {this.state.account}</HelloAccount>
            <HelloItems>Why don't you try minting a mint above?</HelloItems>
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
          web3={this.state.web3}
          contract={this.state.contract}
          account={this.state.account}
        />
      );
    });
  }

  render() {
    return (
      <Wrapper>
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
        { this.renderSubheader() }
        <Benefits>
          { this.renderBenefits() }
        </Benefits>
      </Wrapper>
    );
  }
}

export default Index;
