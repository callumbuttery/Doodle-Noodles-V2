import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        };

    }
    componentDidMount() {
        setInterval(() => this.calculateTime('November, 28, 2021'), 1000);
    }

    calculateTime(launchDate) {
        let day = 0;
        let hour = 0;
        let minute = 0;
        let second = 0;
        const differenceInDate = Date.parse(launchDate) - Date.parse(new Date());

        if (differenceInDate && differenceInDate > 0) {
            day = Math.floor(differenceInDate / (1000 * 60 * 60 * 24));
            hour = Math.floor((differenceInDate / (1000 * 60 * 60)) % 24);
            minute = Math.floor((differenceInDate / 1000 / 60) % 60);
            second = Math.floor((differenceInDate / 1000) % 60);
            this.setState({ day, hour, minute, second });
        }
    }
    render() {
        return (
            <div>
                <div style={{ color: '#002741', fontFamily: 'ccbiffbamboom', 'marginTop': '10%' }}>{this.state.day} : {this.state.hour} : {this.state.minute} : {this.state.second}</div>
            </div>
        );
    }
}
export default Timer;
