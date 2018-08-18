import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SmileyIcon extends PureComponent {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number,
      className: PropTypes.string,
    };
  }

  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' width={this.props.width} height={this.props.height} className={this.props.className}>
  <title>Triangle copy 2</title>
  <path d='M100.48,181.53A82.42,82.42,0,1,1,182.9,99.12a82.5,82.5,0,0,1-82.42,82.41' fill='#ffcd2f' />
  <path d='M100.48,5.59A93.53,93.53,0,1,0,194,99.12,93.63,93.63,0,0,0,100.48,5.59m0,175.94A82.42,82.42,0,1,1,182.9,99.12a82.5,82.5,0,0,1-82.42,82.41m42.76-67.14a60.52,60.52,0,0,1-85.51,0,4.45,4.45,0,1,0-6.29,6.29,69.43,69.43,0,0,0,98.08,0,4.44,4.44,0,0,0-6.28-6.29M70.64,83.83a7.34,7.34,0,1,0-7.34-7.34,7.34,7.34,0,0,0,7.34,7.34m58.64,0A7.33,7.33,0,1,0,122,76.49a7.33,7.33,0,0,0,7.33,7.33' fill='#ad7905' />
  <path d='M143.24,114.39a60.52,60.52,0,0,1-85.51,0,4.45,4.45,0,1,0-6.29,6.29,69.43,69.43,0,0,0,98.08,0,4.44,4.44,0,0,0-6.28-6.29' fill='#ad7905' stroke='#ad7905' strokeMiterlimit='10' strokeWidth='6' />
  <path d='M70.64,83.83a7.34,7.34,0,1,0-7.34-7.34,7.34,7.34,0,0,0,7.34,7.34' fill='#ad7905' stroke='#ad7905' strokeMiterlimit='10' strokeWidth='6' />
  <path d='M129.28,83.82A7.33,7.33,0,1,0,122,76.49a7.33,7.33,0,0,0,7.33,7.33' fill='#ad7905' stroke='#ad7905' strokeMiterlimit='10' strokeWidth='6' />
</svg>

    );
  }
}

export default SmileyIcon;

