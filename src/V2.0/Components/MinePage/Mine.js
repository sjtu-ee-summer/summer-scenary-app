/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, ScrollView, AsyncStorage } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import CommonMyCell from './CommonMyCell'

export default class Main extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                {/* <Background imgSrouce={require('../Assets/MinePage/back.jpg')} /> */}
                <View style={{ alignItem: 'flex-start', marginTop: 20 }}>
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'http://pv18mucav.bkt.clouddn.com/IMG_7948.JPG',
                        }}
                        onPress={() => alert("想更换头像？不准")}
                        showEditButton
                        size={120}

                    />

                </View>

                <ScrollView contentContainerStyle={styles.scrollStyle}
                    showsVerticalScrollIndicator={false}
                    contentInset={{ top: -200 }}
                    contentOffset={{ y: 200 }}
                >
                    <View style={styles.sectionStyle}>
                        <CommonMyCell
                            leftIcon='travel'
                            leftTitle='我的行程'
                            rightTitle=''
                            rightIcon=''
                        >
                        </CommonMyCell>
                    </View>
                    <View>
                        <CommonMyCell
                            leftIcon='wallet'
                            leftTitle='我的钱包'
                            rightTitle=''
                            rightIcon=''
                        >
                        </CommonMyCell>
                    </View>
                    <View>
                        <CommonMyCell
                            leftIcon='room'
                            leftTitle='我的空间'
                            rightTitle=''
                            rightIcon=''
                        >
                        </CommonMyCell>
                    </View>
                    <View>
                        <CommonMyCell
                            leftIcon='setting'
                            leftTitle='设置'
                            rightTitle=''
                            rightIcon=''
                        >
                        </CommonMyCell>
                    </View>
                </ScrollView>








                <Button title="注销账户" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    icon: {
        width: 24,
        height: 24,
    },
    scrollStyle: {
        marginTop: 0,
    },
    sectionStyle: {
        marginTop: 20,
    },
});