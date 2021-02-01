import React from 'react';

class InputIteratorButton extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            index: null
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    componentDidMount() {
        this.updateItems("");
    }

    updateItems(input) {
        let parts = input.split(' ');

        let emptyIndex = parts.indexOf('');
        while (emptyIndex > -1) {
            parts.splice(emptyIndex, 1);
            emptyIndex = parts.indexOf('');
        }
        
        if (parts.length === 0 ||
            (parts.length === 1 && parts[0] === '')) {
            parts = ["EMPTY"];
        }
        this.setState({
            items: parts,
            index: 0
        })
    }

    onInputChange(e) {
        this.updateItems(e.target.value);
    }

    onButtonPress(e) {
        function computeIndex(state) {
            let index = state.index;
            if (index >= state.items.length - 1) {
                index = 0;
            } else {
                index += 1;
            }
            return index;
        }
        this.setState((state) => ({
            index: computeIndex(state)
        }));
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onInputChange}/>
                <button onClick={this.onButtonPress}>
                    {this.state.items[this.state.index]}
                </button>
            </div>
        );
    }
}

export default InputIteratorButton;