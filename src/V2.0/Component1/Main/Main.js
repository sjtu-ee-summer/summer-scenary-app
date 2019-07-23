import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { OffCanvasReveal } from 'react-native-off-canvas-menu'
import Icon1 from 'react-native-vector-icons/Ionicons';

import Menu1 from '../menuScenes/menu1'
// import Menu2 from '../menuScenes/menu2'
import Menu2 from '../More/More'

// import Menu3 from '../menuScenes/menu3'
import Menu3 from '../Shop/Shop'
import Menu3_1 from '../Shop/UploadPic'
import Menu3_2 from '../Shop/UploadVoice'

import Menu4 from '../menuScenes/menu4'
// import Menu5 from '../menuScenes/menu5'
import Menu5 from '../Location/Location'

// import Menu6 from '../menuScenes/menu6'

import Menu6 from '../Mine/Log'
// import Menu6 from '../Mine/Login'
import Menu7 from '../menuScenes/menu7'


class Main extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <TouchableOpacity onPress={navigation.getParam('handle')}>
          <Image
            source={require('./menu.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      )
    }
  };
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false
    }
  }

  componentWillMount() {
    this.props.navigation.setParams({ handle: this.handleMenu });
  }

  render() {
    const statusBar = this.state.menuOpen ?
      <StatusBar
        backgroundColor="#222222"
        animated={true}
      />
      : null

    return (
      <View style={{ flex: 1 }}>
        {statusBar}

        <OffCanvasReveal
          ref={(view) => this.menulist = view}
          active={this.state.menuOpen}
          onMenuPress={this.handleMenu.bind(this)}
          backgroundColor={'#FFFFF3'}
          menuTextStyles={{ color: '#000000' }}
          handleBackPress={true}
          menuItems={[
            {
              title: '首页',
              icon: <Icon name="home" size={25} color='#000000' />,
              renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '景点识别',
              icon: <Icon name="camera" size={25} color='#000000' />,
              renderScene: <Menu2 handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '文本翻译',
              icon: <Icon name="note" size={25} color='#000000' />,
              renderScene: <Menu3 handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '图片翻译',
              icon: <Icon1 name="md-images" size={29} color='#000000' />,
              renderScene: <Menu3_1 handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '语音翻译',
              icon: <Icon name="microphone" size={25} color='#000000' />,
              renderScene: <Menu3_2 handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '行程',
              icon: <Icon name="paper-plane" size={25} color='#000000' />,
              renderScene: <Menu4 handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '定位服务',
              icon: <Icon name="compass" size={25} color='#000000' />,
              renderScene: <Menu5 handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '个人中心',
              icon: <Icon name="user" size={25} color='#000000' />,
              renderScene: <Menu6 _nav={(item) => {this.handleNavi()}} handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '反馈',
              icon: <Icon name="earphones-alt" size={25} color='#000000' />,
              renderScene: <Menu6 handleMenu={this.handleMenu.bind(this)} />
            },
            {
              title: '设置',
              icon: <Icon name="settings" size={25} color='#000000' />,
              renderScene: <Menu7 handleMenu={this.handleMenu.bind(this)} />
            }
          ]} />

      </View>
    )
  }
  handleMenu = () => {
    // console.log('here')
    // console.log(this.state.menuOpen)

    const { menuOpen } = this.state
    this.setState({
      menuOpen: !menuOpen
    })
    // console.log(menuOpen)
  }
  handleNavi = () => {

    this.menulist._handlePressEdited(0);
  }

}

const styles = StyleSheet.create({

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

});

module.exports = Main;
