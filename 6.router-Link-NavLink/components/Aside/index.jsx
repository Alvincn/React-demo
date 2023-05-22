import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Aside extends Component {
    render() {
        return (
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    {/* i原生 html 中靠 a 标签跳转 */}
                    {/*<a className="list-group-item" href="./about.html">About</a>*/}
                    {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                    {/*  再 React 中靠路由连接实现切换组件  */}
                    <NavLink activeClassName='demo' className="list-group-item" to='/about'>About</NavLink>
                    <NavLink className="list-group-item" to='/home'>Home</NavLink>
                </div>
            </div>
        );
    }
}

export default Aside;
