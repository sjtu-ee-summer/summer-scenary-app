/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import RNFileSelector from 'react-native-file-selector';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

import RNFS from 'react-native-fs'

import animatedPhoto from './animated_photo.gif'
import photo from './photo.jpg'

import RNFetchBlob from 'react-native-fetch-blob'

import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';


var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;
var createReactClass = require('create-react-class');
var Loading = require('../More/Loading')

var UploadVoice = createReactClass({

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
      visible: false,
      pathTo: '',
      voicePath: RNFS.ExternalStorageDirectoryPath + '/MIUI/sound_recorder',
      customBackgroundDialog: false,
      defaultAnimationDialog: false,
      scaleAnimationDialog: false,
      slideAnimationDialog: false,
      loading: false
    }
  },

  _onPress() {
    let filter;
    if (Platform.OS === 'ios') {
      filter = [];
    } else if (Platform.OS === 'android') {
      filter = ".*\\.*";
    }


    RNFileSelector.Show(
      {
        path: this.state.voicePath,
        filter: filter,
        title: 'Select File',
        closeMenu: true,
        editable: true,
        onDone: (path) => {
          this.state.pathTo = path
          //alert(this.state.pathTo)
          this.UploadVoice()


        },
        onCancel: () => {
          // alert('cancelled')
        }
      }
    )
  },

  componentDidMount() {

    console.log("location")
    console.log(this.state.voicePath)
  },

  UploadVoice() {

    console.log("readfile");
    var readfile = RNFS.readFile(this.state.pathTo, "base64");
    console.log(readfile);
    this.setState({
      loading: true,
    });

    RNFS.readFile(this.state.pathTo, 'base64')
      .then((content) => {
        console.log(content)
        let url = "http://202.120.40.8:30454/translate/translate/voice"
        let formData = new FormData();
        this.tmp = content
        formData.append("voice", this.tmp);
        formData.append("id", '1');

        fetch(url, {
          credentials: 'include',
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer a6e2fbfa-0498-45ec-b6e6-753ea48353d3'
          },
          body: formData
        }).then((response) => {
          return response.json();
        })
          .then((myJson) => {
            console.log(myJson)
            return myJson.translation
          })
          .then((result) => {
            console.log(result[0])
            this.setState({
              slideAnimationDialog: true,
              translation: result[0],
              loading: false
            })
          })

      });
  },





  render() {
    return (
      <View style={styles.container}>
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
      this.state.loading == true ? (<Loading />) : (null)
    }

        <ButtonComponent
          backgroundColors={['#6a85b6', '#bac8e0']}
          onPress={() => {
            // this.getTranslationFromApiAsync(this.state.text)
            this._onPress()
            //alert(this.state.text)
          }
          }
          text="请上传您的音频">
        </ButtonComponent>

        <TouchableOpacity onPress={() => {
          this._onPress()
          // this.setState({ visible: true });
        }}>
          {/* <Image style={{ width: 50, height: 50 }} source={require('./music.png')}></Image> */}
          {/* <Text>Click</Text> */}
          <RNFileSelector title={"Select File"} visible={this.state.visible} onDone={(path) => {
            //alert("file selected: " + path);
            //this.UploadVoice()

          }} onCancel={() => {
            // alert("cancelled");
          }} />
        </TouchableOpacity>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  }
});

module.exports = UploadVoice;

