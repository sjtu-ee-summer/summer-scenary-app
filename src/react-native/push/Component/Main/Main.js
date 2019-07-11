import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var Home = require('../Home/Home')
var Shop = require('../Shop/Shop')
var Mine = require('../Mine/Mine')
var More = require('../More/More')

var Main = React.createClass({
    getInitialState() {
        return {
            selectedTab: 'home'
        }
    },

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tabBarStyle}>
                {/* --首页-- */}
                {this.renderTabNavigatorItem('首页','account-balance','account-balance','home', '首页', Home)}
                {/* --商家-- */}
                {this.renderTabNavigatorItem('翻译','store','store','shop', '商家', Shop)}
                {/* --更多-- */}
                {this.renderTabNavigatorItem('景点识别','settings','settings','more', '更多', More)}
                {/* --我的-- */}
                {this.renderTabNavigatorItem('用户中心','account-circle','account-circle','mine', '我的', Mine)}
            </TabNavigator>

        )

    },

    renderTabNavigatorItem(title, iconName, selectedIconName, selectedTab, componentName, component) {
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={() => <VectorIcon name={iconName} size={25} color={'gray'}></VectorIcon>}
                renderSelectedIcon={() => <VectorIcon name={selectedIconName} size={25} color={'orange'}></VectorIcon>}
                onPress={() => { this.setState({ selectedTab: selectedTab }) }}
                selected={this.state.selectedTab === selectedTab}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.selectedStyle}
            >
                {/* <Home></Home> */}
                <Navigator
                    initialRoute={{ name: componentName, component: component }}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                >
                </Navigator>

            </TabNavigator.Item>

        )

    }




})



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
    }

});

module.exports = Main;