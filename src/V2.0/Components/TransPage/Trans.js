import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class Trans extends React.Component {
    static navigationOptions = {
        tabBarLabel: '翻译',
        headerTitle:'Second',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../Assets/TransPage/trans_icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (

            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

