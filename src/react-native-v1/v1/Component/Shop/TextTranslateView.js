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
var createReactClass = require('create-react-class');


var TranslateChooseLanguageView = createReactClass({

    getDefaultProps() {
        return {
            data: null,
        }
    },

    getInitialState() {
        return {
            currentPage: 0,
            text: '',
            translation: '',
        }
    },

    getTranslationFromApiAsync(text) {
      fetch('http://202.120.40.8:30454/translate/translate/text/' + text)
      .then((response) => {
        return response.text();
     })
     .then((responseJson) => {
        console.log(responseJson);
        alert(responseJson);
     })
     .catch((error) => {
        console.error(error);
     });
    },

    // getMoviesFromApiAsync() {
    //   fetch('https://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())//把response转为json格式
    //   .then((jsondata) => {    //上面的转好的json
    //     //alert(jsondata.movies[0].title);
    //     this.setState({ //将获取到的数据更新到state中
    //       title: jsondata.title,
    //       description: jsondata.description,
    //       movies: jsondata.movies,
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // },

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
              this.getTranslationFromApiAsync(this.state.text)
              //alert(this.state.text)
            }
          }
            text="翻译">
            </ButtonComponent>
      </View>
        
        
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

