import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
import {OffCanvasReveal} from 'react-native-off-canvas-menu'
import { BackHandler } from 'react-native';


var NavBar = require('../Home/HomeHeaderView')
var Home = require('../Home/Home')
var Shop = require('../Shop/Shop')
var Mine = require('../Mine/Mine')
var More = require('../More/More')
var Location = require('../Location/Location')
var createReactClass = require('create-react-class');

class LogoTitle extends React.Component {
    

    render() {
      return (
        <Image
          source={require('./spiro.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }

class Nav extends React.Component {
    render() {
        return (
            

            <View style={styles.topContainerStyle}>

                <TouchableOpacity onPress={() => { alert('点击定位') }}>
                    <View style={styles.leftNavStyle}>
                        <Text>上海</Text>
                        <VectorIcon name='location-on' size={25} color={'gray'}></VectorIcon>
                    </View>
                </TouchableOpacity>

                <TextInput
                    placeholder='东方明珠、西湖、三峡'
                    style={styles.inputStyle}
                >
                </TextInput>
                <View style={styles.rightNavStyle}>
                    <TouchableOpacity onPress={() => { alert('点击注意！') }}>
                        <VectorIcon name='notifications-none' size={25} color={'gray'}></VectorIcon>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { alert('点击扫一扫！') }}>
                        <VectorIcon name='fullscreen' size={25} color={'gray'}></VectorIcon>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}


class Main extends React.Component{    
    static navigationOptions = {
        headerTitle: <Nav />,
        // headerRight: (
        //   <Button
        //     onPress={() => alert('This is a button!')}
        //     title="Info"
        //     color="#fff"
        //   />
        // ),
      };
      constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
          }
    
        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
          this.setState(previousState => {
            return { isShowingText: !previousState.isShowingText };
          });
        }, 1000);
      }
      handleMenu() {
        const {menuOpen} = this.state
        this.setState({
          menuOpen: !menuOpen
        })
      }
    render() {
        
       

        const navigate = this.props.navigation;
        return (
            <View style={{flex: 1}}>
      <OffCanvasReveal
      active={this.state.menuOpen}
      onMenuPress={this.handleMenu.bind(this)}
      backgroundColor={'#222222'}
      menuTextStyles={{color: 'white'}}
      handleBackPress={true}
      menuItems={[
        {
          title: 'Menu 1',
          icon: <Icon name="camera" size={35} color='#ffffff' />,
          renderScene: <Nav/>
        },
        {
          title: 'Menu 2',
          icon: <Icon name="bell" size={35} color='#ffffff' />,
          renderScene: <Nav/>
        }
      ]}/>
    </View>
            // <TabNavigator tabBarStyle={styles.tabBarStyle}>
            //     {/* --首页-- */}
            //     {this.renderTabNavigatorItem('首页','account-balance','account-balance','home', '首页', Home)}
            //     {/* --我的-- */}
            //     {this.renderTabNavigatorItem('定位','navigation','navigation','location', '定位', Location)}
            //     {/* --更多-- */}
            //     {this.renderTabNavigatorItem1('景点识别','camera','camera','more', '景点识别', More)}
            //     {/* --商家-- */}
            //     {this.renderTabNavigatorItem('翻译','chat','chat','shop', '翻译', Shop)}
            //     {/* --我的-- */}
            //     {this.renderTabNavigatorItem('用户中心','account-circle','account-circle','mine', '用户中心', Mine)}
            // </TabNavigator>
    //         <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
    //     {/* Rest of the app comes ABOVE the action button component !*/}
    //     <ActionButton buttonColor="rgba(231,76,60,1)">
    //       <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
    //         <Icon name="md-create" style={styles.actionButtonIcon} />
    //       </ActionButton.Item>
    //       <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => this.props.navigation.navigate('Shop')}>
    //         <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
    //       </ActionButton.Item>
    //       <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => this.props.navigation.navigate('More')}>
    //         <Icon name="md-done-all" style={styles.actionButtonIcon} />
    //       </ActionButton.Item>
    //     </ActionButton>
    //   </View>

        )

    };

    // renderTabNavigatorItem(title, iconName, selectedIconName, selectedTab, componentName, component) {
    //     return (
    //         <TabNavigator.Item
    //             title={title}
    //             renderIcon={() => <VectorIcon name={iconName} size={25} color={'gray'}></VectorIcon>}
    //             renderSelectedIcon={() => <VectorIcon name={selectedIconName} size={25} color={'orange'}></VectorIcon>}
    //             onPress={() => { this.setState({ selectedTab: selectedTab }) }}
    //             selected={this.state.selectedTab === selectedTab}
    //             titleStyle={styles.titleStyle}
    //             selectedTitleStyle={styles.selectedStyle}
    //         >
    //             {/* <Home></Home> */}
    //             <Navigator
    //                 initialRoute={{ name: componentName, component: component }}
    //                 configureScene={(route) => {
    //                     return Navigator.SceneConfigs.PushFromRight;
    //                 }}
    //                 renderScene={(route, navigator) => {
    //                     let Component = route.component;
    //                     return <Component {...route.params} navigator={navigator} />
    //                 }}
    //             >
    //             </Navigator>

    //         </TabNavigator.Item>

    //     )

    // },

    // renderTabNavigatorItem1(title, iconName, selectedIconName, selectedTab, componentName, component) {
    //     return (
    //         <TabNavigator.Item
    //             title={title}
    //             renderIcon={() => <VectorIcon name={iconName} size={45} color={'gray'}></VectorIcon>}
    //             renderSelectedIcon={() => <VectorIcon name={selectedIconName} size={25} color={'orange'}></VectorIcon>}
    //             onPress={() => { this.setState({ selectedTab: selectedTab }) }}
    //             selected={this.state.selectedTab === selectedTab}
    //             titleStyle={styles.titleStyle}
    //             selectedTitleStyle={styles.selectedStyle}
    //         >
    //             {/* <Home></Home> */}
    //             <Navigator
    //                 initialRoute={{ name: componentName, component: component }}
    //                 configureScene={(route) => {
    //                     return Navigator.SceneConfigs.PushFromRight;
    //                 }}
    //                 renderScene={(route, navigator) => {
    //                     let Component = route.component;
    //                     return <Component {...route.params} navigator={navigator} />
    //                 }}
    //             >
    //             </Navigator>

    //         </TabNavigator.Item>

    //     )

    // },
    




}



const styles = StyleSheet.create({
    tabBarStyle: {
        // paddingTop: 10,
        // paddingBottom: 10,
    },
    titleStyle: {
        fontSize: 12,
        // color:'black'
    },
    selectedStyle: {
        fontSize: 12,
        color:'orange'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
      containerStyle: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F9',
    },
    homeTextStyle: {
        fontSize: 20,
    },
    topContainerStyle: {
        width: screenWidth,
        height: 68,
        backgroundColor: '#9fdf9f',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
    },
    inputStyle: {
        width: screenWidth * 0.7,
        height: 40,
        backgroundColor: 'white',
        marginTop: 18,
        borderRadius: 18,
        padding: 12,

    },
    leftNavStyle: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightNavStyle: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerViewStyle: {

    }
});

module.exports = Main;