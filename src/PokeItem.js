
import React from 'react';
import { Link } from 'react-router-dom'

class PokeItem extends React.Component {
    render () {
        return (
            <li>
                <Link to= {`/details/${this.props.id}`}>
                <img alt={this.props.url} src={this.props.url} />
                <h1>{this.props.title}</h1>
                <p>{this.props.species_id}</p>
                </Link>
            </li>
        )
    }

}

export default PokeItem;
