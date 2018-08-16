import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CheckmarkCircleIcon extends PureComponent {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number,
      className: PropTypes.string,
    };
  }

  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44.72 44.72' width={this.props.width} height={this.props.height} className={this.props.className}>
        <circle cx='22.36' cy='22.36' r='22.36' fill='#7ed321' />
        <path d='M32.71,13.34a2,2,0,0,1,.78,1.25A1.86,1.86,0,0,1,33.1,16L21.44,31.59a2.16,2.16,0,0,1-1.37.71,2,2,0,0,1-1.52-.57l-5.38-5.41a1.81,1.81,0,0,1-.59-1.38,2,2,0,0,1,.56-1.32,1.93,1.93,0,0,1,1.36-.57,2,2,0,0,1,1.36.57l3.81,3.86L30.09,13.77A1.91,1.91,0,0,1,32.71,13.34Z' fill='#fff' />
      </svg>
    );
  }
}

export default CheckmarkCircleIcon;

