import React, { Component } from 'react'
import SearchPage from './SearchPage.js'
import DetailsPage from './DetailsPage.js'
import HomePage from './HomePage.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// Add React Router
export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h2>Header</h2>
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <HomePage {...routerProps} />} 
          />  
           <Route 
            path="/search" 
            exact
            render={(routerProps) => <SearchPage {...routerProps} />} 
          />   
           <Route 
            path="/details/:id" 
            exact
            render={(routerProps) => <DetailsPage {...routerProps} />} 
          />                         
        </Switch>
      </div>
    </Router>
  );
}
}
// eslint-disable-next-line no-lone-blocks
{/*     <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router> */}