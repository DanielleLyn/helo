import React, {Component} from 'react';
import axios from 'axios';

export default class Nav extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
        }
    }
            
            render(){
                return(
                <div>
                    <div> 
                     Auth 
                     </div>
                    <div>
                    <input value={this.state.username} placeholder="Username" onChange={ (e) => this.handleAddUsername( e.target.value ) } /> 
                    <input value={this.state.password} placeholder="Password" onChange={ (e) => this.handleAddPassword( e.target.value ) } /> 
                    </div>
                    <div> 
                    <button>Login</button>
                    <button>Register</button> 
                    </div>

                </div>
        )
    }
    }

//handlechange
//handlechange
//login
//register
