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
export default class Macao extends Component<Props> {

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
            <Image source={ require('./assets/Macao.png')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>Macao</Text>
           <Text style={styles.sectionTitleText}>
             澳门
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>澳门景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>大三巴牌坊</Text>
          </View>
          <Text style={{marginTop: 10}}>
            这座哥特式风格的大三巴牌坊是澳门代表性的建筑，为圣保禄教堂前壁遗址，来澳门不参观大三巴牌坊就好比到巴黎不去看埃菲尔铁塔。这座历经沧桑的教堂曾两次毁于火灾，直到1602年才得以重建。不幸的是，教堂在1835年的大火中彻底被毁，仅剩正面前壁、大部分地基以及教堂前的石阶。本地人因教堂前壁形似中国传统牌坊，将之称为大三巴牌坊。大三巴牌坊背面有一个铁架楼梯，可供旅行者攀爬，站在大三巴牌坊上可以看到澳门老城区的全景。
            </Text>
          <Text style={{marginTop: 5}} >大三巴牌坊的内侧广场有天主教艺术博物馆和教士的墓室，这些都是免费开放的，开放时间为9:00-18:00（17:30后禁止入场）。晚上的大三巴显得有些冷清，不过当地人很喜欢在此散步聊天。除此之外，大三巴牌坊右侧还有一座供奉哪咤的哪吒庙（Na Tcha Temple），是小型的中式建筑。</Text>
          <Text style={{marginTop: 5}} >
          地址：澳门耶稣会纪念广场
          </Text>
          <Text>
          到达方式：搭乘8A、18、18A、19、26路公交车至白鸽巢前地站，向南步行10分钟即可到达；搭乘18路公交车至草堆街站，步行5分钟即可到达
          </Text>
          <Text>
          开放时间：大三巴牌坊全天开放；天主教艺术博物馆与墓室9:00-18:00（17:30后禁止入场），周二9:00-14:00
          </Text>
          <Text>
          门票：免费
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>大炮台</Text>
          </View>
          <Text style={{marginTop: 10}}>
          大炮台于1626年建成，是中国现存最古老的西式炮台建筑群之一。大炮台是当时澳门防御系统的核心，占地约一万平方米。大炮台上曾有一大块空地，现已变成了花园，绿化环境十分优美，旅行者可以端着星巴克坐在里面聊天观景，从这里眺望，可以看到澳门老城区的风貌。花园的开放时间与大炮台的开放时间一致。
          </Text>
          <Text style={{marginTop: 5}} >
                    大炮台附近有澳门博物馆，票价为15澳门元/人，开放时间为周二至周日10:00-18:00，从历史和文化角度展示澳门数百年间的变迁。
                    </Text>
          <Text style={{marginTop: 5}} >
          地址：澳门半岛中央柿山山顶
          </Text>
          <Text>
          到达方式：搭乘8A、18、18A、19、26路公交车至白鸽巢前地站，向南步行10分钟即可到达；搭乘18路公交车至草堆街站，步行5分钟即可到达
          </Text>
          <Text>
          开放时间：7:00-19:00
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>玫瑰圣母堂</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  在澳门众多教堂中玫瑰圣母堂是最有名的一个，这个巴洛克式的教堂供奉玫瑰圣母，所以称为玫瑰圣母堂。教堂主体建筑富丽堂皇，外观米黄色与白色相间，配以绿色的门窗，墙体刻着细小的花纹，巴洛克风格的祭坛典雅精致。教堂旁的“圣物宝库”收藏有三百多件澳门天主教的珍贵文物。
                  </Text>
                  <Text style={{marginTop: 5}} >
                                   玫瑰堂正面的铁门常常关闭着，初来乍到的旅行者可能会误以为只能在外面参观，其实不是这样的，旅行者只需先按门铃，然后从边上的闸门入内，走过一条长长的走廊即可达到教堂内部。教堂内部的布置十分简单，去过欧洲著名教堂的人可能会有些失望。最前面的正中央是玫瑰圣母，玫瑰圣母的前方有多排长椅，做祷告的人就坐于此，长椅的两边有几个忏悔室，总体布置跟别的教堂没什么不一样。教堂的采光很好，二楼的窗户打开以后，整个教堂就变得十分明亮。
                                    </Text>
                                    <Text style={{marginTop: 5}} >
                                                     玫瑰堂正面的铁门会在周日的早上打开，会有不少人前来做礼拜。如果你是在圣诞节来到玫瑰堂，铁门也会打开，唱诗班会在教堂里和前来做祷告的人一起完成盛大的宗教仪式。
                                                      </Text>

                  <Text style={{marginTop: 5}} >
                 地址：澳门大堂前地
                  </Text>
                  <Text>
                  到达方式：搭乘18路公交车至营地大街站，步行1分钟即可到达；搭乘3、4、6、8A、18A、19、26A、33、N1A至新马路站，步行3分钟即可到达
                   </Text>
                   <Text>
                   开放时间：10:00-18:00
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

AppRegistry.registerComponent('Macao', () => Macao);