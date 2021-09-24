import React, { Component } from 'react'
//Use like a Dropdown
//should contain the asc/desc dropdown, as well as the second dropdown that lets user choose what category to sort by. 
//Katie helped me here 
export default class Dropdown extends Component {
    render() {
        return ( 
            <>
            <select onChange={this.props.handleSort}> 
             {
                 this.props.options.map(entry=> <option key= {entry} value ={entry}>{entry}</option>)
             }
             </select>        
          </> 
        )
            }
        }
        