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


var UploadPic = createReactClass({

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
            photoPath: RNFS.ExternalStorageDirectoryPath + '/DCIM'
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
          path: this.state.photoPath,
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
            alert('cancelled')
          }
        }
      )
    },
    
    componentDidMount () {

      console.log("location")
      console.log(this.state.photoPath)
      // create a path you want to write to
      let animatedPhotoPath = this.state.photoPath + "/animated_photo.gif";
      let photoPath = this.state.photoPath + "/photo.jpg";
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
  
          RNFS.writeFile(assetsPath + "/test.png", animatedPhoto, "utf8")
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
//     console.log(RNFS.ExternalStorageDirectoryPath)
//     RNFS.readDir(RNFS.ExternalStorageDirectoryPath + '/DCIM/Camera')
// .then((result) => {
// console.log('GOT RESULT', result);
// return Promise.all([RNFS.stat(result[0].path), result[0].path]);
// })
// .then((statResult) => {
// if (statResult[0].isFile()) {
// return RNFS.readFile(statResult[1], 'utf8');
// }
// return 'no file';
// })
// .then((contents) => {
// console.log(contents);
// })
// .catch((err) => {
// console.log(err.message, err.code);
// });
    console.log("readfile");
    var readfile = RNFS.readFile(this.state.pathTo, "base64");
    console.log(readfile);


    RNFS.readFile(this.state.pathTo, 'base64')
    .then((content) => {    
      let url = "http://202.120.40.8:30454/translate/translate/photo"
      let formData = new FormData();
      this.tmp = content
      formData.append("picture", this.tmp);

      fetch(url, {
        credentials: 'include',
        method: 'POST',
        header: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: formData
    }).then(function(response) {
          if(!response.ok){
            console.log("Network response was not ok.");
          }
//                      this.result = response.result;
//                      console.log("result");
//                      console.log('result:', this.result[0]);
          return response.json();
        })
        .then(function(myJson) {
          console.log("result");
          console.log(myJson);
          return myJson.resRegions
        })
        .then(function(result){
          console.log(result)
          var data = ''
          for(var i = 0; i < result.length; i++){
            data += result[i].tranContent
            console.log(result[i])
          }
          alert(data)
        })

        






    
    // let formdata = new FormData();
    // formdata.append('picture', content)
    // console.log(formdata)
    //   fetch('http://202.120.40.8:30454/translate/translate/photo', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     body: formdata
    //   });
    
    // })
    // .then((res) => {
    //   console.log("fine")
    //     console.log(res)
    //     //console.log(res.text())
    //   })
    //   .catch((err) => {
    //     console.log("bad")
    //     // error handling ..
    //     console.log(err)
    //   })
    // .catch((err) => {
    //   toastShort("图片读取失败")
    });
  },

    

      

    render(){
        return (
          <View style={styles.container}>
          <TouchableOpacity onPress={() => {
              this._onPress()
              // this.setState({ visible: true });
            }}>
            <Image style={{ width: 150, height: 100 }} source={require('./pic.png')}></Image>
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

module.exports = UploadPic;

