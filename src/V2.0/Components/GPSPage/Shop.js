import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage, ListView, FlatList, Image, ScrollView } from "react-native";
import { ListItem } from 'react-native-elements'
var roundData = ''
var longtitude = ''
var latitude = ''
import styles from './styles'


export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            longtitude: '',
            latitude: '',
            result: [],
            list: []
        }
        const { navigation } = this.props;
        longtitude = navigation.getParam('longtitude', '120')
        latitude = navigation.getParam('latitude', '30')
        this.getRoundData()
    }

    getRoundData() {
        var location = latitude + ',' + longtitude
        return fetch('http://api.map.baidu.com/place/v2/search?query=购物&location=' +
            location + '&radius=2000&output=json&ak=GVtyjdY7UzwghWplLuGgGcoSiDYHcqb6&scope=2&output=json&page_size=10')
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                roundData = responseJson.results
            })
            .then(() => {
                this.getResult()
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async getResult() {
        for (var i = 0; i < roundData.length; i++) {
            var url = roundData[i].detail_info.detail_url
            this.getPic(url, i)
        }
    }

    getPic(pic, i) {
        let url = "http://202.120.40.8:30454/imgidentify/imgidentify/py"
        let formData = new FormData()
        formData.append("url", pic)
        return fetch(url, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 29be86b9-4071-41c3-a50e-865cb8ca3b24'
            },
            body: formData
        }).then((response) => {
            return response.text()
        }).then((r) => {
            console.log('pic')
            console.log(r)
            let newlist = this.state.result;
            newlist[i] = r
            this.setState({
                result: newlist,
                list: [
                    {
                        pic: r,
                        name: roundData[i].name,
                        address: roundData[i].address,
                        city: roundData[i].city,
                        area: roundData[i].area,
                        telephone: roundData[i].telephone,
                        distance: roundData[i].detail_info.distance,
                        tag: roundData[i].detail_info.tag,
                        price: roundData[i].detail_info.price,
                        overall_rating: roundData[i].detail_info.overall_rating,
                        comment_num: roundData[i].detail_info.comment_num
                    },
                    ...this.state.list,
                ]
            })
            // console.log("list")
            // console.log(roundData[i].detail_info.distance)
            // console.log(this.state.list)
        }).catch((error) => {
            console.log(error)
        })

    }

    _renderItem = ({ item }) => {
        <View style={styles.cellStyle}>
            <Image source={{ uri: item.pic }} style={styles.cellImageStyle}></Image>
            <View style={styles.cellRightStyle}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 10, color: 'gray', marginVertical: 5 }}>{item.city}  {item.area}  {item.address}</Text>
                <View style={styles.cellRightBottomStyle}>
                    <Text style={{ fontSize: 10, color: 'gray' }}>{`人均¥${item.price}`}</Text>
                    <Text style={{ fontSize: 10, color: 'orange', marginLeft: 100 }}>{`${item.comment_num}条评论`}</Text>
                </View>
            </View>
        </View>
    }

    render() {
        return (

            <ScrollView
                directionalLockEnabled={true}
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <View>
                    {
                        this.state.list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: 'http://pv18mucav.bkt.clouddn.com/IMG_7951.JPG' } }}
                                title={l.name}
                                subtitle={l.city}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        )

    }
}