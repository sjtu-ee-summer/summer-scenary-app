/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation'; 
import Shop from "./Component/Shop/Shop"
import Main from "./Component/Main/Main"
import More from "./Component/More/More"
import UploadPic from "./Component/Shop/UploadPic"
// import Page from "./Component/Mine/Page"
// import Login from "./Component/Mine/Login"
// import Register from "./Component/Mine/Register"

// var Main = require('./Component/Main/Main');

class DYFBuyApp extends Component {
  render() {
    // return (
    //   <Main></Main>
    // );
    return <AppContainer />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: Main,
    Shop: Shop,
    More: More,
    PicTrans: UploadPic,
    // Page: Page,
    // Login: Login,
    // Register: Register,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7DBBC3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9C5BA',
  },
});

AppRegistry.registerComponent('DYFBuyApp', () => DYFBuyApp);

