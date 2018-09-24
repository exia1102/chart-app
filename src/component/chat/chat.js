import React from 'react';


class Chat extends React.Component{


    render(){
        console.log(this.props.match);
        return(
            <div>{this.props.match.params.user}</div>
        )
    }

}

export default Chat;