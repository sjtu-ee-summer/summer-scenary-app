/**
 * this is the sign up form of the login screen
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  BackAndroid,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
  AsyncStorage
} from 'react-native'
// import { firebaseApp } from '../../firebase'
import { getColor } from '../config'
import * as Animatable from 'react-native-animatable'
import { BackHandler } from 'react-native';
var token = ''
var status = 0

export default class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this._handleBackBtnPress = this._handleBackBtnPress.bind(this)

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    this.state = {
      init: true,
      errMsg: null,
      signUpSuccess: false,
      displayName: '',
      email: '',
      password: '',
      phone: '',
      repassword: ''
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  checkName() {
    var name = this.state.displayName
    if (name.length == 0 || name == null) {
      this.setState({ errMsg: '用户名不能为空' })
      return false
    }
    else {
      status++;
      this.setState({ errMsg: '' })
      return true
    }
  }

  checkPhone() {
    let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var phone = this.state.phone
    if (phone.length == 0 || phone == null) {
      this.setState({ errMsg: '手机号不能为空' })
      return false
    } else if (!myreg.test(phone)) {
      this.setState({ errMsg: '手机号格式不正确' })
      return false
    } else {
      status++;
      this.setState({ errMsg: '' })
      return true
    }
  }

  checkEmail() {
    var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    var email = this.state.email
    if (email.length == 0 | email == null) {
      this.setState({ errMsg: '邮箱不能为空' })
      return false
    } else if (!reg.test(email)) {
      this.setState({ errMsg: '邮箱格式不正确' })
      return false
    } else {
      status++;
      this.setState({ errMsg: '' })
      return true
    }
  }

  checkPass() {
    let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
    var password = this.state.password
    if (password == null || password.length < 6) {
      this.setState({ errMsg: '密码长度不能小于6位' })
      return false
    } else if (!reg.test(password)) {
      this.setState({ errMsg: '密码应该为不小于6位数的数字和字母组合' })
      return false
    } else {
      status++;
      this.setState({ errMsg: '' })
      return true
    }
  }

  checkRePass() {
    var password = this.state.password
    var repassword = this.state.repassword
    if (password != repassword) {
      this.setState({ errMsg: '两次输入的密码不一致' })
      return false
    } else {
      status++;
      this.setState({ errMsg: '' })
      return true
    }
  }

  render() {
    const animation = this.state.init ? 'bounceInUp' : 'bounceOutDown'

    const errorMessage = this.state.errMsg ?
      <Text style={styles.errMsg}>{this.state.errMsg}</Text>
      : null

    const signUpForm = this.state.signUpSuccess ?
      null
      :
      <View>
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <TextInput
            style={styles.inputField}
            value={this.state.displayName}
            onChangeText={(text) => this.setState({ displayName: text })}
            autoCapitalize='words'
            autoCorrect={false}
            autoFocus={true}
            underlineColorAndroid='transparent'
            onBlur={() => this.checkName()}
            placeholder='用户名'
            placeholderTextColor='#999999'
          />
        </View>
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <TextInput
            style={styles.inputField}
            value={this.state.phone}
            onChangeText={(text) => this.setState({ phone: text })}
            keyboardType='numeric'
            autoCorrect={false}
            underlineColorAndroid='transparent'
            onBlur={() => this.checkPhone()}
            placeholder='手机号'
            placeholderTextColor='#999999'
          />
        </View>
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <TextInput
            style={styles.inputField}
            value={this.state.email}
            keyboardType='email-address'
            autoCorrect={false}
            onChangeText={(text) => this.setState({ email: text })}
            onBlur={() => this.checkEmail()}
            underlineColorAndroid='transparent'
            placeholder='邮箱'
            placeholderTextColor='#999999'
          />
        </View>
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <TextInput
            style={styles.inputField}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
            underlineColorAndroid='transparent'
            placeholder='密码'
            onBlur={() => this.checkPass()}
            secureTextEntry={true}
            placeholderTextColor='#999999'
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            value={this.state.repassword}
            onChangeText={(text) => this.setState({ repassword: text })}
            onBlur={() => this.checkRePass()}
            underlineColorAndroid='transparent'
            placeholder='确认密码'
            secureTextEntry={true}
            placeholderTextColor='#999999'
          />
        </View>
        <View style={styles.btnContainers}>
          <TouchableOpacity onPress={this._handleSignUp.bind(this)}>
            <View style={styles.submitBtnContainer}>
              <Text style={styles.submitBtn}>注册</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    return (
      <Animatable.View
        animation={animation}
        style={styles.container}
        onAnimationEnd={this._handleAnimEnd.bind(this)}>
        <Text style={styles.title}>Sign Up</Text>
        {errorMessage}
        {signUpForm}
      </Animatable.View>
    )
  }

  SignAction() {
    let url = 'http://202.120.40.8:30454/users/un/signup'
    let formData = new FormData()
    formData.append("username", this.state.displayName)
    formData.append("password", this.state.password)
    formData.append("email", this.state.email)
    return fetch(url, {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        console.log(response)
        return response.text()
      })
      .then((result) => {
        console.log(result)
        token = result
      })
      .catch((error) => {
        console.log(error)
      })

  };

  async LogAction() {

    let base64 = require('base-64');
    let url = 'http://202.120.40.8:30458/oauth/token';
    let username1 = 'eagleeye';
    let password1 = 'thisissecret';
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64.encode(username1 + ":" + password1));
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let formData = new FormData();
    formData.append("username", this.state.displayName);
    formData.append("password", this.state.password);
    formData.append("grant_type", "password");
    formData.append("scope", "webclient");

    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((result) => {
        console.log(result)
        console.log(result.access_token)
        token = result.access_token
      })
      .catch((error) => {
        console.log(error)
      })

  };

  _handleSignIn = async () => {
    // TODO: do something
    this.setState({ errMsg: '登录中...' })
    await this.LogAction()
    await AsyncStorage.setItem('userToken', token).then(() => {
      setTimeout(() => {
        // this._handleGoBack()
      }, 1000)
    });
    const userToken = await AsyncStorage.getItem('userToken', '');
    console.log('userToken')
    console.log(userToken)
    token = ''
    if (userToken != null) {
      this.props.goToHomeScreen()
    }
  }

  _handleSignUp = async () => {
    this.setState({ errMsg: '注册中...' })
    var a = await this.checkName()
    var b = await this.checkPhone()
    var c = await this.checkEmail()
    var d = await this.checkPass()
    var e = await this.checkRePass()
    if (a == false || b == false || c == false || d == false || e == false) {
      this.setState({ errMsg: '您提交的信息有误' })
      return
    }
    await this.SignAction()
    if (token == 'username already exists') {
      this.setState({ errMsg: '该用户名已被注册' })
    }
    else {
      this.setState({ errMsg: '您已成功完成注册', signUpSuccess: true })
      await this._handleSignIn()
    }
  }

  _handleGoBack() {
    this.setState({ init: false })
  }

  _handleBackBtnPress() {
    this._handleGoBack()
    return true
  }

  _handleAnimEnd() {
    if (!this.state.init) {
      this.props.onBackFromSignUp()
    }
  }

  _signUpSuccess() {
    this.setState({
      signUpSuccess: true
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  },
  title: {
    fontSize: 25,
    fontFamily: 'MagmaWave',
    marginBottom: 10,
    color: 'rgba(255,255,255,.8)'
  },
  errMsg: {
    color: '#ffffff',
    fontSize: 12,
    marginBottom: 10,
    width: 280,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Roboto-Regular'
  },
  inputContainer: {
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: 5
  },
  inputField: {
    width: 280,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Roboto-Bold',
    color: getColor()
  },
  btnContainers: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 280
  },
  submitBtnContainer: {
    width: 120,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtn: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: getColor()
  }
})
