import React from 'react';
import {connect} from 'react-redux';


const Nav = (props) => {
console.log(props)
        return(
            <div>
                {/* <form>
                <p>username</p>
                <input type='text' onChange={e => dispatch(handleChange('username', e.target.value))} />
                <p>profilePicture</p>
                <input type='text' onChange={e => dispatch(handleChange('profilePicture', e.target.value))} />
                
            </form> */}
                <div>
                Nav
                </div>
                <div>
                    <button>Home</button>
                    <button>New Post </button>
                    <button>Logout </button>
                 </div>
    
            </div>
        )
        
    }

const mapStateToProps = state => {
    return state;
}  
export default connect (mapStateToProps)(Nav)