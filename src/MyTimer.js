import React, { Component } from 'react';
import './MyTimer.css';

class MyTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            ss: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    activateTimer(event){
        console.log("be click!");
        //this.setState({value: event.target.value});
    }

    render() {
        return (
        <div className="MyTimer">
            <h1>My Timer</h1>
            <label>{this.state.value}</label>
            <br></br>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br></br>
            {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
            <button onClick={this.activateTimer}>
            開始
            </button>
            <button>重置</button>
        </div>
        );
    }
}

export default MyTimer;
