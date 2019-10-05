import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../logo.svg';
import{ APP_NAME } from '../../util'

class Home extends React.Component {
    
    componentWillMount() {

    }
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <NavLink className="App-link" to={`/${APP_NAME}/bootstrap3`}>Bootstrap3</NavLink>
                <NavLink className="App-link" to={`/${APP_NAME}/bootstrap4`}>Bootstrap4</NavLink>

              </header>
            </div>
        )
    }
}
export default Home;