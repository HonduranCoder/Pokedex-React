import React, { Component } from 'react'
import Search from './Search.js'
import Dropdown from './Dropdown.js'
//import PokeList from './PokeList.js'
//import PokeItem from './PokeItem.js'
import request from 'superagent'
import PokeList from './PokeList.js';
import Loader from 'react-loader-spinner';

//fetches and renders unfiltered pokemon on load. Use componenetDidMount with componenests PokeList(takes in a list of Pokemon as a prop) and PokeItem(takes in a single pokemon as a prop).

//Maintain State
export default class SearchPage extends Component {
    //State is a place we can put something that needs to be shared in lots of different places in the same component. 
    state = {
        sortOrder: '',
        query: '',
        pokemon:[],
        }
    // 1). We need to declare a componentDidMpount to happen on load of the component. 
    // 2). We must label this function as async. 
    componentDidMount = async () => {
       await this.fetchSearch();
    } 

    handleSubmit = async (e) => {
        e.preventDefault();
       await this.fetchSearch();
    }

    handleSort = (e) => {
        this.setState({ sortOrder: e.target.value})
      }
      
    handleQuery = async (e) => {
        this.setState({query: e.target.value})
       await this.fetchSearch();
    }

  fetchSearch = async () => {
      // 3). We declare the repsonse 
      // 4). The result of awaiting request.get with our url. 
      try{
          this.setState({ isLoading: true})
          const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`);
      // 5). if we did this right, we get API data here 
      
      //?
      this.setState({
          pokemon: response.body.results, 
          isLoading:false 
      }); 
    }catch(e){
          this.setState({ isLoading: false})
      }

    }

    render() {
        return (
            <>
               <Search onChange={this.props.handleDropdown}/>
                <ul>
                    {
                        this.state.isLoading
                        ? <Loader type="Circles" color="#0cf1e1" height={80} width={80}/>
                        :<PokeList filteredPokes={this.state.pokemon}/>
                    }
                </ul>
            </>
        )
    }
}
