import React, { Component } from 'react';
import './MyTimer.css';
import CountDownTick from './CountDownTick';

class MyTimer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            date: new Date(),
            isStartCount: false
        };

        //使用bind讓render區域可呼叫到內部function
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.activateTimer = this.activateTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        // create a ref to store the textInput DOM element
        this.countDown_input = React.createRef();
    }
    //----網路參考
    componentDidMount() {
        console.log("componentDidMount");
        this.timerID = setInterval(
            ()=>this.clockTick(),
            1000
        );
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    clockTick() {
        this.setState({
            date: new Date()
        });
    }
    //新增一個submit的function
    submitForm(event){
        
    }
    //----
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    activateTimer(event){
        //預想是將輸入數值更新至state的value
        //this.setState({value: event.target.value});
        console.log(event);
        
        //設定布林開始倒數
        this.setState({
            isStartCount: true
        });
        //倒數計時
        this.countTimerID = setInterval(
            ()=>this.countdownTick(),
            1000
        );
        
    }

    resetTimer(event){
        //console.log(event);
        //停止倒數
        clearInterval(this.countTimerID);
        this.setState({
            value: 0,
            isStartCount: false
        });
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.countDown_input.current.value = 0;
    }

    countdownTick() {
        let temp = this.state.value-1;
        this.setState({
            value:temp
        });
        if (this.state.value <= 0) {
            clearInterval(this.countTimerID);
            this.setState({
                value:0,
                isStartCount: false
            });
        }
    }

    render() {
        return (
        <div className="MyTimer">
            <h1>My Timer</h1>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            {/* <label>{this.state.value}</label> */}
            <CountDownTick 
            countDown_value={this.state.value}
            isStartCount={this.state.isStartCount}
            />
            <input type="text" onChange={this.handleChange} disabled={this.state.isStartCount} ref={this.countDown_input} />
            <br></br>
            <button onClick={this.activateTimer}>
                開始
            </button>
            <button onClick={this.resetTimer}>
                重置
            </button>
        </div>
        );
    }
}

export default MyTimer;
