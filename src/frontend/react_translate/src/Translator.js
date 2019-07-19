import React, { Component } from 'react';
import axios from 'axios'
import './Translator.css';

class Translator extends Component {
    constructor(props) {
        super(props);

        const translatorId = localStorage.getItem("TranslatorId")

        this.state = { 
            text: "", 
            translateText: "No Job Currently, Please refresh later.", 
            translatorId: 0, 
            textId: 0, 
            result: ""
        };

        this.handleTextInput = this.handleTextInput.bind(this);
        this.clearText = this.clearText.bind(this);
        this.translateText = this.translateText.bind(this);
        this.handlerChangeTranslatorId = this.handlerChangeTranslatorId.bind(this);
    }

    componentDidMount(){
        const that = this;
        axios.get('http://localhost:8081/translate/getjob')
        .then(function (response) {
          // handle success
          console.log(response);
          that.setState({ textId: response.data.id, translateText: response.data.text});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    handleTextInput(event) {
        if (this.state.translateText === undefined) {
            alert("there is no job currently!");
            this.setState({text: ""});
        } else {
            this.setState({text: event.target.value});
        }
    }

    handlerChangeTranslatorId(event) {
        localStorage.setItem("TranslatorId", event.target.value);
        this.setState({translatorId: event.target.value});
    }

    clearText() {
        this.setState({ text: ""});
    }

    // send the result or refresh translateText
    translateText() {
        const text = this.state.text;
        let formData = new FormData();
        this.setState({result: this.state.text});
        formData.append("result", this.state.result);
        formData.append("textId", this.state.textId);
        formData.append("translatorId", this.state.translatorId);

        axios({
            method: 'post',
            url: 'http://localhost:8081/translate/sendresult',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
                }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

        window.location.reload();
    }

    render() {
        return (
            <div className="translator">
                <Title className="translator__title" />
                <TranslatorIdInput type="text" changeHandler={this.handlerChangeTranslatorId} value={this.state.translatorId} />
                <div className="translator__workarea">
                    <Textarea className="translator__textarea translator__half" value={this.state.text} changeHandler={this.handleTextInput} />
                    <Textarea readOnly className="translator__textarea translator__half" value={this.state.translateText}/>
                </div>
                <div className="translator__buttonarea">
                    <Button className="translator__button" clickHandler={this.translateText} buttonValue="Submit" />
                    <Button className="translator__button" clickHandler={this.clearText} buttonValue="Clear" />
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
}

function Title(props) {
    return <div className={props.className}>Translate a Text</div>
}

function Button(props) {
    return <button className={props.className + " button-1"} onClick={props.clickHandler}>{props.buttonValue}</button>
}

function Textarea(props) {
    return (
        <div className={props.className}>
            <textarea className="textarea-1" onChange={props.changeHandler} value={props.value}></textarea>    
        </div>
    );
}

function TranslatorIdInput(props) {
    return (
        <div className="textfield-row">
            <label className="textfield-row__label">Insert Job ID here:</label>
            <input
                placeholder="NULL ID means doing it for fun!"
                className="textfield-row__input"
                type="text"
                onChange={props.changeHandler}
                value={props.value}
            />
        </div>
    );
}



export default Translator;