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
        //console.log("componentDidMount");
        this.timerID = setInterval(
            ()=>this.clockTick(),
            1000
        );
    }
    
    componentWillUnmount() {
        //console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    clockTick() {
        this.setState({
            date: new Date()
        });
    }

    //----
    renderCountDownTick() {
        //傳遞倒數秒數、是否開始倒數、以及重新設定的function
        return <CountDownTick 
                countDown_value={this.state.value}
                isStartCount={this.state.isStartCount}
                unmountMe={this.resetTimer}
                />
    } 

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    activateTimer(event){
        //console.log(event);
        //設定布林開始倒數
        this.setState({
            isStartCount: true
        });
        //倒數計時之設定寫至子組件內
    }

    resetTimer(event){
        //console.log(event);
        //移除計數器
        //clearInterval(this.countTimerID);
        this.setState({
            value: 0,
            isStartCount: false
        });
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.countDown_input.current.value = 0;
    }

    render() {
        return (
        <div className="MyTimer">
            <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
            <h2>My Timer Hello, world!</h2>
            {/* 倒數時顯示組件 */}
            <h1>{this.state.isStartCount && this.renderCountDownTick()}</h1>
            {/* 當數值變動時，觸發handleChange;disabled用於倒數計時中不可修改input;ref用於倒數計時結束，重新歸零 */}
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
