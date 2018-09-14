import React from 'react';
import Logo from '../../component/logo/logo';
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from 'antd-mobile';

import './register.css';


class Register extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            type:'genius', //or boss
        }
    }




    render(){
        const RadioItem=Radio.RadioItem;
        return(
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem placeholder='UserName'></InputItem>
                        <InputItem placeholder='password'></InputItem>
                        <InputItem placeholder='confirm your password'></InputItem>
                    </List>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type=='genius'}>
                        Genius
                    </RadioItem>
                    <RadioItem checked={this.state.type=='boss'}>
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