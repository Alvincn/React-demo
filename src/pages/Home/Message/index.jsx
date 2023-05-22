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

    render() {
        const {search} = this.props.location
        const {id} = qs.parse(search.slice(1))
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((messageObj) => {
                            return (
                                <li key={messageObj.id}>
                                    {/* eslint-disable-next-line no-template-curly-in-string */}
                                    {/*传递 params 参数*/}
                                    {/*<Link to={`/home/message/detail/${messageObj.id}`}>{messageObj.title}</Link>*/}
                                    {/*传递 search 参数*/}
                                    <Link to={`/home/message/detail?id=${messageObj.id}`}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path='/home/message/detail' component={Detail}></Route>
            </div>
        );
    }
}

export default Message;
