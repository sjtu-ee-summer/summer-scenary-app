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

class Page extends React.Component {
    state = {
      username: '游客',
      image: 'data:image/png;base64,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',
    };
    render() {
      const username = '游客';
      const signed = 'false';
  
      return (
        <View style={styles.containerStyle}>
          {/* <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}
            >
              <Image
                style={{
                  width: 51,
                  height: 51,
                  resizeMode: 'contain',
                  justifyContent: 'flex-start'
                }}
                source={{
                  uri: this.state.image
                }}
              />
  
              <Text style={styles.red}>欢迎您，{name}</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={[styles.flipButton, { flex: 0.4, alignSelf: 'flex-end' }]}
                onPress={() => {}}
              >
                <Text style={styles.flipText}> 登录 </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.flipButton, { flex: 0.4, alignSelf: 'flex-end' }]}
                onPress={() => {}}
              >
                <Text style={styles.flipText}> 注册 </Text>
  
              </TouchableOpacity>
            </View>
          </View> */}
  
  
          {/* <Text style={styles.homeTextStyle}>我的嗷嗷</Text> */}
          {/* <ScrollView contentContainerStyle={styles.scrollStyle}
            showsVerticalScrollIndicator={false}
            contentInset={{ top: -400 }}
            contentOffset={{ y: 400 }}
          >
            <View style={styles.sectionStyle}>
              <CommonMyCell
                leftIcon='evaluate'
                leftTitle='钱包'
                rightTitle='账户余额￥158'
                rightIcon=''
              >
              </CommonMyCell>
  
  
            </View>
  
            <View style={styles.sectionStyle}>
              <CommonMyCell
                leftIcon='health'
                leftTitle='我的评价'
              >
              </CommonMyCell>
            </View>
  
            <View style={styles.sectionStyle}>
              <CommonMyCell
                leftIcon='law'
                leftTitle='我的动态'
                rightIcon='new'
              >
              </CommonMyCell>
            </View>
  
  
          </ScrollView> */}
        </View >
  
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

  module.exports = Page;