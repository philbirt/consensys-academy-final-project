import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './src/index';

import { Provider } from 'mobx-react'
import RootStore from './src/stores/root-store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={RootStore} >
      <Index />
    </Provider>,
    document.getElementById('main')
  );
});
