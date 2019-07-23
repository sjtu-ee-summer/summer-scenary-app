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

class Register extends React.Component {
    state = {
      result: 'failed',
      userName: '',
      password: '',
      email: '',
      selectedItem: 2,
      itemList: ['普通用户', '管理员', '翻译员']
    };
  
    RegisterAction = async function () {
      let url = "http://202.120.40.8:30454/users/users/signup";
      let formData = new FormData();
      formData.append("username", this.state.userName);
      formData.append("password", this.state.password);
      formData.append("email", this.state.email);
      console.log(this.state.userName);
      console.log(this.state.password);
      console.log(this.state.email);
      //    this.props.navigation.navigate('Login');
      fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: formData,
      }).then(function (response) {
        return response.json();
      }).then(function (myJson) {
        alert(myJson);
        console.log(myJson);
        this.props.navigation.navigate('Login');
      });
      //    this.props.navigation.navigate('Page');
    };
  
    onPickerSelect(index) {
      this.setState({
        selectedItem: index,
      })
    };
  
    render() {
  
  
  
      return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <View style={[styles.card2, { backgroundColor: 'white' }]}>
            <Sae
              label={'请输入用户名'}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'black'}
              onChangeText={(userName) => this.setState({ userName })}
            />
            <Sae
              style={{ marginTop: 10 }}
              label={'请输入密码'}
              iconName={'pencil'}
              iconColor={'black'}
              iconClass={FontAwesomeIcon}
              onChangeText={(password) => this.setState({ password })}
            />
            <Sae
              style={{ marginTop: 10 }}
              label={'请输入邮箱'}
              iconName={'envelope'}
              iconColor={'black'}
              iconClass={FontAwesomeIcon}
              onChangeText={(email) => this.setState({ email })}
            />
            <Sae
              style={{ marginTop: 10 }}
              label={'请选择您的身份'}
              iconName={'users'}
              iconColor={'black'}
              iconClass={FontAwesomeIcon}
              editable={false}
  
            />
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "#8781bd",
              marginTop: 20
            }}>
              <Picker style={{ width: 150, height: 180 }}
                selectedValue={this.state.selectedItem}
                itemStyle={{ color: "white", fontSize: 22 }}
                onValueChange={(index) => this.onPickerSelect(index)}>
                {this.state.itemList.map((value, i) => (
                  <PickerItem label={value} value={i} key={"money" + value} />
                ))}
              </Picker>
  
            </View>
  
            <Button
              isLoading={false}
              style={[styles.buttonStyle7, { marginTop: 20 }]}
              textStyle={styles.textStyle6}
              onPress={
                this.RegisterAction.bind(this)
              }>
              注册
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

  module.exports = Register;