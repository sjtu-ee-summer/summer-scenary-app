import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage, ListView } from "react-native";
var roundData = ''
var longtitude = ''
var latitude = ''
var result = []
var count = 0

export default class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            longtitude: '',
            latitude: '',
            fetchOk: false
        }
        const { navigation } = this.props;
        longtitude = navigation.getParam('longtitude', '120')
        latitude = navigation.getParam('latitude', '30')
        roundData = ''
        result = []
        count = 0
        this.getRoundData()
        this.renderWait()
    }

    getRoundData() {
        var location = latitude + ',' + longtitude
        return fetch('http://api.map.baidu.com/place/v2/search?query=美食&location=' +
            location + '&radius=2000&output=json&ak=GVtyjdY7UzwghWplLuGgGcoSiDYHcqb6&scope=2&output=json&page_size=5')
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
        // console.log("getpic")
        let url = "http://202.120.40.8:30454/imgidentify/imgidentify/py"
        let formData = new FormData()
        formData.append("url", pic)
        return fetch(url, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer b634ba05-9718-49c3-9e1d-89a02bbc848a'
            },
            body: formData
        }).then((response) => {
            // console.log("fetch")
            return response.text()
        }).then((r) => {
            console.log(r)
            result[i] = r
            count++
            console.log("get"+count)
        }).catch((error) => {
            console.log(error)
        })

    }

    renderWait() {
        if (roundData === '' || count !== roundData.length) {
            console.log("waiting"+count)
            setTimeout(() => {
                this.renderWait();
            }, 500);
            return;
        } else {
            this.setState({
                fetchOk: true
            })
        }
    }

    render() {
        return (
            <View>
                <Text>{longtitude} | {latitude} |</Text>
                <Text>result 0 {result[0]} </Text>
                <Text>result 1 {result[1]} </Text>
                <Text>result 2 {result[2]} </Text>
                <Text>result 3 {result[3]} </Text>
                <Text>result 4 {result[4]} </Text>
            </View>
        )
    }
}