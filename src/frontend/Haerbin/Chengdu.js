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
export default class Chengdu extends Component<Props> {

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
            <Image source={ require('./assets/chengdu.png')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>Chengdu</Text>
           <Text style={styles.sectionTitleText}>
             成都
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>成都景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>武侯祠</Text>
          </View>
          <Text style={{marginTop: 10}}>
            武侯祠是纪念三国时期杰出的政治家、军事家、蜀汉丞相诸葛亮的祠宇。蜀汉后主刘禅即位后，封诸葛亮为武乡侯，领益州牧，逝世后谥号“忠武侯”，后人习惯称诸葛亮为武侯。成都武侯祠始建于唐代，由刘备、诸葛亮等蜀汉君臣合祀祠庙及刘备墓（惠陵）组成，面积并不很大，但建筑分布规整，气度不凡。1984年，成立武侯祠博物馆。
          </Text>

          <Text style={{marginTop: 5}} >
          地址：成都市武侯区武侯祠大街231号
          </Text>
          <Text>
          到达方式：市内乘1、57、82、334、335、503、901路至武侯祠站下车即到武侯祠大门
          </Text>
          <Text>
          开放时间：8:00-18:00
          </Text>
          <Text>
          门票：60元
          </Text>
          <Text>
                    电话：028-85552397
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>青羊宫</Text>
          </View>
          <Text style={{marginTop: 10}}>
          青羊宫素有“川西第一道观”、“西南第一丛林”之称，始建于周昭王十五年（公元前1015年），初名青羊肆。唐玄宗于天宝十五年（775年）避安史之乱时、唐僖宗于中和元年（881年）避黄巢兵乱时均在青羊肆居住，僖宗后下诏增修殿宇，并更名为青羊宫。相传青羊宫东侧花园有吕纯阳、韩湘子二仙显迹，康熙年间建有二仙庵，成为道教全真龙门派丹台碧洞宗的祖庭。经过后世几次重修，青羊宫才形成现有的建筑群规模。
          </Text>

          <Text style={{marginTop: 5}} >
          地址：成都市青羊区一环路西二段9号（文化公园旁）
          </Text>
          <Text>
          到达方式：公交车27、58、129、319路等都可到达
          </Text>
          <Text>
          开放时间：8:00-18:00
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>杜甫草堂</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  杜甫草堂博物馆，简称杜甫草堂。座落于成都西郊的浣花溪公园旁，是我国唐代大诗人杜甫在成都时的故居，他曾在这里创作诗歌240余首。现在的杜甫草堂仍保留着明清时的建筑格局，整体建筑古朴典雅、园林清幽秀丽。
                   </Text>
                  <Text style={{marginTop: 5}} >
                 地址：成都市青羊区青华路37号
                  </Text>
                  <Text>
                  到达方式：公交19路、35路、58路、82路、151路、165路、170路、1024路、1031路，以及二环BRT、地铁2、4号线都可以到达，另有杜甫草堂游专线，分别是杜甫草堂—武侯祠、杜甫草堂—金沙遗址、杜甫草堂—永陵
                   </Text>
                   <Text>
                   开放时间：5月1日至9月31日8:00-20:00，10月1日至次年4月30日8:00-18:30，闭馆前1小时停止售票
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

AppRegistry.registerComponent('Chengdu', () => Chengdu);