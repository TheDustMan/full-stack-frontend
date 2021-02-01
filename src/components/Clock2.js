import React from 'react';

class Clock2 extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <h1>Clock2: The time is {this.state.date.toLocaleTimeString()}</h1>
        );
    }
}

export default Clock2;