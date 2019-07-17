/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet, Switch, Text, View
} from 'react-native';
import { requestLocationPermission } from './utils'
import styles from './styles'

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

import { MapView } from 'react-native-amap3d'

export default class Location extends Component {
    static navigationOptions = {
        title: '地图控件',
      }
    
      state = {
        showsCompass: true,
        showsScale: true,
        showsZoomControls: true,
        showsLocationButton: true,
      }
    
      componentDidMount() {
        requestLocationPermission()
      }
    
      render() {
        return (
          <View style={StyleSheet.absoluteFill}>
            {/* <View style={styles.controls}>
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
            </View> */}
            <MapView
              locationEnabled={this.state.showsLocationButton}
              showsCompass={this.state.showsCompass}
              showsScale={this.state.showsScale}
              showsLocationButton={this.state.showsLocationButton}
              showsZoomControls={this.state.showsZoomControls}
              style={styles.map}
            />
          </View>
        )
      }
}


module.exports = Location;

