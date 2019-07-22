/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class Main extends React.Component {
    static navigationOptions = {
        drawerLabel: '        个人中心',
        drawerIcon: () => (
            <Avatar
                rounded
                source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                size={70}
                activeOpacity={0.7}
                containerStyle={{flex: 2, marginLeft: 30}}
            />
        ),

    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Main')}
                title="Go to Main"
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        width: 24,
        height: 24,
    },
});