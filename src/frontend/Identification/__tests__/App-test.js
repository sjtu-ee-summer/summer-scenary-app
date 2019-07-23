/**
 * @format
 */

import 'react-native';
import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Slider, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const App = require('../App');

jest.mock('react-native-fs', () => {
  return {};
});

jest.mock('react-native-gesture-handler', () => {
  return {};
});

jest.mock('react-navigation', () => {
  return {};
});

jest.mock('react-native-camera', () => {
  return {};
});

jest.mock('react-navigation', () => 'createStackNavigator');

it('renders correctly', () => {
  renderer.create(<App />);
});
