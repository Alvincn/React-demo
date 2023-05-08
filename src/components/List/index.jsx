import React, {Component} from 'react';
import Item from '../Item'
class List extends Component {
    render() {
        const {users} = this.props
        return (
            <div className="row">
                {
                    users.map(item=>{
                        return <Item avatar={item.avatar_url} login={item.login} html_url={item.html_url} key={item.id}></Item>
                    })
                }
            </div>

        );
    }
}

export default List;
