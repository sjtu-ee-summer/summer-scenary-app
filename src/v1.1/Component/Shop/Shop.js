/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import TabNavigator from 'react-native-tab-navigator'
import VectorIcon from 'react-native-vector-icons/Entypo';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
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

class Shop extends React.Component {
    renderTabNavigatorItem(title, iconName, selectedIconName, selectedTab, componentName, component) {
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={() => <VectorIcon name={iconName} size={25} color={'gray'}></VectorIcon>}
                renderSelectedIcon={() => <VectorIcon name={selectedIconName} size={25} color={'orange'}></VectorIcon>}
                onPress={() => { this.setState({ selectedTab: selectedTab }) }}
                selected={this.state.selectedTab === selectedTab}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.selectedStyle}
            >
                {/* <Home></Home> */}
                <Navigator
                    initialRoute={{ name: componentName, component: component }}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                >
                </Navigator>

            </TabNavigator.Item>

        )

    }
  render() {
    return (
        <View style={styles.containerStyle}>
          
            <ScrollView
                    directionalLockEnabled={true}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
            <TranslateChooseLanguageView></TranslateChooseLanguageView>
            <TextTranslateView></TextTranslateView>      
            <View style={{padding: 5}}></View>      
            {/* <ChooseTypeTranslateView></ChooseTypeTranslateView> */}
            {/* <UploadVoice></UploadVoice> */}
            <View style={{padding: 5}}></View>  
            {/* <UploadPic></UploadPic> */}

            {/* <VoiceTranslation></VoiceTranslation> */}

            {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Image source={require('./his.png')} style={{ width: 50, height: 50 }}/>

            </View> */}

            </ScrollView>
           {/* <ActionButton buttonColor="#e85a71" >
           <ActionButton.Item buttonColor='#fc9d9a' title="" onPress={() => this.props.navigation.navigate('PicTrans')}>
            <Icon name="md-images" style={styles.actionButtonIcon} />
          </ActionButton.Item>
           <ActionButton.Item buttonColor='#f9cdad' title="" onPress={() => this.props.navigation.navigate('Shop')}>
             <Icon name="ios-mic" style={styles.actionButtonIcon} />
           </ActionButton.Item>
           <ActionButton.Item buttonColor='#c8c8a9' title="" onPress={() => this.props.navigation.navigate('More')}>
             <Icon name="md-contacts" style={styles.actionButtonIcon} />
           </ActionButton.Item>
         </ActionButton> */}
            
        </View>
        
    );
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
    color: 'white'
  },
  
});

module.exports = Shop;

