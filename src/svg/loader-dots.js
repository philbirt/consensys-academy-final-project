import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class LoaderDots extends PureComponent {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number,
      className: PropTypes.string,
    };
  }

  fillColor() {
    return '#00bf99';
  }

  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 6' width={this.props.width} height={this.props.height} className={this.props.className}>
        <circle fill={this.fillColor()} stroke='none' cx='3' cy='5' r='3'>
          <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.1' />
        </circle>
        <circle fill={this.fillColor()} stroke='none' cx='13' cy='5' r='3'>
          <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.2' />
        </circle>
        <circle fill={this.fillColor()} stroke='none' cx='23' cy='5' r='3'>
          <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.3' />
        </circle>
      </svg>
    );
  }
}

LoaderDots.defaultProps = {
  width: 25,
  height: 25,
};

export default LoaderDots;
