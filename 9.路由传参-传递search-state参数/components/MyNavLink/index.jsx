import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        return (
            <NavLink className="list-group-item" {...this.props}/>
        // <NavLink className="list-group-item" to={this.props.to}>{this.props.children}</NavLink>
        );
    }
}

export default MyNavLink;
