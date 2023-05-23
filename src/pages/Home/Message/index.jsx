import React, {Component} from 'react';
import Detail from "./Detail";
import {Link, Route} from "react-router-dom";

import qs from 'querystring'

class Message extends Component {
    state = {
        messageArr: [
            {id: '001', title: 'message001', content: 'message content001'},
            {id: '002', title: 'message002', content: 'message content002'},
            {id: '003', title: 'message003', content: 'message content003'},
        ]
    }
    pushShow = (id) => {
        // eslint-disable-next-line no-restricted-globals
        this.props.history.push(`/home/message/detail/${id}`)
    };
    replaceShow = (id) => {
        // eslint-disable-next-line no-restricted-globals
        this.props.history.replace(`/home/message/detail/${id}`)
    };

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((messageObj) => {
                            return (
                                <li key={messageObj.id}>
                                    {/* eslint-disable-next-line no-template-curly-in-string */}
                                    {/*传递 params 参数*/}
                                    <Link to={`/home/message/detail/${messageObj.id}`}>{messageObj.title}</Link>
                                    <button onClick={() => this.pushShow(messageObj.id)}>push查看</button>
                                    <button onClick={() => this.replaceShow(messageObj.id)}>replace 查看</button>
                                    {/*传递 search 参数*/}
                                    {/*<Link to={`/home/message/detail?id=${messageObj.id}`}>{messageObj.title}</Link>*/}
                                    {/*传递 state 参数*/}
                                    {/*<Link replace to={{pathname: '/home/message/detail', state: {id: messageObj.id}}}>{messageObj.title}</Link>*/}
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path='/home/message/detail/:id' component={Detail}></Route>
            </div>
        );
    }
}

export default Message;
