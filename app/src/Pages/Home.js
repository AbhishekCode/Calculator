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

import {APP_ROUTES} from "../Routes";

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  _goToPageOne = () => {
    this.props.navigator.push(APP_ROUTES.ONE);
  };

  _goToPageTwo = () => {
    this.props.navigator.push(APP_ROUTES.TWO);
  };

  render() {
    return (
      <View style={styles.appView}>
        <Text>Welcome to Awesome Home Page </Text>

        <TouchableHighlight style={styles.button} onPress={this._goToPageOne}>
          <Text>Page One</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this._goToPageTwo}>
          <Text>Page Two</Text>
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
