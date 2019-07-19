/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Slider, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
//import { RNFS } from 'react-native-fs';
//import Loading from './Loading';

const landmarkSize = 2;

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

var RNFS = require('react-native-fs');
var Loading = require('./Component/Loading')

class DetailsScreen extends React.Component {
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


     </View>
    );
  }
}

// <Text>result:{result.landmark }</Text>

class NothingScreen extends React.Component {
    render() {
     return (
             <View>
                 <Text>什么都没有识别到噢</Text>
             </View>
         )
    }
}


class CameraScreen extends React.Component {
  state = {
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    depth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',
    ratios: [],
    photoId: 1,
    showGallery: false,
    photos: [],
    faces: [],
    tmp: '',
    landmark: '',
    visible: false,
    result: [],
    recordOptions: {
      mute: false,
      maxDuration: 5,
      quality: RNCamera.Constants.VideoQuality["288p"],
    },
    isRecording: false
  };

  getRatios = async function() {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };

  toggleView() {
    this.setState({
      showGallery: !this.state.showGallery,
    });
  }

  toggleFacing() {
    this.setState({
      type: this.state.type === 'back' ? 'front' : 'back',
    });
  }

  toggleFlash() {
    this.setState({
      flash: flashModeOrder[this.state.flash],
    });
  }

  setRatio(ratio) {
    this.setState({
      ratio,
    });
  }

  toggleWB() {
    this.setState({
      whiteBalance: wbOrder[this.state.whiteBalance],
    });
  }

  toggleFocus() {
    this.setState({
      autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on',
    });
  }

  zoomOut() {
    this.setState({
      zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1,
    });
  }

  zoomIn() {
    this.setState({
      zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1,
    });
  }

  setFocusDepth(depth) {
    this.setState({
      depth,
    });
  }

takePicture = async function() {
    var _this3 = this;
    if (this.camera) {
      this.camera.takePictureAsync().then(data => {
        console.log('data: ', data.uri);
        this.setState({
            visible: true,
        });
        RNFS.readFile(data.uri, 'base64')
              .then((content) => {
                console.log('content: ', content.substring(0,30));
                this.tmp = content
                console.log("转换成功")
//                let url = "https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general"
//                let url = "http://202.120.40.8:30454/imgidentify/imgidentify/landmark"
                let url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/landmark";
                let formData = new FormData();
                let isSuccess = 2;

                formData.append("image", this.tmp);
                formData.append("access_token", "24.5b49d85263914dca13b0271757861c4c.2592000.1565142299.282335-16731893");

//                this.props.navigation.navigate('Details',{result: 0, imageSource: this.tmp});

                fetch(url, {
                    credentials: 'include',
                    method: 'POST',
                    header: new Headers({
                          'Content-Type': 'application/x-www-form-urlencoded'
                    }),
                    body: formData
                }).then(function(response) {
                      if(!response.ok){
                        console.log("Network response was not ok.");
                      }
                      return response.json();
                    })
                    .then(function(myJson) {
                      console.log(myJson);
                      this.result = myJson.result;
                      console.log("result", this.result);
                      if(myJson.result.landmark===""){
                        isSuccess = 3;
                      }
                      _this3.landmark = myJson.result.landmark;
                      console.log(_this3.landmark);
                    }).then(() =>{
                    if(isSuccess === 3){
                        console.log("识别为空");
                        this.setState({
                              visible: false,
                        });
                        this.props.navigation.navigate('Nothing');
                        return;
                    }
                       console.log(this.tmp.substring(0,30));
                       this.setState({
                            visible: false,
                       });
                       console.log(this.state.visible)
                       console.log(this.tmp.substring(0,30))
                       this.props.navigation.navigate('Details',{imageSource: this.tmp, landmark: _this3.landmark});
                    })
            }).catch((err) => {
              console.log("图片读取失败")
//                toastShort("图片读取失败")
              });
      });
    }
  };

  takeVideo = async function() {
    if (this.camera) {
      try {
        const promise = this.camera.recordAsync(this.state.recordOptions);

        if (promise) {
          this.setState({ isRecording: true });
          const data = await promise;
          this.setState({ isRecording: false });
          console.warn(data);
        }
      } catch (e) {
        console.warn(e);
      }
    }
  }

  onFacesDetected = ({ faces }) => this.setState({ faces });
  onFaceDetectionError = state => console.warn('Faces detection error:', state);

  renderFace({ bounds, faceID, rollAngle, yawAngle }) {
    return (
      <View
        key={faceID}
        transform={[
          { perspective: 600 },
          { rotateZ: `${rollAngle.toFixed(0)}deg` },
          { rotateY: `${yawAngle.toFixed(0)}deg` },
        ]}
        style={[
          styles.face,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}
      >
        <Text style={styles.faceText}>ID: {faceID}</Text>
        <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
        <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
      </View>
    );
  }

  renderLandmarksOfFace(face) {
    const renderLandmark = position =>
      position && (
        <View
          style={[
            styles.landmark,
            {
              left: position.x - landmarkSize / 2,
              top: position.y - landmarkSize / 2,
            },
          ]}
        />
      );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    );
  }

  renderFaces() {
    return (
      <View style={styles.facesContainer} pointerEvents="none">
        {this.state.faces.map(this.renderFace)}
      </View>
    );
  }

  renderLandmarks() {
    return (
      <View style={styles.facesContainer} pointerEvents="none">
        {this.state.faces.map(this.renderLandmarksOfFace)}
      </View>
    );
  }

  renderCamera() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
        }}
        type={this.state.type}
        flashMode={this.state.flash}
        autoFocus={this.state.autoFocus}
        zoom={this.state.zoom}
        whiteBalance={this.state.whiteBalance}
        ratio={this.state.ratio}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        onFacesDetected={this.onFacesDetected}
        onFaceDetectionError={this.onFaceDetectionError}
        focusDepth={this.state.depth}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity style={styles.flipButton} onPress={this.toggleFacing.bind(this)}>
            <Text style={styles.flipText}> FLIP </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flipButton} onPress={this.toggleFlash.bind(this)}>
            <Text style={styles.flipText}> FLASH: {this.state.flash} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flipButton} onPress={this.toggleWB.bind(this)}>
            <Text style={styles.flipText}> WB: {this.state.whiteBalance} </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.4,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignSelf: 'flex-end',
          }}
        >
          <Slider
            style={{ width: 150, marginTop: 15, alignSelf: 'flex-end' }}
            onValueChange={this.setFocusDepth.bind(this)}
            step={0.1}
            disabled={this.state.autoFocus === 'on'}
          />
        </View>
        <View
          style={{
            flex: 0.1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignSelf: 'flex-end',
          }}
        >
          <TouchableOpacity
            style={[styles.flipButton, { flex: 0.15, alignSelf: 'flex-end' }]}
            onPress={this.zoomIn.bind(this)}
          >
            <Text style={styles.flipText}> + </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flipButton, { flex: 0.15, alignSelf: 'flex-end' }]}
            onPress={this.zoomOut.bind(this)}
          >
            <Text style={styles.flipText}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flipButton, { flex: 0.35, alignSelf: 'flex-end' }]}
            onPress={this.toggleFocus.bind(this)}
          >
            <Text style={styles.flipText}> AF : {this.state.autoFocus} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flipButton, styles.picButton, { flex: 0.35, alignSelf: 'flex-end' }]}
            onPress={this.takePicture.bind(this)}
          >
            <Text style={styles.flipText}> SNAP </Text>
          </TouchableOpacity>
        </View>
        {this.renderFaces()}
        {this.renderLandmarks()}
      </RNCamera>
    );
  }

  render() {
    return <View style={styles.container}>{
    this.state.visible == true ? (<Loading/>) : (null)
    }{this.renderCamera()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#000',
  },
  navigation: {
    flex: 1,
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  item: {
    margin: 4,
    backgroundColor: 'indianred',
    height: 35,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picButton: {
    backgroundColor: 'darkseagreen',
  },
  galleryButton: {
    backgroundColor: 'indianred',
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
  },
});

const AppNavigator = createStackNavigator({
  Camera: {
    screen: CameraScreen,
  },
  Nothing: {
      screen: NothingScreen,
    },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Camera',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
