

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Routes from './Routes';

import store from './redux/store';

export default class app extends Component {

  render() {
    return (
      <Provider store={store}>
        <Routes store={store}/>
      </Provider>
  );
  }

}
