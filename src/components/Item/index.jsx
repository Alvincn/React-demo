import React, {Component} from 'react';
import './index.css'
class Item extends Component {

    render() {
        const {todo} = this.props
        return (
            <div>
                <li>
                    <label>
                        <input type="checkbox" defaultChecked={todo.done}/>
                        <span>{todo.name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display: 'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;
