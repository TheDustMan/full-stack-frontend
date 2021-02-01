import React from 'react';
import ItemList from '../components/ItemList';

class SaveListForm extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            value: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let newItem = this.state.value;
        if (newItem === null || newItem === '') {
            return;
        }

        const items = this.state.items.concat(newItem);
        
        this.setState({
            items: items
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        List Input:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Add" />
                    </label>
                </form>
                <ItemList items={this.state.items}/>
            </div>
        );
    }
}

export default SaveListForm;