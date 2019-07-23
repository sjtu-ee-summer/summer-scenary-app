import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    ActivityIndicator,
    AsyncStorage,
    StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '行程规划',
        headerTitle: 'Second',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../Assets/MinePage/user-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>

            // <Button
            //     onPress={() => this.props.navigation.goBack()}
            //     title="Go back home"
            // />


        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

