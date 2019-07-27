/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { Avatar, Divider, Card, ListItem, Button, Icon, Rating, PricingCard } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LottieView from 'lottie-react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

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

//表示是否是vip的变量
var isVIP = 1;
var username = 'Arwen';
var date = '2019-10-11';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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
         <View style={{flex:1}}>
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                             <LottieView
                             ref={animation => {
                               this.animation = animation;
                             }}
                             style={{flex: 1}}
                             source={require('./app/animations/about')}
                             />
                 </View>
                 <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 100}}>
                        <Text
                        style={{fontSize: 20, fontWeight:'bold', fontFamily:'Cochin'}}>
                        不知道这个页面要放什么...
                        </Text>
                 </View>
              </View>

             )
        }
}

class Route extends React.Component {
    componentDidMount() {
            this.animation.play();
            // Or set a specific startFrame and endFrame with:
//            this.animation.play(30, 120);
          }

        render() {
         return (
         <View style={{flex:1}}>
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                             <LottieView
                             ref={animation => {
                               this.animation = animation;
                             }}
                             style={{flex: 1}}
                             source={require('./app/animations/2523-loading')}
                             />
                 </View>
                 <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 100}}>
                        <Text
                        style={{fontSize: 20, fontWeight:'bold', fontFamily:'Cochin'}}>
                        敬请期待...
                        </Text>
                 </View>
              </View>

             )
        }
}

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
                          uri: 'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
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

//非会员的了解特权页面
class NotSuperMembers extends React.Component {
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

    render (){
    this._retrieveData();
        return(
        <ScrollView>
                <Card
                    style={{backgroundColor: '#dae9f4'}}
                >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10}}>
                    <Avatar
                       width={60}
                       height={60}
                       source={{
                         uri: 'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
                       }}
                       activeOpacity={0.7}
                       avatarStyle={{ borderRadius: 145 / 2 }}
                       overlayContainerStyle={{ backgroundColor: 'transparent' }}
                     />
                     <View>
                        <Text style={{fontSize:20, color: '#333030'}}>{username}</Text>
                        <Text style={{fontSize:14, color: '#333030'}}>您还不是VIP会员</Text>
                     </View>
                     <View>
                        <Image style={{width: 60, height: 60}}></Image>
                     </View>
                 </View>
                 </Card>
                <Card
                  title='我的特权'
                >
                <ScrollView horizontal={true}>
                    <View style={{width: 140, }}>
                    <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                    <Avatar
                     width={40}
                     height={40}
                     source={require('./Assets/MinePage/landmarksphinx.png')}
                     activeOpacity={0.7}
                     avatarStyle={{ borderRadius: 145 / 2 }}
                     overlayContainerStyle={{ backgroundColor: 'transparent' }}
                   />
                   <View>
                      <Text style={{fontSize:16, color: '#f9a11b'}}>景点识别</Text>
                   </View>

                    </View>
                    <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>千万景点快速识别</Text>
                    </View>
                    <View style={{width: 140, }}>
                     <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                     <Avatar
                        width={40}
                        height={40}
                        source={require('./Assets/MinePage/weibiaoti556.png')}
                        activeOpacity={0.7}
                        avatarStyle={{ borderRadius: 145 / 2 }}
                        overlayContainerStyle={{ backgroundColor: 'transparent' }}
                      />
                      <View>
                         <Text style={{fontSize:16, color: '#f9a11b'}}>文字翻译</Text>
                      </View>

                     </View>
                     <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>上传图片自动翻译</Text>
                     </View>

                </ScrollView>

                </Card>

                <Card
                                  title='开通会员尊享更多特权'
                                >
                                <ScrollView horizontal={true}>

                                     <View style={{width: 140, }}>
                                     <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                                     <Avatar
                                       width={40}
                                       height={40}
                                       source={require('./Assets/MinePage/yuyin.png')}
                                       activeOpacity={0.7}
                                       avatarStyle={{ borderRadius: 145 / 2 }}
                                       overlayContainerStyle={{ backgroundColor: 'transparent' }}
                                     />
                                     <View>
                                        <Text style={{fontSize:16, color: '#f9a11b'}}>语音翻译</Text>
                                     </View>

                                     </View>
                                     <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>多语种语音翻译</Text>
                                     </View>
                                     <View style={{width: 140, }}>
                                        <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                                        <Avatar
                                           width={40}
                                           height={40}
                                           source={require('./Assets/MinePage/ad.png')}
                                           activeOpacity={0.7}
                                           avatarStyle={{ borderRadius: 145 / 2 }}
                                           overlayContainerStyle={{ backgroundColor: 'transparent' }}
                                         />
                                         <View>
                                            <Text style={{fontSize:16, color: '#f9a11b'}}>广告特权</Text>
                                         </View>

                                         </View>
                                         <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>自动隐藏广告</Text>
                                         </View>
                                      <View style={{width: 140, }}>
                                       <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                                       <Avatar
                                          width={40}
                                          height={40}
                                          source={require('./Assets/MinePage/zhuanjiafudao.png')}
                                          activeOpacity={0.7}
                                          avatarStyle={{ borderRadius: 145 / 2 }}
                                          overlayContainerStyle={{ backgroundColor: 'transparent' }}
                                        />
                                        <View>
                                           <Text style={{fontSize:16, color: '#f9a11b'}}>专家翻译</Text>
                                        </View>

                                        </View>
                                        <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>专家翻译准确率更高</Text>
                                        </View>



                                </ScrollView>

                                </Card>
                <View style={{marginTop: 20}}>
                 <PricingCard
                   color="#4f9deb"
                   title="开通会员"
                   price="¥12"
                   info={['1个月', '所有功能特权']}
                   button={{ title: '立即开通'}}
                 />
                </View>
        </ScrollView>

        )
    }
}

//会员的的界面
class SuperMembers extends React.Component {
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

    render (){
    this._retrieveData();
        return(
        <ScrollView>
                <Card
                    style={{backgroundColor: '#dae9f4'}}
                >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10}}>
                    <Avatar
                       width={60}
                       height={60}
                       source={{
                         uri: 'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
                       }}
                       activeOpacity={0.7}
                       avatarStyle={{ borderRadius: 145 / 2 }}
                       overlayContainerStyle={{ backgroundColor: 'transparent' }}
                     />
                     <View>
                        <Text style={{fontSize:20, color: '#333030'}}>{username}</Text>
                        <Text style={{fontSize:14, color: '#333030'}}>超级会员：{date}</Text>
                     </View>
                     <View>
                        <Image source={require('./Assets/MinePage/QQ20190726-0.jpg')} style={{width: 60, height: 60}}></Image>
                     </View>
                 </View>
                 </Card>
                <Card
                  title='我的会员特权'
                >
                <ScrollView horizontal={true}>
                    <View style={{width: 140, }}>
                    <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                    <Avatar
                     width={40}
                     height={40}
                     source={require('./Assets/MinePage/landmarksphinx.png')}
                     activeOpacity={0.7}
                     avatarStyle={{ borderRadius: 145 / 2 }}
                     overlayContainerStyle={{ backgroundColor: 'transparent' }}
                   />
                   <View>
                      <Text style={{fontSize:16, color: '#f9a11b'}}>景点识别</Text>
                   </View>

                    </View>
                    <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>千万景点快速识别</Text>
                    </View>

                     <View style={{width: 140, }}>
                     <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                     <Avatar
                       width={40}
                       height={40}
                       source={require('./Assets/MinePage/yuyin.png')}
                       activeOpacity={0.7}
                       avatarStyle={{ borderRadius: 145 / 2 }}
                       overlayContainerStyle={{ backgroundColor: 'transparent' }}
                     />
                     <View>
                        <Text style={{fontSize:16, color: '#f9a11b'}}>语音翻译</Text>
                     </View>

                     </View>
                     <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>多语种语音翻译</Text>
                     </View>
                    <View style={{width: 140, }}>
                     <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                     <Avatar
                        width={40}
                        height={40}
                        source={require('./Assets/MinePage/weibiaoti556.png')}
                        activeOpacity={0.7}
                        avatarStyle={{ borderRadius: 145 / 2 }}
                        overlayContainerStyle={{ backgroundColor: 'transparent' }}
                      />
                      <View>
                         <Text style={{fontSize:16, color: '#f9a11b'}}>文字翻译</Text>
                      </View>

                     </View>
                     <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>上传图片自动翻译</Text>
                     </View>
                     <View style={{width: 140, }}>
                        <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                        <Avatar
                           width={40}
                           height={40}
                           source={require('./Assets/MinePage/ad.png')}
                           activeOpacity={0.7}
                           avatarStyle={{ borderRadius: 145 / 2 }}
                           overlayContainerStyle={{ backgroundColor: 'transparent' }}
                         />
                         <View>
                            <Text style={{fontSize:16, color: '#f9a11b'}}>广告特权</Text>
                         </View>

                         </View>
                         <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>自动隐藏广告</Text>
                         </View>
                      <View style={{width: 140, }}>
                       <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                       <Avatar
                          width={40}
                          height={40}
                          source={require('./Assets/MinePage/zhuanjiafudao.png')}
                          activeOpacity={0.7}
                          avatarStyle={{ borderRadius: 145 / 2 }}
                          overlayContainerStyle={{ backgroundColor: 'transparent' }}
                        />
                        <View>
                           <Text style={{fontSize:16, color: '#f9a11b'}}>专家翻译</Text>
                        </View>

                        </View>
                        <Text style={{fontSize:12, color: '#333030', marginLeft:5, marginTop:5}}>专家翻译准确率更高</Text>
                        </View>
                 </ScrollView>

                </Card>
                <View style={{marginTop: 20}}>
                 <PricingCard
                   color="#4f9deb"
                   title="续费会员"
                   price="¥12"
                   info={['1个月', '所有功能特权']}
                   button={{ title: '立即续费'}}
                 />
                </View>
        </ScrollView>

        )
    }
}

//<View style={{marginLeft:15}}>
//                       <Image source={require('./Assets/MinePage/yuyin.png')} style={{width: 45, height: 45, }}></Image>
//                       <Text>语音翻译</Text>
//                    </View>
//                        <View style={{marginLeft:15}}>
//                          <Image source={require('./Assets/MinePage/weibiaoti556.png')} style={{width: 45, height: 45, }}></Image>
//                          <Text>文字翻译</Text>
//                        </View>
//                        <View style={{marginLeft:15}}>
//                           <Image source={require('./Assets/MinePage/ad.png')} style={{width: 45, height: 45, }}></Image>
//                           <Text>免广告特权</Text>
//                         </View>
//                         <View style={{marginLeft:15}}>
//                           <Image source={require('./Assets/MinePage/zhuanjiafudao.png')} style={{width: 45, height: 45}}></Image>
//                           <Text>专家翻译</Text>
//                         </View>

//我的空间 写死的
class Room extends React.Component {
    render (){
        return(
        <ScrollView>

                <Card title="我的评论">
                  {
                    comments.map((u, i) => {
                      return (
                      <View>
                        <View key={i} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10}}>
                          <Avatar
                            width={60}
                            height={60}
                            source={{
                              uri: u.avatar,
                            }}
                            activeOpacity={0.7}
                            avatarStyle={{ borderRadius: 145 / 2 }}
                            overlayContainerStyle={{ backgroundColor: 'transparent' }}
                          />
                          <Text>{u.name}</Text>
                          <Rating
                            imageSize={20}
                            readonly
                            startingValue={u.rating}
                          />
                      </View>
                      <Text style={{alignItems: 'center', marginLeft: 10}}>{u.content}</Text>
                    </View>

                      );
                    })
                  }
                </Card>
        </ScrollView>

        )
    }
}


class MainScreen extends React.Component {
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
    let display = isVIP ? '超级会员': '普通会员';
        return (
            <View style={styles.container}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <Avatar
                                  width={120}
                                  height={120}
                                  source={{
                                    uri:
                                      'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
                                  }}
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
                                    {username}
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
                                     {display}
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
                        <TouchableOpacity onPress={() => isVIP?this.props.navigation.navigate('SuperMembers'):this.props.navigation.navigate('NotSuperMembers')}>
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

                                   <Image source={require('./Assets/MinePage/travel.png')} style={cellStyle.leftIconStyle}></Image>
                                   <Text style={styles.leftTitleStyle}>我的行程</Text>
                               </View>
                           </View>
                                            </TouchableOpacity>
                    </View>
                    <View>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate('Wallet')}>
                         <View style={cellStyle.containerStyle}>
                             <View style={cellStyle.leftViewStyle}>

                                 <Image source={require('./Assets/MinePage/wallet.png')} style={cellStyle.leftIconStyle}></Image>
                                 <Text style={styles.leftTitleStyle}>我的会员</Text>
                             </View>
                         </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate('Room')}>
                        <View style={cellStyle.containerStyle}>
                            <View style={cellStyle.leftViewStyle}>

                                <Image source={require('./Assets/MinePage/room.png')} style={cellStyle.leftIconStyle}></Image>
                                <Text style={styles.leftTitleStyle}>我的空间</Text>
                            </View>
                        </View>
                       </TouchableOpacity>
                    </View>
                    <View style={styles.sectionStyle}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                        <View style={cellStyle.containerStyle}>
                            <View style={cellStyle.leftViewStyle}>

                                <Image source={require('./Assets/MinePage/setting.png')} style={cellStyle.leftIconStyle}></Image>
                                <Text style={styles.leftTitleStyle}>设置</Text>
                            </View>
                        </View>
                       </TouchableOpacity>
                    </View>
                    <View style={styles.sectionStyle}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                         <View style={cellStyle.containerStyle}>
                             <View style={cellStyle.leftViewStyle}>

                                 <Image source={require('./Assets/MinePage/about.png')} style={cellStyle.leftIconStyle}></Image>
                                 <Text style={styles.leftTitleStyle}>关于我们</Text>
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
    About: About
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

//AppRegistry.registerComponent('App', () => App);
