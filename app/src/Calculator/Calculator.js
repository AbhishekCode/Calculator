/**
 * Created by abhisheksingh on 23/09/16.
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Platform,
  StyleSheet
} from 'react-native';

import Keypad from './Keypad/Keypad';


const NAV_BAR_HEIGHT = (Platform.OS === 'android' ? 48 : 44) + (Platform.OS === 'android' ? 0 : 20);



export default class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayString: '',
      result: 0
    };
  };

  _onKeyPress = (value) => {
      let newDisplayString = this.state.displayString;

      if(value === 'DEL') {
        newDisplayString = ''
      }else if (value === '+' || value === '-' || value === '×' || value === '/'){

        if(newDisplayString === '') {
          newDisplayString = '0';
        }

        let lastString = newDisplayString.charAt(newDisplayString.length-1);
        if(lastString === '+' || lastString === '-' || lastString === '×' || lastString === '/') {
          newDisplayString =newDisplayString.slice(0, newDisplayString.length-1);
        }


        newDisplayString = (value === '×')? eval(newDisplayString) + '*' : eval(newDisplayString)+ value;
      }else if(value === '=') {
          newDisplayString =  eval(newDisplayString).toString();
      }
      else {
        newDisplayString += value;
      }

      this.setState({displayString:newDisplayString});
  };

  render() {
    return (
      <View style={styles.calcContainer}>
          <View style={styles.textInputContainer}>
             <Text style={styles.textInputValue}>{this.state.displayString}</Text>
          </View>
          <Keypad onKeyPress={this._onKeyPress}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  calcContainer: {
    flex: 1,
    marginTop: NAV_BAR_HEIGHT,
    backgroundColor: '#327ab9',
    ...Platform.select({
      android: {
        marginBottom: 20
      }
    }),
  },
  textInputContainer: {
    borderColor: 'gray',
    backgroundColor:'white',
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 30
  },
  textInputValue: {
    fontSize: 40,
    textAlign: 'right'
  }
});
