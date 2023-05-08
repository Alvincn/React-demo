import React, {Component} from 'react';
import './index.css'
class Item extends Component {
    render() {
        const {avatar,login,html_url} = this.props
        return (
            <div className="card">
                <a rel="noreferrer" href={html_url} target="_blank">
                    <img src={avatar} style={{width: '100px'}} alt='头像'/>
                </a>
                <p className="card-text">{login}</p>
            </div>
        );
    }
}

export default Item;
