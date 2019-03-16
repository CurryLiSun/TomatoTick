import React, { Component } from 'react';

class CountDownTick extends Component {
    constructor(props) {
        super(props);
        //此設定state方法是直接繼承父組件的數值
        //官方不推薦此種設定state方式
        this.state = {
            value: this.props.countDown_value,
            isStartCount: this.props.isStartCount
        };
    }
    //完成組件時，設定倒數計時timer
    componentDidMount() {
        console.log("componentDidMount");
        if (this.state.isStartCount) {
            this.countTimerID = setInterval(
                ()=>this.countdownTick(),
                1000
            );
        }
    }

    componentWillUnmount() {
        //console.log("componentWillUnmount");
        clearInterval(this.countTimerID);
    }

    componentDidUpdate(){
        //console.log("componentDidUpdate");
        if (this.state.value <= 0) {
            //秒數為零，觸發父組件的重置function
            this.props.unmountMe();
        }
    }
    //每秒執行的function
    countdownTick() {
        console.log("counting!!");
        let temp = this.state.value-1;
        this.setState({
            value:temp
        });
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label>
            </div>
        );
    }
}

export default CountDownTick;
