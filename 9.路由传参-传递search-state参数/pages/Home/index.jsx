import React, {Component} from 'react';
import Message from "./Message";
import News from "./News";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import About from "../About";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Redirect to='/home/news'></Redirect>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;
