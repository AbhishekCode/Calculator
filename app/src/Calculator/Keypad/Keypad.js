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

import Key from './Key.js'

export default class Keypad extends Component {

  constructor(props) {
    super(props);
  }

  _onKeyPress = (value) => {
     this.props.onKeyPress(value);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Key value={'/'} onKeyPress={this._onKeyPress}/>
          <Key value={'×'} onKeyPress={this._onKeyPress}/>
          <Key value={'-'} onKeyPress={this._onKeyPress}/>
          <Key value={'+'} onKeyPress={this._onKeyPress}/>
        </View>
        <View style={styles.row}>
            <Key value={9} onKeyPress={this._onKeyPress}/>
            <Key value={8} onKeyPress={this._onKeyPress}/>
            <Key value={7} onKeyPress={this._onKeyPress}/>
        </View>
        <View style={styles.row}>
          <Key value={6} onKeyPress={this._onKeyPress}/>
          <Key value={5} onKeyPress={this._onKeyPress}/>
          <Key value={4} onKeyPress={this._onKeyPress}/>
        </View>
        <View style={styles.row}>
          <Key value={3} onKeyPress={this._onKeyPress}/>
          <Key value={2} onKeyPress={this._onKeyPress}/>
          <Key value={1} onKeyPress={this._onKeyPress}/>
        </View>
        <View style={styles.row}>
          <Key value={'CLR'} onKeyPress={this._onKeyPress}/>
          <Key value={0} onKeyPress={this._onKeyPress}/>
          <Key value={'='} onKeyPress={this._onKeyPress}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#636363',
    justifyContent: "flex-end",
  },
  row : {
    flexDirection: 'row',
    justifyContent: "flex-start"
  },
});
