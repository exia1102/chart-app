import React from 'react';
import {connect}from 'react-redux';
import {withRouter} from 'react-router-dom';
import {NavBar} from 'antd-mobile';
import NavLinkBar from '../navlinkbar/navlinkbar';
@connect(
    state=>state,
    null
)
class Dashboard extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        const {pathname} =this.props.location;
        const user=this.props.user;
        const navList=[
            {
            path:'/boss',
            text:'genius',
            icon:'boss',
            title:'Genius List',
            Component:Boss,
            hide:user.type==='genius',
        },
            {
                path:'/genius',
                text:'boss',
                icon:'genius',
                title:'Position List',
                Component:Boss,
                hide:user.type==='Boss',
            },
            {
                path:'/msg',
                text:'message',
                icon:'msg',
                title:'Message List',
                Component:Msg,
            },
            {
                path:'/me',
                text:'Me',
                icon:'user',
                title:'User Center',
                Component:User
            },
        ];


        return(
            <div>
                <NavBar mode='dark'>{navList.find(v=>v.path===pathname).title}</NavBar>

                <NavLinkBar
                data={navList}

                ></NavLinkBar>
            </div>

        )
    }

}

export default Dashboard;