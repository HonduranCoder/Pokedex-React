import React, { Component } from 'react'
import request from 'superagent'
import Loader from 'react-loader-spinner';
import PokeDetails from './PokeDetails.js';


export default class DetailsPage extends Component {
    state ={
        pokemon: {},    
        isLoading: false,
    }

    componentDidMount = async () =>{
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.id}`)
        this.setState({pokemon: response.body})
    }
    render() {
        console.log(this.state.pokemon)
        return (
            <>
            <Router>
                <header>
                    <NavLink to ="/">Home</NavLink>
                </header>
            <div>
                <p>Welcome to detail page for {this.state.pokemon.pokemon}</p>
                <p>Ability 1: {this.state.pokemon.ability_1}</p>
                <p>Hidden Ability: {this.state.pokemon.ability_hidden}</p>
                <p>Egg Group 1: {this.state.pokemon.egg_group_1}</p>
                <p>Egg Group 2: {this.state.pokemon.egg_group_2}</p>
                <p>Evolves from: {this.state.pokemon.evolves_from_species_id}</p>
                <p>Generation ID: {this.state.pokemon.generation_id}</p>
            </div>
             <ul>
             {
                 this.state.isLoading
                 ? <Loader type="Circles" color="#0cf1e1" height={80} width={80}/>
                 :<PokeDetails filteredPokes={this.state.pokemon}/>
             }
         </ul>
         </>
        )
    }
}
