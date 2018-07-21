import React, {Component} from 'react';
import axios from 'axios';

export default class Post extends Component{
    constructor(){
        super()
        this.state={
            title:'',
            img: '',
            content:'',
            author: '',
            authorPicture:''
        }

    }

    render(){
        return(
            <div>
                Post
                </div>
        )
    }
}

