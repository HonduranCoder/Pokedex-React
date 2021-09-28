import React, { Component } from 'react'
import Search from './Search.js'
import request from 'superagent'
import PokeList from './PokeList.js';
import Loader from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';

//fetches and renders unfiltered pokemon on load. Use componenetDidMount with componenests PokeList(takes in a list of Pokemon as a prop) and PokeItem(takes in a single pokemon as a prop).
let numberOfPages; 
//Maintain State
export default class SearchPage extends Component {
    //State is a place we can put something that needs to be shared in lots of different places in the same component. 
    state = {
        sortOrder: '',
        query: '',
        pokemon:[],
        isLoading:false,
        currentPage: 1,
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

    handleSort = async(e) => {
        this.setState({ sortOrder: e.target.value})
        await this.fetchSearch()
      }
      
    handleQuery = async (e) => {
        this.setState({query: e.target.value})
       await this.fetchSearch();
    }

    handlePrevClick = async() => {
        await this.setState({currentPage: this.state.currentPage - 1})
        this.fetchSearch()
    }

    handleNextClick= async() => {
        await this.setState({currentPage: this.state.currentPage + 1})
        this.fetchSearch()
    }

  fetchSearch = async () => {
      // 3). We declare the repsonse 
      // 4). The result of awaiting request.get with our url. 
      try{
          this.setState({ isLoading: true})
          const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder&this.state.currentPage}`);
      // 5). if we did this right, we get API data here 
      numberOfPages=response.body.count / response.body.perPage
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
            {/* here we are referring to the props in Search.js, but this is tha parent file so do not need this.props. this.props is used for */}
               <Search  handleSubmit= {this.handleSubmit}
                        handleQuery={this.handleQuery}
                        handleSort={this.handleSort}
                        query = {this.state.query}
                        sortOrder = {this.state.sortOrder}
               />
               <NavLink
                to="/"
                activeStyle={{
                fontWeight: "bold",
                color: "turquoise", 
            }}
            >
            Go Home
                </NavLink>
               
              {this.state.currentPage !== 1 && <button onClick={this.handlePrevClick}>Previous</button>}
              <span> Current Page: {this.state.currentPage}</span>
            {this.state.currentPage < numberOfPages && <button onClick={this.handleNextClick}>Next</button>} 
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
