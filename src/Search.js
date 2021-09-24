import React, { Component } from 'react'
import Dropdown from './Dropdown.js'

export default class Search extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input onChange={this.props.handleQuery}/>
                    <button>Search</button>
                </form>
                <Dropdown
                options={[
                    'asc',
                    'desc',
                ]}
                optionValue='Sort'
                handleSort={this.props.handleSort}/>

                <Dropdown 
                options={[]}
                optionValue="Filter"
                handleSort={this.props.handleSort}/>
            </div>
        )
    }
}




