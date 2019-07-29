/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,  AppRegistry, ScrollView} from 'react-native';
import { Avatar, Divider, Card, Button, Icon, Rating, PricingCard, ListItem } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {
  const { onScroll = () => { } } = this.props;
    return (
       <ParallaxScrollView
       onScroll={onScroll}
       headerBackgroundColor="#333"
       stickyHeaderHeight={STICKY_HEADER_HEIGHT}
       parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
       backgroundSpeed={10}
       renderBackground={() => (
         <View key="background">
            <Image source={ require('./assets/haerbin.jpg')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           {/* <Text style={styles.sectionSpeakerText}>
             Talks by Rich Hickey
               </Text> */}
           <Text style={styles.stickySectionText1}>Haerbin</Text>
           <Text style={styles.sectionTitleText}>
             哈尔滨
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>哈尔滨景点</Text>
         </View>
       )}

       renderFixedHeader={() => (
         <View key="fixed-header" style={styles.fixedSection}>
           <Text style={styles.fixedSectionText}>
             {/* Hello */}
           </Text>
         </View>
       )}>
       <ScrollView style={{marginTop: 35}}>
       <View style={{marginLeft:5, marginRight:5}}>
          <View style={{ flexDirection: 'row',
                               alignItems: 'center',
                               marginLeft: 5,
                           }}>

              <Image source={require('./assets/location.png')} style={{ width: 16,
                                                                              height: 16,
                                                                              marginRight: 5,
                                                                          }}></Image>
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>圣索菲亚大教堂</Text>
          </View>
          <Text style={{marginTop: 10}}>
          哈尔滨的标志性建筑之一，典型的拜占庭式建筑，国家重点文物保护单位，建于1907年，是远东地区最大的东正教教堂。圣索菲亚大教堂通高53.35米，气势恢弘，精美绝伦。教堂通体红砖，顶端是绿色的拜占庭式球状尖顶。在教堂外饲养了许多只白鸽，飞来飞去很漂亮，但教堂最美的时候是在夜幕中，灯光下的圣索菲亚大教堂更具魅力！
          </Text>

          <Text style={{marginTop: 5}} >
          地址：道里区兆麟街和透笼街转角处
          </Text>
          <Text>
          到达方式：公交1、2、5、13、15、16、20、23、64、66、69、113、114路，到哈一百或时装大厦下车
          </Text>
          <Text>
          开放时间：8:30-17:00
          </Text>
          <Text>
          门票：20元
          </Text>
        </View>

        <View style={{marginLeft:5, marginRight:5, marginTop: 20}}>
          <View style={{ flexDirection: 'row',
                               alignItems: 'center',
                               marginLeft: 5,
                           }}>

              <Image source={require('./assets/location.png')} style={{ width: 16,
                                                                              height: 16,
                                                                              marginRight: 5,
                                                                          }}></Image>
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>中央大街</Text>
          </View>
          <Text style={{marginTop: 10}}>
          每一座城市都有一个地标，哈尔滨的地标便是中央大街，可以毫不夸张地说：“没去过中央大街，就不能说来过哈尔滨。”中央大街始建于1898年，1925年后发展成为全市最繁华的商业街，并沿袭至今。此街北起松花江防洪纪念塔，南至经纬街，全场1450米，宽21.34米其中车行方石路为10.8米宽。大街上现有欧式、仿欧式建筑75栋，各类保护建筑36栋，其中中央大街主街17栋，堪称“汇百年建筑风格，聚世界艺术精华”。这里的每一座建筑都有一段故事，见证者也记录着这座城市的历史。
          </Text>

          <Text style={{marginTop: 5}} >
          到达方式：中央大街的南起点经纬街距离哈尔滨火车站不远，步行过去只有1.7公里，大约20分钟
          </Text>
          <Text>
          电话：0451-84545796
          </Text>
        </View>

        <View style={{marginLeft:5, marginRight:5, marginTop: 20}}>
                  <View style={{ flexDirection: 'row',
                                       alignItems: 'center',
                                       marginLeft: 5,
                                   }}>

                      <Image source={require('./assets/location.png')} style={{ width: 16,
                                                                                      height: 16,
                                                                                      marginRight: 5,
                                                                                  }}></Image>
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>太阳岛</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  哈尔滨的知名景区，每年在隆冬时间，都会举行大型的冰雪活动，届时可以观看冰雕、坐雪橇、乘冰帆、坐马拉爬犁等项目。
                  </Text>

                  <Text style={{marginTop: 5}} >
                  地址：松花江北岸
                  </Text>
                  <Text>
                  开放时间：8:00-18:00
                   </Text>
                   <Text>
                   门票：平时30元；雪博会240元
                  </Text>
                  <Text>
                  电话：0451-88192966
                  </Text>
                </View>
       </ScrollView>

       </ParallaxScrollView>
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = screenHeight;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 24,
    margin: 10
  },
  stickySectionText1: {
      color: 'white',
      fontSize: 30,
      margin: 10
    },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: screenHeight/2-10
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 25,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('App', () => App);
