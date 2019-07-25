import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Background from './background'
import LogoCircle from './login_screen/logo_circle'
import InitialView from './login_screen/initial_view'
import SignInForm from './login_screen/signIn_form'
import SignUpForm from './login_screen/signUp_form'
import ForgotPassForm from './login_screen/forgotPassword_form'
import * as Animatable from 'react-native-animatable'
import { getColor } from './config'

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        // title: 'Please sign in',
        header: null
    };

    constructor(props) {
        super(props)

        this.state = {
            initialRun: true,
            initialScreen: true,
            signIn: false,
            signUp: false,
            forgotPass: false
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }

    componentDidMount() {
        this.setState({ initialRun: false })
    }

    componentDidUpdate() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    }

    render() {
        const animationDelay = this.state.initialRun ? 500 : 0

        const initialView = this.state.initialScreen ?
            <InitialView
                onSignIn={this._onSignIn.bind(this)}
                onSignUp={this._onSignUp.bind(this)}
                animDelay={animationDelay} />
            : null

        const signIn = this.state.signIn ?
            <SignInForm
                goToHomeScreen={this._onSignInSuccess.bind(this)}
                onBackFromSignIn={this._onBackFromSignIn.bind(this)}
                onForgotPass={this._onForgotPass.bind(this)} />
            : null

        const signUp = this.state.signUp ?
            <SignUpForm
                goToHomeScreen={this._onSignInSuccess.bind(this)}
                onBackFromSignUp={this._onBackFromSignUp.bind(this)} />
            : null

        const fogotPass = this.state.forgotPass ?
            <ForgotPassForm
                onBackFromForgotPass={this._onBackFromForgotPass.bind(this)} />
            : null

        let hello_bg

        if(this.state.signIn | this.state.signUp | this.state.forgotPass)
            hello_bg = require('../Assets/LoginPage/login_back1.png')

        else
            hello_bg = require('../Assets/LoginPage/login_back.jpg')


        let logo

        if (this.state.signUp)
            logo = null

        else
            logo = <LogoCircle />

        return (
            // <View style={styles.container}>
            //     <Button title="Sign in!" onPress={this._signInAsync} />
            // </View>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={getColor('googleBlue700')}
                    animated={true}
                />

                <Background imgSrouce={hello_bg} />

                <Animatable.View
                    animation="bounceInDown"
                    style={styles.logoContainer}
                    delay={animationDelay}>
                    {logo}
                </Animatable.View>

                {initialView}
                {signIn}
                {signUp}
                {fogotPass}

            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    _onSignIn() {
        this.setState({
            initialScreen: false,
            signIn: true
        })
    }

    _onBackFromSignIn() {
        this.setState({
            initialScreen: true,
            signIn: false
        })
    }

    _onSignUp() {
        this.setState({
            initialScreen: false,
            signUp: true
        })
    }

    _onBackFromSignUp() {
        this.setState({
            initialScreen: true,
            signUp: false
        })
    }

    _onForgotPass() {
        this.setState({
            initialScreen: false,
            signIn: false,
            signUp: false,
            forgotPass: true
        })
    }

    _onBackFromForgotPass() {
        this.setState({
            initialScreen: true,
            forgotPass: false
        })
    }

    _onSignInSuccess() {
        // const currentUser = firebaseApp.auth().currentUser
        // const email = currentUser.email
        // const name = currentUser.displayName
        // const uid = currentUser.uid
        // this.props.signedIn(email, name, uid)
        // this.props.navigator.push({ view: HomeScreen })
        // await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});