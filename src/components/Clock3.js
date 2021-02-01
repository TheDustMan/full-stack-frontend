import React from 'react';

class Clock3 extends React.Component
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
            <div>
                <h1>Clock3: the time is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock3;