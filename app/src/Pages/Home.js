/**
 * Created by abhisheksingh on 13/06/16.
 */




import React, {Component} from 'react';

import Calculator from './../Calculator/Calculator';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Calculator />
    );
  }
}

