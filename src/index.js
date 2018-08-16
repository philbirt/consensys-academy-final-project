import 'babel-polyfill';
import React, { Component } from 'react';
import styled from 'react-emotion';

import MinterContract from '../build/contracts/Minter.json';
import getWeb3 from './web3';


const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 20px;
`;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storageValue: 0,
      web3: null,
      account: null,
    }
  }

  componentWillMount() {
    getWeb3.then(results => {
      this.setState({
        web3: results.web3
      })

      this.instantiateContract();
      this.instantiateAccount();
    })
    .catch(() => {
      console.log('Error finding web3.');
    })
  }

  instantiateAccount() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.setState({ account: accounts[0] });
    });
  }

  instantiateContract() {
    // const contract = require('truffle-contract');
    // const simpleStorage = contract(SimpleStorageContract);
    // simpleStorage.setProvider(this.state.web3.currentProvider);

    // // Declaring this for later so we can chain functions on SimpleStorage.
    // var simpleStorageInstance;

    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   simpleStorage.deployed().then((instance) => {
    //     simpleStorageInstance = instance;

    //     // Stores a given value, 5 by default.
    //     return simpleStorageInstance.set(5, {from: accounts[0]});
    //   }).then((result) => {
    //     // Get the value from the contract to prove it worked.
    //     return simpleStorageInstance.get.call(accounts[0]);
    //   }).then((result) => {
    //     // Update state with the result.
    //     return this.setState({ storageValue: result.c[0] });
    //   });
    // });
  }

  renderGreeting() {
    const message = this.state.account ? `Hello ${this.state.account}` : "Hello, please sign into metamask"

    return (<div>{message}</div>);
  }

  render() {
    return (
      <Wrapper>
        {this.renderGreeting()}
      </Wrapper>
    );
  }
}

export default Index;
