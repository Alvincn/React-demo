import React, {Component} from 'react';
import Item from '../Item'
import PubSub from 'pubsub-js'
class List extends Component {
    state={
        users:[]
    }
    updateUser = (users) => {
        this.setState({users})
    }
    componentDidMount() {
        // 订阅消息，等待 Search 发布
        this.token = PubSub.subscribe("updateUser", (users,data) => {
            this.updateUser(data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users} = this.state
        return (
            <div className="row">
                {
                    users.map(item => {
                        return <Item avatar={item.avatar_url} login={item.login} html_url={item.html_url}
                                     key={item.id}></Item>
                    })
                }
            </div>

        );
    }
}

export default List;
