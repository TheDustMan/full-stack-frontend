import React from 'react';

class ItemList extends React.Component
{
    render() {
        const items = this.props.items;

        if (items === null || items === '' || items.length === 0) {
            return (<div></div>);
        }
        return (
            <ul>
            {items.map((item) =>
                <li>{item}</li>
            )}
            </ul>
        );
    }
}

export default ItemList;