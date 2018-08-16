import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PencilIcon extends PureComponent {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number,
      className: PropTypes.string,
    };
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height} className={this.props.className} viewBox='0 0 100 100'>
        <path d='M20.4,63.5,15.2,84.8l21.3-5.2L84.8,31.4,68.6,15.2ZM33.1,73.6l-8.8,2.1,2.1-8.8,35-35,6.7,6.7ZM72.8,33.9l-6.7-6.7,2.6-2.6,6.7,6.7Z' fill='#000000' />
      </svg>
    );
  }
}

export default PencilIcon;
