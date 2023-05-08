import React, {Component} from 'react';
import './index.css'

class Item extends Component {
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
            this.setState(
                {mouse: flag}
            )
        }
    }
    handleCheck = (id) => {
        return (event) => {
            this.props.changeTodo(id,event.target.checked)
        }
    }
    handleDelete = (id)=>{
        return () => {
            if(window.confirm('确定删除吗')){
                this.props.deleteTodo(id)
            }
        }
    };

    render() {
        const {todo} = this.props
        return (
            <div>
                <li style={{backgroundColor: this.state.mouse ? '#ddd' : 'white'}} onMouseMove={this.handleMouse(true)}
                    onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={todo.done}
                               onChange={this.handleCheck(this.props.todo.id)}/>
                        <span>{todo.name}</span>
                    </label>
                    <button onClick={this.handleDelete(this.props.todo.id)} className="btn btn-danger" style={{display: this.state.mouse ? 'block' : 'none'}}>删除
                    </button>
                </li>
            </div>
        );
    }
}

export default Item;
