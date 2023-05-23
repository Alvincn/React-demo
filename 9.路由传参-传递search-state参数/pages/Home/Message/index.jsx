import React, {Component} from 'react';
import Detail from "./Detail";
import {Link, Route} from "react-router-dom";
class Message extends Component {
    state = {
        messageArr: [
            {id: '001', title: 'message001', content: 'message content001'},
            {id: '002', title: 'message002', content: 'message content002'},
            {id: '003', title: 'message003', content: 'message content003'},
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((messageObj) => {
                            return (
                                <li key={messageObj.id}>
                                    {/* eslint-disable-next-line no-template-curly-in-string */}
                                    <Link to={`/home/message/detail/${messageObj.id}`}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path='/home/message/detail/:id'  component={Detail}></Route>
            </div>
        );
    }
}

export default Message;
