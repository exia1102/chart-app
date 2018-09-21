import React from 'react';
import {connect} from "react-redux";
import {Result, List, WhiteSpace} from 'antd-mobile';

@connect(
    state=>state.user,
    null
)
class User extends React.Component{

    render(){
        const props = this.props;
        const Item = List.Item;
        const Brief = Item.Brief;
        console.log(props);
        return props.user?(
            <div>
                <Result
                    img={<img src={require(`../image/${props.avatar}.png`)} style={{width:50}} alt="" />}
                    title={props.user}
                    message={props.type=='boss'?props.company:null}
                />

                <List renderHeader={()=>'Introduction'}>
                    <Item
                        multipleLine
                    >
                        {props.title}
                        {props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
                        {props.money?<Brief>Salary:{props.money}</Brief>:null}
                    </Item>

                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item onClick={this.logout}>Logout</Item>
                </List>
            </div>
        ):null
    }

}

export default User;