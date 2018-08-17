import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { getIpfsImage } from '../api';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  min-width: 180px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.3);

  margin: 20px 20px 20px 0px;
  padding: 15px 20px;
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
`;

const CollectibleData = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.5;
  color: #424a55;
  margin-left: 15px;
`;

class Collectible extends Component {
  static get propTypes() {
    return {
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      loadedImage: '<svg></svg>'
    };
  }

  componentWillMount() {
    this.fetchImage();
  }

  async fetchImage() {
    getIpfsImage(this.props.beneficiary.image).then((response) => {
      this.setState({loadedImage: response.data });
    });
  }

  render() {
    const { name, price, beneficiary } = this.props;

    return (
      <Wrapper>
        <Image dangerouslySetInnerHTML={{ __html: this.state.loadedImage }} />
        <CollectibleData>
          <div>{name}</div>
          <div>{price} ETH</div>
          <div>to {beneficiary.name}</div>
        </CollectibleData>
      </Wrapper>
    );
  }
}

export default Collectible;