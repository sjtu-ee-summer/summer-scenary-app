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
    Image
} from 'react-native';


var Dimensions = require('Dimensions');
var sWidth = Dimensions.get('window').width;
var createReactClass = require('create-react-class');

var ChooseTypeTranslateView = createReactClass({

    getDefaultProps() {
        return {
            MiddleViewPush: null,
        }
    },

    getInitialState() {
        return {
            currentPage: 0,
        }
    },

    render() {
        return (
            <View style={styles.containerStyle}>
                {/* {this.renderLeftView()} */}
                {/* <View style={styles.rightViewStyle}>
                    {this.renderRightView()}
                </View> */}
            </View>
        );
    },

    // renderLeftView() {
    //     const { middleData } = this.props;
    //     var leftData = middleData.leftData;

    //     return (
    //         <View style={styles.leftViewStyle}>
    //             <Image style={{ width: 150, height: 100 }} source={require('./master.png')}></Image>
    //             <Text style={{ color: 'gray', marginTop: 5 }}>{leftData.title}</Text>
    //             <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
    //             </View>
    //         </View>
    //     )

    // },

    // renderRightView() {
    //     const { middleData } = this.props;
    //     var rightData = middleData.rightData;

    //     var itemArr = [];
    //     for (var i = 0; i < rightData.length; i++) {
    //         var data = rightData[i]

    //         itemArr.push(
    //             <MiddleCommonView
    //                 key={i}
    //                 data={data}
    //                 CommonViewPush={(title) => { this.middleViewPush(title) }}
    //             >
    //             </MiddleCommonView>
    //         )
    //     }
    //     return itemArr;

    // },

    // renderRightView() {
    //     const{middleData} = this.props;
    //     var rightData = middleData.rightData;

    //     var data = rightData[0];
    //     var data1 = rightData[1];

    //     return(
    //         this.renderRow(data)
            
    //     );
    // },

    renderRow(data){
        var img = require('./voice.png');
        var img1 = require('./pic.png');
        return(
<View style={styles.containerStyle1}>
            <View style={styles.leftStyle}>
                <Text style={{ color: 'gray', fontSize: 18 }}>{data.title}</Text>
                <Text style={{ color: 'gray', fontSize: 13 }}>{data.subtitle}</Text>
            </View>
            <Image source={(data.image==="0")?img:img1} style={{ width: 50, height: 50, position: 'absolute', right: 5 }} />
    </View>
)
        
    },

    middleViewPush(title) {
        if (title) {
            this.props.MiddleViewPush(title)
        } else {
            return
        }
    }
})

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        width: sWidth,
        height: 161,
    },
    leftViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (sWidth - 1) / 2,
        height: 161,
        marginRight: 1,
    },
    rightViewStyle: {

    },
    containerStyle1: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (sWidth - 2) / 2,
        height: 80,
        marginBottom: 1,
        marginRight: 1,
    },
    leftStyle: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});

module.exports = ChooseTypeTranslateView;

