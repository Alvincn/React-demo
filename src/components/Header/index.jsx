import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Button} from "antd";

class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                    <Button type="primary">Primary Button</Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
