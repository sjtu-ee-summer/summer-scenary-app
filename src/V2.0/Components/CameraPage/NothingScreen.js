import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Easing
} from 'react-native';

import LottieView from 'lottie-react-native';


export default class NothingScreen extends React.Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(30, 120);
      }
    
    render() {
     return (
        <View style={{flex:1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <LottieView
                    ref={animation => {
                      this.animation = animation;
                    }}
                    style={{flex: 1}}
                    source={require('../../app/animations/sad')}
                    />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 100}}>
               <Text
               style={{fontSize: 20, fontWeight:'bold', fontFamily:'Cochin'}}>
               什么都没有识别到
               </Text>
        </View>
     </View>
   
         )
    }
}