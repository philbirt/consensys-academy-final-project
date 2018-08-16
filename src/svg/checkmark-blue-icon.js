import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CheckmarkBlueIcon extends PureComponent {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number,
      className: PropTypes.string,
    };
  }

  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.76 10' width={this.props.width} height={this.props.height} className={this.props.className}>
        <path d='M3.74,10A1,1,0,0,1,3,9.69L.29,6.91a1,1,0,0,1,0-1.44,1,1,0,0,1,1.44,0L3.64,7.42l5.28-7a1,1,0,0,1,1.63,1.23l-6,8a1,1,0,0,1-.75.41H3.74' fill='#4a90e2' fillRule='evenodd' />
      </svg>
    );
  }
}

export default CheckmarkBlueIcon;

