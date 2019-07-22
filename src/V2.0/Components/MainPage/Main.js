/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

export default class Main extends React.Component {
    static navigationOptions = {
        drawerLabel: '主页',
        drawerIcon: () => (
          <Image
            source={require('../Assets/MainPage/home-icon.png')}
            style={[styles.icon]}
          />
        ),
      };
    
      render() {
        return (
          <Button
            onPress={() => this.props.navigation.navigate('Notifications')}
            title="Go to notifications"
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
    width: 30,
    height: 30,
  },
});




