import React, { Component } from 'react';
import './MyTimer.css';

class MyTimer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            date: new Date()
        };
        // 指定this
        this.tick = this.tick.bind(this);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.activateTimer = this.activateTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick() {
        let temp = this.state.value-1;
        this.setState({
            date: new Date(),
            value:temp
        });
    }

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
        console.log(this);
        console.log(this.setInterval);
        //this.setInterval = setInterval(this.value.bind(this),1000)
    }

    resetTimer(event){
        //console.log(event);
        this.setState({value: 0});
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
