import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './src/index';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.getElementById('main')
  );
});
