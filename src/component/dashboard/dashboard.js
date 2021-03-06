import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import {getMsgList,recvMsg} from '../../redux/chat.redux';
function Msg(){
	return <h2>消息列表页面</h2>
}

@connect(
	state=>state,
    {getMsgList,recvMsg}
)
class Dashboard extends React.Component{
	componentDidMount(){
		if(!this.props.chat.chatmsg.length) {
            this.props.getMsgList();
            this.props.recvMsg();
        }
	}
	render(){
		const {pathname} = this.props.location
		const user = this.props.user
		const navList = [
			{
				path:'/boss',
				text:'Genius',
				icon:'boss',
				title:'Genius List',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'boss',
				icon:'job',
				title:'BOSS list',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:'/msg',
				text:'Message',
				icon:'msg',
				title:'Message List',
				component:Msg
			},
			{
				path:'/me',
				text:'Me',
				icon:'user',
				title:'user Center',
				component:User
			}
		]


		return (
			<div>
				<NavBar className='fixd-header' mode='dark'>{navList.find(v=>v.path==pathname).title}</NavBar>
				<div style={{marginTop:45}}>
						<Switch>
							{navList.map(v=>(
								<Route key={v.path} path={v.path} component={v.component}></Route>
							))}
						</Switch>
				</div>

				<NavLinkBar data={navList}></NavLinkBar>
				
			</div>
		)

		
	}

}

export default Dashboard