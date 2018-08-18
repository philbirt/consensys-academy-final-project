import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Spinner extends PureComponent {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number,
      className: PropTypes.string,
      fillColor: PropTypes.string,
    };
  }

  render() {
    return (
      <svg viewBox='0 0 100 100' width={this.props.width} height={this.props.height} className={this.props.className}>
        <path fill={this.props.fillColor} d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'>
          <animateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' />
        </path>
      </svg>
    );
  }
}

Spinner.defaultProps = {
  fillColor: '#00bf99',
};

export default Spinner;

