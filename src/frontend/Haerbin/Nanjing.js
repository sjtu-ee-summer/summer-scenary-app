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
export default class Nanjing extends Component<Props> {

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
            <Image source={ require('./assets/Nanjing.png')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>Nanjing</Text>
           <Text style={styles.sectionTitleText}>
             南京
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>南京景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>中山陵</Text>
          </View>
          <Text style={{marginTop: 10}}>
            南京市东郊钟山东峰小茅山南麓，有一处宏伟的陵园。它西邻明孝陵，东毗灵谷寺，傍山而筑。整组建筑由南往北沿中轴线逐渐升高，气势宏伟，造型独具特色。这便是中国民主革命的先行者孙中山先生最后的归宿——中山陵。中山陵坐北朝南，建筑面积约为8万平方米。从空中俯瞰，中山陵像一座镶嵌在绿绒毯上的“自由钟”，山下的孙中山先生的铜像犹如钟的尖顶，半月形广场钟顶的圆弧，而陵墓顶端墓室的半球形的穹隆顶，则是钟的摆锤，广场南端的鼎台（现改为孙中山先生的立像）为大钟的钟纽。
            </Text>
          <Text style={{marginTop: 5}} >整组陵园建筑沿南北中轴线一字排开，有牌坊、墓道、陵门、碑亭、祭堂和墓室等。其中祭堂为仿宫殿式的建筑，建有三座拱门，门楣上刻有“民族，民权，民生”字样的横额，祭堂内矗立着孙中山先生的大理石坐像，壁上刻有孙中山先生手书的《建国大纲》全文。整组建筑设计巧妙、独特，作为那一时期“中国固有形式”建筑的代表作品被记入中国近代建筑史册。沿山坡而上的392级石阶可以说是整组建筑中最具意味深长的设计。也许只有在登顶回望时，你才能体会到“革命尚未成功，同志仍须努力”的含义。</Text>
          <Text style={{marginTop: 5}} >
          地址：南京市玄武区钟山东峰小茅山南麓
          </Text>
          <Text>
          到达方式：乘公交车游1、游2、游3、9、20、315路均可到达
          </Text>
          <Text>
          开放时间：8:30-17:00开放（周一关闭祭堂和墓室）
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>美龄宫</Text>
          </View>
          <Text style={{marginTop: 10}}>
          美龄宫是一座始建于1931年的两层楼式的建筑，巨大的宫殿式屋顶上覆盖着绿色的琉璃瓦，雕梁画栋，挑角飞檐，外观极富民族气韵。而建筑内部完全依据西洋风格来装饰，格局错落有致。典型的西式壁炉，宽大的洗浴室，无不显示出其高贵典雅与富丽堂皇。
          </Text>
          <Text style={{marginTop: 5}} >
                    这里最初是作为当时的“中华国民政府主席林森”的官邸而修建的，等到房屋落成，林森却已卸任。抗日战争胜利后，国民党从战时陪都重庆迁回南京，这处小红山山顶的别墅就成为了蒋介石和他的夫人宋美龄的主要官邸。
                    </Text>
          <Text style={{marginTop: 5}} >
          地址：南京市玄武区小红山中山陵9号（东郊四方城东）
          </Text>
          <Text>
          到达方式：乘公交车游1、游2、游3、9、20路均可到达
          </Text>
          <Text>
          门票：30元/人，学生、60-69岁老人凭有效证件半票，1.3米以下儿童、70岁以上老人、军人、残疾人凭有效证件免票
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>鸡鸣寺</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  南京城梵刹众多，鸡鸣寺是其中历史最悠久的古寺之一。西晋永康元年（公元300年）在这里始创道场，南朝梁大通元年（公元527年），梁武帝萧衍在此兴建同泰寺，为“南朝四百八十寺”之首刹。明洪武二十年（公元1387年），朱元璋下诏重建寺院，亲自题额“鸡鸣寺”，取“闻鸡起舞，晨兴勤苦”之意。此后鸡鸣寺一直香火旺盛。1958年，鸡鸣寺改为尼众道场，至20世纪80年代逐渐恢复了明清时期的规模。鸡鸣寺环境十分清幽，背倚南京城墙和玄武湖，观景最佳处在寺院最高处的药师塔。该塔建于1990年，塔高约44.8米，实为七级八面，斗拱重檐，塔底供奉一尊明代青铜药师佛像，此佛像原供奉于北京雍和宫，1972年移请到此处。登上药师塔，可俯瞰玄武湖全貌和大段的城墙，与小九华山寺相望。如果时间充裕，可从鸡鸣寺上城墙，往紫金山方向徒步。城墙门票22元，注意可讲价至一半左右。
                  </Text>

                  <Text style={{marginTop: 5}} >
                 地址：南京市鸡鸣寺路1号
                  </Text>
                  <Text>
                  到达方式：乘公交车2、3、11、20、24、31、70、游1、140、304、802、811路等直达
                   </Text>
                   <Text>
                   开放时间：7:00-17:00
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

AppRegistry.registerComponent('Nanjing', () => Nanjing);