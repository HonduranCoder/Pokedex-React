
import React from 'react';

class PokeItem extends React.Component {
    render () {
        return (
            <li>
                <img alt={this.props.url} src={this.props.url} />
                <h1>{this.props.title}</h1>
                <p>{this.props.species_id}</p>
            </li>
        )
    }

}

export default PokeItem;
