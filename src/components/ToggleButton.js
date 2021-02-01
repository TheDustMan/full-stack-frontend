import React from 'react';

class ToggleButton extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            isToggledOn: true
        };

        this.onHandleClick = this.onHandleClick.bind(this);
    }

    onHandleClick() {
        this.setState((state) => ({
            isToggledOn: !state.isToggledOn
        }));
    }

    render() {
        return (
            <button onClick={this.onHandleClick}>
                {this.state.isToggledOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default ToggleButton;