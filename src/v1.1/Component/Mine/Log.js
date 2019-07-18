/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppRegistry,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import Picker from 'react-native-wheel-picker';
var PickerItem = Picker.Item;


import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';
import Button from 'apsl-react-native-button';
var CommonMyCell = require('./CommonMyCell');
var name = "游客"

class Log extends React.Component {
    state = {
      result: 'failed',
      userName: '',
      password: '',
    };
  
    _bootstrapAsync = async () => {
      console.log(this.state.userName);
      // this.props.navigation.navigate('Page', { username: this.state.userName, signed: true });
    };
  
    LogAction = async function () {
      
      let base64 = require('base-64');
      let url = 'http://202.120.40.8:30458/oauth/token';
      let username = 'eagleeye';
      let password = 'thisissecret';
      let headers = new Headers();
      headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));
      let formData = new FormData();
      formData.append("username", "test");
      formData.append("password", "0");
      formData.append("grant_type", "password");
      formData.append("scope", "webclient");

      fetch(url, {
        method: 'POST',
        hearder: headers,
        body: formData})
      .then(response => response.json())
      .then(json => console.log(json))

      




      
    };
  
    render() {
      return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <View style={[styles.card2, { backgroundColor: '', marginTop: 100 }]}>
            <Sae
              label={'userName'}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'black'}
              onChangeText={(userName) => this.setState({ userName })}
            />
            <Sae
              style={{ marginTop: 10 }}
              label={'password'}
              iconName={'pencil'}
              iconColor={'black'}
              iconClass={FontAwesomeIcon}
              onChangeText={(password) => this.setState({ password })}
            />
            <Button
              isLoading={false}
              style={[styles.buttonStyle7, { marginTop: 20 }]}
              textStyle={styles.textStyle6}
              onPress={
                this.LogAction.bind(this)
              }>
              登录
                  </Button>
          </View>
        </ScrollView>
      );
    }
  
  }

  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e8e8e8',
    },
    sectionStyle: {
      marginTop: 20,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'black',
    },
    container: {
      flex: 1,
      paddingTop: 24,
      backgroundColor: 'white',
    },
    content: {
      // not cool but good enough to make all inputs visible when keyboard is active
      paddingBottom: 300,
    },
    card1: {
      paddingVertical: 16,
    },
    card2: {
      padding: 16,
    },
    scrollStyle: {
      marginTop: 0,
    },
    title: {
      paddingBottom: 16,
      textAlign: 'center',
      color: '#404d5b',
      fontSize: 20,
      fontWeight: 'bold',
      opacity: 0.8,
    },
    flipButton: {
      flex: 0.3,
      height: 40,
      marginHorizontal: 2,
      marginBottom: 10,
      marginTop: 20,
      borderRadius: 8,
      borderColor: 'white',
      borderWidth: 1,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flipText: {
      color: 'black',
      fontSize: 15,
    },
    buttonStyle7: {
      borderColor: '#8781bd',
      backgroundColor: 'white',
      borderRadius: 0,
      borderWidth: 3,
    },
    input: {
      marginTop: 4,
    },
    buttonStyle6: {
      borderColor: '#8e44ad',
      backgroundColor: '#9b59b6'
    },
  });

  module.exports = Log;