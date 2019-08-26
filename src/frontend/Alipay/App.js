/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import XPay from 'react-native-puti-pay';


export default class App extends Component<{}> {
    _aliPay = () => {
        console.log("点击进行支付");
        let url='http://192.119.70.60:8080/orderinfo?price=12';
//        let orderInfo='';
        fetch(url, {
                method: 'GET',
            }).then(
                (result) => {
                    if (result.ok) {
                        console.log(result)
                        result.text().then(
                            (obj) => {
                                console.log(obj);
                                let orderInfo = obj;
                                XPay.setAlipaySandbox(true)
                                 //支付宝支付
                                 //orderInfo是后台拼接好的支付参数
                                XPay.alipay(orderInfo,
                                res => {
                                    console.log('回调', res);
                                    const {result, memo, resultStatus} = res;
                                    if (resultStatus === '9000') {
                                        console.log('充值成功')
                                    } else {
                                        console.log('充值失败')
                                    }
                                })
                            }
                        )
                    }
                }
            ).catch((error) => {
                console.log(error)
            })
//        let data = 'partner=\"asdfasdf\"&seller_id=\"asdfasdf@qq.com\"&out_trade_no=\"ALIPAY15307684880120000000001\"&subject=\"描述\"&body=\"在线支付\"&total_fee=\"0.01\"&notify_url=\"http://xx.xx.xx.xx/api/0/alipay/alipayCallback\"&service=\"m.pay\"&payment_type=\"1\"&_input_charset=\"utf-8\"&it_b_pay=\"30m\"&sign=\sdfasdf\"&sign_type=\"RSA\"';
//        let data = 'charset=utf-8&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22082416413665655%22%7D&method=alipay.trade.app.pay&app_id=2016101000652722&sign_type=RSA2&version=1.0&timestamp=2016-07-29+16%3A55%3A53&sign=GeI%2BsIIF2tlzGP10BaYKrl3to61hMd9MLXiWzCl4UVxhE9zOKNrrx8dQCQcmrtDEwov6So0myS4VNGzRw%2BHe5npjE8VJSYv0EAzitnCVD1b1FFpG58D%2BN67qSgvQkBRDnVgSUx%2FwoB%2F2kHBgkPrvFCaKQ3iwTKMM6vgFfgxFV4hz1hJbAG%2F4adf8TI9NPrw%2FKLnyfFEM5uQKBIz87Gfe5ltJN1%2Fq6TO2b0uAoEg7bNVeys1MynVUsUtYMyixBYVWTu6KjefMoq09gE8X7vLO2UMGd7HwZnZJepPwmKNuV66LDfitwIY%2FqTvmuc4k66JKpZFZxmhRreMNc%2B%2Bq9OtD2Q%3D%3D';
//         let orderInfo='alipay_sdk=alipay-sdk-java-dynamicVersionNo&app_id=2016101000652722&biz_content=%7B%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%222019082511412588927%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22subject%22%3A%22App%E6%94%AF%E4%BB%98%E6%B5%8B%E8%AF%95Java%22%2C%22timeout_express%22%3A%22300m%22%2C%22total_amount%22%3A%2210%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=%E5%95%86%E6%88%B7%E5%A4%96%E7%BD%91%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E7%9A%84%E5%BC%82%E6%AD%A5%E5%9C%B0%E5%9D%80&sign=Mxbn2GVO09vciTcKAkbYlho%2FNH%2Bv3LlqMz171Zw9GWmKi8uiH5Eg3CF8a2k4Dimyb67Bn0y2i3UcoqMuw9mpUW%2B%2F4AU6xCdE0yTsgt3q80%2FRe8lgTeRsUSPCBsmeqIEqPqMVjYR6kBaJugvszo95ZLxqr5xFVvqapdk0CntsH887K2d4OTxQDahMSAZEtmwWZWRJiy2d0DLu9pZXWyYzlCCMNaahxWmbIqvEDSW6m8jo1%2BGppKWMrTSlnRKNRHzXu64icVWm8TdyKSol2Nv51NwYu%2BgWKpeCVudyCiRtrcO%2BTrLW4mSxMycR7nVCtB87K6PAVx0sEeDJi6IJHdcf3g%3D%3D&sign_type=RSA2&timestamp=2019-08-25+11%3A41%3A25&version=1.0';
//         let orderInfo = 'alipay_sdk=alipay-sdk-java-dynamicVersionNo&app_id=2016101000652722&biz_content=%7B%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%222019082512172684076%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22subject%22%3A%22App%E6%94%AF%E4%BB%98%E6%B5%8B%E8%AF%95Java%22%2C%22timeout_express%22%3A%22300m%22%2C%22total_amount%22%3A%2210%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=%E5%95%86%E6%88%B7%E5%A4%96%E7%BD%91%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E7%9A%84%E5%BC%82%E6%AD%A5%E5%9C%B0%E5%9D%80&sign=bwoVpdZg%2Bs4CtfYAWdovgfUDwUAeh3SIXCE5csioVckl2RhG3FelEqOiZB%2BHJNnH6QKLr2dZAbPTLZ2TQglky590R5DCayGYlcE62Ojxjxe%2F2f1WJ6fcVmBPzc91EsMmbIfe%2FD79vnceg8Yh7J6UMRI3qswvtJkVZUuj2FMtuwaLGK1MaRvV1Vrx24ElIhbZvU%2BiL%2BKqdKXqigmLVHeHfYscsmPlhPvHLgmtYjcXHcHf5BCtlmH%2BsH9wLEr%2BPPHim5LjNfGqga20e%2FR0qC4OBoRqNHwre7aCMu77wKWwgmxJf2tpX%2BwWXweeVexQq9PcO37cTwMgZUmVSOsYn2fsCA%3D%3D&sign_type=RSA2&timestamp=2019-08-25+12%3A17%3A26&version=1.0';
         //设置    支付宝URL Schemes
//                XPay.setAlipayScheme(scheme)
                //支付宝开启沙箱模式 仅限安卓

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._aliPay}>
                    <View style={styles.btn}>
                        <Text style={styles.text}>支付宝支付</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    btn: {
        width: 200,
        height: 30,
        backgroundColor: "#999",


    },
    text: {
        color: "#fff",
        textAlign: "center",
        lineHeight: 30
    }
});

