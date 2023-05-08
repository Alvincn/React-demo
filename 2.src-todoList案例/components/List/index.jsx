import React, {Component} from 'react';
import Item from '../Item'
import './index.css'

class List extends Component {
    render() {
        const {todos,changeTodo,deleteTodo} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map(todo => {
                            return <Item deleteTodo={deleteTodo} changeTodo={changeTodo} key={todo.id} todo={todo}></Item>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;
