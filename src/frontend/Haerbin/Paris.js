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
export default class Paris extends Component<Props> {

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
            <Image source={ require('./assets/Paris.png')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>Paris</Text>
           <Text style={styles.sectionTitleText}>
             巴黎
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>巴黎景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>埃菲尔铁塔</Text>
          </View>
          <Text style={{marginTop: 10}}>
            建于1889年的埃菲尔铁塔最初是为了迎接世博及纪念法国大革命100周年。然而在建成之初它却遭到很多法国人的质疑，如此的巨大的钢铁结构跟当时巴黎是那样的格格不入，甚至不少人提议拆毁它。今天，它已成为巴黎及法国无可争议的象征，你可以乘电梯或者爬楼梯登上铁塔去俯瞰整个巴黎（楼梯只能到第二层）。千禧年后从夜幕降临到凌晨（夏季2:00，冬季1:00）这段时间，铁塔会整点开始闪烁十分钟。碰到特殊节日活动会有特别颜色，比如中国年时闪红色，欧盟日时闪蓝色。每年的7月14日国庆节都可以来铁塔下方的马尔斯广场（Champs de Mars）欣赏音乐会、观看国庆烟火，这里也是跨年倒数的最佳地点（巴黎的跨年从2000年后不再有烟火）。
            </Text>
            <Text style={{marginTop: 5}} >
                      铁塔上有两个餐厅分别是位于一层的Tour Eiffel 58，及二层的米其林一星的Jules Verne。在铁塔用餐的好处是可以让餐厅协助预订或提供上铁塔的票，无需再在下方排队等待。关于这两家餐厅，其中Tour Eiffel 58的午餐19欧元起（快餐三明治为主），晚餐80欧起，类似普通餐厅的正餐，环境费占了不少；而楼上有大厨Alain Ducasse坐镇的Jules Verne如今只剩下一颗星星，午餐90欧元起，晚餐约每人300欧元起，如果不是来感受这个环境，作者建议同样价位可以尝试其他米其林三星，且吃的更好。但是由于他们的特殊位置，所以去那边吃个饭也不容易，旺季的时候最好提前2个月以上预订。
                      </Text>
          <Text style={{marginTop: 5}} >
          地址：Avenue Gustave Eiffel, 75007 Paris France
          </Text>
          <Text>
         到达方式：地铁M6至Bir-Hakeim站，M6、M9至Trocadéro站；RER C线至Champ de Mars-Tour Eiffel站，公交42、69、82、87至Tour Eiffel或者Champs de Mars站
          </Text>
           <Text>
                   开放时间：6月中旬至9月初：电梯和楼梯9:00-次日0:45(顶楼23:00)；其余时间：电梯9:30-23:45(顶楼22:30)，楼梯9:30-18:30
                    </Text>
                    <Text>
                                       门票：电梯至二楼16欧元(12至24周岁8欧元)；电梯至顶楼25欧元(12至24周岁12.5欧元)；楼梯至二楼10欧元(12至24周岁5欧元)；楼梯至二楼、电梯至顶楼19欧元(12至24周岁9.5欧元)
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>凯旋门</Text>
          </View>
          <Text style={{marginTop: 10}}>
          位于戴高乐广场（Place Charles-de-Gaule）中心的凯旋门的全称“雄狮凯旋门”，1806年为了庆祝在“奥斯特里茨战争”中的巨大胜利，拿破仑在这里放下了第一块基石，遗憾的是他没有看到它的落成，在他过世20年后，法国人民在凯旋门下为他补办了葬礼。
          </Text>
          <Text style={{marginTop: 5}} >
                    从香榭丽舍的地下通道走到凯旋门下方，这里有一座无名烈士墓，放置了一盏“长明灯”，为了纪念在一战中为国献身的150万名法国官兵。每逢重大节日，凯旋门正顶上会悬挂一面巨大的法国国旗，并会有相关的纪念活动，如二战纪念日5月8日，一战纪念日11月11日。
                    </Text>
          <Text style={{marginTop: 5}} >
          每年7月14日的国庆阅兵仪式则是从凯旋门开始一直到协和广场，如果想占领好位置，得要早起，天气晴好的时候一大清早就有人在等了。新年的时候凯旋门也是跨年的集中地，人流量不比国庆少，而且更疯狂(但巴黎跨年是没有烟火的)。
          </Text>
          <Text style={{marginTop: 5}} >
                    凯旋门为中心四处发散有十二条大道，其中正对卢浮宫连接协和广场的就是有名的香榭丽舍大道，这条近2公里长的大道被誉为全球最美丽的街道之一。香榭丽舍的西端是凯旋门，顺着延伸线到巴黎的商务新区拉德方斯（La Defense），那里还有“新凯旋门（Grande Arche）”，东端则是巴黎最大的协和广场（Place de la Concorde） ，顺着延伸线往卢浮宫则穿过卡鲁塞尔凯旋门（Arc de Triomphe du Carrousel），这三个凯旋门正好组成了巴黎的中轴线。
                    </Text>
          <Text style={{marginTop: 5}}>
                    地址：Place Charles-de-Gaulle，75008 Paris
                    </Text>
          <Text>
          到达方式：可搭乘地铁M1、M2和M6，或者RER的A线到Charles-de-Gaulle-Etoile站；或者搭乘公交22、30、31、52、73、92和Balabus
          </Text>
          <Text>
          开放时间：4月1日至9月30日10:00-23:00；10月1日至次年3月31日10:00-22:30（关闭前45分钟停止售票，1月1日、5月1日、5月8日上午、7月14日上午、11月11日上午、12月25日关闭）
          </Text>
          <Text>
                    门票：12欧元，18-25岁非欧盟国家公民享优惠价9欧元，18岁以下免费；11月1日至3月31日之间的每个月第一个周日免费
                    </Text>
                    <Text>
                              电话：＋33-01-55-37-73-77
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>巴黎圣母院</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  位于巴黎发源地塞纳河西岱岛上的巴黎圣母院，850年来见证了巴黎的很多重要的历史变迁：几位君主在此加冕（1804年拿破仑在此加冕），教廷在此为圣女贞德平反。维克多·雨果的同名小说《巴黎圣母院》则让这座哥特式建筑更加引人入胜。周日上午或宗教性节日可以来此感受一下天主教徒的虔诚；平安夜的“午夜弥撒”也许是更佳选择。
                  </Text>
                <Text style={{marginTop: 5}} >
                 参观巴黎圣母院是不需要门票的，但请尊重当地宗教礼仪，注意着装，保持安静。若是要去寻找雨果笔下的钟楼怪人，可以在教堂左侧购票参观，由于是单线排队参观，有时候等待时间较久，旺季时候可能需要两小时以上。所谓的钟楼怪人也许源自圣母院飞檐上的那些怪兽，中世纪教堂上的这些怪兽是为了辟邪。
                  </Text>
                  <Text style={{marginTop: 5}} >
                 到达方式：可搭乘地铁M4到Cité站；或者搭乘RER的B线和C线到Saint-Michel-Notre-Dame站；还可以搭乘公交21、38、47、58、70、72、74、81、82、82
                  </Text>
                  <Text>
                  开放时间：2019年4月16日大火后，巴黎圣母院暂时不对外开放，开放时间待定
                   </Text>
                   <Text>
                   门票：教堂免费；塔楼10欧元，优惠价8欧元，11月1日到次年3月31日之间每月第一个周日免费
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

AppRegistry.registerComponent('Paris', () => Paris);