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
            <div>
                <p>Welcome to detail page for {this.state.pokemon.pokemon}</p>
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
