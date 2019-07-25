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

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var GuestYouLikeView = require('./Round')
var createReactClass = require('create-react-class');

import { MapView } from 'react-native-amap3d'
import VectorIcon from 'react-native-vector-icons/MaterialIcons';

var longtitude = ''
var latitude = ''
var roundData = ''

export default class Round extends React.Component{
    constructor(props) {
        super(props);
    }

    getDefaultProps() {
      return {
        roundData: ''
      }
    }
  
    getInitialState() {
      return {
  
      }
    }
  
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
    }
  
    render() {
          // console.log(this.props.showsCompass)
      return (
        <View style={styles.containerStyle1}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('FoodPage') }}>
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
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('HotelPage')  }}>
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
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('ShopPage')  }}>
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
      );
    }
  
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
  
  }
  
  