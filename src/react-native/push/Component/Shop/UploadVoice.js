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

import RNFS from 'react-native-fs'

import animatedPhoto from './animated_photo.gif'
import photo from './photo.jpg'

import RNFetchBlob from 'react-native-fetch-blob'

import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';


var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;
var createReactClass = require('create-react-class');
var FileUpload = require('NativeModules').FileUpload;


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
            pathTo: ''
        }
    },

    _onPress () {
      let filter;
      if (Platform.OS === 'ios') {
        filter = [];
      } else if (Platform.OS === 'android') {
        filter = ".*\\.*";
      }
  
  
      RNFileSelector.Show(
        {
          path: RNFS.DocumentDirectoryPath,
          filter: filter,
          title: 'Select File',
          closeMenu: true,
          editable: true,
          onDone: (path) => {
            this.state.pathTo = path
            alert(this.state.pathTo)
            this.UploadVoice()

          
          },
          onCancel: () => {
            alert('cancelled')
          }
        }
      )
    },
    
    componentDidMount () {

      // create a path you want to write to
      let animatedPhotoPath = RNFS.DocumentDirectoryPath + "/animated_photo.gif";
      let photoPath = RNFS.DocumentDirectoryPath + "/photo.jpg";
      // let infoPath = RNFS.DocumentDirectoryPath + "/info.plist";
      let assetsPath = RNFS.DocumentDirectoryPath + '/assets'
  
      // write the file
      RNFS.writeFile(animatedPhotoPath, animatedPhoto, "utf8")
        .then(success => {
          console.log("FILE WRITTEN!");
        })
        .catch(err => {
          console.log(err.message);
        });
  
      RNFS.writeFile(photoPath, photo, "utf8")
        .then(success => {
          console.log("FILE WRITTEN!");
        })
        .catch(err => {
          console.log(err.message);
        });
  
  
      RNFS.mkdir(assetsPath)
        .then(success => {
          console.log('DIRECTORY CREATED')
  
          RNFS.writeFile(assetsPath + "/animated_photo.gif", animatedPhoto, "utf8")
            .then(success => {
              console.log("DIRECTORY WRITTEN!");
            })
            .catch(err => {
              console.log(err.message);
            });
  
          RNFS.writeFile(assetsPath + "/photo.jpg", photo, "utf8")
            .then(success => {
              console.log("DIRECTORY WRITTEN!");
            })
            .catch(err => {
              console.log(err.message);
            });
        })
  
       
        // RNFS.writeFile(infoPath, info, "utf8")
      //   .then(success => {
      //     console.log("FILE WRITTEN!");
      //   })
      //   .catch(err => {
      //     console.log(err.message);
      //   });
    },

  //   
//   UploadVoice(){
//     RNFS.readFile(this.state.pathTo, 'base64')
//     .then((content) => {
//   // 得到的结果就可以 传给接口了 ，如果想要在网页上预览效果不要忘记格式转换
//       RNFetchBlob.fetch('POST', 'http://202.120.40.8:30454/translate/translate/photo/', {
//   Authorization : "Bearer access-token...",
//   'Dropbox-API-Arg': JSON.stringify({
//     path : './voice.png',
//     mode : 'add',
//     autorename : true,
//     mute : false
//   }),
//   'Content-Type' : 'application/octet-stream',
//   // here's the body you're going to send, should be a BASE64 encoded string
//   // (you can use "base64"(refer to the library 'mathiasbynens/base64') APIs to make one).
//   // The data will be converted to "byte array"(say, blob) before request sent.  
// }, content)
// .then((res) => {
//   console.log("图片1")
//   console.log(res.text())
// })
// .catch((err) => {
//   // error handling ..
//   console.log("图片")
// })
    
//     })
//     .catch((err) => {
//       toastShort("图片读取失败")
//     });
//   },
    
  UploadVoice(){
    RNFS.readFile(this.state.pathTo, 'base64')
    .then((content) => {
      fetch('http://202.120.40.8:30454/translate/translate/photo/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          picture: content,
        }),
      });
    
    })
    .then((res) => {
        console.log(res)
        //console.log(res.text())
      })
      .catch((err) => {
        // error handling ..
        console.log(err)
      })
    .catch((err) => {
      toastShort("图片读取失败")
    });
  },

    // componentDidMount: function() {
    //     var obj = {
    //         uploadUrl: 'http://202.120.40.8:30454/translate/translate/voice',
    //         method: 'POST', // default 'POST',support 'POST' and 'PUT'
    //         headers: {
    //           'Accept': 'application/json',
    //         },
    //         fields: {
    //             'hello': 'world',
    //         },
    //         files: [
    //           {
    //             name: 'one', // optional, if none then `filename` is used instead
    //             filename: 'one.w4a', // require, file name
    //             filepath: '/xxx/one.w4a', // require, file absoluete path
    //             filetype: 'audio/x-m4a', // options, if none, will get mimetype from `filepath` extension
    //           },
    //         ]
    //     };
    //     FileUpload.upload(obj, function(err, result) {
    //       alert('upload:', err, result);
    //     })
    //   },

      

    render(){
        return (
          <View style={styles.container}>
          <TouchableOpacity onPress={() => {
              this._onPress()
              // this.setState({ visible: true });
            }}>
            <Image style={{ width: 150, height: 100 }} source={require('./upload.png')}></Image>
            {/* <Text>Click</Text> */}
            <RNFileSelector title={"Select File"} visible={this.state.visible} onDone={(path) => {
                //alert("file selected: " + path);
                //this.UploadVoice()

              }} onCancel={() => {
                alert("cancelled");
              }}/>
          </TouchableOpacity>
        </View>
        );
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

module.exports = UploadVoice;

