import React from 'react';
import logoPic from './job.png';
import './logo.css';
class Login extends React.Component{
    render(){
        return(
            <div className='logo-container'>
                <img src={logoPic} alt=""/>
            </div>
        )
    }
}

export default Login;