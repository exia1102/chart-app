import React from 'react';
import io from 'socket.io-client'
import {InputItem,List} from 'antd-mobile';
import {connect} from 'react-redux';
import {getMsgList} from '../../redux/chat.redux';

const socket = io('ws://localhost:9093');


@connect(
    state=>state.chat,
    {getMsgList}
)
class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:'',
            msg:[]
        }
    }

    componentDidMount(){
        // socket.on('recvmsg',(data)=>{
        //     this.setState({
        //         msg:[...this.state.msg,data.text]
        //     })
        // });
        this.props.getMsgList();
    }

    handleSubmit(){
        socket.emit('sendmsg',{text:this.state.text})
        this.setState({
            text:''
        })
    }

    render(){
        console.log(this.props.match);
        return(
                <div>

                    {this.state.msg.map((v)=>{
                        return <p key={v}>{v}</p>
                    })}

                    <div className="stick-footer">
                        <List>
                            <InputItem
                                placeholder='enter'
                                value={this.state.text}
                                onChange={(v)=>{
                                    this.setState({
                                        text:v
                                    })
                                }}
                                extra={<span onClick={()=>this.handleSubmit()}>send</span>}
                            >message</InputItem>
                        </List>

                    </div>
                </div>




        )
    }

}

export default Chat;