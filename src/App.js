import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Dashboard from './component/Dashboard/Dashboard';
import Auth from './component/Auth/Auth';
import Form from './component/Form/Form';
import Nav from './component/Nav/Nav';
import Post from './component/Post/Post';
import routes from './routes';

class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <Nav /> 
                  {routes}
                </div>
          </div>
        );
    }
}
export default App;