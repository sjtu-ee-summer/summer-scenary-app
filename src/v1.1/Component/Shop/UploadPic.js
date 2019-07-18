/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
var forge = require('node-forge');
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
var Loading = require('../More/Loading')

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
      photoPath: RNFS.ExternalStorageDirectoryPath + '/DCIM',
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
          // alert('cancelled')
        }
      }
    )
  },

  componentDidMount() {

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

  UploadVoice() {
    console.log("readfile");
    var readfile = RNFS.readFile(this.state.pathTo, "base64");
    console.log(readfile);
    this.setState({
      loading: true,
    });

    RNFS.readFile(this.state.pathTo, 'base64')
      .then((content) => {
        // console.log(content)
        // var appid = 'rI86cdVLfXWGMhRGkfyFYz000Y62fJCY';
        // var md = forge.md.md5.create();
        // var salt = '123';
        // var key = '3732bd9603c078bc';
        // var sign = key + content + salt + appid;
        // md.update(sign);
        // var password = md.digest().toHex();



        // fetch('https://openapi.youdao.com/ocrtransapi=' + '1' + '&from=' + 'en' +
        //   '&to=' + 'zh' + '&appKey=' + '3732bd9603c078bc' + '&sign=' + password + '&salt=' + '123' +
        //   '&q=' + content)
        //   .then((response) => {
        //     console.log('here')
        //     console.log(response);
        //     return response.json();
        //   })
        //   .then((responseJson) => {
        //     console.log('heres')
        //     console.log(responseJson);
        //     // console.log(responseJson.trans_result[0].dst)
        //     // this.setState({
        //     //   slideAnimationDialog: true,
        //     //   translation: responseJson.trans_result[0].dst
        //     // })
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        let url = "http://202.120.40.8:30454/translate/translate/photo"
        let formData = new FormData();
        this.tmp = content
        formData.append("picture", this.tmp);
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
            console.log("result");
            console.log(myJson);
            return myJson.resRegions
          })
          .then((result) => {
            console.log(result)
            var data = ''
            for (var i = 0; i < result.length; i++) {
              data += result[i].tranContent
              console.log(result[i])
            }
            console.log(data)
            this.setState({
              slideAnimationDialog: true,
              translation: data,
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
          backgroundColors={['#ebbba7', '#cfc7f8']}
          onPress={() => {
            // this.getTranslationFromApiAsync(this.state.text)
            this._onPress()
            //alert(this.state.text)
          }
          }
          text="请上传您的图片">
        </ButtonComponent>


        <TouchableOpacity onPress={() => {
          this._onPress()
          // this.setState({ visible: true });
        }}>


          {/* <Image style={{ width: 50, height: 50 }} source={require('./img.png')}></Image> */}
          {/* <Text>Click</Text> */}
          <RNFileSelector title={"Select File"} visible={this.state.visible} onDone={(path) => {
            // alert("file selected: " + path);
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

module.exports = UploadPic;

