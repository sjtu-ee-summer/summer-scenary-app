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
export default class LosAngeles extends Component<Props> {

  render() {
  const { onScroll = () => {} } = this.props;
    return (
       <ParallaxScrollView
       onScroll={onScroll}
       headerBackgroundColor="#333"
       stickyHeaderHeight={STICKY_HEADER_HEIGHT}
       parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
       backgroundSpeed={10}
       renderBackground={() => (
         <View key="background">
            <Image source={ require('./assets/LA.png')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>Los Angeles</Text>
           <Text style={styles.sectionTitleText}>
             洛杉矶
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>洛杉矶景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>好莱坞星光大道</Text>
          </View>
          <Text style={{marginTop: 10}}>
            星光大道其实是好莱坞大道（Hollywood Blvd）两旁的步行道，长达15个街区（约1.3英里），从Gower Street一直延至La Brea Avenue。
            </Text>
            <Text style={{marginTop: 5}} >
                      星光大道于1958年设立，起初有1500颗星星代表电影、电视、广播、剧院、音乐等各个领域的明星，直至1968年才开始增加新的星星，目前已有2600多颗。自驾前往的旅行者可以把车停在大道附近的公共停车场、临街停车处，或好莱坞高地中心（Hollywood & Highland Center）。需要注意的是，由于安全原因，不建议在夜间前往好莱坞大道。
                      </Text>
          <Text style={{marginTop: 5}} >
          地址：Hollywood Blvd, Los Angeles, CA 90028（Gower Street与La Brea Avenue之间）
          </Text>
          <Text>
         电话：+1-323-469-8311
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>比弗利花园公园</Text>
          </View>
          <Text style={{marginTop: 10}}>
          比弗利花园公园内有比弗利山庄标志的复制品（位于公园中央），以及大片的绿地与棕榈树、仙人掌园、玫瑰园，是休闲散步的好去处。公园附近有很多临街停车处。
          </Text>

          <Text style={{marginTop: 5}}>
                    地址：Santa Monica Blvd, Beverly Hills, CA 90210
                    </Text>
          <Text>
          门票：免费
          </Text>
          <Text>
          电话：+1-310-285-2537
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>格莱美博物馆</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  格莱美博物馆于2008年即格莱美50周年开放，介绍了格莱美奖的历史，并展出了格莱美奖得主与著名音乐人的乐器、服装、手写乐谱、珍贵录音等物件。馆内最受欢迎的展品是迈克尔·杰克逊（Michael Jackson）拍摄MV时的衣服，以及标志性的帽子与手套。
                  </Text>

                  <Text style={{marginTop: 5}} >
                 地址：800 W Olympic Blvd, Ste A245, Los Angeles, CA 90015
                  </Text>
                  <Text>
                  开放时间：周一、周三、周四、周日10:30-18:30，周五、周六10:00-20:30；周二不开放，感恩节、圣诞节不开放
                   </Text>
                   <Text>
                   门票：成人15美元，65岁以上老年人与学生（凭证件）13美元，6-17岁青少年13美元，6岁以下儿童免费
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

AppRegistry.registerComponent('LosAngeles', () => LosAngeles);