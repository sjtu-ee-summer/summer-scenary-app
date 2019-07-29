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
export default class HongKong extends Component<Props> {

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
            <Image source={ require('./assets/HongKong.jpg')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>HongKong</Text>
           <Text style={styles.sectionTitleText}>
             香港
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>香港景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>香港摩天轮</Text>
          </View>
          <Text style={{marginTop: 10}}>
         2014年冬天落成的香港摩天轮坐落在港岛中环码头，在鳞次栉比的高楼大厦中显得格外耀眼，为车水马龙的中环商业区增添了几分柔情。白天搭乘摩天轮视野开阔，维多利亚港湾两岸建筑群尽收眼底；而到了晚上，这里则是观赏港湾璀璨夜景的好地方。若是晚上八点搭乘，还能赶上在摩天轮上观赏“幻彩咏香江”灯光秀，绝对值回票价。全程15-20分钟，每次可乘坐3-4圈，欣赏窗外的浪漫景色，体验高度切换的刺激感，是不容错过的体验。
          </Text>

          <Text style={{marginTop: 5}} >
          地址：香港岛中环民光街33号
          </Text>
          <Text>
          到达方式：搭乘港铁港岛线至中环站A口，或步行至香港站A2口，沿民耀街步行约10-15分钟；由尖沙咀码头搭乘天星小轮至中环7号码头，向9号码头方向步行约5分钟
          </Text>
          <Text>
          开放时间：每日11:00-23:00，22:30停止售票
          </Text>
          <Text>
          门票：成人20港币，3-11岁儿童10港币，65岁以上老年人10港币；可提前在网站购票
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>龙脊</Text>
          </View>
          <Text style={{marginTop: 10}}>
          龙脊是位于港岛东南角石澳郊野公园的一段徒步路线，平均海拔200多米，因其蜿蜒起伏，在山间行走如走在卧龙之背得名。2004年被美国《时代周刊》评选为亚洲区“最佳市区远足径”，是旅行者颇为青睐的景点。一路上不仅视野广阔，还能饱览石澳海滩和大浪湾的壮丽海景，天气好时会有五彩缤纷的滑翔伞在天际划过。
          </Text>

          <Text style={{marginTop: 5}} >
          地址：香港岛区石澳（起点）石澳道土地湾村
          </Text>
          <Text>
          到达方式：乘坐港铁港岛线至筲箕湾站，由A3口出来步行至筲箕湾巴士总站搭乘9路巴士，在土地湾站下车即是龙脊行山径的入口
          </Text>
          <Text>
          开放时间：为公共区域，全年全天开放；但是由于沿路无路灯，建议15:00以后不再进山
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>香港大学</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  1910年成立的香港大学是香港最古老的高等学府，在全球享有很高学术声誉。大学不仅年代久远，辉煌的历史也为人称道，这里曾走出了国父孙中山、作家张爱玲、美学家朱光潜等名人。校园内至今仍然保留着一座具有百年历史的教学建筑——本部大楼，这座建筑采用了后文艺复兴时期风格，红砖与木窗的搭配让建筑整体色彩瑰丽却不张扬。大楼内的礼堂陆佑堂也是香港大学的著名地标，不仅见证过许多历史性的演说，还是电影《色戒》的取景地，露天庭院便是电影中王佳芝（汤唯饰）与邝裕民（王力宏饰）等爱国青年讨论话剧之地。现在庭院内有一座圆形水池和一条木椅，少了慷慨激昂的吟诗少年，但留下了一片宁静空间供人遐想。
                  </Text>

                  <Text style={{marginTop: 5}} >
                 地址：香港岛薄扶林道东
                  </Text>
                  <Text>
                  到达方式：搭乘港铁港岛线至香港大学站A1或A2口出站
                   </Text>
                   <Text>
                   开放时间：全天开放，校园内请保持安静
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

AppRegistry.registerComponent('HongKong', () => HongKong);