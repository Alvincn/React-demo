import React, {Component} from 'react';
import './index.css'
class Item extends Component {
    state={
        mouse:false
    }
    handleMouse =(flag)=>{
        return ()=>{
            this.setState(
                {mouse:flag}
            )
        }
    }
    handleCheck = ()=>{

    }
    render() {
        const {todo} = this.props
        return (
            <div>
                <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseMove={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" defaultChecked={todo.done} onChange={this.handleCheck}/>
                        <span>{todo.name}</span>
                    </label>
                    <button  className="btn btn-danger" style={{display: this.state.mouse?'block':'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;
