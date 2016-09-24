/**
 * Created by abhisheksingh on 13/06/16.
 */



import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class One extends Component {

  constructor(props) {
    super(props);
  }

  _goBack = () => {
    this.props.navigator.pop();
  };

  render() {
    return (
      <View style={styles.appView}>
        <Text>Welcome to Awesome One Page </Text>

        <TouchableHighlight style={styles.button} onPress={this._goBack}>
          <Text>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  appView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#327ab9'
  },
  button : {
    padding : 5,
    paddingHorizontal : 10,
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 4
  }
});