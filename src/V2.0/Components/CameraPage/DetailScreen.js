import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Slider, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default class DetailsScreen extends React.Component {
  state = {
    result: [],
  };
  render() {
    const { onScroll = () => { } } = this.props;
    const { navigation } = this.props;
    const imageSource = navigation.getParam('imageSource', 'NO-ID');
    const landmark = navigation.getParam('landmark', 'landmark');
    console.log(imageSource.substring(0, 30));
    console.log(landmark);

    return (
      // <ParallaxScrollView
      //   style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
      //   renderFixedHeader={() => (
      //     <View key="fixed-header" style={styles.fixedSection}>
      //       <Text style={styles.fixedSectionText}
      //             onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
      //         Scroll to top
      //       </Text>
      //     </View>
      //   )}
      //   renderBackground={() => <Image source={{ uri: 'data:image/png;base64,' + imageSource, width: screenWidth, height: 350 }} />}
      //   // renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'black', padding: 5, fontSize: 20 }}>Hello</Text>}
      //   parallaxHeaderHeight={350}>
      //   <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>{result.landmark}</Text></View>
      // </ParallaxScrollView>

      <ParallaxScrollView
        onScroll={onScroll}
        headerBackgroundColor="#333"
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image source={{ uri: 'data:image/png;base64,' + imageSource, width: screenWidth, height: 350 }} />
            {/* <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/> */}
          </View>
        )}

        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            {/* <Text style={styles.sectionSpeakerText}>
              Talks by Rich Hickey
                </Text> */}
            <Text style={styles.sectionTitleText}>
              {result.landmark}
            </Text>
          </View>
        )}

        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{result.landmark}</Text>
          </View>
        )}

        renderFixedHeader={() => (
          <View key="fixed-header" style={styles.fixedSection}>
            <Text style={styles.fixedSectionText}>
              {/* Hello */}
            </Text>
          </View>
        )} />


    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 25,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});
