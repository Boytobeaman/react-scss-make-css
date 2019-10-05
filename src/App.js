import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './components/home/index'
import{ APP_NAME, routes } from './util'
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                key={index}
                component={route.component}
              ></Route>
            )
          })
        }
        <Route path={`/${APP_NAME}/`} component={Home}></Route>
        <Redirect to={`/${APP_NAME}/`} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
