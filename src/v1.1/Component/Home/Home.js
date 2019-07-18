/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';

import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

var HomeDetail = require('../Home/HomeDetail');
var HeaderView = require('../Home/HomeHeaderView')
var MiddleView = require('../Home/HomeMiddleView')
var MiddleBottomView = require('../Home/HomeMiddleBottomView')
var ShopCenterView = require('../Home/ShopCenterView')
var GuestYouLikeView = require('../Home/GuestYouLikeView')
var ShopCenterDetailView = require('../Home/ShopCenterDetailView')

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default class Home extends Component {
    

    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollView
                    directionalLockEnabled={true}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                    <HeaderView></HeaderView>
                    
                    <MiddleView
                        MiddleViewPush={(title)=>{this.pushToMiddleViewDetail(title)}}
                    >
                    </MiddleView>

                    <GuestYouLikeView></GuestYouLikeView>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.topContainerStyle}>

                {/* <TouchableOpacity onPress={() => { alert('点击定位') }}>
                    <View style={styles.leftNavStyle}>
                        <Text>上海</Text>
                        <VectorIcon name='location-on' size={25} color={'gray'}></VectorIcon>
                    </View>
                </TouchableOpacity> */}

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

    pushToDetail() {
        this.props.navigator.push(
            {
                component: HomeDetail,
                title: '详情页'
            }
        );
    }

    pushToMiddleViewDetail(title) {
        if(title) {
            this.props.navigator.push(
                {
                    component: HomeDetail,
                    title: '详情页',
                    params: {
                        tips: title,
                    }

                }
            );
        } else {
            return
        }
    }

    pushToShopCenterViewDetail(url) {
        if(url) {
            this.props.navigator.push(
                {
                    component: ShopCenterDetailView,
                    params: {
                        url: url,
                    }

                }
            );
        } else {
            return
        }
    }
    
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F1ED',
    },
    homeTextStyle: {
        fontSize: 20,
    },
    topContainerStyle: {
        width: screenWidth,
        height: 68,
        backgroundColor: '#F5F1ED',
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

    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});

module.exports = Home;

