import React from 'react';

class PropClassElement extends React.Component
{
    render() {
        return <h1>Hello from PropClassElement, {this.props.name}</h1>;
    }
}

export default PropClassElement;