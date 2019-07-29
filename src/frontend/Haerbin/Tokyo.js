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
export default class Tokyo extends Component<Props> {

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
            <Image source={ require('./assets/Tokyo.png')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>Tokyo</Text>
           <Text style={styles.sectionTitleText}>
             东京
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>东京景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>银座三越</Text>
          </View>
          <Text style={{marginTop: 10}}>
            日本历史最悠久的高档百货公司三越旗下的商场，是银座有乐町地段最大规模的百年老店，以门口伫立的狮像为标志。商品及店内服务都充分展现了银座乃至日本的最高规格，被称为“银座流”。店内除各类国际一线品牌的专卖店、知名珠宝品牌店、化妆品专柜之外也设有很多高级餐厅及咖啡厅，其中位于9层银座天台的屋顶花园以高雅的空间设计闻名，成为大都会中难得一处闹中取静的休憩场所。
            </Text>
          <Text style={{marginTop: 5}} >
          到达方式：银座线/丸之内线/日比谷线-银座站；有乐町线-银座一丁目9号出口步行5分钟；JR-有乐町站中央口/银座口步行9分钟
          </Text>
          <Text>
         营业时间：10:30-20:00
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>浅草寺</Text>
          </View>
          <Text style={{marginTop: 10}}>
          东京都内历史最悠久的古刹，创建于628年。据传最初由渔民捕鱼时打捞起一座金观音像而就地建塔供奉，由此成为浅草寺。江户初年，奉德川家康之命重建，扩大成现今规模。
          </Text>
          <Text style={{marginTop: 5}} >
                    挂着两个巨大灯笼的山门就是浅草寺的入口——雷门，是浅草乃至全日本的象征之一。雷门左右两边各立有一尊凶神恶煞一般威严的塑像，名为雷神与风神，这也是雷门的学名“风雷神门”的由来。
                    </Text>
          <Text style={{marginTop: 5}} >
          穿过长长的商品街即可看到浅草寺的正殿，因德川家康将此处指定为幕府的祈愿之处而逐渐兴盛，成为浅草地区的文化中心。寺内西南角有高达53米的五重塔，是国家重点保护文物。东北角有建于平安时期的浅草神社，建筑造型古朴典雅，雕刻精美。
          </Text>
          <Text style={{marginTop: 5}} >
                    浅草最热闹的莫过于每年5月举办的江户三大祭之一的三社祭了。起源于江户年间的三社祭充分展现了江户时代的传统风俗人情，“抬神舆”是祭典中最热闹的重头戏，几十人一组、以旧时造型抬着神舆从各个方向汇集于浅草寺。
                    </Text>
          <Text style={{marginTop: 5}}>
                    地址：东京都台东区浅草2-3-1
                    </Text>
          <Text>
          到达方式：银座线/浅草线-浅草站
          </Text>
          <Text>
          开放时间：6:00-17:00
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>调色板城</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  《魔女的条件》、《恋爱世纪》、《美丽人生》等众多纯爱日剧中出现过的大摩天轮。传说情侣在大摩天轮通过最高点时会得到祝福，于是这里也成为了东京情侣们的热门约会地点。大摩天轮采用全透明的车厢，让人能全方位饱览360°的台场美景，摩天轮内有电子显示屏介绍周边的标志性建筑物，看着东京湾、迪士尼乐园，还有远处的彩虹大桥，美景与摩天轮巨型吊臂上的灯光交相辉印，将自己融入这梦一般的景色之中吧。
                  </Text>

                  <Text style={{marginTop: 5}} >
                 地址：东京都江东区青海1-3-15
                  </Text>
                  <Text>
                  到达方式：临海线-东京Teleport站，步行3分钟；百合海鸥号-青海站；水上巴士-调色板城前站，步行1分钟
                   </Text>
                   <Text>
                   开放时间：10:00-22:00
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

AppRegistry.registerComponent('Tokyo', () => Tokyo);