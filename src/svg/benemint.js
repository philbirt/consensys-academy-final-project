import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Benemint extends PureComponent {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number,
      className: PropTypes.string,
    };
  }

  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 209.89 40.86' width={this.props.width} height={this.props.height} className={this.props.className}>
        <g>
          <path d='M32.94,24.12a4.15,4.15,0,0,1-.06,1.6c-.1.11-.1.41-.15.62s-.11.26-.11.42A7.59,7.59,0,0,1,31.9,29l-.46.47c-.57.57-1.4,1.65-2.12,1.86-.11,0-.16.05-.26.15l-.42.11.26-.05-.21.1-.62.21-.46.25h.05a4.35,4.35,0,0,1-1.14.47l-.72.21a7.34,7.34,0,0,1-2.54.46,12.54,12.54,0,0,1-2.79-.21l.21.16a12.13,12.13,0,0,0-1.29-.1h-.88c0-.06,0-.06,0-.06H18c-.31,0-.62.06-.88.06h-3a.44.44,0,0,1-.41-.11,1.36,1.36,0,0,0-.42,0l-.57-.15a2.44,2.44,0,0,1-2-1.56,16.68,16.68,0,0,1-.16-2v-.93a2.38,2.38,0,0,0,0-.88l.16-1.55a22,22,0,0,1,.15-3.05,2.06,2.06,0,0,0,0-.52V21.17c0-.15.06-.31.06-.41A9.09,9.09,0,0,0,11,19.62a16.87,16.87,0,0,1-.05-4.14,11.71,11.71,0,0,0-.06-1.6v-.47a11.61,11.61,0,0,1,.06-1.24c0-.15.05-.31.05-.41a4.15,4.15,0,0,0,0-.67v-.62c0-1.61.05-3.57,3.83-3.83h1.5a2.7,2.7,0,0,0,.51,0s.88,0,1.61,0a6,6,0,0,1,2.27,0h.83a1.25,1.25,0,0,0,.36,0,1.17,1.17,0,0,0,.31,0l.57.16a3.38,3.38,0,0,1,1,.31l-.2-.06c.05,0,.1.11.15.11l.31.1.62.41c2.07,1.45,2.38,1.71,3.41,4a4,4,0,0,1-.2,3V14.6c-.32,1-.52,1.54.41,2.12,1.6,1,4,2.64,4.29,4.76,0,.31,0,.31,0,.36A9.63,9.63,0,0,1,32.94,24.12ZM27,21.33h.05a4.84,4.84,0,0,0-2.91-1.25,6.51,6.51,0,0,0-3.81.21,27.11,27.11,0,0,1-3.31,1.09l.05-.05a4.26,4.26,0,0,0-2.27,3.2v.36a5.94,5.94,0,0,0,.15.94c.26,2.27,2.59,3.56,5.43,3.77a9,9,0,0,0,2.84-.1l.88-.11a12.55,12.55,0,0,0,1.66-.51l-.16.05c.21-.16.31-.31.57-.31.11-.05.11-.11.26-.16l.67-.41c1.19-.73,1.24-1.55,1.35-2.69V25.1A4.84,4.84,0,0,0,27,21.33ZM15,14.45a4.94,4.94,0,0,0,0,1.19c0,1.19,1.5,1.55,2.43,1.34a11.72,11.72,0,0,0,2.33-.62c.46-.1,1.34-.41,1-.36l-.15.05a13.79,13.79,0,0,0,1.91-1.19l.36-.46c1-1,1.32-1.86.16-2.85V11.5c-.52-.26-.78-.77-1.35-1l-.05,0-.41-.31.15.15H21.3L21,10.26a7.24,7.24,0,0,0-2.69,0,3.33,3.33,0,0,0-3.21,3.15V14C15.09,14.14,15,14.34,15,14.45Z'fill='#fff' />
          <path d='M54.65,28.72a2.17,2.17,0,0,1,1.6,2.07A2.36,2.36,0,0,1,54,33.12h-.72c-1.49,0-3,0-4.5-.11H46a14.43,14.43,0,0,0-2,.21,17.91,17.91,0,0,1-2.22,0h-.16c-1.5-.05-4.34-.11-4.19-5v-2a3.2,3.2,0,0,0,.11-1v-.57A21.87,21.87,0,0,1,37.48,22v-.16c0-.15.06-.36.06-.62v-.52a7.49,7.49,0,0,0-.06-1,7.24,7.24,0,0,0,0-1.19v-.83a13.15,13.15,0,0,1,.11-2.17,1.13,1.13,0,0,0,.05-.2,2.49,2.49,0,0,0,0-.68c-.1-.82,0-2.63,0-3.41,0-2.12,1.75-3.77,3.15-3.77h4.71c.77,0,1.55,0,2.32,0,.93,0,2.28,0,3.68,0h2.06c.21,0,.68.05.68.05a4,4,0,0,1,1.13.31,2.29,2.29,0,0,1,1.09,2.9A2.25,2.25,0,0,1,54.5,12H53c-1.35-.06-3.78-.11-4-.11H47.26c-.16,0-.47,0-1.92.05s-3.72.16-3.56,3.42a2.75,2.75,0,0,0,2.32,2.84,16.23,16.23,0,0,0,1.71,0H48c2.48,0,2.44,4.35.1,4.35a3.18,3.18,0,0,0-.41.05c-1.67.13-6-.26-5.74,2.48v1.09c.15,1.44,1.86,2.48,3.36,2.48h.21s.1,0,0,0a2.3,2.3,0,0,1,1-.15H48.6a11.14,11.14,0,0,1,1.24.05c.47,0,1.09.1,1.55.1a12.86,12.86,0,0,1,3.16,0Z'fill='#fff' />
          <path d='M83.66,14.66a.3.3,0,0,0,0,.2,26,26,0,0,0-.11,2.9c0,1,0,2.74,0,4.13V23.5a6.71,6.71,0,0,1,0,2.53,6.57,6.57,0,0,0-.1.93v.88a11.31,11.31,0,0,0,0,1.35,8.82,8.82,0,0,1-.1,3.2c-.67,1.61-3.21,1.35-3.67,1a1.91,1.91,0,0,1-.83-1.92V31.1c-.15-4-4.45-8.27-4.55-8.43v0l-1.09-.88h.06a10.72,10.72,0,0,1-1.09-1v.05s-.88-.72-2-1.81c-1.57-1.38-3.89-.7-4,1.45a11.81,11.81,0,0,0,0,1.34v2a18.71,18.71,0,0,1,0,2.9v1.76c.1.15.1.25,0,.46,0,.73-.07,1.44,0,2.17,0,.37-.21,1.66-.78,1.92A3.14,3.14,0,0,1,62.15,33a2.18,2.18,0,0,1-.57-1.91c.13-2.14.11-4.28.26-6.41,0-.26-.06-.47-.06-.73a7.46,7.46,0,0,1-.05-1V21.22a51.32,51.32,0,0,1,.16-6.46,17,17,0,0,0,0-2.28V9.9c.12-.63,0-1.19.36-1.76l0,0A2.19,2.19,0,0,1,64,7h.67a3,3,0,0,1,1,.21.73.73,0,0,0,.21.1,12.21,12.21,0,0,1,.93,1V8.24L69,11l1.24,1.45a4.11,4.11,0,0,0,.62.67l.37.37c.1.2,1,1.19,1.29,1.5l.41.41-.05-.1c.21.15,2.59,2.17,2.9,2.58l-.11-.05c.63.62,1.49,1.23,2.31.58a3,3,0,0,0,1-2c0-.1,0-.25,0-.41a10.18,10.18,0,0,0,.11-2.22v.05a2.87,2.87,0,0,1,0-1,5.86,5.86,0,0,0,0-1.45v-1a10,10,0,0,1,.2-2.43c.61-1.81,3.79-1.9,4.35,0a7.68,7.68,0,0,1,.1,1.66v.26A15.76,15.76,0,0,1,83.71,12a13.39,13.39,0,0,0,0,1.39ZM72.49,15a0,0,0,0,0,.05,0S72.54,15,72.49,15Z'fill='#fff' />
          <path d='M106.62,28.72a2.18,2.18,0,0,1,1.6,2.07A2.36,2.36,0,0,1,106,33.12h-.73c-1.49,0-3,0-4.5-.11H98a14.61,14.61,0,0,0-2,.21,17.94,17.94,0,0,1-2.22,0h-.16c-1.5-.05-4.34-.11-4.18-5v-2a3.5,3.5,0,0,0,.1-1v-.57a24,24,0,0,1,0-2.63v-.16c0-.15,0-.36,0-.62v-.52a9,9,0,0,0,0-1,7.24,7.24,0,0,0,0-1.19v-.83a13.14,13.14,0,0,1,.1-2.17,1.13,1.13,0,0,0,0-.2,2.49,2.49,0,0,0,0-.68c-.1-.82.05-2.63,0-3.41,0-2.12,1.76-3.77,3.15-3.77h4.71c.78,0,1.55,0,2.33,0,.93,0,2.27,0,3.67,0h2.07c.2,0,.67.05.67.05a4,4,0,0,1,1.14.31,2.29,2.29,0,0,1,1.08,2.9A2.23,2.23,0,0,1,106.46,12H105c-1.34-.06-3.77-.11-4-.11H99.22c-.15,0-.47,0-1.91.05s-3.73.16-3.57,3.42a2.75,2.75,0,0,0,2.33,2.84,16,16,0,0,0,1.7,0h2.17c2.49,0,2.44,4.35.11,4.35a3.17,3.17,0,0,0-.42.05c-1.67.13-6-.26-5.74,2.48v1.09c.16,1.44,1.87,2.48,3.37,2.48h.2s.11,0,.05,0a2.36,2.36,0,0,1,1-.15h2.07a11.32,11.32,0,0,1,1.24.05c.46,0,1.08.1,1.55.1a12.77,12.77,0,0,1,3.15,0Z'fill='#fff' />
          <path d='M137,7.36a2.06,2.06,0,0,1,1.14,2,11.08,11.08,0,0,0,.05,1.39v.37c0,.46,0,2.43,0,2.58v.16c0,.1,0,.41,0,.57a1,1,0,0,0-.05.36v6a54.61,54.61,0,0,1-.16,5.79,5.14,5.14,0,0,1,0,1.24,10.39,10.39,0,0,1-.1,1.29v.26c0,.36,0,.52,0,.78a2.84,2.84,0,0,1,0,1.13,5.18,5.18,0,0,1-.31.94,2.77,2.77,0,0,1-3.36,1h.05c-1-.42-1-1.5-1-2.33V27.27a16.68,16.68,0,0,1,0-2.38,4.53,4.53,0,0,0,.1-1.08v-.26a5.88,5.88,0,0,1,.05-1.34,1.21,1.21,0,0,1,.11-.52,2.7,2.7,0,0,1-.11-1v-.88c0-.11-.05-.11-.05-.21-.21-1.35-1.08-2.32-2.22-1A1.15,1.15,0,0,1,131,19l-1.35,1.55-.51.47.1-.06a6.27,6.27,0,0,1-1,1.14l-.42.42h.06c-.83,1-3.47.62-4.14-.42v0a8.55,8.55,0,0,0-1.5-1.39c-.78-.78-.47-.52-.57-.67a6.07,6.07,0,0,0-.88-1.09v.05c-1.15-.81-2.79-.69-2.89,1v4a14.17,14.17,0,0,0-.06,1.6v1.91c0,.37,0,1.4,0,1.81a5.17,5.17,0,0,1,0,2.38c-.2,1.29-2.38,1.92-3.46,1.45-1.68-.91-.92-3.17-1-4.71V23.24a9,9,0,0,1,0-3.1v-1a2.32,2.32,0,0,0,0-.56V17.4c0-.57,0-1,0-1.56a7.08,7.08,0,0,1,0-2.79c.06-.72.06-2.38.06-3V9.9a3,3,0,0,1,.67-2,2.74,2.74,0,0,1,4.24.83l-.1-.05a11.77,11.77,0,0,1,1.13,1.65l.26.41a37,37,0,0,0,2.79,3.73v0a11.57,11.57,0,0,1,.83.93,6.82,6.82,0,0,0,.73.88,2.19,2.19,0,0,0,.51.51c0,.06.11.11.16.16.72.67,1.24,1.08,2.17.46l-.1.16a9.28,9.28,0,0,1,.72-.88s.1-.05.1-.1l.57-.73a44.73,44.73,0,0,0,4-5.27,11.45,11.45,0,0,0,.73-1L133,9c.1-.1.2-.42.31-.52a2.85,2.85,0,0,1,3.77-1.08Z'fill='#fff' />
          <path d='M143.84,30.63a2.48,2.48,0,0,0,0-.88V29.5a5.31,5.31,0,0,0,.11-1.14,4.64,4.64,0,0,1-.05-.88v-.62c0-.16-.06-.16-.06-.21a2.07,2.07,0,0,0,.11-1.14v-3c0-.42.05-.78.05-1.19V20.19a11.66,11.66,0,0,0-.16-2.33,6.13,6.13,0,0,0,.06-2.43c0-.46.05-4.5.1-4.71v.06c.13-.67,0-1.35.1-2a1.67,1.67,0,0,1,.68-1.71h-.06c.31-.36,2.48-.77,3.36.21h0a2.36,2.36,0,0,1,.62,1.45,6.45,6.45,0,0,1,0,1.39c0,.21,0,.52,0,.62v3.52a8.12,8.12,0,0,0-.12,1.91,21.59,21.59,0,0,0,0,2.9V20a1.15,1.15,0,0,0,0,.36c.05,1.4-.21,7.14-.26,7.66a15.22,15.22,0,0,0,.1,2.38v-.06a3.56,3.56,0,0,1-.36,2.18c-.83,1.19-2.82,1.07-3.88.25A3.19,3.19,0,0,1,143.84,30.63Z'fill='#fff' />
          <path d='M176.21,14.66a.3.3,0,0,0-.05.2,28.59,28.59,0,0,0-.1,2.9c.05,1,0,2.74,0,4.13V23.5a7.15,7.15,0,0,1,.05,2.53A6.67,6.67,0,0,0,176,27v.88a9.44,9.44,0,0,0,.06,1.35,8.82,8.82,0,0,1-.11,3.2c-.67,1.61-3.2,1.35-3.67,1a1.91,1.91,0,0,1-.83-1.92V31.1c-.15-4-4.44-8.27-4.55-8.43v0l-1.08-.88h.05a11.93,11.93,0,0,1-1.09-1v.05s-.88-.72-2-1.81c-1.58-1.38-3.9-.7-4,1.45a11.81,11.81,0,0,0,0,1.34v2a16.52,16.52,0,0,1,0,2.9v1.76c.11.15.11.25,0,.46,0,.73-.06,1.44,0,2.17,0,.37-.2,1.66-.77,1.92A3.16,3.16,0,0,1,154.7,33a2.21,2.21,0,0,1-.57-1.91c.13-2.14.12-4.28.26-6.41,0-.26,0-.47,0-.73a7.46,7.46,0,0,1-.05-1V21.22a47.41,47.41,0,0,1,.15-6.46,17,17,0,0,0,0-2.28V9.9c.13-.63,0-1.19.36-1.76l-.05,0A2.21,2.21,0,0,1,156.56,7h.67a3.08,3.08,0,0,1,1,.21.71.71,0,0,0,.2.1,10.58,10.58,0,0,1,.93,1V8.24L161.53,11l1.24,1.45a3.39,3.39,0,0,0,.62.67l.36.37c.1.2,1,1.19,1.29,1.5l.42.41-.06-.1c.21.15,2.59,2.17,2.9,2.58l-.1-.05c.62.62,1.48,1.23,2.31.58a3,3,0,0,0,.94-2c0-.1.06-.25.06-.41a10.85,10.85,0,0,0,.1-2.22v.05a3.15,3.15,0,0,1,0-1,5.86,5.86,0,0,0,0-1.45v-1a9.56,9.56,0,0,1,.21-2.43c.6-1.81,3.78-1.9,4.34,0a7.69,7.69,0,0,1,.11,1.66v.26a14.34,14.34,0,0,1-.06,2.17,13.39,13.39,0,0,0,0,1.39ZM165,15a0,0,0,0,0,.05,0S165.09,15,165,15Z'fill='#fff' />
          <path d='M194.31,21.27V23c0,.81-.09,1.63-.16,2.43s-.05,1.42-.05,2.12a.6.6,0,0,0,0,.26v.67c0,.73,0,1.19,0,1.56v.72c0,1.5,0,1.65-.41,2.17v0c-.74,1.16-3.69,1.34-4-.31a12.08,12.08,0,0,1-.06-1.39v-.37c0-.15-.05-.72-.05-1.19v-.62c.18-1.18,0-2.38.16-3.56V21.89a24.87,24.87,0,0,0,.15-2.84,11,11,0,0,1-.15-2.22,12.18,12.18,0,0,1,.05-1.35c0-.15.05-.31.05-.46V13.67c0-.36-1-2-3.62-2h-1.81a.39.39,0,0,1-.26.05,4.37,4.37,0,0,1-1.6-.16v0c-.88-.25-1.35-1.91-1.29-2.63a2.43,2.43,0,0,1,2.17-1.92,4.44,4.44,0,0,0,1.5,0,4.74,4.74,0,0,1,1.19,0,26,26,0,0,0,5.06.11c.88,0,2.9,0,3.73,0H198a4.91,4.91,0,0,1,.83,0,16.53,16.53,0,0,0,2.12.1,5.1,5.1,0,0,1,1.24.16,2.21,2.21,0,0,1,1.34,2.22l-.05-.1a2.74,2.74,0,0,1-.26,1.34,2.46,2.46,0,0,1-2.68.83,17.71,17.71,0,0,0-2.18-.11c-.36.06-1.08.11-1.19.11a2.86,2.86,0,0,0-2.63,2.69v.72a28,28,0,0,0-.26,4.34C194.36,20.09,194.31,20.71,194.31,21.27Z'fill='#fff' />
        </g>
      </svg>
    );
  }
}

export default Benemint;
