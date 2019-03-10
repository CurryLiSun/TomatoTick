import React, { Component } from 'react';

class CountDownTick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.countDown_value,
            isStartCount: this.props.isStartCount
        };

        //使用bind讓render區域可呼叫到內部function
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        if (this.state.isStartCount) {
            this.timerID = setInterval(
                ()=>this.countdownTick(),
                1000
            );
        }
        
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
            <div>
                <label>{this.props.countDown_value}</label>
            </div>
        );
    }
}

export default CountDownTick;
