import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  Switch,
  ScrollView,
  ListView, FlatList,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { requestLocationPermission } from './utils'
import styles from './styles'

import { MapView } from 'react-native-amap3d'
import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var longtitude = ''
var latitude = ''
var result = []

export default class Trans extends React.Component {
  static navigationOptions = {
    tabBarLabel: '定位',
    headerTitle: 'Second',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Assets/GPSPage/GPS_unpress.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

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
    }, () => {

      var location = JSON.parse(this.state.logs[0].data)
      longtitude = location.longitude
      latitude = location.latitude
      console.log('地理信息1')
      console.log(longtitude)
      console.log(latitude)
      // this._UpLocation1Async();
      // this._UpLocation2Async();
      // console.log('地理信息2')
      // AsyncStorage.getItem('longtitude')
      // .then((value) => {
      //   const data = JSON.parse(value);
      //   console.log(data);
      // });
      // AsyncStorage.getItem('latitude')
      // .then((value) => {
      //   const data = JSON.parse(value);
      //   console.log(data);
      // });

    })
  }

  // _UpLocation1Async = async () => {
  //   await AsyncStorage.setItem('longtitude', JSON.stringify(longtitude));
  // }

  // _UpLocation2Async = async () => {
  //   await AsyncStorage.setItem('latitude', JSON.stringify(latitude));
  // }

  _logPressEvent = ({ nativeEvent }) => this._log('onPress', nativeEvent)
  _logLongPressEvent = ({ nativeEvent }) => this._log('onLongPress', nativeEvent)
  _logLocationEvent = ({ nativeEvent }) => this._log('onLocation', nativeEvent)
  _logStatusChangeCompleteEvent = ({ nativeEvent }) => this._log('onStatusChangeComplete', nativeEvent)

  _renderItem = ({ item }) =>
    <Text style={styles.logText}>{item.time} {item.event}: {item.data}</Text>

  async toFood() {
    await this.getRoundData()
  }

  getRoundData() {
    var location = latitude + ',' + longtitude
    return fetch('http://api.map.baidu.com/place/v2/search?query=美食&location=' +
      location + '&radius=2000&output=json&ak=GVtyjdY7UzwghWplLuGgGcoSiDYHcqb6&scope=2&output=json&page_size=5')
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((responseJson) => {
        roundData = responseJson.results
        console.log(roundData)
      })
      .then(() => {
        this.getResult().then(() => {
          console.log('result')
          console.log(result)
          this.props.navigation.navigate('FoodPage', { longtitude: longtitude, latitude: latitude, result: result })

        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async getResult() {
    for (var i = 0; i < roundData.length; i++) {
      var url = roundData[i].detail_info.detail_url
      console.log("url")
      console.log(url)
      await this.getPic(url, i)
      console.log(result)
    }

  }

  getPic(pic, i) {
    let url = "http://202.120.40.8:30454/imgidentify/imgidentify/py"
    let formData = new FormData()
    formData.append("url", pic)
    return fetch(url, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer b634ba05-9718-49c3-9e1d-89a02bbc848a'
      },
      body: formData
    }).then((response) => {
      console.log("fetch")
      return response.text()
    }).then((r) => {
      console.log(r)
      result[i] = r
    }).catch((error) => {
      console.log(error)
    })

  }

  render() {
    return (

      // <Button
      //     onPress={() => this.props.navigation.goBack()}
      //     title="Go back home"
      // />
      <View>
        <View style={styles.mapStyle}>
          <MapView
            locationEnabled
            locationInterval={1000000}
            distanceFilter={10}
            onPress={this._logPressEvent}
            onLongPress={this._logLongPressEvent}
            onLocation={this._logLocationEvent}
            onStatusChangeComplete={this._logStatusChangeCompleteEvent}
            // style={styles.body}
            // locationEnabled={this.state.showsLocationButton}
            showsCompass={this.state.showsCompass}
            showsScale={this.state.showsScale}
            showsLocationButton={this.state.showsLocationButton}
            showsZoomControls={this.state.showsZoomControls}
            style={styles.map}
          />
        </View>
        <ScrollView
          directionalLockEnabled={true}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.containerStyle1}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('FoodPage', { longtitude: longtitude, latitude: latitude})}}>
              <View style={styles.containerStyle}>
                <View style={styles.leftStyle}>
                  <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/GPSPage/food.png')}></Image>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>美食</Text>
                </View>
                <View style={styles.rightStyle}>
                  <VectorIcon name="chevron-right" size={25} color={'gray'}></VectorIcon>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('HotelPage', { longtitude: longtitude, latitude: latitude}) }}>
              <View style={styles.containerStyle}>
                <View style={styles.leftStyle}>
                  <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/GPSPage/hotel.png')}></Image>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>酒店</Text>
                </View>
                <View style={styles.rightStyle}>
                  <VectorIcon name="chevron-right" size={25} color={'gray'}></VectorIcon>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ShopPage', { longtitude: longtitude, latitude: latitude}) }}>
              <View style={styles.containerStyle}>
                <View style={styles.leftStyle}>
                  <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/GPSPage/shop.png')}></Image>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>购物</Text>
                </View>
                <View style={styles.rightStyle}>
                  <VectorIcon name="chevron-right" size={25} color={'gray'}></VectorIcon>
                </View>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>

    );
  }
}

