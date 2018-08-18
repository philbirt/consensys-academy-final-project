import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const ButtonTag = styled.button`
  width: 201px;
  height: 38px;
  border-radius: 5px;
  background-color: #424a55;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border: 0;
  cursor: pointer;

  font-size: 16px;
  font-weight: 800;
  line-height: 1.31;
  letter-spacing: 0.9px;
  text-align: center;
  color: #ffffff;
  margin: 20px 0px;

  :disabled {
    background: #dddddd;
    cursor: default;
  }
`;


class Button extends Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      text: PropTypes.string,
      handleClick: PropTypes.func,
      targetBlank: PropTypes.bool,
      disabled: PropTypes.bool,
    };
  }

  render() {
    return (
      <ButtonTag onClick={this.props.handleClick} disabled={this.props.disabled}>
        {this.props.text}
      </ButtonTag>
    );
  }
}

export default Button;
