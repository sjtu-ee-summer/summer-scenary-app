import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import SecondScreen from "./SecondScreen";
import Camera from "../CameraPage/Camera"
import Trans from "../TransPage/Trans"
import GPS from "../GPSPage/GPS"
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

class TabMainScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        tabBarLabel: '主页',
        headerTitle:'Main',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../Assets/MainPage/home-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),

    };

    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1, padding: 20}}>
                <Button
                    onPress={() => this.props.navigation.navigate('Third',{ user: 'Lucy' })}
                    title="Go to Third"
                />
                <View style={{ backgroundColor: "#fff", height: 20}}/>
                <Button
                    onPress={() => this.props.navigation.navigate('DetailScreen')}
                    title="Go to DetailScreen"
                />
                <View style={{ backgroundColor: "#fff", height: 20}}/>
                <Button
                    onPress={() => this.props.navigation.navigate('ChangeLang')}
                    title="Go to ChangeLang"
                />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const TabMainScreenNavigator = createBottomTabNavigator(
    {
        Main: { screen: TabMainScreen },
        Trans: { screen: Trans},
        Camera: { screen: Camera },
        GPS: {screen: GPS},
        Second: { screen: SecondScreen },
        
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
            showIcon:'true',
            indicatorStyle: { height: 0 },
        },
    }
);

export default createAppContainer(TabMainScreenNavigator);