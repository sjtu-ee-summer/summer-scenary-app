/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import VectorIcon from 'react-native-vector-icons/MaterialIcons';
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
            <ChooseTypeTranslateView></ChooseTypeTranslateView>
            <UploadVoice></UploadVoice>
            <View style={{padding: 5}}></View>
            <UploadPic></UploadPic>
            <VoiceTranslation></VoiceTranslation>




            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Image source={require('./his.png')} style={{ width: 50, height: 50 }}/>

            </View>

            </ScrollView>
            
        </View>
        
    );
  }
  
  renderNavBar() {
    return (
        <View style={styles.topContainerStyle}>

            <TouchableOpacity onPress={() => { alert('点击定位') }}>
                <View style={styles.leftNavStyle}>
                    <Text>上海</Text>
                    <VectorIcon name='location-on' size={25} color={'gray'}></VectorIcon>
                </View>
            </TouchableOpacity>

            <TextInput
                placeholder='东方明珠、西湖、三峡'
                style={styles.inputStyle}
            >
            </TextInput>
            <View style={styles.rightNavStyle}>
                <TouchableOpacity onPress={() => { alert('点击注意！') }}>
                    <VectorIcon name='notifications-none' size={25} color={'gray'}></VectorIcon>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { alert('点击扫一扫！') }}>
                    <VectorIcon name='fullscreen' size={25} color={'gray'}></VectorIcon>
                </TouchableOpacity>

            </View>

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
      height: 68,
      backgroundColor: 'orange',
      flexDirection: 'row',
      justifyContent: 'space-around',
      // alignItems: 'center',
  },
  inputStyle: {
      width: screenWidth * 0.7,
      height: 40,
      backgroundColor: 'white',
      marginTop: 18,
      borderRadius: 18,
      padding: 12,

  },
  leftNavStyle: {
      marginTop: 25,
      flexDirection: 'row',
      alignItems: 'center',
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

