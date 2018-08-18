import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class EtherIcon extends PureComponent {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number,
      className: PropTypes.string,
    };
  }

  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.5 25.5' width={this.props.width} height={this.props.height} className={this.props.className}>
        <path d='M1,11.76l6.07,3.67h.27l6.06-3.74a.13.13,0,0,0,.13-.13v-.2L7.39,1c0-.06-.06-.13-.2-.13L7,1,.86,11.36v.2Z' fill='#899dff' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
        <path d='M13.19,15.16l-6,3.6-6-3.6c-.06-.07-.2,0-.26.07a.26.26,0,0,0-.07.33L7,24.36h.4l6.13-8.87c.07-.06,0-.2-.06-.26a.14.14,0,0,0-.27-.07Z' fill='#899dff' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
      </svg>
    );
  }
}

export default EtherIcon;

