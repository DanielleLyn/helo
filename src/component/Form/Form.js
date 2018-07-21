import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()
        this.state={
            title: '',
            img: '',
            content: '',
        }
    }
//handle change (3)
//submit new post

    render(){
        return(
            <div>
                Form 
                </div>
        )
    }
}