/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Linking} from 'react-native';
import QueryString from 'query-string';
import Alipay from '@0x5e/react-native-alipay';
import { WebView } from 'react-native-webview';

// 快捷登录授权
//try {
//  let infoStr = 'apiname=com.alipay.account.auth&method=alipay.open.auth.sdk.code.get&app_id=xxxx&app_name=mc&biz_type=openservice&pid=xxxx&product_id=APP_FAST_LOGIN&scope=kuaijie&target_id=xxxx&auth_type=AUTHACCOUNT&sign_type=RSA2&sign=xxxx'; // get from server, signed
//  let response = await Alipay.authWithInfo(infoStr);
//  console.info(response);
//
//  let { resultStatus, result, memo } = response;
//  let { success, result_code, auth_code, user_id } = QueryString.parse(result);
//
//  // TODO: ...
//
//} catch (error) {
//  console.error(error);
//}

// APP支付
//try {
//  let orderStr = 'app_id=xxxx&method=alipay.trade.app.pay&charset=utf-8&timestamp=2014-07-24 03:07:50&version=1.0&notify_url=https%3A%2F%2Fapi.xxx.com%2Fnotify&biz_content=%7B%22subject%22%3A%22%E5%A4%A7%E4%B9%90%E9%80%8F%22%2C%22out_trade_no%22%3A%22xxxx%22%2C%22total_amount%22%3A%229.00%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&sign_type=RSA2&sign=xxxx'; // get from server, signed
//  let response = await Alipay.pay(orderStr);
//  console.info(response);
//
//  let { resultStatus, result, memo } = response;
//  let { code, msg, app_id, out_trade_no, trade_no, total_amount, seller_id, charset, timestamp } = JSON.parse(result);
//
//  // TODO: ...
//
//} catch (error) {
//  console.error(error);
//}

//_retrieveData = async () =>  {
//  console.log('点击了Button按钮');
//
//  try {
//    let orderStr = 'app_id=xxxx&method=alipay.trade.app.pay&charset=utf-8&timestamp=2014-07-24 03:07:50&version=1.0&notify_url=https%3A%2F%2Fapi.xxx.com%2Fnotify&biz_content=%7B%22subject%22%3A%22%E5%A4%A7%E4%B9%90%E9%80%8F%22%2C%22out_trade_no%22%3A%22xxxx%22%2C%22total_amount%22%3A%229.00%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&sign_type=RSA2&sign=xxxx'; // get from server, signed
//    let response = await Alipay.pay(orderStr);
//    console.info(response);
//
//    let { resultStatus, result, memo } = response;
//    let { code, msg, app_id, out_trade_no, trade_no, total_amount, seller_id, charset, timestamp } = JSON.parse(result);
//
//    // TODO: ...
//
//  } catch (error) {
//    console.error(error);
//  }
//
//};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {

    open=()=>{
		let url = 'http://2493s0p911.zicp.vip:15832/alipay.trade.wap.pay-java-utf-8/wappay/pay.jsp';
        Linking.openURL(url);
	}

  _retrieveData = async () =>  {
    console.log('点击了Button按钮');

//    try {
//      console.log("emmm")
//      let orderStr = 'app_id=xxxx&method=alipay.trade.app.pay&charset=utf-8&timestamp=2014-07-24 03:07:50&version=1.0&notify_url=https%3A%2F%2Fapi.xxx.com%2Fnotify&biz_content=%7B%22subject%22%3A%22%E5%A4%A7%E4%B9%90%E9%80%8F%22%2C%22out_trade_no%22%3A%22xxxx%22%2C%22total_amount%22%3A%229.00%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&sign_type=RSA2&sign=xxxx'; // get from server, signed
//      let response = await Alipay.pay(orderStr);
//      console.info(response);
//
//      let { resultStatus, result, memo } = response;
//      let { code, msg, app_id, out_trade_no, trade_no, total_amount, seller_id, charset, timestamp } = JSON.parse(result);
//
//      // TODO: ...
//
//    } catch (error) {
//      console.error(error);
//    }


//try {
//  let h5PayUrl = 'http%3A%2F%2F2493s0p911.zicp.vip:15832%2Falipay.trade.wap.pay-java-utf-8%2Fwappay%2Fpay.jsp?_input_charset=utf-8&format=xml&partner=xxxx&req_data=%3Cauth_and_execute_req%3E%3Crequest_token%3Exxxx%3C%2Frequest_token%3E%3C%2Fauth_and_execute_req%3E&sec_id=MD5&service=alipay.wap.auth.authAndExecute&v=2.0&sign=xxxx'; // get from webview, signed
//  let { resultCode, returnUrl } = await Alipay.payInterceptorWithUrl(h5PayUrl);
//  console.info(resultCode, returnUrl);
//} catch (error) {
//  console.error(error);
//}

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          /*onPress={this.open.bind(this)}*/
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
     </View>
//        <WebView
//
//          source={{uri:"http://2493s0p911.zicp.vip:15832/alipay.trade.wap.pay-java-utf-8/wappay/pay.jsp?id=1",method: 'POST'}}
//          >
//        </WebView>

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
});
