import React, { Component } from 'react'
import pic from './pokemon.jpeg'
import './App.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className ="header">
                Pokemon Homepage: Gotta Catch Them All
                <div className="pic">
                <img src={pic} width="100" height="100" alt ="Characters"/>
                </div>
            </div>
        )
    }
}
