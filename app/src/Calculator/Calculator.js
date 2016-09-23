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

export default class Calculator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.calcContainer}>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  calcContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#327ab9'
  }
});
