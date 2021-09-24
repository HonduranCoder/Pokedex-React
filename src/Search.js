import React, { Component } from 'react'
import Dropdown from './Dropdown.js'

export default class Search extends Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input value={this.props.query} onChange={this.props.handleQuery}/>
                    <button className = "button">Search</button>
                </form>
                <Dropdown className = "dropdown"
                options={[
                    'asc',
                    'desc',
                ]}
                optionValue={this.props.sortOrder}
                handleSort={this.props.handleSort}/>

                {/*<Dropdown 
                options={[]}
                optionValue="Filter"
                handleSort={this.props.handleSort}/> 
                separate change handler*/}
            </div>
        )
    }
}




