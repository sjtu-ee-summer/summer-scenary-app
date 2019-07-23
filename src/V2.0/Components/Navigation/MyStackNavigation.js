import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
import { createStackNavigator, createAppContainer, DrawerActions } from 'react-navigation';
import ThirdScreen from "./ThirdScreen";
import TabMainScreen from "./TabMainScreen";
import MainPage from "../MainPage/Main"
import DetailScreen from "../CameraPage/DetailScreen"
import NothinScreen from "../CameraPage/NothingScreen"
import UserPage from "../MinePage/Mine"

const MyStackNavigation = createStackNavigator({
    Main: {
        screen: TabMainScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                // <Button
                //     title='Menu'
                //     onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                // />
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image
                        source={require('../Assets/NavigationPage/menu_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },
    // Main: {
    //     screen: TabMainScreen,
    //     navigationOptions:({ navigation }) => ({
    //         headerTitleStyle:{
    //             alignSelf:'center',
    //         },
    //         headerLeft: (
    //             <Button
    //                 title='Menu'
    //                 onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    //             />
    //         ),
    //     }),
    // },
    Third: {
        screen: ThirdScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <Button
                    title='Menu'
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
            ),
        }),
    },

    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    UserPage: {
        screen: UserPage,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },

    NothingScreen: {
        screen: NothinScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../Assets/NavigationPage/back_icon.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            ),
        }),
    },
});
export default createAppContainer(MyStackNavigation);