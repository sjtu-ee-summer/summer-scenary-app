/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Picker from 'react-native-wheel-picker';
var PickerItem = Picker.Item;


import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';
import Button from 'apsl-react-native-button';

var CommonMyCell = require('./Component/CommonMyCell');
var name = "游客"

class Login extends React.Component {
  state = {
    result: 'failed',
    userName: '',
    password: '',
  };

  _bootstrapAsync = async () => {
    console.log(this.state.userName);
    this.props.navigation.navigate('Page', { username: this.state.userName, signed: true });
  };

  LogAction = async function () {
    let url = "http://202.120.40.8:30454/users/users/signin?" + "username=" + this.state.userName + "&password=" + this.state.password;
    let formData = new FormData();
    let tmpName = this.state.userName;
    console.log(this.state.userName);
    console.log(this.state.password);
    name = this.state.userName;
    this.props.navigation.navigate('Page', { username: 'man' });
    formData.append("username", this.state.userName);
    formData.append("password", this.state.password);
    fetch(url, {
      credentials: 'include',
      method: 'GET',
    }).then(function (response) {
      return response.json();
    }).then(function (myJson) {
      if (myJson == true) {
        alert("登录成功！");
        console.log(tmpName);

        //            this.props.navigation.navigate('Page');
        //            this.props.navigation.navigate('Page', {username: tmpName});

      }
      if (myJson == false) {
        alert("登录失败！");
        //            this.props.navigation.navigate('Page', {username: ''});
        //            ()=>{
        //
        //            };

      }
      console.log(myJson);

    });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={[styles.card2, { backgroundColor: 'white', marginTop: 100 }]}>
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

class Page extends React.Component {
  state = {
    username: '游客',
    image: 'data:image/png;base64,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',
  };
  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username', '游客');
    const signed = navigation.getParam('signed', 'false');
    console.log("现在在page里面");
    console.log(username);
    console.log(signed);

    return (
      <View style={styles.containerStyle}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
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
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.flipText}> 登录 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.flipButton, { flex: 0.4, alignSelf: 'flex-end' }]}
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text style={styles.flipText}> 注册 </Text>

            </TouchableOpacity>
          </View>
        </View>


        {/* <Text style={styles.homeTextStyle}>我的嗷嗷</Text> */}
        <ScrollView contentContainerStyle={styles.scrollStyle}
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


        </ScrollView>
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

const AppNavigator = createStackNavigator(
  {
    Page: Page,
    Login: Login,
    Register: Register,
  }, {
    initialRouteName: 'Page',
  });

//const RootStack = createStackNavigator(
//  {
//    Home: HomeScreen,
//    Details: DetailsScreen,
//  },
//  {
//    initialRouteName: 'Home',
//  }
//);



//const styles = StyleSheet.create({
//  scrollView: {
//    backgroundColor: Colors.lighter,
//  },
//  engine: {
//    position: 'absolute',
//    right: 0,
//  },
//  body: {
//    backgroundColor: Colors.white,
//  },
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//  sectionTitle: {
//    fontSize: 24,
//    fontWeight: '600',
//    color: Colors.black,
//  },
//  sectionDescription: {
//    marginTop: 8,
//    fontSize: 18,
//    fontWeight: '400',
//    color: Colors.dark,
//  },
//  highlight: {
//    fontWeight: '700',
//  },
//  footer: {
//    color: Colors.dark,
//    fontSize: 12,
//    fontWeight: '600',
//    padding: 4,
//    paddingRight: 12,
//    textAlign: 'right',
//  },
//});

