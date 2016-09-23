/**
 * Created by abhisheksingh on 23/09/16.
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class key extends Component {

  constructor(props) {
    super(props);
  }

  _onPress = () =>{
    this.props.onKeyPress(this.props.value)
  };

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this._onPress}>
         <Text style={styles.text}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    width: 50,
    height:50,
    backgroundColor: '#434343',
    borderWidth:1,
    borderColor:'black'
  },
  text : {
     fontSize: 35,
     color: 'white',
    alignSelf: 'center',
  }
});

