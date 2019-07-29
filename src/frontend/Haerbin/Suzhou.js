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
export default class Suzhou extends Component<Props> {

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
            <Image source={ require('./assets/Suzhou.png')} style={{ width: screenWidth, height: screenHeight }} />
         </View>
       )}

       renderForeground={() => (
         <View key="parallax-header" style={styles.parallaxHeader}>
           <Text style={styles.stickySectionText1}>Suzhou</Text>
           <Text style={styles.sectionTitleText}>
             苏州
           </Text>
         </View>
       )}

       renderStickyHeader={() => (
         <View key="sticky-header" style={styles.stickySection}>
           <Text style={styles.stickySectionText}>苏州景点</Text>
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>拙政园</Text>
          </View>
          <Text style={{marginTop: 10}}>
            拙政园是我国私家园林的典范，也是苏州最大的古典园林，始建于明正德四年（公元1509年），由王献臣所筑。拙政园之名取义晋代潘岳《闲居赋》“灌园鬻蔬，以供朝夕之膳……是亦拙者之为政也”意。此地初为唐代诗人陆龟蒙的住宅，元朝时为大弘（宏）寺。明代弘治年间进士王献臣官至御史，于嘉靖时宦途失意，归隐苏州，将拙政园原址买下，邀请文征明设计园圃，前后共用16年，拙政园乃成。拙政园落成后不久，王献臣便去世了。其子不学无术，挥尽家财，一场豪赌将拙政园输给徐氏，令世人扼腕之极。此后拙政园迭经变迁，屡次易主，至太平天国时期拙政园的花园部分和东西部宅第统属忠王府邸，现存古建筑也大多出自这一时期。新中国成立后，拙政园收为国有，并进行了数次复原修复，现有面积达到5.2万平方米。
            </Text>
          <Text style={{marginTop: 5}} >几百年间，拙政园分分合合，其园名也随之不断更替，历经沧桑，终成一代名园。园内景观主要分为东、中、西三部分，布局以水池为中心，水域面积达到园林总面积的五分之一，原住宅部分新建为园林博物馆。东面空间疏朗，花木广植，有松岗竹坞之盛、山岛曲水之灵。中部有水池一泓，此处亦是整座园圃的主体，厅堂亭榭、山石花木分布于水池周围，如自然之山林；池边水廊高下曲折，移步换景，眼所及处，一派明净。水廊置明清碑刻，尤以文征明手迹引人驻足。拙政园巧借远处的北寺塔入景，在“与谁同坐轩”处，仿佛能感受到北寺塔已突破空间阻隔，融入园圃景观。园西为盆景园，比较全面地反映了苏派盆景的风貌，此处还设有茶室和评弹馆。拙政园南面，是民居建筑部分，为豪华庄严的四进式建筑，1992年被辟为苏州园林博物馆。园林博物馆全面翔实地展示了苏州园林自秦汉以来的发展历程，以苏州历代名园为例，对营造法式、园圃技法、造园高手、名人轶事等均有介绍，陈列了大量的图文、模型和文物，对喜爱建筑艺术、偏好园林和文化的旅游者来说，尤其值得一看。拙政园自1997年被联合国教科文组织列入《世界遗产名录》。</Text>

          <Text style={{marginTop: 5}} >
          地址：苏州市姑苏区东北街178号乘公交车游1、游2、55、202、309、811、518、529、178路至苏州博物馆站下车即到
          </Text>
          <Text>
         电话：0512-67539869，67510286
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
              <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>狮子林</Text>
          </View>
          <Text style={{marginTop: 10}}>
          狮子林始建于元代至正二年（公元1342年），由名僧天如禅师惟则的弟子出资兴建，以佛教境界命名为狮子林，另一层意思为园内太湖石形如狮子，因而得此雅名。数百年间，狮子林几易其主，迭经兴废，至清代筑园尤盛。公元1703年康熙帝游狮子林，赐“狮林寺”匾额。乾隆六下江南，均来到狮子林游览，题诗十首，题匾三块，其中“真趣”匾额至今仍存，悬挂于池边真趣亭中。乾隆皇帝对狮子林情有独钟，下令在北京圆明园、河北承德避暑山庄内仿建狮子林。1917年，颜料巨商贝仁元买下年久失修的狮子林，大幅重修，将狮子林建成一座绝世园林。狮子林既有古典园林的亭廊楼阁、水榭歌台、厅堂楼轩等景观，更以湖山奇石著称。狮子林的景观以水池为中心，洞壑深邃，曲折盘桓，迷阵一般的湖石景观被称为“假山王国”。身处狮子林，“人道我居城市里，我疑身在万山中”。
          </Text>
          <Text style={{marginTop: 5}} >
                    贝家是一个十分显赫的家族，人才辈出，其中最为人们所熟悉的便是如今已年近百岁高龄的国际建筑设计大师贝聿铭先生。在贝聿铭先生设计的最后一座建筑作品苏州博物馆中，可以清晰地看到园林故土对设计家的影响。2000年联合国教科文组织将狮子林列入《世界遗产名录》。
                    </Text>
          <Text style={{marginTop: 5}} >
          地址：苏州市姑苏区园林路23号
          </Text>
          <Text>
          到达方式：乘公交车游1、游2、55、178、262、811路至苏州博物馆，下车即到。还可乘坐公交车301、305路至平江路下
          </Text>
          <Text>
          开放时间：3月1日-10月15日7:30-17:30，10月16日-次年2月底7:30-17:00；闭园前30分钟停止售票
          </Text>
          <Text>
                   门票：4月至5月、7月至10月40元，6月、11月至次年3月30元；身高1.2米及以下儿童、或6周岁及以下儿童（需凭证件）由成人带领可免票，70周岁及以上老人凭有效证件可免票；身高1.2-1.5米儿童、或6-18周岁未成年人、全日制学校学生、60-69周岁老人凭有效证件均可半价优惠
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
                      <Text style={{color: '#3E4348',fontSize: 15, fontWeight: 'bold'}}>陈逸飞故居</Text>
                  </View>
                  <Text style={{marginTop: 10}}>
                  杰出的艺术家陈逸飞先生是浙江人，但他把周庄当成了第二故乡，与周庄结下了不解之缘，周庄的声名鹊起正是缘于陈先生的一幅油画《故乡的回忆——双桥》。有关周庄的现代故事，在陈逸飞的画笔下展现于世人面前。陈逸飞于1965年毕业于著名的上海美专，早年创作了《黄河颂》、《占领总统府》、《踱步》等为大众所熟知的油画作品。20世纪80年代初，在国内油画界已颇有名气的陈逸飞赴美留学，出国前不久来到周庄写生，为这里的气韵所倾倒，随后以周庄为题材创作了一系列油画作品。陈逸飞给周庄带来了无上的美誉，并与周庄人结下了深厚的友情。2005年，事业如日中天的陈逸飞先生在拍摄第二部电影《理发师》的档期中不幸与世长辞，年仅59岁。周庄人为纪念这位为古镇做出重大贡献的杰出艺术家，在古镇内的“逸飞之家”建起一座小型纪念馆，馆内立有陈逸飞先生的塑像，陈列其生平画作和其他实物资料，并在双桥边立下石碑以为纪念。
                  </Text>

                  <Text style={{marginTop: 5}} >
                 地址：苏州市昆山县周庄古镇
                  </Text>
                  <Text>
                  到达方式：苏州火车站旅游集散中心有班车前往，苏州汽车北站至周庄的班车，门票30元
                   </Text>
                   <Text>
                   开放时间：古镇全天开放；镇上小景点张厅、沈厅开放时间8:00-20:00，其他小景点开放时间8:00-16:30
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

AppRegistry.registerComponent('Suzhou', () => Suzhou);