import React from 'react';
import PropClassElement from './PropClassElement'
import PropFunctionElement from './PropFunctionElement'

class PropAggregator extends React.Component
{
    render() {
        return (
            <div>
                <PropClassElement name={this.props.name}/>
                <PropFunctionElement name={this.props.name}/>
            </div>
        );
    }
}

export default PropAggregator;