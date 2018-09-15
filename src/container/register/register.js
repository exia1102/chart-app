import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem,Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'

import './register.css';


class Register extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            type: 'genius', //or boss
            user:'',
            pwd:'',
            repeatpwd:'',
        };
        this.register=this.register.bind(this);
    }

    handleChange(key,value){
          this.setState({
                [key]:value
          })
    }

    register(){
        console.log(this.state);
    }

    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem placeholder='UserName'
                        onChange={(v)=>this.handleChange('user',v)}
                        ></InputItem>
                        <InputItem type="password" placeholder='password'
                        onChange={(v)=>this.handleChange('pwd',v)}
                        ></InputItem>
                        <InputItem
                            type="password"
                            placeholder='confirm your password'
                        onChange={(v)=>this.handleChange('repeatpwd',v)}
                        ></InputItem>
                    </List>
                    <WhiteSpace />
                    <RadioItem
                        checked={this.state.type==='genius'}
                        onClick={()=>this.handleChange('type','genius')}
                    >
                        Genius
                    </RadioItem>
                    <RadioItem
                        onClick={()=>this.handleChange('type','boss')}
                        checked={this.state.type==='boss'}
                    >
                        Boss
                    </RadioItem>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>SignUp</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;