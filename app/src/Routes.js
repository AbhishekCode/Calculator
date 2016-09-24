/**
 * Created by deepaksisodiya on 27/05/16.
 */


import React, {Component} from 'react';
import {
  Text,
  View,
  Navigator,
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';

import NavbarWrapper from 'react-native-navbar-wrapper';
import backIcon from '../assets/ic_back_arrow.png';
import menuIcon from '../assets/ic_menu.png';

import Home from "./Pages/Home";
import One from "./Pages/One";
import Two from "./Pages/Two";

export let APP_ROUTES = {
  HOME: {name: 'homePage' , title:'home'},
  ONE: {name: 'pageOne' , title:'pageOne'},
  TWO: {name: 'pageTwo' , title:'pageTwo'}
};
const NAV_BAR_HEIGHT = (Platform.OS === 'android' ? 48 : 44) + (Platform.OS === 'android' ? 0 : 20);

export default class Routes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasBack : false,
      menuOpen : false
    };
  }

  _setNavigator = (nav) => {
    this.navigator = nav;
  };

  componentDidMount = () => {
    this.navigator.navigationContext.addListener('didfocus', () => {
      this._checkBackButton();
    });
  };

  _checkBackButton = () => {
    setTimeout(() => {
      this.setState({
        hasBack: this.navigator.getCurrentRoutes().length > 1
      });
    }, 0);
  };

  configureScene = (route, routeStack) => {
    return Navigator.SceneConfigs.FloatFromRight;
  };


  _menuItemSelected = (item) => {
     //
  };

  renderScene = (route, navigator) =>{
    console.log("route   " , route);
    switch(route.name) {
      case APP_ROUTES.HOME.name:
        return (<Home  navigator={navigator} onLogin={this._onLogin} route={route} />);
      case APP_ROUTES.ONE.name:
        return (<One  navigator={navigator} onLogout={this._onLogout} route={route}/>);
      case APP_ROUTES.TWO.name:
        return (<Two  navigator={navigator} route={route}/>);
    }
  };

  _back = () => {
    console.log(this.navigator);
    this.navigator.pop();
  };
  _openMenu = () => {
    this.setState({menuOpen: true})
  };

  _closeMenu = () => {
    this.setState({menuOpen: false})
  };

  render() {
    return (
    <NavbarWrapper
      hasBack={this.state.hasBack}
      backPressed={this._back}
      show={true}
      title={"Calculator"}
      openMenu={this._openMenu}
      closeMenu = {this._closeMenu}
      initialRoute={APP_ROUTES.HOME}
      renderScene={this.renderScene}
      setNavigator={ this._setNavigator}
      configureScene={this.configureScene}
      menuItemSelected = {this._menuItemSelected}
      isMenuOpen = {this.state.menuOpen}
      buttonName = {"Logout"}
      backIcon = {backIcon}
      menuItems = {["button1" , "button2" , "button3"]}
      sceneStyle={ styles.fullPage}
      navbarStyle={ styles.navBarStyle}
      statusBarColor="#327ab9"
    />
    );
  }
}


function getWidth() {
  const { width } = Dimensions.get('window');
  return width;
}
function getHeight() {
  const { height } = Dimensions.get('window');
  return height;
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  navBarStyle : {
    backgroundColor: '#327ab9',
    position: 'absolute',
    top: 0,
    overflow: 'visible',
    width:  getWidth(),
    height: NAV_BAR_HEIGHT,
    alignItems:'center'
  },

  fullPage: {
    top: 0,
    height: getHeight(),
    width: getWidth()
  }

});
