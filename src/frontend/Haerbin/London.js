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
export default class London extends Component<Props> {

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
            <Image source={ require('./assets/London.png')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>London</Text>
           <Text style={styles.sectionTitleText}>
             伦敦
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>伦敦景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>伦敦眼</Text>
          </View>
          <Text style={{marginTop: 10}}>
            坐落在泰晤士河南岸，这个充满现代感的庞然大物和周围历史悠久的建筑群相映成趣，给古老的伦敦带来了新的活力。乘坐伦敦眼是俯瞰伦敦市中心的绝好方式，一圈约需半小时。建议提前在网上订票，比到现场购票便宜且可以避免在购票时排队。
            </Text>
          <Text style={{marginTop: 5}} >
          地址：The London Eye，Riverside Building，County Hall，Westminster Bridge Road，London，SE1 7PB
          </Text>
          <Text>
         到达方式：可乘坐地铁Jubliee Line（灰线）或Bakerloo Line（褐线）到Waterloo站，出站后步行5分钟即到，也可以乘船到London Eye码头，下船即是
          </Text>
           <Text>
                   开放时间：通常10:00开放，并在18:00-20:30间关闭（根据季节和活动有所不同）。具体开放时间可提前在官网查询。
                    </Text>
                    <Text>
                                       门票：标准票（Standard）成人28英镑，3-15岁儿童23英镑。建议提前在网上购票，会有优惠。
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>大英博物馆</Text>
          </View>
          <Text style={{marginTop: 10}}>
          世界上最著名的博物馆之一，共有近八百万件藏品，精品众多。从埃及的木乃伊到中国的古董，大英帝国鼎盛时期从世界各地搜罗来的宝贝不少都在这里。如果时间紧张，可以直接“冲向”木乃伊的展室和中国馆。时间充裕的话建议尽量早到，避开旅行团，还可以租用讲解器（含中文），以便更好地了解展品背后的历史。
          </Text>

          <Text style={{marginTop: 5}}>
                    地址：Great Russell Street，London，WC1B 3DG
                    </Text>
          <Text>
          到达方式：可乘坐地铁Northern Line（黑线）、Central Line（红线）到Tottenham Court Road站，也可以乘坐Piccadilly Line（深蓝线）到Holborn站，出站后都仅需步行5分钟即到
          </Text>
          <Text>
          开放时间：周一至周四、周六、周日10:00-17:30，周五10:00-20:30；1月1日，12月24日-26日关闭
          </Text>
          <Text>
                    门票：免费，租用讲解器成人6英镑/台、19岁以下5.5英镑/台
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>伦敦塔桥</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  泰晤士河上最有特色的一座桥，也是伦敦最著名的地标之一，运气好的话可以看到塔桥打开让船只通过的景象。塔桥于1894年正式建成，当年通过蒸汽液压方式打开桥体的机械结构依然作为展品保存在内部。
                  </Text>
                  <Text style={{marginTop: 5}} >
                 地址：Tower Bridge Road，London，SE1 2UP
                  </Text>
                  <Text>
                  到达方式：可乘坐地铁District Line（绿线）、Circle Line（黄线）到Tower Hill站，也可以乘坐轻轨DLR到Tower Gateway站，出站后都仅需步行5分钟即到
                   </Text>
                   <Text>
                   开放时间：4月至9月10:00-17:30，10月至次年3月9:30-17:00
                  </Text>
                   <Text>
                   门票：成人9.8英镑，老年人和学生6.8英镑，5-15岁儿童4.2英镑，5岁以下免费
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

AppRegistry.registerComponent('London', () => London);