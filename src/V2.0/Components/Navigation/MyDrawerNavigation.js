import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import TabMainScreen from "./TabMainScreen";
import DrawerSecondScreen from "./DrawerSecondScreen";
import MyStackNavigation from "./MyStackNavigation";
import UserPage from "../MinePage/Mine"
import Camera from "../CameraPage/Camera"
import { Avatar } from 'react-native-elements';

import { createDrawerNavigator, createAppContainer } from "react-navigation";

const MyDrawerNavigation = createDrawerNavigator(
    {
        UserPage: {
            screen: UserPage,
            navigationOptions: {
                drawerLabel: '        个人主页',
                drawerIcon: ({ tintColor }) => (
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
                        }}
                        size="large"
                        activeOpacity={0.7}
                        containerStyle={{ flex: 2, marginLeft: 30 }}
                    />
                    // <Image
                    //     source={require('../../images/color_for_danmu_normal.png')}
                    //     style={{tintColor: tintColor, width: 24, height: 24,}}
                    // />
                ),
            },
        },
        Home: {
            screen: MyStackNavigation,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../../images/color_for_danmu_normal.png')}
                        style={{tintColor: tintColor, width: 24, height: 24,}}
                    />
                ),
            },
        },
        Drawer: {
            screen: DrawerSecondScreen,
            navigationOptions: {
                drawerLabel: 'DrawerSecond',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../../images/face_unpress.png')}
                        style={ {tintColor: tintColor, width: 24, height: 24,}}
                    />
                ),
            },
        },
        DrawerSecond: {
            screen: Camera,
            navigationOptions: {
                drawerLabel: 'DrawerSecond',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../../images/face_unpress.png')}
                        style={{ tintColor: tintColor, width: 24, height: 24, }}
                    />
                ),
            },
        },
        

    },
    {
        initialRouteName: 'Home',
    }
);
export default createAppContainer(MyDrawerNavigation);



