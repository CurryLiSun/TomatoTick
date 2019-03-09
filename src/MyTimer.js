import React, { Component } from 'react';
import './MyTimer.css';

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
        //倒數計時
        this.countTimerID = setInterval(
            ()=>this.countdownTick(),
            1000
        );
        this.setState({
            isStartCount: true
        });
        console.log(this);
        //設定布林直開始倒數
    }

    resetTimer(event){
        //console.log(event);
        //停止倒數
        clearInterval(this.countTimerID);
        this.setState({
            value: 0,
            isStartCount: false
        });
    }

    countdownTick() {
        let temp = this.state.value-1;
        this.setState({
            value:temp
        });
        if (this.state.value <= 0) {
            clearInterval(this.countTimerID);
            this.setState({
                value:0
            });
        }
    }

    render() {
        return (
        <div className="MyTimer">
            <h1>My Timer</h1>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <label>{this.state.value}</label>
            <br></br>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
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
