import React, { Component } from 'react';
import './MyTimer.css';
import CountDownTick from './CountDownTick';
import Button from 'react-bootstrap/Button';
import { Container,Row,Col } from 'react-bootstrap';

class MyTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            date: new Date(),
            isStartCount: false,
            isTimesUp: false
        };

        //使用bind讓render區域可呼叫到內部function
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.activateTimer = this.activateTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        // create a ref to store the textInput DOM element
        this.countDown_input = React.createRef();
        this.audio_noticeVoice = React.createRef();
    }
    //----網路參考
    componentDidMount() {
        //console.log("componentDidMount");
        //console.log("father component","componentDidMount");
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
                noticeTimesUp={this.noticeVoice}
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

    componentDidUpdate(){
        //setState設定完數值之後，會在此方法內更新組件數值
        // console.log("father component","componentDidUpdate");
        // console.log("father component",this.state.isTimesUp);

        if (this.state.isTimesUp) {
            this.audio_noticeVoice.current.play();
        }else{
            this.audio_noticeVoice.current.pause();
            this.audio_noticeVoice.current.currentTime = 0;
        }
    }

    noticeVoice = (event) => {
        //https://www.soundjay.com/phone/telephone-ring-03a.wav
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.setState({
            isTimesUp: !this.state.isTimesUp
        });
        //setState方法不會立即更新組件數值
        //以下這樣不會觸發條件
        /*
        if (this.state.isTimesUp) {
            this.audio_noticeVoice.current.play();
        }else{
            this.audio_noticeVoice.current.pause();
            this.audio_noticeVoice.current.currentTime = 0;
        }
        */
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
        //this.countDown_input.current.value = 0;
    }

    render() {
        return (
        <div className="MyTimer">
        <Container>
        <Row className="justify-content-md-center">
            <Col md="auto"><h5>It is {this.state.date.toLocaleTimeString()}.</h5></Col>
            <Col md="auto"><h5>My Timer Hello, world!</h5></Col>
        </Row>
        <Row>
            <Col>
                {/* 倒數時顯示組件 */}
                <h3>{this.state.isStartCount && this.renderCountDownTick()}</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                {/* 當數值變動時，觸發handleChange;disabled用於倒數計時中不可修改input;ref用於倒數計時結束，重新歸零 */}
                <input type="text" value={this.state.value} onChange={this.handleChange} disabled={this.state.isStartCount} ref={this.countDown_input} />
                {/* 提醒鈴聲 */}
                <audio src="https://www.soundjay.com/phone/telephone-ring-03a.wav" loop={true} autoPlay={false} ref={this.audio_noticeVoice} ></audio>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Button variant="primary" onClick={this.activateTimer}>
                    開始
                </Button>
            </Col>
            <Col md="auto">
                <Button variant="warning" onClick={this.resetTimer}>
                    重置
                </Button>
            </Col>
            <Col md="auto">
                <Button variant="info" onClick={this.noticeVoice} disabled={!this.state.isTimesUp}>
                    停止鬧鈴
                </Button>
            </Col>
        </Row>
        </Container>
        </div>
        );
    }
}

export default MyTimer;
