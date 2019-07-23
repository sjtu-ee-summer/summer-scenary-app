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
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
var forge = require('node-forge');

var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;
var createReactClass = require('create-react-class');
var Loading = require('../More/Loading')

var TranslateChooseLanguageView = createReactClass({


  getDefaultProps() {
    return {
      data: null,
    }
  },

  getInitialState() {
    return {
      currentPage: 0,
      text: '',
      translation: '',
      customBackgroundDialog: false,
      defaultAnimationDialog: false,
      scaleAnimationDialog: false,
      slideAnimationDialog: false,
      visible: false,
    }
  },

  // getTranslationFromApiAsync(text) {
  //   fetch('http://202.120.40.8:30454/translate/translate/text/' + text)
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((responseJson) => {
  //       console.log(responseJson);
  //       console.log(responseJson.error)
  //       if(responseJson.error === "unauthorized"){
          
  //         this.setState({
  //           slideAnimationDialog: true,
  //           translation: "请先登录"
  //         })
  //       }
  //       else{
  //         this.setState({
  //           slideAnimationDialog: true,
  //           translation: responseJson
  //         })
  //       }
        
  //       // alert(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

      getTranslationFromApiAsync(text) {
        var appid = '20190718000319144';
        var md = forge.md.md5.create();
        var salt = '123';
        var key = 'S3PZKNS_brMlFuxMCNP5';
        var sign = appid + text + salt + key;
        md.update(sign);
        var password = md.digest().toHex();
        this.setState({
          visible: true,
        });

        fetch('https://fanyi-api.baidu.com/api/trans/vip/translate?q='+text+'&from=' + 'en' +
        '&to=' + 'zh' + '&appid=' + '20190718000319144' + '&salt=' + '123' + '&sign=' + password )
          .then((response) => {
             console.log(response);
            return response.json();
          })
          .then((responseJson) => {
            console.log(responseJson);
            console.log(responseJson.trans_result[0].dst)
              this.setState({
                slideAnimationDialog: true,
                translation: responseJson.trans_result[0].dst,
                visible: false
              })
            // if(responseJson.error === "unauthorized"){
              
            //   this.setState({
            //     slideAnimationDialog: true,
            //     translation: "请先登录"
            //   })
            // }
            // else{
            //   this.setState({
            //     slideAnimationDialog: true,
            //     translation: responseJson
            //   })
            // }
            
            // alert(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
  },

  render() {
    const { data } = this.props;

    return (
      <ScrollView
        style={styles.container1}
        contentContainerStyle={styles.content}
      >
        <View style={{ flex: 1 }}>


      <Dialog
        onDismiss={() => {
          this.setState({ slideAnimationDialog: false });
        }}
        onTouchOutside={() => {
          this.setState({ slideAnimationDialog: false });
        }}
        visible={this.state.slideAnimationDialog}
        dialogTitle={<DialogTitle title="翻译结果" />}
        dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
      >
        <DialogContent>
          <Text>{this.state.translation}</Text>
        </DialogContent>
      </Dialog>
      {
      this.state.visible == true ? (<Loading />) : (null)
    }

    </View>
        <View>
          <View>
            <TextInput
              placeholder={'输入您想要翻译的内容'}
              placeholderTextColor={'#bbbbbb'}
              underlineColorAndroid={'transparent'}
              multiline
              onChangeText={(text) => this.setState({ text })}
              style={{ paddingVertical: 0, fontSize: 16, height: 155, borderColor: 'gray', borderWidth: 1 }} />
          </View>
          <View style={{ padding: 5 }}></View>
          <ButtonComponent
            backgroundColors={['#ff9a9e', '#fad0c4']}
            onPress={() => {
              this.getTranslationFromApiAsync(this.state.text)
              //alert(this.state.text)
            }
            }
            text="翻译">
          </ButtonComponent>
        </View>


      </ScrollView>
      
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    // flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    // backgroundColor: '#000',
    // opacity: 0.4,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  customBackgroundDialog: {
    opacity: 0.5,
    backgroundColor: '#000',
  },
  container1: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#ffffff',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 0,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,

  },
  input: {
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#F5F1ED',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});

module.exports = TranslateChooseLanguageView;

