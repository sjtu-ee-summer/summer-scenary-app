/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Switch, Text, View,
  ScrollView, Image,
  ListView, FlatList
} from 'react-native';
import { requestLocationPermission } from './utils'
import styles from './styles'

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var GuestYouLikeView = require('./Round')
var createReactClass = require('create-react-class');

var guestData = require('../Home/GuestYouLikeData.json')
var ShopTopCommonView = require('../Home/ShopTopCommonView')

import { MapView } from 'react-native-amap3d'

var longtitude = ''
var latitude = ''
var roundData = ''

export default class Location extends Component {
  // static navigationOptions = {
  //   title: '地图控件',
  // }

  state = {
    showsCompass: true,
    showsScale: true,
    showsZoomControls: true,
    showsLocationButton: true,
    logs: [],
  }

  componentDidMount() {
    requestLocationPermission()
  }

  _log(event, data) {
    this.setState({
      logs: [
        {
          key: Date.now().toString(),
          time: new Date().toLocaleString(),
          event,
          data: JSON.stringify(data, null, 2),
        },
        ...this.state.logs,
      ],
    })
    if (this.state.logs.length > 0) {
      var location = JSON.parse(this.state.logs[0].data)
      longtitude = location.longitude
      latitude = location.latitude
      console.log(longtitude)
      console.log(latitude)
    }
    // console.log("地理信息")
    // console.log(this.state.logs[0])
    // longtitude = this.state.logs[0].longitude
    // latitude = this.state.logs[0].latitude
    // console.log(longtitude)
    // console.log(latitude)
  }

  _logPressEvent = ({ nativeEvent }) => this._log('onPress', nativeEvent)
  _logLongPressEvent = ({ nativeEvent }) => this._log('onLongPress', nativeEvent)
  _logLocationEvent = ({ nativeEvent }) => this._log('onLocation', nativeEvent)
  _logStatusChangeCompleteEvent = ({ nativeEvent }) => this._log('onStatusChangeComplete', nativeEvent)

  _renderItem = ({ item }) =>
    <Text style={styles.logText}>{item.time} {item.event}: {item.data}</Text>


  render() {
    return (
      <View>
        <View style={styles.mapStyle}>

          <View style={styles.controls}>
            <View style={styles.control}>
              <Text>指南针</Text>
              <Switch
                style={styles.switch}
                onValueChange={showsCompass => this.setState({ showsCompass })}
                value={this.state.showsCompass}
              />
            </View>
            <View style={styles.control}>
              <Text>比例尺</Text>
              <Switch
                style={styles.switch}
                onValueChange={showsScale => this.setState({ showsScale })}
                value={this.state.showsScale}
              />
            </View>
            <View style={styles.control}>
              <Text>定位</Text>
              <Switch
                style={styles.switch}
                onValueChange={showsLocationButton => this.setState({ showsLocationButton })}
                value={this.state.showsLocationButton}
              />
            </View>
            <View style={styles.control}>
              <Text>缩放</Text>
              <Switch
                style={styles.switch}
                onValueChange={showsZoomControls => this.setState({ showsZoomControls })}
                value={this.state.showsZoomControls}
              />
            </View>
          </View>
          <MapView
            locationEnabled
            locationInterval={1000000}
            distanceFilter={10}
            onPress={this._logPressEvent}
            onLongPress={this._logLongPressEvent}
            onLocation={this._logLocationEvent}
            // onStatusChangeComplete={this._logStatusChangeCompleteEvent}
            // style={styles.body}
            // locationEnabled={this.state.showsLocationButton}
            showsCompass={this.state.showsCompass}
            showsScale={this.state.showsScale}
            showsLocationButton={this.state.showsLocationButton}
            showsZoomControls={this.state.showsZoomControls}
            style={styles.map}
          />
        </View>
        {/* <FlatList
          style={styles.logs}
          data={this.state.logs}
          renderItem={this._renderItem}
        /> */}
        <ScrollView
          directionalLockEnabled={true}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <Round></Round>
        </ScrollView>
      </View>

    )
  }
}

var Round = createReactClass({

  getDefaultProps() {
    return {
      guestData: guestData,
      roundData: ''
    }
  },

  getInitialState() {
    const { guestData } = this.props;
    var listData = guestData.data.poiInfos;

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      dataSource: ds.cloneWithRows(listData),
    }
  },

  

  getRoundData() {
    console.log(latitude)
    console.log(longtitude)
    var boundary = 'nearby(' + latitude + ',' + longtitude + ',' + '1000)'
    console.log(boundary)
    return fetch('https://apis.map.qq.com/ws/place/v1/search?boundary='
      + boundary + '&page_size=' + '20' + '&page_index=' + '1' + '&keyword=' +
      '美食' + '&orderby=' + '_distance' + '&key=' + 'TVHBZ-WUDCI-UZQGY-5544C-Z6IUV-WCFKD')
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson.data)
        roundData = responseJson.data
        console.log(roundData)
      })
      .catch((error) => {
        console.error(error);
      });
  },

  render() {
    if (longtitude != '') {
      console.log("round")
      this.getRoundData()

    }

    // console.log(this.props.showsCompass)
    const { guestData } = this.props;

    return (
      <View style={styles.containerStyle}>
        <ShopTopCommonView
          data={guestData.topData}
        >
        </ShopTopCommonView>
        <ListView
          contentContainerStyle={styles.listContainerStyle}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        >
        </ListView>
        {/* <FlatList
          style={styles.listContainerStyle}
          data={roundData}
          renderItem={this.renderRow}
        /> */}


      </View>
    );
  },

  renderRow(data) {

    return (
      <View style={styles.cellStyle}>
        {/* <Image source={{ uri: data.frontImg }} style={styles.cellImageStyle}></Image> */}
        <View style={styles.cellRightStyle}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{data.title}</Text>
          <Text style={{ fontSize: 10, color: 'gray', marginVertical: 5 }}>{data.address}</Text>
          <View style={styles.cellRightBottomStyle}>
            {/* <Text style={{ fontSize: 10, color: 'gray' }}>{`人均¥${data.avgPrice}`}</Text> */}
            {/* <Text style={{ fontSize: 10, color: 'orange', marginLeft: 100 }}>{`${data.allCommentNum}条评论`}</Text> */}
          </View>
        </View>
      </View>

    )


  }

})


module.exports = Location;

