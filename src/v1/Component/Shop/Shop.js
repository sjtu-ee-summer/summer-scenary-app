/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import VectorIcon from 'react-native-vector-icons/Entypo';
import ActionButton from 'react-native-action-button';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
var TranslateChooseLanguageView = require('../Shop/TranslateChooseLanguageView')
var TextTranslateView = require('../Shop/TextTranslateView')
var ChooseTypeTranslateView = require('../Shop/ChooseTypeTranslateView')
var VoiceTranslation = require('../Shop/VoiceTranslation')
var UploadVoice = require('../Shop/UploadVoice')
var UploadPic = require('../Shop/UploadPic')

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;



export default class Shop extends Component {
  render() {
    return (
        <View style={styles.containerStyle}>
            {this.renderNavBar()}
            <ScrollView
                    directionalLockEnabled={true}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
            <TranslateChooseLanguageView></TranslateChooseLanguageView>
            <TextTranslateView></TextTranslateView>      
            <View style={{padding: 5}}></View>      
            {/* <ChooseTypeTranslateView></ChooseTypeTranslateView> */}
            <UploadVoice></UploadVoice>
            <View style={{padding: 5}}></View>  
            <UploadPic></UploadPic>

            <VoiceTranslation></VoiceTranslation>




            {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Image source={require('./his.png')} style={{ width: 50, height: 50 }}/>

            </View> */}

            </ScrollView>
            
        </View>
        
    );
  }
  
  renderNavBar() {
    return (
        <View style={styles.topContainerStyle}>

            <TouchableOpacity onPress={() => { alert('点击菜单') }}>
                <View style={styles.leftNavStyle}>
                    <VectorIcon name='menu' size={25} color={'gray'}></VectorIcon>
                </View>
            </TouchableOpacity>

            <Text style={styles.inputStyle}>
                
            </Text>

            {/* <TextInput
                placeholder='东方明珠、西湖、三峡'
                style={styles.inputStyle}
            >
            </TextInput> */}
            {/* <View style={styles.rightNavStyle}>
                <TouchableOpacity onPress={() => { alert('点击注意！') }}>
                    <VectorIcon name='notifications-none' size={25} color={'gray'}></VectorIcon>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { alert('点击扫一扫！') }}>
                    <VectorIcon name='fullscreen' size={25} color={'gray'}></VectorIcon>
                </TouchableOpacity>

            </View> */}

        </View>

    )
}
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    homeTextStyle: {
        fontSize: 20,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    topContainerStyle: {
      width: screenWidth,
      height: 50,
      backgroundColor: '#9fdf9f',
      flexDirection: 'row',
      justifyContent: 'space-around',
      // alignItems: 'center',
  },
  inputStyle: {
      width: screenWidth * 0.7,
      height: 40,
      marginTop: 6,
      borderRadius: 25,
      padding: 12,
      alignItems: 'center'

  },
  leftNavStyle: {
      marginTop: 13,
    //   flexDirection: 'row',
    //   alignItems: 'flex-start',
  },
  rightNavStyle: {
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

module.exports = Shop;

