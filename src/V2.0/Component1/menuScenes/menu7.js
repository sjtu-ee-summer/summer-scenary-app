// import React, { Component } from 'react'
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar
// } from 'react-native'

// export default class Menu7 extends Component {
//   render() {
//     return(
//       <View style={styles.container}>
//         <StatusBar
//           backgroundColor="#bdc3c7"
//           animated={true}
//         />

//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           This is Menu - 7
//         </Text>
//         <TouchableOpacity onPress={ () => this.props.handleMenu() }>
//           <View style={styles.btnContainer}>
//             <Text style={styles.btnText}>{'Toggle Menu'.toUpperCase()}</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   btnContainer: {
//     width: 200,
//     height: 40,
//     marginTop: 20,
//     backgroundColor: 'rgba(0,0,0,.3)',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: 'bold'
//   }
// })

import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MapView } from 'react-native-amap3d'
import { requestLocationPermission } from '../Location/utils'

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  logs: {
    elevation: 8,
    flex: 1,
    backgroundColor: '#fff',
  },
  logText: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
})

export default class menu7 extends Component {
  static navigationOptions = {
    title: '地图事件',
  }

  state = {
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
  }

  _logPressEvent = ({ nativeEvent }) => this._log('onPress', nativeEvent)
  _logLongPressEvent = ({ nativeEvent }) => this._log('onLongPress', nativeEvent)
  _logLocationEvent = ({ nativeEvent }) => this._log('onLocation', nativeEvent)
  _logStatusChangeCompleteEvent = ({ nativeEvent }) => this._log('onStatusChangeComplete', nativeEvent)

  _renderItem = ({ item }) =>
    <Text style={styles.logText}>{item.time} {item.event}: {item.data}</Text>

  render() {
    return (
      <View style={styles.body}>
        <MapView
          locationEnabled
          locationInterval={10000}
          distanceFilter={10}
          onPress={this._logPressEvent}
          onLongPress={this._logLongPressEvent}
          onLocation={this._logLocationEvent}
          onStatusChangeComplete={this._logStatusChangeCompleteEvent}
          style={styles.body}
        />
        <FlatList
          style={styles.logs}
          data={this.state.logs}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}
