import React, { Component } from 'react';
import {
    View,
    Text,
    ProgressBarAndroid,
    Modal,
    StyleSheet
} from 'react-native';

var createReactClass = require('create-react-class');

var Loading = createReactClass({
    render() {
        return(
            <Modal
                transparent = {true}
                onRequestClose={()=> this.onRequestClose()}
            >
                <View style={styles.loadingBox}>
                    <ProgressBarAndroid styleAttr='Inverse' color='#FF4500' />
                    <Text style={styles.textStyle}>努力识别中...</Text>
                </View>
            </Modal>
        );
    }
})

const styles = StyleSheet.create({
    loadingBox: { // Loading居中
            flex:1,
            justifyContent:'center',
            backgroundColor:'rgba(0, 0, 0, 0.5)', // 半透
            alignItems:'center',
            },
            textStyle:{
          
               fontSize:30,
               textAlign:'center',
               justifyContent: 'center',
               margin:5,
               color: "#FF4500"
              },

});

module.exports = Loading;
