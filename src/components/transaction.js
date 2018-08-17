import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import styled, { css } from 'react-emotion';

import Button from './button';
import Spinner from '../svg/spinner';
import PencilIcon from '../svg/pencil-icon';
import EtherIcon from '../svg/ether-icon';
import CheckmarkCircleIcon from '../svg/checkmark-circle-icon';
import CheckmarkBlueIcon from '../svg/checkmark-blue-icon';
import LoaderDots from '../svg/loader-dots';

import { getIpfsImage } from '../api';

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

const LoaderWrapper = styled.div`
  position: relative;
  width: 75;
  height: 75;
  margin-top: -15px;
`;

const StepsWrapper = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.67;
  color: #000000;
  padding-bottom: 45px;
`;

const Step = styled.div`
  display: flex;
`;

const IconsWrapper = styled.div`
  width: 12px;
  height: 12px;
  margin-top: 3px;
  margin-right: 7px;
`;

const TransactionStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px 10px 0px;
`;

const TransactionHeader = styled.div`
  font-size: 16px;
  font-weight: 800;
  line-height: 2.13;
  letter-spacing: 0.3px;
  text-align: center;
`;

class Transaction extends Component {
  adoptionInProgress() {
    let { transactionInProgress, transactionCompleted, creatingAvatar, avatarCreated, sendingToBlockchain, sentToBlockchain } = this.props;
    return creatingAvatar || sendingToBlockchain || transactionInProgress || transactionCompleted;
  }

  render() {
    let { transactionInProgress, transactionCompleted, creatingAvatar, avatarCreated, sendingToBlockchain, sentToBlockchain } = this.props;

    return (
      <Overlay>
        <TransactionHeader>Hold tight!</TransactionHeader>
        <TransactionStatusWrapper>
          {!transactionCompleted &&
            <LoaderWrapper>
              <Spinner />
              <EtherIcon
                width={20}
                height={20}
                className={css`
                  position: absolute;
                  width: 20px;
                  left: 0;
                  right: 0;
                  top: 27px;
                  margin-left: auto;
                  margin-right: auto;
                `}
              />
            </LoaderWrapper>
          }
          {transactionCompleted &&
            <CheckmarkCircleIcon width={44} height={44} className={css`margin: 5px 0px 10px 0px;`}/>
          }
        </TransactionStatusWrapper>
        <StepsWrapper>
          <Step>
            <IconsWrapper>
              {creatingAvatar && <LoaderDots width={12} height={12} />}
              {avatarCreated && <CheckmarkBlueIcon width={13} height={11} />}
            </IconsWrapper>
            Uploading to the IPFS
          </Step>
          <Step>
            <IconsWrapper>
              {sendingToBlockchain && <LoaderDots width={12} height={12} />}
              {sentToBlockchain && <CheckmarkBlueIcon width={13} height={11} />}
            </IconsWrapper>
            Sending to Blockchain
          </Step>
          <Step>
            <IconsWrapper>
              {transactionInProgress && <LoaderDots width={12} height={12} />}
              {transactionCompleted && <CheckmarkBlueIcon width={13} height={11} />}
            </IconsWrapper>
            Transaction in progress
          </Step>
          <Step>
            <IconsWrapper>
              {transactionCompleted && <CheckmarkBlueIcon width={13} height={11} />}
            </IconsWrapper>
            Transaction completed
          </Step>
        </StepsWrapper>
        <Button handleClick={this.props.onTransactionComplete} text='Show me the mint!' disabled={!transactionCompleted}/> 
      </Overlay>
    );
  }
}

export default Transaction;
