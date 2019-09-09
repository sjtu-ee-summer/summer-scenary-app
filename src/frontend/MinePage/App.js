/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, AsyncStorage, TouchableOpacity, ImageBackground, TextInput, RefreshControl, PixelRatio, FlatList,} from 'react-native';
import { Avatar, Header, Divider, Card, ListItem, Button, Icon, Rating, PricingCard } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LottieView from 'lottie-react-native';
import { DrawerActions } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
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
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import ViewShot, { captureScreen, captureRef } from "react-native-view-shot";
import Toast, {DURATION} from 'react-native-easy-toast';
import XPay from 'react-native-puti-pay';
import { MapView } from 'react-native-amap3d';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var uid = 2;
var username = 'Arwen';
var token="68a02582-9f51-45ae-986b-e1144eee9a7a";

//这是我的足迹的
var cols = 3;
var boxW = 100;
var vMargin  = (screenWidth - cols*boxW)/(cols + 1);
var hMargin = 40;
const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
//const PARALLAX_HEADER_HEIGHT = 350;
const PARALLAX_HEADER_HEIGHT = 200;
const STICKY_HEADER_HEIGHT = 70;
//我的足迹到这里结束

var obj1=[];

const comments = [
 {
    name: '长城',
    avatar: 'http://pic31.nipic.com/20130708/9129085_163421411000_2.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna augue, pellentesque quis dolor quis, fermentum placerat ante. Curabitur in augue ultricies, tincidunt metus et, ultrices purus. Sed gravida neque velit, id tincidunt eros blandit eu. Maecenas aliquam turpis eget ex porttitor vestibulum. Aliquam luctus, purus at cursus pretium, diam velit sagittis diam, vitae molestie dolor nunc vitae ipsum. Ut ut pretium dolor, id volutpat magna. Etiam vehicula consectetur euismod. Mauris fringilla nisl sit amet turpis vehicula rutrum. Integer at mi mauris. Integer sed vulputate turpis.',
    rating: 4.4
 },
 {
     name: '八达岭熊乐园',
     avatar: 'https://img1.qunarzz.com/travel/poi/201303/13/aacf42f477597acdddb12cfb.jpg_480x360x95_add51828.jpg',
      content: 'Phasellus sagittis condimentum diam, vitae varius lacus mollis sed. Vivamus molestie est quis neque pellentesque, sed aliquet justo porttitor. Integer egestas nibh sed finibus imperdiet. Nulla orci libero, venenatis non tellus vel, hendrerit posuere sapien. Sed in quam nec enim blandit finibus. Donec lobortis euismod pellentesque. Mauris accumsan eros ut metus bibendum vulputate. Suspendisse elementum ullamcorper eros, lobortis elementum velit mollis id. Fusce metus ex, scelerisque ut elit at, aliquet blandit dui. Nunc lacinia, augue sit amet dictum interdum, nisl nisl convallis mi, et scelerisque turpis sem ut elit. Mauris maximus libero elementum ex pellentesque facilisis. Aliquam pulvinar feugiat mi, sed suscipit nisl dictum in. Proin convallis risus vitae efficitur faucibus. Nulla vestibulum, libero vitae semper ornare, nibh quam vulputate ex, vitae laoreet nibh risus nec eros. Donec venenatis, nisl eget interdum semper, mauris nunc tincidunt eros, id lacinia mi ipsum vitae est. Fusce lobortis turpis nec cursus rutrum.',
     rating: 4.9
 },
]

//好友动态
class DetailsScreen extends React.Component {

    constructor() {
            super();
            this.state = {
              index: 0,
              notesArray: [],
              obj1: [],
            }

            this.getMoviesFromApi();
          }

          async getMoviesFromApi() {
              let url='http://202.120.40.8:30454/users/travelnote/all';
              try{
                let response = await fetch(url, {
                    method: 'GET',
                    headers: new Headers({
                        'Authorization': 'Bearer '+token
                    })
                })
                let obj = await response.json();
                for(var i = 0 ; i < obj.length ; i++){
                    var curId = obj[i].uid;
                    let response1 = await fetch('http://202.120.40.8:30454/users/users/id/'+curId, {
                        method: 'GET',
                        headers: new Headers({
                            'Authorization': 'Bearer '+token
                        })
                    })
                    let responseJson = await response1.json();
                    console.log(curId);
                    obj1[i] = responseJson;
                }
                this.setState({
                    notesArray: obj,
                    obj1: obj1,
                })
              }
              catch(error){
                console.error(error);
              }
//              fetch(url, {
//                  method: 'GET',
//                  headers: new Headers({
//                      'Authorization': 'Bearer '+token
//                  })
//              }).then(
//                  (result) => {
//                      if (result.ok) { /////
//                          console.log(result)
//                          result.json().then( ////
//                              (obj) => { ///
//                                  console.log(obj);
//                                  obj=[];
//
//                                  for(var i = 0 ; i < obj.length ; i++){
//                                      var curId = obj[i].uid;
//                                      try{
//                                        let response = await fetch(
//                                          'http://202.120.40.8:30454/users/users/id/'+curId,
//                                        );
//                                        let responseJson = await response.json();
//                                        obj1[curId] = responseJson;
//                                      }
//                                      catch (error) {
//                                          console.error(error);
//                                        }
//                                  }
//                                  console.log(obj)
//                                  console.log(obj1);
//                                  this.setState({
//                                      notesArray: obj,
//                                      obj1: obj1,
//                                  })
//                               }  ///
//                            )  ////
//                         } /////
//
//                      }
//              ).catch((error) => {
//                  console.log(error)
//              })

//              // 注意这里的await语句，其所在的函数必须有async关键字声明
//              let response = await fetch(
//                'https://facebook.github.io/react-native/movies.json',
//              );
//              let responseJson = await response.json();
//              return responseJson.movies;
          }

//          _retrieveData = async () =>{
//            let url='http://202.120.40.8:30454/users/travelnote/all';
//                        fetch(url, {
//                            method: 'GET',
//                            headers: new Headers({
//                                'Authorization': 'Bearer '+token
//                            })
//                        }).then(
//                            (result) => {
//                                if (result.ok) { /////
//                                    console.log(result)
//                                    result.json().then( ////
//                                        (obj) => { ///
//                                            console.log(obj);
//                                            obj=[];
//
//                                            for(var i = 0 ; i < obj.length ; i++){
//                                                var curId = obj[i].uid;
//                                                await this.getUserInfo(curId);
//                                            }
//                                            console.log(obj)
//                                            console.log(obj1);
//                                            this.setState({
//                                                notesArray: obj,
//                                                obj1: obj1,
//                                            })
//                                         }  ///
//                                      )  ////
//                                   } /////
//
//                                }
//                        ).catch((error) => {
//                            console.log(error)
//                        })
//          }
//
//          async getUserInfo(curId) {
//               let url1='http://202.120.40.8:30454/users/users/id/'+curId;
//
//               return fetch(url1, {
//                    method: 'GET',
//                    headers: new Headers({
//                        'Authorization': 'Bearer '+token
//                    })
//               }).then((response) => {
//                 console.log(response)
//                 return response.json()
//               })
//               .then((result) => {
//                 obj1[curId] = result
//                 console.log(obj1);
//               })
//               .catch((error) => {
//                 console.log(error)
//               })
//          };


          forNavigation(key){
            this.props.navigation.navigate('TravelNoteDetail',{
                height: this.state.notesArray[key].height,
                imageSrc: this.state.notesArray[key].note,
            })
          }

  render() {
        var arr=[];
        var notesArray = this.state.notesArray;
        console.log(this.state.obj1);
        console.log(this.state.notesArray);
//        var obj1 = this.state.obj1;
        for(var i = 0 ; i < notesArray.length ; i++) {
         console.log(notesArray[i].height);
         console.log(this.state.obj1[i])
         if(i === notesArray.length-1 && this.state.obj1[i] != undefined){
          arr.push(
                      <TouchableOpacity
                      key={i}
                      style={{flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', height: 190, marginLeft: 10, marginRight: 10, marginBottom: 90}}
                      onPress={this.forNavigation.bind(this, i)}
                      >
                          <ImageBackground source={require('./Assets/MinePage/note.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1,}}>
                               <Avatar
                                  width={60}
                                  height={60}
                                  source={{
                                    uri: 'data:image/png;base64,'+this.state.obj1[i].profile_picture,
                                  }}
                                  style={{marginLeft: 10, marginRight: 10}}
                                  activeOpacity={0.7}
                                  avatarStyle={{ borderRadius: 110 / 2 }}
                                  overlayContainerStyle={{ backgroundColor: 'transparent' }}
                                />
                                <View style={{width: 240}}>
                                   <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                       <Text style={{fontSize:16, color: '#333030', fontWeight: 'bold'}}>{this.state.obj1[i].username}</Text>
                                       {
                                       notesArray[i].state === 0 ?
                                       <Image source={require('./Assets/MinePage/mingwen.png')} style={{marginLeft: 5}}></Image>
                                       :
                                       <Image source={require('./Assets/MinePage/eyes_close.png')} style={{marginLeft: 5}}></Image>
                                       }

                                   </View>
                                   <Text style={{marginHorizontal: 5, flexShrink: 1}}>

                                   <Text style={{fontFamily: 'star', fontSize: 26}} >{notesArray[i].title}</Text>

                                   </Text>
                               </View>


                          </ImageBackground>
                      </TouchableOpacity>
                  )
        } else if(this.state.obj1[i] != undefined) {
          arr.push(
                      <TouchableOpacity
                      key={i}
                      style={{flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', height: 190, marginLeft: 10, marginRight: 10}}
                      onPress={this.forNavigation.bind(this, i)}
                      >
                          <ImageBackground source={require('./Assets/MinePage/note.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1,}}>
                               <Avatar
                                  width={60}
                                  height={60}
                                  source={{
                                    uri: 'data:image/png;base64,'+this.state.obj1[i].profile_picture,
                                  }}
                                  style={{marginLeft: 10, marginRight: 10}}
                                  activeOpacity={0.7}
                                  avatarStyle={{ borderRadius: 110 / 2 }}
                                  overlayContainerStyle={{ backgroundColor: 'transparent' }}
                                />
                                <View style={{width: 240}}>
                                   <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                       <Text style={{fontSize:16, color: '#333030', fontWeight: 'bold'}}>{this.state.obj1[i].username}</Text>
                                       {
                                       notesArray[i].state === 0 ?
                                       <Image source={require('./Assets/MinePage/mingwen.png')} style={{marginLeft: 5}}></Image>
                                       :
                                       <Image source={require('./Assets/MinePage/eyes_close.png')} style={{marginLeft: 5}}></Image>
                                       }

                                   </View>
                                   <Text style={{marginHorizontal: 5, flexShrink: 1}}>

                                   <Text style={{fontFamily: 'star', fontSize: 26}} >{notesArray[i].title}</Text>

                                   </Text>
                               </View>


                          </ImageBackground>
                      </TouchableOpacity>
                  )
            } else{
                console.log("else");
            }
        }
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Header
            statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
            containerStyle={{ backgroundColor: "black" }}
            placement="left"
            backgroundImage={{ uri: 'http://cdn.sebastianj1wzyd.xyz/016%20Deep%20Blue.png' }}
            leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => this.props.navigation.navigate('Main')}>
              <Icon
                name='arrow-left'
                type='evilicon'
                size={30}
                color='#ffffff' />
            </TouchableOpacity>}
          />
          <ScrollView>

              {arr}
          </ScrollView>

        </View>
      );

  }
}

class About extends React.Component {
    componentDidMount() {
            this.animation.play();
            // Or set a specific startFrame and endFrame with:
            //            this.animation.play(30, 120);
        }

        render() {
            return (
                <View style={{ flex: 1 }}>
                    <Header
                        statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
                        containerStyle={{ backgroundColor: "black" }}
                        placement="left"
                        backgroundImage={{ uri: 'http://cdn.sebastianj1wzyd.xyz/016%20Deep%20Blue.png' }}
                        leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => this.props.navigation.navigate('Main')}>
                            <Icon
                                name='arrow-left'
                                type='evilicon'
                                size={30}
                                color='#ffffff' />
                        </TouchableOpacity>}
                    />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <LottieView
                            ref={animation => {
                                this.animation = animation;
                            }}
                            style={{ flex: 1 }}
                            source={require('./app/animations/about.json')}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 100 }}>
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Cochin' }}>
                            敬请期待
                            </Text>
                    </View>
                </View>

            )
        }
}

class ChangePass extends React.Component {
    state = {
        oldPassword: '',
        newPassword: '',
        rePassword: '',
        errMsg: null,
    };

    constructor() {
      super();
    }

    checkPass() {
        let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
        var password = this.state.newPassword
        if (password == null || password.length < 6) {
          this.setState({ errMsg: '密码长度不能小于6位' })
          return false
        } else if (!reg.test(password)) {
          this.setState({ errMsg: '密码应该为不小于6位数的数字和字母组合' })
          return false
        } else {
//          status++;
          this.setState({ errMsg: '' })
          return true
        }
      }

      checkRePass() {
        var password = this.state.newPassword
        var repassword = this.state.rePassword
        if (password != repassword) {
          this.setState({ errMsg: '两次输入的密码不一致' })
          return false
        } else {
//          status++;
          this.setState({ errMsg: '' })
          return true
        }
      }

      _handleSignUp = async () => {
          this.setState({ errMsg: '修改中...' })
          var d = await this.checkPass()
          var e = await this.checkRePass()
          if (d == false || e == false) {
            this.setState({ errMsg: '您提交的信息有误' })
            return;
          }
          let url='http://202.120.40.8:30454/users/users/changepassword?id='+uid+'&oldPassword='+this.state.oldPassword+'&newPassword='+this.state.newPassword;
          fetch(url, {
              method: 'GET',
              headers: new Headers({
                  'Authorization': 'Bearer '+token
              })
          }).then(
              (result) => {
                  if (result.ok) {
                      console.log(result)
                      result.text().then(
                          (obj) => {
                              console.log(obj);
                              if(obj === "success"){
                                this.refs.toast.show('修改成功!');
                              } else{
                                this.refs.toast.show(obj);
                              }
                          }
                      )
                  }
              }
          ).catch((error) => {
              console.log(error)
          })
        }


    render(){
    const errorMessage = this.state.errMsg ?
          <Text style={styles.errMsg}>{this.state.errMsg}</Text>
          : null
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
              <Header
                statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
                containerStyle={{ backgroundColor: "black" }}
                placement="left"
                backgroundImage={{ uri: 'http://cdn.sebastianj1wzyd.xyz/016%20Deep%20Blue.png' }}
                leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => this.props.navigation.navigate('Main')}>
                  <Icon
                    name='arrow-left'
                    type='evilicon'
                    size={30}
                    color='#ffffff' />
                </TouchableOpacity>}
              />
              <Card
                title='1. 验证身份'>
                <View style={{backgroundColor: 'rgba(255,255,255,.8)', borderRadius: 5, marginBottom: 10 }}>
                  <TextInput
                    style={{ width: 280,
                                height: 40,
                                paddingLeft: 15,
                                paddingRight: 15,
                                fontFamily: 'Roboto-Bold',
                                }}
                    value={this.state.oldPassword}
                    onChangeText={(text) => this.setState({ oldPassword: text })}
                    underlineColorAndroid='transparent'
                    placeholder='旧密码'
                    secureTextEntry={true}
                    placeholderTextColor='#999999'
                  />
                </View>
              </Card>
              <Card
                title='2. 设置新密码'>
                <View style={{backgroundColor: 'rgba(255,255,255,.8)', borderRadius: 5, marginBottom: 10 }}>
                  <TextInput
                    style={{ width: 280,
                                                    height: 40,
                                                    paddingLeft: 15,
                                                    paddingRight: 15,
                                                    fontFamily: 'Roboto-Bold',
                                                    }}
                    value={this.state.newPassword}
                    onChangeText={(text) => this.setState({ newPassword: text })}
                    underlineColorAndroid='transparent'
                    placeholder='新密码'
                    onBlur={() => this.checkPass()}
                    secureTextEntry={true}
                    placeholderTextColor='#999999'
                  />
                </View>
                <View style={{backgroundColor: 'rgba(255,255,255,.8)', borderRadius: 5}}>
                  <TextInput
                    style={{ width: 280,
                                                    height: 40,
                                                    paddingLeft: 15,
                                                    paddingRight: 15,
                                                    fontFamily: 'Roboto-Bold',
                                                    }}
                    value={this.state.rePassword}
                    onChangeText={(text) => this.setState({ rePassword: text })}
                    onBlur={() => this.checkRePass()}
                    underlineColorAndroid='transparent'
                    placeholder='确认密码'
                    secureTextEntry={true}
                    placeholderTextColor='#999999'
                  />
                </View>
              </Card>
              <View style={{marginTop: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 280}}>
                <TouchableOpacity onPress={this._handleSignUp.bind(this)}>
                  <View style={{width: 280,
                                    height: 40,
                                    backgroundColor: '#17abe3',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Roboto-Bold',
                                      fontSize: 20,
                                      fontWeight: 'bold',
                                      color: 'white'
                                      }}>确认</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {errorMessage}
              <Toast ref="toast"/>
            </View>
        )
    }
}

class Route extends React.Component {
    static navigationOptions = {
         title: '我的足迹',
         headerStyle: {
           backgroundColor: '#f4511e',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',

         },
       };

      state = {
          result: [],
          obj: [],
          attrNumber: 0,
          proNumber: 0,
      };

      constructor() {
            super();

            this.init();
          }

      onPress = () => {
          console.log("景点详情");
      }

      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }

      init(){
          console.log("this is init");
          let url = "http://202.120.40.8:30454/imgidentify/imgidentify/lmkhis/"+uid;
          fetch(url, {
                  method: 'GET',
                  headers: new Headers({
                      'Authorization': 'Bearer '+token
                  })
              }).then(
                  (result) => {
                      if (result.ok) {

                          console.log(result)

                          result.json().then(
                              (obj) => {
                                  console.log(obj);
                                  console.log(obj.length);
                                  if(obj.length === 0){
                                    return;
                                  }

                                  for(var m = 0 ; m < obj.length ; m++){
                                    obj[m].image='data:image/png;base64,'+ obj[m].image;
                                  }
                                  this.setState({
                                    obj: obj,
                                  });
                                  var data = [];
                                  var number = 0;
                                  for(var n = 0 ; n < obj.length ; n++){
                                    if(data.indexOf(obj[n].proname) === -1){
                                        data.push(obj[n].proname);
                                        number++;
                                    }
                                  }
                                  console.log("this is ProNumber");
                                  console.log(number);
                                  this.setState({
                                    proNumber: number,
                                  });
                                  number = 0;
                                  data = [];
                                  for(var n = 0 ; n < obj.length ; n++){
                                    if(data.indexOf(obj[n].result) === -1){

                                        data.push(obj[n].result);
                                        number++;
                                    }
                                  }
                                  console.log("this is AttrNumber");
                                  console.log(number);
                                  this.setState({
                                    attrNumber: number,
                                  })
                              }
                          )
                      }
                  }
              ).catch((error) => {
                  console.log(error)
          //        Alert.alert('Error')
              })
      }

      render(){
//        this.init();
        console.log(vMargin);
        console.log(hMargin);
        const { selectedIndex } = this.state;
        return (
            <ParallaxScrollView
              backgroundColor="white"
              contentBackgroundColor="white"
               stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
               parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
               backgroundSpeed={10}

              renderForeground={() => (

                  <View key="parallax-header" style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1,}}>

                     <Avatar
                        width={80}
                        height={80}
                        source={{
                          uri: 'https://www.bing.com/th?id=OIP.gD89O9FNJjTrh7a-7qc7agAAAA&pid=Api&rs=1',
                        }}
                        style={{marginLeft: 10, marginRight: 10}}
                        activeOpacity={0.7}
                        avatarStyle={{ borderRadius: 145 / 2 }}
                        overlayContainerStyle={{ backgroundColor: 'transparent' }}
                      />
                      <View style={{width: 240}}>
                         <View style={{flexDirection: 'row', alignItems: 'center'}}>
                             <Text style={{fontSize:16, color: '#333030', fontWeight: 'bold'}}>Arwen</Text>
                             <Image source={require('./Assets/MinePage/female.png')} style={{marginLeft: 5}}></Image>

                         </View>
                         <Text style={{marginHorizontal: 5, flexShrink: 1}}>

                         <Text style={{fontSize:14, color: '#333030'}}>您已经在{this.state.proNumber}个省份留下足迹, 收集了{this.state.attrNumber}个景点</Text>

                         </Text>
                     </View>
                  </View>

              )}

              renderStickyHeader={() => (
                <View key="sticky-header" style={fishStyles.stickySection}>
                  <Button
                    title="省份"
                    type='clear'
                    titleStyle={{fontWeight: 'bold', alignItems: 'center'}}
                    onPress={() => this.props.navigation.navigate('ProDetails')}
                  />
                  <Button
                    title="已收集"
                    type='clear'
                    titleStyle={{fontWeight: 'bold', alignItems: 'center'}}
                  />


                </View>
              )}
            >
              <FlatList
                        data={this.state.obj}
                        numColumns ={3} // 一行3个
                        renderItem={({item})=><SpotList url={item.image} text={item.result}/>}
              />
            </ParallaxScrollView>
          );
      }
}

class SpotList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={fishStyles.outViewS}>
          <TouchableOpacity onPress={this.onPress}>
                <ImageBackground source={{uri: this.props.url}} style={{width: 100, height: 100, justifyContent: 'flex-end'}}>
                     <Text style={{color: 'white', fontWeight: 'bold'}}>{this.props.text}</Text>
                </ImageBackground>
          </TouchableOpacity>
      </View>
    )
  }
}

class ProDetailsScreen extends React.Component {
  constructor() {
      super();
      this.state = {
        result: [],
        obj: [],
        obj1: [],
        obj2: [],
        data: [],
      }
      this._retrieveData();
    }

    _retrieveData = async () => {
      console.log("this is init");
      let url = "http://202.120.40.8:30454/imgidentify/imgidentify/lmkhis/"+uid;
      fetch(url, {
              method: 'GET',
              headers: new Headers({
                  'Authorization': 'Bearer '+token
              })
          }).then(
              (result) => {
                  if (result.ok) {

                      console.log(result)

                      result.json().then(
                          (obj) => {
//                              console.log(obj);
//                              console.log(obj.length);
                              if(obj.length === 0){
                                return;
                              }

                              for(var m = 0 ; m < obj.length ; m++){
                                obj[m].image='data:image/png;base64,'+ obj[m].image;
                              }
                              this.setState({
                                obj: obj,
                              });
                              var data = [];
                              var number = 0;
                              for(var n = 0 ; n < obj.length ; n++){
                                if(data.indexOf(obj[n].proname) === -1){
                                    data.push(obj[n].proname);
                                    number++;
                                }
                              }
//                              console.log("this is ProNumber");
//                              console.log(number);
                              this.setState({
                                data: data,
                              });
//                              console.log(this.state.data);
                          }
                      )
                  }
              }
          ).catch((error) => {
              console.log(error)
      //        Alert.alert('Error')
          })
    };

   _onInfoWindowPress = () => Alert.alert('onInfoWindowPress')

   _coordinates = [
    {
        proname: '\"天津\"',
        coor:
        {
          latitude: 39.13,
          longitude: 117.2,
        }
     },
    {
        proname: '\"北京\"',
        coor:
        {
          latitude: 39.90,
          longitude: 116.40,
        },
    },
    {
        proname: '\"西藏\"',
        coor:
        {
          latitude: 29.65,
          longitude: 91.13,
        }
    },
    {
        proname: '\"河北\"',
        coor:
        {
          latitude: 38.03,
          longitude: 114.48,
        }
     },
    {
            proname: '\"山西\"',
        coor:
        {
          latitude: 37.87,
          longitude: 112.53,
        },
    },
    {
        proname: '\"内蒙古\"',
        coor:
        {
          latitude: 40.82,
          longitude: 111.65,
        }
    },
    {
        proname: '\"辽宁\"',
        coor:
        {
          latitude: 41.8,
          longitude: 123.38,
        }
     },
    {
        proname: '\"吉林\"',
        coor:
        {
          latitude: 43.88,
          longitude: 125.35,
        },
    },
    {
        proname: '\"黑龙江\"',
        coor:
        {
          latitude: 45.75,
          longitude: 126.63,
        }
    },
    {
        proname: '\"上海\"',
        coor:
        {
          latitude: 31.22,
          longitude: 121.48,
        }
     },
    {
        proname: '\"江苏\"',
        coor:
        {
          latitude: 32.04,
          longitude: 118.78,
        },
    },
    {
        proname: '\"浙江\"',
        coor:
        {
          latitude: 30.26,
          longitude: 120.19,
        }
    },
    {
        proname: '\"安徽\"',
        coor:
        {
          latitude: 31.86,
          longitude: 117.27,
        }
     },
    {
        proname: '\"福建\"',
        coor:
        {
          latitude: 26.08,
          longitude: 119.3,
        },
    },
    {
        proname: '\"江西\"',
        coor:
        {
          latitude: 28.68,
          longitude: 115.89,
        }
    },
    {
        proname: '\"山东\"',
        coor:
        {
          latitude: 36.65,
          longitude: 117,
        }
     },
    {
        proname: '\"河南\"',
        coor:
        {
          latitude: 34.76,
          longitude: 113.65,
        },
    },
    {
        proname: '\"湖北\"',
        coor:
        {
          latitude: 30.52,
          longitude: 114.31,
        }
    },
    {
        proname: '\"湖南\"',
        coor:
        {
          latitude: 28.21,
          longitude: 113,
        }
     },
    {
        proname: '\"广东\"',
        coor:
        {
          latitude: 23.16,
          longitude: 113.23,
        },
    },
    {
        proname: '\"广西\"',
        coor:
        {
          latitude: 22.84,
          longitude: 108.33,
        }
    },
     {
         proname: '\"海南\"',
         coor:
         {
           latitude: 20.02,
           longitude: 110.35,
         }
      },
     {
         proname: '\"重庆\"',
         coor:
         {
           latitude: 29.59,
           longitude: 106.54,
         },
     },
     {
         proname: '\"四川\"',
         coor:
         {
           latitude: 30.67,
           longitude: 104.06,
         }
     },
     {
         proname: '\"贵州\"',
         coor:
         {
           latitude: 26.57,
           longitude: 106.71,
         }
      },
     {
         proname: '\"云南\"',
         coor:
         {
           latitude: 25.04,
           longitude: 102.73,
         },
     },
     {
         proname: '\"陕西\"',
         coor:
         {
           latitude: 34.27,
           longitude: 108.95,
         }
     },
     {
         proname: '\"甘肃\"',
         coor:
         {
           latitude: 36.03,
           longitude: 103.73,
         }
      },
     {
         proname: '\"青海\"',
         coor:
         {
           latitude: 36.56,
           longitude: 101.74,
         },
     },
     {
         proname: '\"宁夏\"',
         coor:
         {
           latitude: 38.47,
           longitude: 106.27,
         }
     },
     {
         proname: '\"新疆\"',
         coor:
         {
           latitude: 43.77,
           longitude: 87.68,
         }
     },
     {
         proname: '\"台湾\"',
         coor:
         {
           latitude: 24.9,
           longitude: 121.6,
         }
      },
     {
         proname: '\"香港\"',
         coor:
         {
           latitude: 22.20,
           longitude: 114.10,
         },
     },
     {
         proname: '\"澳门\"',
         coor:
         {
           latitude: 22.20,
           longitude: 113.50,
         }
     },
  ];

  init(){
        console.log("this is init");
        let url = "http://202.120.40.8:30454/imgidentify/imgidentify/lmkhis/"+id;
        fetch(url, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer '+token
                })
            }).then(
                (result) => {
                    if (result.ok) {
                        console.log(result)
                        result.json().then(
                            (obj) => {
                                console.log(obj);
                                console.log(obj.length);

                                for(var m = 0 ; m < obj.length ; m++){
                                  obj[m].image='data:image/png;base64,'+ obj[m].image;
                                }
                                this.setState({
                                  obj: obj,
                                });
                                var obj1=[];
                                var obj2=[];
                                for(var n = 0 ; n < obj.length ; n++){
                                    if(obj[n].result==='{"landmark":"八达岭熊乐园"}'){
                                        obj1.push(obj[n]);
                                    }
                                    else obj2.push(obj[n]);
                                }
                                this.setState({
                                    obj1: obj1,
                                    obj2: obj2,
                                })
                                console.log(obj1);
                                console.log(obj2);
                                console.log(obj[0].result);
                                console.log(typeof(obj[0].result));
                                console.log(obj[0].result["landmark"]);
                                console.log(obj[0].result.landmark);
  //                              console.log(obj._parts[4][1]);
                            }
                        )
                    }
                }
            ).catch((error) => {
                console.log(error)
        //        Alert.alert('Error')
            })
    }

  render() {
//  this._retrieveData();
//    this.init();
//    for(var m = 0 ; m < this._coordinates.length ; m++){
////        console.log(this._coordinates);
////        console.log(_coordinates);
//        console.log(this._coordinates[m].proname);
//        console.log(this._coordinates[m].coor);
//    }
    var markerData = [];
    for(var n = 0 ; n < this.state.data.length ; n++){
        for(var i = 0 ; i < this._coordinates.length; i++){
            if(this._coordinates[i].proname === this.state.data[n]){
                var tmp = this._coordinates[i].coor;
                markerData.push(
                    <MapView.Marker image='logo64' coordinate={tmp} key={i}>
                      <TouchableOpacity activeOpacity={0.9} onPress={this._onInfoWindowPress}>
                        <View style={fishStyles.customInfoWindow}>
                          <Text>{this.state.data[n]}</Text>
                        </View>
                      </TouchableOpacity>
                    </MapView.Marker>
                )
            }
        }
    }

    var allData = [];
    var obj = this.state.obj;
    console.log(obj);
    for(var j = 0 ; j < this.state.data.length ; j++){
        var tmp = [];
        for(var k = 0 ; k < obj.length ; k++){
            console.log(obj[k].proname);
            console.log(this.state.data[j]);
            if(obj[k].proname === this.state.data[j]){
                tmp.push(obj[k]);
            }
        }
        console.log(this.state.data[j]);
        console.log(tmp);
        allData.push(
        <View key={j}>
            <Text style={{fontWeight: 'bold', marginTop: 10}} >{this.state.data[j]}</Text>
            <FlatList
                data={tmp}
                numColumns ={3} // 一行3个
                renderItem={({item})=><SpotList url={item.image} text={item.result}/>}
            />
        </View>
        )
    }


    return (
      <ScrollView>
        <MapView
           style={{width :360, height: 300}}
           coordinate={{
             latitude: 39.90,
             longitude: 116.40,
           }}
         >
         {markerData}
         {/*
          <MapView.Marker image='logo64' coordinate={this._coordinates[1]} >
            <TouchableOpacity activeOpacity={0.9} onPress={this._onInfoWindowPress}>
              <View style={fishStyles.customInfoWindow}>
                <Text>西藏</Text>
              </View>
            </TouchableOpacity>
          </MapView.Marker>
          <MapView.Marker
          ref={ref => this.marker = ref}
          image='logo64'
          coordinate={this._coordinates[1]}
          onLoad={() => this.marker.update()}
           >
            <TouchableOpacity activeOpacity={0.9} onPress={this._onInfoWindowPress}>
              <View style={fishStyles.customInfoWindow}>
                <Text>北京市</Text>
              </View>
            </TouchableOpacity>
          </MapView.Marker>*/}
        </MapView>
        {allData}
        {/*
        <Text style={{fontWeight: 'bold', marginTop: 10}} >西藏</Text>
                 <FlatList
                           data={this.state.obj2}
                           numColumns ={3} // 一行3个
                           renderItem={({item})=><SpotList url={item.image} text={item.result}/>}
                 />
                 <Text style={{fontWeight: 'bold'}}>北京市</Text>
                          <FlatList
                                    data={this.state.obj1}
                                    numColumns ={3} // 一行3个
                                    renderItem={({item})=><SpotList url={item.image} text={item.result}/>}
                          />
        */}

      </ScrollView>
    );
  }
}

const fishStyles = StyleSheet.create({

  container: {
         flexDirection:'row', //设置主轴方向
//         flexWrap:'wrap', //超出换行
         backgroundColor: 'yellow',
         width:screenWidth,  //宽度等于屏幕宽度
         height:screenHeight },
    outViewS:{
        backgroundColor:'gray',
        alignItems:'center',   //交叉轴的对齐方式
         width:boxW,
         height:boxW,
         marginLeft:vMargin,
         marginBottom: 10,
        marginTop:hMargin    },
  engine: {
    position: 'absolute',
    right: 0,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
//    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
//    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
//    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  avatar: {
      marginBottom: 10,
      borderRadius: AVATAR_SIZE / 2
  },
  stickySection: {
      height: STICKY_HEADER_HEIGHT,
      width: 300,
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center'
    },
    stickySectionText: {
        color: 'black',
        fontSize: 20,
        margin: 10
      },
      sectionSpeakerText: {
          color: 'black',
          fontSize: 24,
          paddingVertical: 5
        },
        sectionTitleText: {
          color: 'white',
          fontSize: 18,
          paddingVertical: 5
        },
         parallaxHeader: {
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            paddingTop: 100
          },
          fixedSection: {
              position: 'absolute',
              bottom: 10,
              right: 10
            },
            fixedSectionText: {
              color: '#999',
              fontSize: 20
            },customIcon: {
                  width: 40,
                  height: 40,
                },
                customInfoWindow: {
                  backgroundColor: '#8bc34a',
                  padding: 10,
                  borderRadius: 10,
                  elevation: 4,
                  borderWidth: 2,
                  borderColor: '#689F38',
                  marginBottom: 5,
                },
                customMarker: {
                  backgroundColor: '#009688',
                  alignItems: 'center',
                  borderRadius: 5,
                  padding: 5,
                },
                markerText: {
                  color: '#fff',
                },
});



class WalletScreen extends React.Component {
      _retrieveData = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        const isVIP = await AsyncStorage.getItem('isVIP');
        const date = await AsyncStorage.getItem('date');
        if (username !== null) {
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        console.log('error');
        console.log(username);
      }
    };

    render() {
    this._retrieveData();
    let Str = '超级会员'+date;
    let display = isVIP ? Str: '您还不是VIP会员';
    let display1 = isVIP ? '续费会员' : '开通会员';
    let display2 = isVIP ? '立即续费': '立即开通';
        return (
            <View>
                <Card
                     style={{backgroundColor: '#dae9f4'}}
                 >
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10}}>
                     <Avatar
                        width={60}
                        height={60}
                        source={{
                          uri: 'http://cdn.sebastianj1wzyd.xyz/IMG_7948.JPG',
                        }}
                        activeOpacity={0.7}
                        avatarStyle={{ borderRadius: 145 / 2 }}
                        overlayContainerStyle={{ backgroundColor: 'transparent' }}
                      />
                      <View>
                         <Text style={{fontSize:20, color: '#333030'}}>{username}</Text>
                         <Text style={{fontSize:14, color: '#333030'}}>{display}</Text>
                      </View>
                      <View>
                         <Image style={{width: 60, height: 60}}></Image>
                      </View>
                  </View>
                  </Card>
             <View style={{marginTop: 20}}>
              <PricingCard
                color="#4f9deb"
                title={display1}
                price="¥12"
                info={['1个月', '所有功能特权']}
                button={{ title: display2 }}
              />
             </View>
            </View>
        )
    }
}

const onButtonPress = async () => {
        console.log("点击进行支付");
        let url='http://192.119.70.60:8080/orderinfo?price=12';
        fetch(url, {
                method: 'GET',
            }).then(
                (result) => {
                    if (result.ok) {
                        console.log(result)
                        result.text().then(
                            (obj) => {
                                console.log(obj);
                                let orderInfo = obj;
                                XPay.setAlipaySandbox(true)
                                 //支付宝支付
                                 //orderInfo是后台拼接好的支付参数
                                XPay.alipay(orderInfo,
                                res => {
                                    console.log('回调', res);
                                    const {result, memo, resultStatus} = res;
                                    if (resultStatus === '9000') {
                                        console.log('充值成功');
                                        let url = 'http://202.120.40.8:30454/users/un/improvip/'+uid;
                                         fetch(url, {
                                             method: 'GET',
                                         }).then(
                                             (result) => {
                                                 if (result.ok) {
                                                     console.log(result)
                                                     result.json().then(
                                                         (obj) => {
                                                            console.log(obj);
                                                         }
                                                     )
                                                 }
                                             }
                                         ).catch((error) => {
                                             console.log(error)
                                         })
                                    } else {
                                        console.log('充值失败')
                                    }
                                })
                            }
                        )
                    }
                }
            ).catch((error) => {
                console.log(error)
            })
}


//非会员的了解特权页面
class NotSuperMembers extends React.Component {
    constructor() {
        super();
        this.state = {
          username: '',
          isVIP: '',
          date: '',
          display: ''
        }
        this._retrieveData()
      }

      _retrieveData = async () => {
        const username = await AsyncStorage.getItem('username');
        const isVIP = await AsyncStorage.getItem('vip');
        console.log(isVIP)
        console.log(username);
        const date = await AsyncStorage.getItem('vipdate');
        this.setState({
          username: username,
          isVIP: isVIP,
          date: date
        }, () => {
          let name
          if (this.state.isVIP == 0) {
            name = '普通会员'
          }
          else {
            name = '超级会员'
          }
          console.log(name)
          this.setState({
            display: name
          })
        })
      };

      async updateInfo() {
        await AsyncStorage.setItem('vip', json.vip.toString())
        await AsyncStorage.setItem('vipdate', json.vipdate.toString())
      }

      async getInfo() {
        const userToken = await AsyncStorage.getItem('userToken', '');
        const username = await AsyncStorage.getItem('username');
        console.log(username);

        let url = 'http://202.120.40.8:30454/users/users/username/' + username;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + userToken);

        return fetch(url, {
          method: 'GET',
          headers: headers,
        })
          .then(response => {
            console.log(response)

            if (!response.ok) {
              throw new Error('Failed to Log in')
            }
            return response.json()

          })
          .then(jsons => {
            console.log(jsons.id)
            json = jsons
            console.log("更新信息")
            console.log(json.vipdate)
            this.updateInfo()
          })
          .catch((error) => {
            console.log(error)
          })
      }

      render() {
        return (
          <View>
            <Header
              statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
              containerStyle={{ backgroundColor: "black" }}
              placement="left"
              backgroundImage={{ uri: 'http://cdn.sebastianj1wzyd.xyz/016%20Deep%20Blue.png' }}
              leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => {
                this.getInfo()
                this.props.navigation.navigate('Main')
              }
              }>
                <Icon
                  name='arrow-left'
                  type='evilicon'
                  size={30}
                  color='#ffffff' />
              </TouchableOpacity>}
            />
            <ScrollView>
              <Card
                style={{ backgroundColor: '#dae9f4' }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10 }}>
                  <Avatar
                    width={60}
                    height={60}
                    source={{
                      uri: 'http://cdn.sebastianj1wzyd.xyz/IMG_7948.JPG',
                    }}
                    activeOpacity={0.7}
                    avatarStyle={{ borderRadius: 145 / 2 }}
                    overlayContainerStyle={{ backgroundColor: 'transparent' }}
                  />
                  <View>
                    <Text style={{ fontSize: 20, color: '#333030' }}>{this.state.username}</Text>
                    <Text style={{ fontSize: 14, color: '#333030' }}>您还不是VIP会员</Text>
                  </View>
                  <View>
                    <Image style={{ width: 60, height: 60 }}></Image>
                  </View>
                </View>
              </Card>
              <Card
                title='开通会员尊享更多特权'
              >
                <ScrollView horizontal={true}>

                  <View style={{ width: 140, }}>
                    <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                      <Avatar
                        width={40}
                        height={40}
                        source={require('./Assets/MinePage/yuyin.png')}
                        activeOpacity={0.7}
                        avatarStyle={{ borderRadius: 145 / 2 }}
                        overlayContainerStyle={{ backgroundColor: 'transparent' }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, color: '#f9a11b' }}>语音翻译</Text>
                      </View>

                    </View>
                    <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>多语种语音翻译</Text>
                  </View>
                  <View style={{ width: 140, }}>
                    <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                      <Avatar
                        width={40}
                        height={40}
                        source={require('./Assets/MinePage/ad.png')}
                        activeOpacity={0.7}
                        avatarStyle={{ borderRadius: 145 / 2 }}
                        overlayContainerStyle={{ backgroundColor: 'transparent' }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, color: '#f9a11b' }}>广告特权</Text>
                      </View>

                    </View>
                    <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>自动隐藏广告</Text>
                  </View>
                  <View style={{ width: 140, }}>
                    <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                      <Avatar
                        width={40}
                        height={40}
                        source={require('./Assets/MinePage/zhuanjiafudao.png')}
                        activeOpacity={0.7}
                        avatarStyle={{ borderRadius: 145 / 2 }}
                        overlayContainerStyle={{ backgroundColor: 'transparent' }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, color: '#f9a11b' }}>专家翻译</Text>
                      </View>

                    </View>
                    <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>专家翻译准确率更高</Text>
                  </View>



                </ScrollView>

              </Card>
              <View style={{ marginTop: 20, marginBottom: 70 }}>
                <PricingCard
                  color="#4f9deb"
                  title="开通会员"
                  price="¥12"
                  info={['1个月', '所有功能特权']}
                  button={{ title: '立即开通' }}
                  onButtonPress={onButtonPress}
                />
              </View>
            </ScrollView>

          </View>

        )
      }
}

//会员的的界面
class SuperMembers extends React.Component {
constructor() {
    super();
    this.state = {
      username: '',
      isVIP: '',
      date: '',
      display: ''
    }
    this._retrieveData()
  }



  _retrieveData = async () => {
    const username = await AsyncStorage.getItem('username');
    const isVIP = await AsyncStorage.getItem('vip');
    console.log(isVIP)
    const date = await AsyncStorage.getItem('vipdate');
    this.setState({
      username: username,
      isVIP: isVIP,
      date: date
    }, () => {
      let name
      if (this.state.isVIP == 0) {
        name = '普通会员'
      }
      else {
        name = '超级会员'
      }
      console.log(name)
      this.setState({
        display: name
      })
    })
  };

  async updateInfo() {
    await AsyncStorage.setItem('vip', json.vip.toString())
    await AsyncStorage.setItem('vipdate', json.vipdate.toString())
  }

  async getInfo() {
    const userToken = await AsyncStorage.getItem('userToken', '');
    const username = await AsyncStorage.getItem('username');

    let url = 'http://202.120.40.8:30454/users/users/username/' + username;
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + userToken);


    return fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        console.log(response)

        if (!response.ok) {
          throw new Error('Failed to Log in')
        }
        return response.json()

      })
      .then(jsons => {
        console.log(jsons.id)
        json = jsons
        console.log("更新信息")
        console.log(json.vipdate)
        this.updateInfo()
        // return
        // return json.access_token
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
          containerStyle={{ backgroundColor: "black" }}
          placement="left"
          backgroundImage={{ uri: 'http://cdn.sebastianj1wzyd.xyz/016%20Deep%20Blue.png' }}
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
          leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => {
            this.getInfo()
            this.props.navigation.navigate('Main')
          }
          }>
            <Icon
              name='arrow-left'
              type='evilicon'
              size={30}
              color='#ffffff' />
          </TouchableOpacity>}
        // centerComponent={<MyCustomCenterComponent />}
        // rightComponent={<TouchableOpacity onPress={() => this.props.navigation.navigate('GPS')}>
        //   <Icon
        //     name='location'
        //     type='evilicon'
        //     size={30}
        //     color='#ffffff' />
        // </TouchableOpacity>}
        />
        <ScrollView>
          <Card
            style={{ backgroundColor: '#dae9f4' }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10 }}>
              <Avatar
                width={60}
                height={60}
                source={{
                  uri: 'http://cdn.sebastianj1wzyd.xyz/IMG_7948.JPG',
                }}
                activeOpacity={0.7}
                avatarStyle={{ borderRadius: 145 / 2 }}
                overlayContainerStyle={{ backgroundColor: 'transparent' }}
              />
              <View>
                <Text style={{ fontSize: 20, color: '#333030' }}>{this.state.username}</Text>
                <Text style={{ fontSize: 14, color: '#333030' }}>超级会员：{this.state.date}</Text>
              </View>
              <View>
                <Image source={require('./Assets/MinePage/QQ20190726-0.jpg')} style={{ width: 60, height: 60 }}></Image>
              </View>
            </View>
          </Card>
          <Card
            title='我的会员特权'
          >
            <ScrollView horizontal={true}>
              <View style={{ width: 140, }}>
                <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                  <Avatar
                    width={40}
                    height={40}
                    source={require('./Assets/MinePage/landmarksphinx.png')}
                    activeOpacity={0.7}
                    avatarStyle={{ borderRadius: 145 / 2 }}
                    overlayContainerStyle={{ backgroundColor: 'transparent' }}
                  />
                  <View>
                    <Text style={{ fontSize: 16, color: '#f9a11b' }}>景点识别</Text>
                  </View>

                </View>
                <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>千万景点快速识别</Text>
              </View>

              <View style={{ width: 140, }}>
                <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                  <Avatar
                    width={40}
                    height={40}
                    source={require('./Assets/MinePage/yuyin.png')}
                    activeOpacity={0.7}
                    avatarStyle={{ borderRadius: 145 / 2 }}
                    overlayContainerStyle={{ backgroundColor: 'transparent' }}
                  />
                  <View>
                    <Text style={{ fontSize: 16, color: '#f9a11b' }}>语音翻译</Text>
                  </View>

                </View>
                <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>多语种语音翻译</Text>
              </View>
              <View style={{ width: 140, }}>
                <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                  <Avatar
                    width={40}
                    height={40}
                    source={require('./Assets/MinePage/weibiaoti556.png')}
                    activeOpacity={0.7}
                    avatarStyle={{ borderRadius: 145 / 2 }}
                    overlayContainerStyle={{ backgroundColor: 'transparent' }}
                  />
                  <View>
                    <Text style={{ fontSize: 16, color: '#f9a11b' }}>文字翻译</Text>
                  </View>

                </View>
                <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>上传图片自动翻译</Text>
              </View>
              <View style={{ width: 140, }}>
                <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                  <Avatar
                    width={40}
                    height={40}
                    source={require('./Assets/MinePage/ad.png')}
                    activeOpacity={0.7}
                    avatarStyle={{ borderRadius: 145 / 2 }}
                    overlayContainerStyle={{ backgroundColor: 'transparent' }}
                  />
                  <View>
                    <Text style={{ fontSize: 16, color: '#f9a11b' }}>广告特权</Text>
                  </View>

                </View>
                <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>自动隐藏广告</Text>
              </View>
              <View style={{ width: 140, }}>
                <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                  <Avatar
                    width={40}
                    height={40}
                    source={require('./Assets/MinePage/zhuanjiafudao.png')}
                    activeOpacity={0.7}
                    avatarStyle={{ borderRadius: 145 / 2 }}
                    overlayContainerStyle={{ backgroundColor: 'transparent' }}
                  />
                  <View>
                    <Text style={{ fontSize: 16, color: '#f9a11b' }}>专家翻译</Text>
                  </View>

                </View>
                <Text style={{ fontSize: 12, color: '#333030', marginLeft: 5, marginTop: 5 }}>专家翻译准确率更高</Text>
              </View>
            </ScrollView>

          </Card>
          <View style={{ marginTop: 20, marginBottom: 70 }}>
            <PricingCard
              color="#4f9deb"
              title="续费会员"
              price="¥12"
              info={['1个月', '所有功能特权']}
              button={{ title: '立即续费' }}
              onButtonPress={onButtonPress}
            />
          </View>
        </ScrollView>
      </View>


    )
  }
}

//我的游记 写死的
class Room extends React.Component {
    constructor() {
        super();
        this.state = {
          index: 0,
          notesArray: [],
        }

        let url='http://202.120.40.8:30454/users/travelnote/uid/'+uid;
        fetch(url, {
            method: 'GET',
        }).then(
            (result) => {
                if (result.ok) {
                    console.log(result)
                    result.json().then(
                        (obj) => {
                            console.log(obj);
                            this.setState({
                                notesArray: obj,
                            })
                            console.log(this.state.notesArray[0].height);
                        }
                    )
                }
            }
        ).catch((error) => {
            console.log(error)
        })

      }

      forNavigation(key){
        this.props.navigation.navigate('TravelNoteDetail',{
            height: this.state.notesArray[key].height,
            imageSrc: this.state.notesArray[key].note,
        })
      }

      render() {
      var arr=[];
      var notesArray = this.state.notesArray;
      for(var i = 0 ; i < notesArray.length ; i++) {
       console.log(notesArray[i].height);
       if(i === notesArray.length-1){
        arr.push(
                    <TouchableOpacity
                    key={i}
                    style={{flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', height: 190, marginLeft: 10, marginRight: 10, marginBottom: 90}}
                    onPress={this.forNavigation.bind(this, i)}
                    >
                        <ImageBackground source={require('./Assets/MinePage/note.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1,}}>
                             <Avatar
                                width={60}
                                height={60}
                                source={{
                                  uri: 'http://cdn.sebastianj1wzyd.xyz/IMG_7948.JPG',
                                }}
                                style={{marginLeft: 10, marginRight: 10}}
                                activeOpacity={0.7}
                                avatarStyle={{ borderRadius: 110 / 2 }}
                                overlayContainerStyle={{ backgroundColor: 'transparent' }}
                              />
                              <View style={{width: 240}}>
                                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                     <Text style={{fontSize:16, color: '#333030', fontWeight: 'bold'}}>{username}</Text>
                                     {
                                     notesArray[i].state === 0 ?
                                     <Image source={require('./Assets/MinePage/mingwen.png')} style={{marginLeft: 5}}></Image>
                                     :
                                     <Image source={require('./Assets/MinePage/eyes_close.png')} style={{marginLeft: 5}}></Image>
                                     }

                                 </View>
                                 <Text style={{marginHorizontal: 5, flexShrink: 1}}>

                                 <Text style={{fontFamily: 'star', fontSize: 26}} >{notesArray[i].title}</Text>

                                 </Text>
                             </View>


                        </ImageBackground>
                    </TouchableOpacity>
                )
      } else {
        arr.push(
                    <TouchableOpacity
                    key={i}
                    style={{flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', height: 190, marginLeft: 10, marginRight: 10}}
                    onPress={this.forNavigation.bind(this, i)}
                    >
                        <ImageBackground source={require('./Assets/MinePage/note.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1,}}>
                             <Avatar
                                width={60}
                                height={60}
                                source={{
                                  uri: 'http://cdn.sebastianj1wzyd.xyz/IMG_7948.JPG',
                                }}
                                style={{marginLeft: 10, marginRight: 10}}
                                activeOpacity={0.7}
                                avatarStyle={{ borderRadius: 110 / 2 }}
                                overlayContainerStyle={{ backgroundColor: 'transparent' }}
                              />
                              <View style={{width: 240}}>
                                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                     <Text style={{fontSize:16, color: '#333030', fontWeight: 'bold'}}>{username}</Text>
                                     {
                                     notesArray[i].state === 0 ?
                                     <Image source={require('./Assets/MinePage/mingwen.png')} style={{marginLeft: 5}}></Image>
                                     :
                                     <Image source={require('./Assets/MinePage/eyes_close.png')} style={{marginLeft: 5}}></Image>
                                     }

                                 </View>
                                 <Text style={{marginHorizontal: 5, flexShrink: 1}}>

                                 <Text style={{fontFamily: 'star', fontSize: 26}} >{notesArray[i].title}</Text>

                                 </Text>
                             </View>


                        </ImageBackground>
                    </TouchableOpacity>
                )
          }

      }
        return (
          <View>
            <Header
              statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
              containerStyle={{ backgroundColor: "black" }}
              placement="left"
              backgroundImage={{ uri: 'http://cdn.sebastianj1wzyd.xyz/016%20Deep%20Blue.png' }}
              leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => this.props.navigation.navigate('Main')}>
                <Icon
                  name='arrow-left'
                  type='evilicon'
                  size={30}
                  color='#ffffff' />
              </TouchableOpacity>}
            />
            <ScrollView>

                {arr}
            </ScrollView>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => this.props.navigation.navigate('TravelNoteEdit')}
                  style={styles.TouchableOpacityStyle1}>
                  <Image
                    source={require('./Assets/MinePage/note.png')}
                    style={travelStyles.FloatingButtonStyle}
                  />
                </TouchableOpacity>
          </View>
        )
      }
}

class TravelNoteDetail extends React.Component {
    render() {
        const { navigation } = this.props;
        const height = navigation.getParam('height', );
        const imageSrc = navigation.getParam('imageSrc', );
        console.log(height);
        console.log(imageSrc);

        return(
        <ScrollView style={{width: 360}}>
            <Image
                source={{uri: imageSrc}}
                style={{height: height, width: 360, marginTop: 50}}
            ></Image>
        </ScrollView>
        )
    }
}

class TravelNoteEdit extends React.Component {
    state = {
        avatarSource: [[],[],[],[],[],[],[],[],[],[]], //图片
        imgSource: [[],[],[],[],[],[],[],[],[],[]],
        text: '',
        number: 5,  //纸张数
        textArray: [],  //文本
        tmpText: '',
        isEdit: true,
        currentKey: 0,
        chooseTemplate: [1,2,3,2,1], //模版样式
        slideAnimationDialog: false,     //选择模版样式
        scaleAnimationDialog: false,    //提示最多选择十张纸
        source: null,
        snapShot: null,
        isSnap: false,
        refreshing: false,
        overflowFix: false,
        selfVisible: 0,
        defaultAnimationDialog: false, //控制是否仅自己可见
        isPressed: false,
        height: 0,
      };

      constructor(props) {
        super(props);

        //拿之前保存的草稿
        let url = 'http://202.120.40.8:30454/users/note/find?uid='+uid;
        fetch(url, {
                    method: 'GET',
                }).then(
                    (result) => {
                        if (result.ok) {
                            console.log(result)
                            result.json().then(
                                (obj) => {
                                    console.log(obj);
                                    console.log(obj._parts[0]); //imgset
                                    console.log(obj._parts[1]); //text
                                    console.log(obj._parts[2]); //template
                                    console.log(obj._parts[3]); //pagenumber
                                    console.log(obj._parts[4]); //title
//                                    console.log(obj._parts[5]);
                                    console.log(obj._parts[4][1]);

                                    this.setState({
                                        avatarSource: obj._parts[0][1],
                                        imgSource: obj._parts[0][1],
                                        textArray: obj._parts[1][1],
                                        chooseTemplate: obj._parts[2][1],
                                        number: obj._parts[3][1],
                                        text: obj._parts[4][1],
                                    })
                                }
                            )
                        }
                    }
                ).catch((error) => {
                    console.log(error)
                })


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
    //        let source = {uri: response.uri};
    //        console.log(response.uri);
    //        console.log(response.data);

            // You can also display the image using data:
             let source = { uri: 'data:image/jpeg;base64,' + response.data };
             var avatarSource = this.state.avatarSource;
             var imgSource = this.state.imgSource;
             avatarSource[key][index] = source;
             imgSource[key][index] = response.data;

            this.setState({
              avatarSource: avatarSource,
              imgSource: imgSource,
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
        var imgSource = this.state.imgSource;
        textArray.splice(key, 1);
        avatarSource.splice(key, 1);
        chooseTemplate.splice(key, 1);
        imgSource.splice(key, 1);
        this.setState({
            textArray: textArray,
            avatarSource: avatarSource,
            number: number,
            chooseTemplate: chooseTemplate,
            imgSource: imgSource,
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

    //保存 和发布应当区分开来
      saveNotes() {
        var number = this.state.number;
        var textArray = this.state.textArray;
        var imgSource = this.state.imgSource;
        var chooseTemplate = this.state.chooseTemplate;
        var title = this.state.text;


        let url = "http://202.120.40.8:30454/users/note/body/"+uid;
//        let url = "http://202.120.40.8:30454/users/note/body/3";

        var formData = new FormData();
        formData.append("imgSet", imgSource);
    //    formData.append("pictures", "emm-emm");
        formData.append("text", textArray);
    //    formData.append("text", "emm,emm");
        formData.append("template", chooseTemplate);
    //    formData.append("template", "1,2");
        formData.append("pagenumber", number);
    //    formData.append("pagenumber", 2);
    //    formData.append("uid", uid);
        formData.append("title", title);
    //    formData.append("state", 1);

        console.log(formData);
        console.log(JSON.stringify(formData));
    //    return;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
    //        body: formData
        }).then(
            (result) => {
                if (result.ok) {
                    console.log(result)
                    result.json().then(
                        (obj) => {
                            console.log(obj);
                            console.log(obj._parts[0]);
                            console.log(obj._parts[4][1]);
                        }
                    )
                }
            }
        ).catch((error) => {
            console.log(error)
    //        Alert.alert('Error')
        })
      }

      Release(value) {
        this.setState({
           defaultAnimationDialog: false,
           selfVisible: value,
           isSnap: true,
           overflowFix: true,
        });

        this.timer = setTimeout(() => {
                  console.log("把一个定时器的引用挂在this上");
                  captureRef(this.refs.fullRef, {
                         format: "jpg",
                         quality: 1,
                         result: "base64",
//                         result: "tmpfile",
                         snapshotContentContainer: true
                       })
                       .then(
                         uri => {console.log("Image saved to", uri);
                         var base = 'data:image/png;base64,'+uri;
//                         var base = uri;
                         this.setState({
                             snapShot: base,
                             isSnap: false,
                             overflowFix: false,
                         })

    //                      while(this.state.defaultAnimationDialog){
    //                                 console.log("spinning");
    //                      };

                             var imageSource = this.state.snapShot;
                             var selfVisible = this.state.selfVisible;
                             var title = this.state.text;
                             console.log("selfVisible");
                             console.log(selfVisible);
                             console.log(imageSource);
                             console.log(title);
                             let url = 'http://202.120.40.8:30455/travelnote/save';

                             var formData = new FormData();
//                             formData.append("note", imageSource);
                             formData.append("title", title);
                             formData.append("state", selfVisible);
                             formData.append("uid", uid);
                             formData.append("height", this.state.height);
                             formData.append("note", imageSource);
//                             formData.append('note',{uri: imageSource, type:'image/jpeg'})


                             console.log(formData);
//                             console.log(JSON.stringify(formData));

                             fetch(url, {
                                 method: 'POST',
                                 body: formData
                             }).then(
                                 (result) => {
                                     if (result.ok) {
                                         console.log(result)
                                         this.refs.toast.show('发布成功');
                                         result.json().then(
                                             (obj) => {
                                                 console.log(obj);
//                                                 this.refs.toast.show('请输入标题');
                                             }
                                         )
                                     }
                                 }
                             ).catch((error) => {
                                this.refs.toast.show('发布失败');
                                 console.log(error)
                         //        Alert.alert('Error')
                             })
                         },
                         error => {
                         console.error("Oops, snapshot failed", error);
                         this.setState({
                          isSnap: false,
                          overflowFix: false,
                         })
                         return;
                         }
                       );
            }, 5000);
        }

        onReleasePressed(){
            if(this.state.text === ''){
                this.refs.toast.show('请输入标题');
            } else {
                var chooseTemplate = this.state.chooseTemplate;
                var height=100;
                for(let i = 0 ; i < chooseTemplate.length ; i++){
                    if(chooseTemplate[i] === 1) {
                        height+=230;
                    } else if(chooseTemplate[i] === 2) {
                        height+=390;
                    } else {
                        height+=430;
                    }
                }
                console.log(height);

                this.setState({
                    defaultAnimationDialog: true,
                    height: height,
                })
            }


        }

//        render() {
//            return(
//            <View style={{
//                                justifyContent: 'center',
//                                alignItems: 'center',
//                                backgroundColor: '#F5FCFF',
//                                height: 100,}}>
//                              <ImageBackground source={require('./Assets/MinePage/TravelAssets/header.jpg')} style={{width: '100%', height: '100%', alignItems: 'center', }}>
//                                    <TextInput
//                                      style={{height: 100, fontSize: 26, fontFamily: 'star'}}
//                                      onChangeText={(text) => this.setState({text})}
//                                      placeholder = "点击输入标题"
//                                      value={this.state.text}
//                                      editable={this.state.isEdit}
//                                    />
//                                </ImageBackground>
//            </View>
//            )
//        }

      render() {
         console.log(this.state.chooseTemplate.length);
         console.log(this.state.chooseTemplate);
         var arr = [];
    //     console.log("this.state.avatarSource[0]");
         console.log(this.state.avatarSource);
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
                     <ImageBackground source={require('./Assets/MinePage/TravelAssets/body1.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row'}}>

                          {this.state.isEdit?
                          <TouchableOpacity onPress={this.onPressMinus.bind(this, i)} style={{width: 30, height: 30, marginTop: 0}}>
                             <Image
                               style={travelStyles.button}
                               source={require('./Assets/MinePage/TravelAssets/minus.png')}
                             />
                           </TouchableOpacity> :
                           <TouchableOpacity onPress={()=> console.log('hi')} style={{width: 30, height: 30, marginTop: 0}}>

                           </TouchableOpacity>
                           }

                          <TouchableOpacity onPress={this.state.isEdit?this.selectPhotoTapped.bind(this, i, 0):console.log("hello")} style={{width: 180, height:180, }}>
                               <View
                                 style={[travelStyles.avatar, travelStyles.avatarContainer, {marginBottom: 15}]}>
                                 {this.state.imgSource[i][0] === undefined ? (
                                   <Text>选择照片上传</Text>
                                 ) : (
                                   <Image style={travelStyles.avatar} source={{uri: 'data:image/jpeg;base64,'+this.state.imgSource[i][0]}} />
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
                            editable={this.state.isEdit}
                          />
                     </ImageBackground>
                 </View>
               );
              }
              if(chooseTemplate[i] === 2){
               arr.push(
                 <View key={i} style={{flex: 1, height:390}}>
                     <ImageBackground source={require('./Assets/MinePage/TravelAssets/body2.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row'}}>

                          {this.state.isEdit?
                          <TouchableOpacity onPress={this.onPressMinus.bind(this, i)} style={{width: 30, height: 30, marginTop: 0}}>
                             <Image
                               style={travelStyles.button}
                               source={require('./Assets/MinePage/TravelAssets/minus.png')}
                             />
                           </TouchableOpacity> :
                           <TouchableOpacity onPress={()=> console.log('hi')} style={{width: 30, height: 30, marginTop: 0}}>

                                                  </TouchableOpacity>
                           }
                          <TextInput
                            key={i}
                            style={{height: 200, borderColor: 'gray', borderWidth: 1, width: 140, marginLeft: 10, marginTop: 150, fontFamily: 'star'}}
                            onChange={(event) => this.onChangeHandler(event.nativeEvent.text)}
                            onFocus={this.onFocusHandler.bind(this, i)}
                            //  onBlur={this.onBlurHandler.bind(this, i)}
                            value={this.state.textArray[i]}
                            multiline={true}
                            numberOfLines={9}
                            editable={this.state.isEdit}
                          />
                          <View style={{flexDirection: 'column', marginLeft: 10}}>
                              <TouchableOpacity onPress={this.state.isEdit?this.selectPhotoTapped.bind(this, i, 0):console.log("hello")} style={{width: 160, height:180, }}>
                                   <View
                                     style={[travelStyles.avatar, travelStyles.avatarContainer, {marginBottom: 15}]}>
                                     {this.state.imgSource[i][0] === undefined ? (
                                       <Text>选择照片上传</Text>
                                     ) : (
                                       <Image style={travelStyles.avatar} source={{uri: 'data:image/jpeg;base64,'+this.state.imgSource[i][0]}} />
                                     )}
                                   </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={this.state.isEdit?this.selectPhotoTapped.bind(this, i, 1):console.log("hello")} style={{width: 160, height:180, }}>
                                   <View
                                     style={[travelStyles.avatar, travelStyles.avatarContainer, {marginBottom: 15}]}>
                                     {this.state.imgSource[i][1] === undefined ? (
                                       <Text>选择照片上传</Text>
                                     ) : (
                                       <Image style={travelStyles.avatar} source={{uri: 'data:image/jpeg;base64,'+this.state.imgSource[i][1]}} />
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
                     <ImageBackground source={require('./Assets/MinePage/TravelAssets/body3.jpg')} style={{width: '100%', height: '100%', flexDirection: 'row'}}>

                          {this.state.isEdit?
                          <TouchableOpacity onPress={this.onPressMinus.bind(this, i)} style={{width: 30, height: 30, marginTop: 0}}>
                             <Image
                               style={travelStyles.button}
                               source={require('./Assets/MinePage/TravelAssets/minus.png')}
                             />
                           </TouchableOpacity> :
                           <TouchableOpacity onPress={()=> console.log('hi')} style={{width: 30, height: 30, marginTop: 0}}>

                                                  </TouchableOpacity>
                           }
                          <View style={{flexDirection: 'column', marginTop: 30}}>
                              <TouchableOpacity onPress={this.state.isEdit?this.selectPhotoTapped.bind(this, i, 0):console.log("hello")} style={{width: 160, height:180, }}>
                                   <View
                                     style={[travelStyles.avatar, travelStyles.avatarContainer, {marginBottom: 15}]}>
                                     {this.state.imgSource[i][0] === undefined ? (
                                       <Text>选择照片上传</Text>
                                     ) : (
                                       <Image style={travelStyles.avatar} source={{uri: 'data:image/jpeg;base64,'+this.state.imgSource[i][0]}} />
                                     )}
                                   </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={this.state.isEdit?this.selectPhotoTapped.bind(this, i, 1):console.log("hello")} style={{width: 160, height:180, }}>
                                   <View
                                     style={[travelStyles.avatar, travelStyles.avatarContainer, {marginBottom: 15}]}>
                                     {this.state.imgSource[i][1] === undefined ? (
                                       <Text>选择照片上传</Text>
                                     ) : (
                                       <Image style={travelStyles.avatar} source={{uri: 'data:image/jpeg;base64,'+this.state.imgSource[i][1]}} />
                                     )}
                                   </View>
                              </TouchableOpacity>
                          </View>
                          <View style={{flexDirection: 'column', marginTop: 30}}>
                                <TouchableOpacity onPress={this.state.isEdit?this.selectPhotoTapped.bind(this, i, 2):console.log("hello")} style={{width: 160, height:180, }}>
                                     <View
                                       style={[travelStyles.avatar, travelStyles.avatarContainer, {marginBottom: 15}]}>
                                       {this.state.imgSource[i][2] === undefined ? (
                                         <Text>选择照片上传</Text>
                                       ) : (
                                         <Image style={travelStyles.avatar} source={{uri: 'data:image/jpeg;base64,'+this.state.imgSource[i][2]}} />
                                       )}
                                     </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.state.isEdit?this.selectPhotoTapped.bind(this, i, 3):console.log("hello")} style={{width: 160, height:180, }}>
                                     <View
                                       style={[travelStyles.avatar, travelStyles.avatarContainer, {marginBottom: 15}]}>
                                       {this.state.imgSource[i][3] === undefined ? (
                                         <Text>选择照片上传</Text>
                                       ) : (
                                         <Image style={travelStyles.avatar} source={{uri: 'data:image/jpeg;base64,'+this.state.imgSource[i][3]}} />
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
            {this.state.isEdit?
                    <NavBar>
                      <NavTitle>
                        {"编辑游记"}
                      </NavTitle>
                      <NavGroup>
                        <NavButton onPress={() =>
                          {
                            this.setState({
                              isEdit: false,
                            });
                          }}>
                          <NavButtonText>
                            {"预览"}
                          </NavButtonText>
                        </NavButton>

                      </NavGroup>
                    </NavBar>:
                    <NavBar>
                            <NavButton
                              style={{marginLeft: 0}}
                              onPress={() =>
                             {
                               this.setState({
                                 isEdit: true,
                               });
                             }}>
                              <Image style={styles.width}

                                source={require('./Assets/MinePage/TravelAssets/return.png')}
                              />
                            </NavButton>
                            <NavTitle>
                              {"预览"}
                            </NavTitle>
                            <NavButton onPress={this.onReleasePressed.bind(this)}>
                              <NavButtonText>
                                {"发布"}
                              </NavButtonText>
                            </NavButton>
                          </NavBar>
                }

        <ScrollView
        ref="fullRef"
        style={{ overflow: this.state.overflowFix ? 'visible' : 'scroll' }}
        >

            <View style={travelStyles.header}>
                        <ImageBackground source={require('./Assets/MinePage/TravelAssets/header.jpg')} style={{width: '100%', height: '100%', alignItems: 'center', backgroundColor:'transparent'}}>
                            <TextInput
                              style={{height: 100, fontSize: 26, fontFamily: 'star'}}
                              onChangeText={(text) => this.setState({text})}
                              placeholder = "点击输入标题"
                              value={this.state.text}
                              editable={this.state.isEdit}
                            />
                        </ImageBackground>
            </View>

            {arr}

            {this.state.isSnap?null:
             <TouchableOpacity onPress={()=> console.log('hi')} style={{width: 360, height: 50, marginTop: 0}}>

             </TouchableOpacity>}

         </ScrollView>
              {this.state.isEdit?
              <View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    this.setState({
                      slideAnimationDialog: true,
                    });
                  }}
                  style={travelStyles.TouchableOpacityStyle}>
                  <Image
                    source={require('./Assets/MinePage/TravelAssets/float-add-icon.png')}
                    style={travelStyles.FloatingButtonStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.saveNotes.bind(this)}
                  style={travelStyles.TouchableOpacityStyle1}>
                  <Image
                    source={require('./Assets/MinePage/TravelAssets/save.png')}
                    style={travelStyles.FloatingButtonStyle}
                  />
                </TouchableOpacity>
                </View>
                :null}


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

                    source={require('./Assets/MinePage/TravelAssets/module1.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressPlus.bind(this, 2)} >
                  <Image

                    source={require('./Assets/MinePage/TravelAssets/module2.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressPlus.bind(this, 3)} >
                  <Image

                    source={require('./Assets/MinePage/TravelAssets/module3.png')}
                  />
                </TouchableOpacity>
              </View>
              :<DialogContent>
                 <Text style={{fontSize: 26}}>最多选择十张纸哦</Text>
               </DialogContent>
             }
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
            <Dialog
                      width={0.9}
                      visible={this.state.defaultAnimationDialog}
                      rounded
                      actionsBordered
                      // actionContainerStyle={{
                      //   height: 100,
                      //   flexDirection: 'column',
                      // }}
                      dialogTitle={
                        <DialogTitle
                          title="谁能看见"
                          style={{
                            backgroundColor: '#F7F7F8',
                          }}
                          hasTitleBar={false}
                          align="left"
                        />
                      }
                      footer={
                        <DialogFooter>
                          <DialogButton
                            text="所有人"
                            bordered
                            onPress={this.Release.bind(this, 0)}
                            key="button-1"
                          />
                          <DialogButton
                            text="私密模式"
                            bordered
                            onPress={this.Release.bind(this, 1)}
                            key="button-2"
                          />
                        </DialogFooter>
                      }
                    >
                             <DialogContent
                                style={{
                                  backgroundColor: '#F7F7F8',
                                }}
                              >
                                <Text>请选择这篇游记的可见状态</Text>

                              </DialogContent>
              </Dialog>
              <Toast ref="toast"/>
         </View>
        );
      }
}

const travelStyles = StyleSheet.create({
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
    bottom: 90,
  },
  TouchableOpacityStyle1: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 110,
      bottom: 90,
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

class MainScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      isVIP: '',
      date: '',
      display: '',
    }
    this._retrieveData()
  }

  _retrieveData = async () => {
    const username = await AsyncStorage.getItem('username');
    const isVIP = await AsyncStorage.getItem('vip');
    const uid = await AsyncStorage.getItem('uid');
    console.log(isVIP)
    const date = await AsyncStorage.getItem('vipdate');
    this.setState({
      username: username,
      isVIP: isVIP,
      date: date,
      uid: uid,
    }, () => {
      let name
      if(this.state.isVIP == 0){
        name = '普通会员'
      }
      else{
        name = '超级会员'
      }
      console.log(name)
      this.setState({
        display: name
      })
    })
  };

  changePhoto(){
     const options = {
       quality: 1.0,
       maxWidth: 500,
       maxHeight: 500,
       storageOptions: {
         skipBackup: true,
       },
     };

     var photo = '';

     ImagePicker.showImagePicker(options, response => {
       console.log('Response = ', response);

       if (response.didCancel) {
         console.log('User cancelled photo picker');
       } else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
       } else if (response.customButton) {
         console.log('User tapped custom button: ', response.customButton);
       } else {
          let source = { uri: 'data:image/jpeg;base64,' + response.data };
          photo = response.data;
          let url='http://202.120.40.8:30454/users/users/changephoto?id='+uid+'&photo='+photo;
          console.log(url);
          fetch(url, {
              method: 'GET',
              headers: new Headers({
                  'Authorization': 'Bearer '+token
              })
          }).then(
              (result) => {
                  if (result.ok) {
                      console.log(result)
                      result.json().then(
                          (obj) => {
                              console.log(obj);
                          }
                      )
                  }
              }
          ).catch((error) => {
              console.log(error)
          })
       }
     });
  }

  render() {
    console.log(this.state.isVIP)
    console.log(this.state.display)
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
          containerStyle={{ backgroundColor: "black" }}
          placement="left"
          backgroundImage={{ uri: 'http://cdn.sebastianj1wzyd.xyz/016%20Deep%20Blue.png' }}
          leftComponent={<TouchableOpacity style={{ marginRight: 0 }} onPress={() => this.props.navigation.navigate('Main')}>
            <Icon
              name='arrow-left'
              type='evilicon'
              size={30}
              color='#ffffff' />
          </TouchableOpacity>}
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              size="large"

              source={{
                uri:
                  'http://cdn.sebastianj1wzyd.xyz/IMG_7948.JPG',
              }}
              showEditButton
              onPress={this.changePhoto.bind(this)}
              activeOpacity={0.7}
              avatarStyle={{ borderRadius: 145 / 2 }}
              overlayContainerStyle={{ backgroundColor: 'transparent' }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                marginTop: 10,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: 'bold',
                  fontSize: 25,
                  color: 'rgba(98,93,144,1)',
                  marginLeft: -15,
                }}
              >
                {this.state.username}
              </Text>
              <Text
                style={{
                  fontFamily: 'bold',
                  fontSize: 15,
                  color: 'rgba(98,93,144,1)',
                  marginLeft: -15,
                  marginTop: 10,
                }}
              >
                {this.state.display}
              </Text>
            </View>
          </View>
        </View>


        <ScrollView contentContainerStyle={styles.scrollStyle}
          showsVerticalScrollIndicator={false}
          contentInset={{ top: -200 }}
          contentOffset={{ y: 200 }}
        >
          <View style={styles.sectionStyle}>
            <TouchableOpacity onPress={() => (this.state.isVIP == 1) ? this.props.navigation.navigate('SuperMembers') : this.props.navigation.navigate('NotSuperMembers')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('./Assets/MinePage/vip.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>了解会员特权</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Route')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('./Assets/MinePage/footprint128.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>我的足迹</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TravelNoteEdit')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('./Assets/MinePage/noteIcon.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>我的游记</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('./Assets/MinePage/room.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>好友动态</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('./Assets/MinePage/about.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>使用说明</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePass')}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('./Assets/MinePage/lock.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>修改密码</Text>
                </View>

              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this._signOutAsync()}>
              <View style={cellStyle.containerStyle}>
                <View style={cellStyle.leftViewStyle}>

                  <Image source={require('./Assets/MinePage/out.png')} style={cellStyle.leftIconStyle}></Image>
                  <Text style={styles.leftTitleStyle}>退出登录</Text>
                </View>

              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.setItem('userToken', '');
    this.props.navigation.navigate('Auth');
  };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    icon: {
        width: 24,
        height: 24,
    },
    scrollStyle: {
        marginTop: 0,
    },
    sectionStyle: {
        marginTop: 20,
    },
    TouchableOpacityStyle1: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 100,
    },
});

const cellStyle = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,.3)',
        height: 44,
        width: screenWidth,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    leftIconStyle: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    leftTitleStyle: {
        color: '#3E4348',
        fontSize: 15
    },
    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightIconStyle: {
        width: 24,
        height: 24,
    },
    newStyle: {
        // width: 30,
        // height: 24,
        borderRadius: 18,
        backgroundColor: 'red',
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 1,
        paddingBottom: 1,
    }
});

const RootStack = createStackNavigator(
  {
    Main: MainScreen,
    Details: DetailsScreen,
    Room: Room,
    SuperMembers: SuperMembers,
    NotSuperMembers: NotSuperMembers,
    Wallet: WalletScreen,
    Route: Route,
    About: About,
    TravelNoteDetail: TravelNoteDetail,
    TravelNoteEdit: TravelNoteEdit,
    ProDetails: ProDetailsScreen,
    ChangePass: ChangePass,
  },
  {
    initialRouteName: 'Main',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
