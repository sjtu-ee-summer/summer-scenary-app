import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ButtonGroup, ListItem } from "react-native-elements"
import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;

export default class ChangeLang extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0,
            selectedItem: 0,
            src: '自动识别',
            dst: '中文',
            itemList: ['自动识别', '中文', '英文', '日文', '韩文', '法文', '西班牙文', '葡萄牙文', '意大利文', '俄文', '越南文', '德文', '阿拉伯文', '印尼文'],
            selectedItem1: 0,
            itemList1: ['中文', '英文', '日文', '韩文', '法文', '西班牙文', '葡萄牙文', '意大利文', '俄文', '越南文', '德文', '阿拉伯文', '印尼文'],
            selectedItem2: 0,
            itemList2: ['中文','日文'],
            selectedItem3: 0,
            itemList3: ['中文','英文'],
            selectedItem4: 0,
            itemList4: ['中文'],
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.onPickerSelect = this.onPickerSelect.bind(this)
        this.onPickerSelect1 = this.onPickerSelect1.bind(this)
    }

    onPickerSelect(index) {
        this.setState({
            selectedItem: index,
            src: this.state.itemList[index]
        }, function () {
            console.log("index")
            console.log(this.state.selectedItem)
            console.log("选择源语言")
            console.log(this.state.src)
        })
        // src =  this.state.itemList[this.state.selectedItem]

        // this.forceUpdate()
    }

    onPickerSelect1(index) {
        this.setState({
            selectedItem1: index,
            dst: this.state.itemList1[index]
        }, function () {
            console.log("index")
            console.log(this.state.selectedItem1)
            console.log("选择目标语言")
            console.log(this.state.dst)
        })
    }

    onAddItem = () => {
        var name = ''
        if (this.state.itemList.indexOf(name) == -1) {
            this.state.itemList.push(name)
        }
        this.setState({
            selectedItem: this.state.itemList.indexOf(name),
        })
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    renderSrcLang = () => {
        return (
            <Text >
                {this.state.src}
            </Text>
        )
    }

    renderDstLang = () => {
        return (
            <Text>
                {this.state.dst}
            </Text>
        )
    }

    renderFinal = () => {
        const buttons = [{ element: this.renderSrcLang }, { element: this.renderDstLang }]
        const { selectedIndex } = this.state
        let choice
        if (selectedIndex == 0)
            choice = this.renderSrcList()
        else
            choice = this.renderDstList()
        return (

            <View>
                <View style={styles.ButtonStyle}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{ height: 40 }}
                    />
                </View>

                {choice}
            </View>
        )
    }


    renderSrcList() {
        return (
            <View style={styles.container}>
                <Picker style={{ width: 150, height: 180 }}
                    selectedValue={this.state.selectedItem}
                    itemStyle={{ color: "black", fontSize: 26 }}
                    onValueChange={(index) => this.onPickerSelect(index)}>
                    {this.state.itemList.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money" + value} />
                    ))}
                </Picker>
                <Text style={{ margin: 20, color: 'black' }}>
                    您选择的源语言是：{this.state.itemList[this.state.selectedItem]}
                </Text>

            </View>

        )
    }

    renderDstList() {
        let list 
        if(this.state.src == '中文'){
            list = this.state.itemList1
        }
        else if(this.state.src == '英文'){
            list = this.state.itemList2
        }
        else if(this.state.src == '日文'){
            list = this.state.itemList3
        }
        else{
            list = this.state.itemList4
        }


        return (
            <View style={styles.container}>
                <Picker style={{ width: 150, height: 180 }}
                    selectedValue={this.state.selectedItem1}
                    itemStyle={{ color: "black", fontSize: 26 }}
                    onValueChange={(index) => this.onPickerSelect1(index)}>
                    {list.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money" + value} />
                    ))}
                </Picker>
                <Text style={{ margin: 20, color: 'black' }}>
                    您选择的目标语言是：{list[this.state.selectedItem1]}
                </Text>
            </View>
        )
    }

    render() {
        // const buttons = [{ element: this.renderSrcLang }, { element: this.renderDstLang }]
        // const { selectedIndex } = this.state
        // let choice
        // if (selectedIndex == 0)
        //     choice = this.renderSrcList()
        // else
        //     choice = this.renderDstList()
        return (

            this.renderFinal()
        )
    }
}

const styles = StyleSheet.create({
    ButtonStyle: {
        marginTop: 20,
        marginBottom: 20
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    },
    container: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})