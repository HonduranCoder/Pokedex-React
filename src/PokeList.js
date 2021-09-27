import React from 'react'
import PokeItem from './PokeItem.js'

class PokeList extends React.Component {
    
    render() {
        return ( 
            <ul>
                 {
                this.props.filteredPokes.map(pokemon => 
                (<PokeItem 
                key = {pokemon._id}
                id= {pokemon._id}
                url = {pokemon.url_image}
                title = {pokemon.pokemon}
                species = {pokemon.species_id}/>
                ))} 
            </ul>
            );
    }
}

export default PokeList;
