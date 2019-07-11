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
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';

import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/EvilIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
    Kaede,
    Hoshi,
    Jiro,
    Isao,
    Madoka,
    Akira,
    Hideo,
    Kohana,
    Makiko,
    Sae,
    Fumi,
  } from 'react-native-textinput-effects';
import ActionButton from 'react-native-action-button';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';


var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;


var TranslateChooseLanguageView = React.createClass({

    getDefaultProps() {
        return {
            data: null,
        }
    },

    getInitialState() {
        return {
            currentPage: 0,
            text: ''
        }
    },

    getMoviesFromApiAsync() {
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson.movies;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    render() {
        const { data } = this.props;

        return (
            <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
          >
        <View>
        <View>
        <TextInput
        placeholder = {'输入您想要翻译的内容'} 
        placeholderTextColor = {'#bbbbbb'}
        underlineColorAndroid = {'transparent'} 
        multiline
        onChangeText={(text) => this.setState({text})}
        style = {{paddingVertical: 0, fontSize: 16, height: 155, borderColor: 'gray', borderWidth: 1}}/>
      </View>
      <View style={{padding: 5}}></View>
      <ButtonComponent
            onPress={() => {
              this.state.text = this.getMoviesFromApiAsync()
            }
          }
            text="翻译">
            </ButtonComponent>
      </View>
      <ButtonComponent
            onPress={() => {alert(this.state.text)}}
            text="翻译">
            </ButtonComponent>
        
        
              </ScrollView>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'white',
      },
      content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 0,
      },
      card1: {
        paddingVertical: 16,
      },
      card2: {
        padding: 16,

      },
      input: {
        marginTop: 4,
      },
      title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
      },
});

module.exports = TranslateChooseLanguageView;

