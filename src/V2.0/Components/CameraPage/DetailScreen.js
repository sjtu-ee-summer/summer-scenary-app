import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Slider, Image } from 'react-native';


export default class DetailsScreen extends React.Component {
    state = {
        result: [],
    };
     render() {
    //        const navigationOptions =  ({ navigation }) =>({
    //            imageSource: navigation.state.params.imageSource,
    ////            result: navigation.state.params.result,
    //        });
            const { navigation } = this.props;
            const imageSource = navigation.getParam('imageSource', 'NO-ID');
            const landmark = navigation.getParam('landmark', 'landmark');
    //        console.log(navigationOptions);
    //        console.log(result);
    //        console.log(typeof(result));
            console.log(imageSource.substring(0,30));
            console.log(landmark);
    
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{width: 66, height: 58}}
              source={{uri: 'data:image/png;base64,'+imageSource}}
    //          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
            />
            <Text>{landmark}</Text>
    
         </View>
        );
      }
    }