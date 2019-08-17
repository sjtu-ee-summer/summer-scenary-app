/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 //加号减号色号：'#df75a8'
 //isEdit: 是否为编辑模式（小减号

import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ActionButton from 'react-native-action-button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default class App extends React.Component {
  state = {
    avatarSource: [[],[],[],[],[],[],[],[],[],[]], //图片
    text: '',
    number: 5,  //纸张数
    textArray: [],  //文本
    tmpText: '',
    isEdit: true,
    currentKey: 0,
    chooseTemplate: [1,2,3,2,1], //模版样式
    slideAnimationDialog: false,
    scaleAnimationDialog: false,
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.selectVideoTapped = this.selectVideoTapped.bind(this);
//    this.state = { text: '点击输入标题' };
  }

  selectPhotoTapped(key, index) {
   console.log(key);
   console.log(index);
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log(response.uri);
//        console.log(response.data);

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
         var avatarSource = this.state.avatarSource;
         avatarSource[key][index] = source;

        this.setState({
          avatarSource: avatarSource,
        });
        console.log("this is selectPhotoTapped");
        console.log(this.state.avatarSource);
        console.log(this.state.avatarSource[key][index]);

      }
    });
  }

  onChangeHandler(text) {

    console.log(text);
    var textArray = this.state.textArray;
    var key = this.state.currentKey;
    textArray[key] = text;
    this.setState({
        textArray: textArray,
    });
    console.log(textArray);

  }


  selectVideoTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium',
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          videoSource: response.uri,
        });
      }
    });
  }

  onBlurHandler(key) {
    console.log("this is onBlurHandler");
    console.log(key);
    var textArray = this.state.textArray;
    textArray[key] = this.state.tmpText;
    this.setState({
        textArray: textArray,
    });
    console.log(textArray);
  }

  onPressMinus(key) {
    console.log("this is onPressMinus");
    if(this.state.number === 1){
        this.setState({
          scaleAnimationDialog: true,
        });
        return;
    }
    var textArray = this.state.textArray;
    var avatarSource = this.state.avatarSource;
    var number = this.state.number-1;
    var chooseTemplate = this.state.chooseTemplate;
    textArray.splice(key, 1);
    avatarSource.splice(key, 1);
    chooseTemplate.splice(key, 1);
    this.setState({
        textArray: textArray,
        avatarSource: avatarSource,
        number: number,
        chooseTemplate: chooseTemplate,
    })
  }

  onFocusHandler(key){
    console.log("this is onFocusHandler");
    console.log(key);
    this.setState({
        currentKey: key,
    })
  }

  onPressPlus(key) {
    console.log("this is onPressPlus");
    console.log(key);
    var number = this.state.number+1;
    var chooseTemplate = this.state.chooseTemplate;
    chooseTemplate[number-1] = key;
    this.setState({
        number: number,
        chooseTemplate: chooseTemplate,
        slideAnimationDialog: false,
    })
    console.log(this.state.number);
    console.log(this.state.chooseTemplate);
  }

  render() {
     console.log(this.state.chooseTemplate.length);
     console.log(this.state.chooseTemplate);
     var arr = [];
//     console.log("this.state.avatarSource[0]");
     console.log(this.state.avatarSource[0]);
     console.log(this.state.avatarSource[1]);
     console.log(screenHeight);
     console.log(screenWidth);
     console.log(this.state.number);
     console.log(this.state.textArray);
     var chooseTemplate = this.state.chooseTemplate;
     var zero=0;
     for(var i=0;i<this.state.number;i++){
          if(chooseTemplate[i] === 1){
           arr.push(
             <View key={i} style={{flex: 1, height:230}}>
                 <ImageBackground source={require('./assets/body1.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row'}}>

                      {this.state.isEdit?
                      <TouchableOpacity onPress={this.onPressMinus.bind(this, i)} style={{width: 30, height: 30, marginTop: 0}}>
                         <Image
                           style={styles.button}
                           source={require('./assets/minus.png')}
                         />
                       </TouchableOpacity> : null}

                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, i, 0)} style={{width: 180, height:180, }}>
                           <View
                             style={[styles.avatar, styles.avatarContainer, {marginBottom: 15}]}>
                             {this.state.avatarSource[i][0] === undefined ? (
                               <Text>选择照片上传</Text>
                             ) : (
                               <Image style={styles.avatar} source={this.state.avatarSource[i][0]} />
                             )}
                           </View>
                      </TouchableOpacity>
                      <TextInput
                        key={i}
                        style={{height: 180, borderColor: 'gray', borderWidth: 1, width: 140, marginRight: 10, fontFamily: 'star'}}
                        onChange={(event) => this.onChangeHandler(event.nativeEvent.text)}
                        onFocus={this.onFocusHandler.bind(this, i)}
                        //  onBlur={this.onBlurHandler.bind(this, i)}
                        value={this.state.textArray[i]}
                        multiline={true}
                        numberOfLines={9}
                      />
                 </ImageBackground>
             </View>
           );
          }
          if(chooseTemplate[i] === 2){
           arr.push(
             <View key={i} style={{flex: 1, height:390}}>
                 <ImageBackground source={require('./assets/body2.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row'}}>

                      {this.state.isEdit?
                      <TouchableOpacity onPress={this.onPressMinus.bind(this, i)} style={{width: 30, height: 30, marginTop: 0}}>
                         <Image
                           style={styles.button}
                           source={require('./assets/minus.png')}
                         />
                       </TouchableOpacity> : null}
                      <TextInput
                        key={i}
                        style={{height: 200, borderColor: 'gray', borderWidth: 1, width: 140, marginLeft: 10, marginTop: 150, fontFamily: 'star'}}
                        onChange={(event) => this.onChangeHandler(event.nativeEvent.text)}
                        onFocus={this.onFocusHandler.bind(this, i)}
                        //  onBlur={this.onBlurHandler.bind(this, i)}
                        value={this.state.textArray[i]}
                        multiline={true}
                        numberOfLines={9}
                      />
                      <View style={{flexDirection: 'column', marginLeft: 10}}>
                          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, i, 0)} style={{width: 160, height:180, }}>
                               <View
                                 style={[styles.avatar, styles.avatarContainer, {marginBottom: 15}]}>
                                 {this.state.avatarSource[i][0] === undefined ? (
                                   <Text>选择照片上传</Text>
                                 ) : (
                                   <Image style={styles.avatar} source={this.state.avatarSource[i][0]} />
                                 )}
                               </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, i, 1)} style={{width: 160, height:180, }}>
                               <View
                                 style={[styles.avatar, styles.avatarContainer, {marginBottom: 15}]}>
                                 {this.state.avatarSource[i][1] === undefined ? (
                                   <Text>选择照片上传</Text>
                                 ) : (
                                   <Image style={styles.avatar} source={this.state.avatarSource[i][1]} />
                                 )}
                               </View>
                          </TouchableOpacity>
                      </View>

                 </ImageBackground>
             </View>
           );
          }
          if(chooseTemplate[i] === 3){
           arr.push(
             <View key={i} style={{flex: 1, height:430}}>
                 <ImageBackground source={require('./assets/body3.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row'}}>

                      {this.state.isEdit?
                      <TouchableOpacity onPress={this.onPressMinus.bind(this, i)} style={{width: 30, height: 30, marginTop: 0}}>
                         <Image
                           style={styles.button}
                           source={require('./assets/minus.png')}
                         />
                       </TouchableOpacity> : null}
                      <View style={{flexDirection: 'column', marginTop: 30}}>
                          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, i, 0)} style={{width: 160, height:180, }}>
                               <View
                                 style={[styles.avatar, styles.avatarContainer, {marginBottom: 15}]}>
                                 {this.state.avatarSource[i][0] === undefined ? (
                                   <Text>选择照片上传</Text>
                                 ) : (
                                   <Image style={styles.avatar} source={this.state.avatarSource[i][0]} />
                                 )}
                               </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, i, 1)} style={{width: 160, height:180, }}>
                               <View
                                 style={[styles.avatar, styles.avatarContainer, {marginBottom: 15}]}>
                                 {this.state.avatarSource[i][1] === undefined ? (
                                   <Text>选择照片上传</Text>
                                 ) : (
                                   <Image style={styles.avatar} source={this.state.avatarSource[i][1]} />
                                 )}
                               </View>
                          </TouchableOpacity>
                      </View>
                      <View style={{flexDirection: 'column', marginTop: 30}}>
                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, i, 2)} style={{width: 160, height:180, }}>
                                 <View
                                   style={[styles.avatar, styles.avatarContainer, {marginBottom: 15}]}>
                                   {this.state.avatarSource[i][2] === undefined ? (
                                     <Text>选择照片上传</Text>
                                   ) : (
                                     <Image style={styles.avatar} source={this.state.avatarSource[i][2]} />
                                   )}
                                 </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this, i, 3)} style={{width: 160, height:180, }}>
                                 <View
                                   style={[styles.avatar, styles.avatarContainer, {marginBottom: 15}]}>
                                   {this.state.avatarSource[i][3] === undefined ? (
                                     <Text>选择照片上传</Text>
                                   ) : (
                                     <Image style={styles.avatar} source={this.state.avatarSource[i][3]} />
                                   )}
                                 </View>
                            </TouchableOpacity>
                        </View>
                 </ImageBackground>
             </View>
           );
          }

        }
console.log(arr);
    return (
    <View>
    <ScrollView>
        <View style={styles.header}>
            <ImageBackground source={require('./assets/header.jpg')} style={{width: '100%', height: '100%', alignItems: 'center', }}>
                <TextInput
                  style={{height: 100, fontSize: 26, fontFamily: 'star'}}
                  onChangeText={(text) => this.setState({text})}
                  placeholder = "点击输入标题"
                  value={this.state.text}
                />
            </ImageBackground>
        </View>
        {arr}
    </ScrollView>
            {this.state.isEdit?
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                this.setState({
                  slideAnimationDialog: true,
                });
              }}
              style={styles.TouchableOpacityStyle}>
              <Image
                source={require('./assets/float-add-icon.png')}
                style={styles.FloatingButtonStyle}
              />
            </TouchableOpacity>: null}

        <Dialog
          onDismiss={() => {
            this.setState({ slideAnimationDialog: false });
          }}
          onTouchOutside={() => {
            this.setState({ slideAnimationDialog: false });
          }}
          visible={this.state.slideAnimationDialog}
          dialogTitle={<DialogTitle title="选择游记模块" />}
          dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        >
        {this.state.number<10?
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={this.onPressPlus.bind(this, 1)} >
              <Image

                source={require('./assets/module1.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressPlus.bind(this, 2)} >
              <Image

                source={require('./assets/module2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressPlus.bind(this, 3)} >
              <Image

                source={require('./assets/module3.png')}
              />
            </TouchableOpacity>
          </View>
          :<DialogContent>
             <Text style={{fontSize: 26}}>最多选择十张纸哦</Text>
           </DialogContent>}
        </Dialog>
        <Dialog
                  onTouchOutside={() => {
                    this.setState({ scaleAnimationDialog: false });
                  }}
                  width={0.7}
                  visible={this.state.scaleAnimationDialog}
                  dialogAnimation={new ScaleAnimation()}
                  onHardwareBackPress={() => {
                    console.log('onHardwareBackPress');
                    this.setState({ scaleAnimationDialog: false });
                    return true;
                  }}
                  dialogTitle={
                    <DialogTitle
                      title="提示"
                      hasTitleBar={false}
                    />
                  }
                  actions={[
                    <DialogButton
                      text="我知道了"
                      onPress={() => {
                        this.setState({ scaleAnimationDialog: false });
                      }}
                      key="button-1"
                    />,
                  ]}
                >
                  <DialogContent>
                    <Text style={{fontSize: 20}}>不能再减少了哦</Text>
                  </DialogContent>
                </Dialog>

    </View>
    );
  }
}
//选择之后 加纸并隐藏起来那个dialog
const styles = StyleSheet.create({
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      height: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  ModuleButtonStyle: {
    resizeMode: 'contain',
    width: 100,
    //backgroundColor:'black'
  },
});