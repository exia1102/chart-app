import React from 'react';
import Logo from '../../component/logo/logo';
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile';



class Login extends React.Component{

    constructor(props){
        super(props);
        this.register=this.register.bind(this);
    }

    register(){
        this.props.history.push('/register')
        console.log(this.props);
    }

    render(){
        return(
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem>UserName</InputItem>

                        <InputItem>Password</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary'>LogIn</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>SignUp</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;