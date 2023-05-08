import React, {Component} from 'react';
import './index.css'

class Footer extends Component {
    changeAll = (event) => {
        console.log(event.target.checked)
        this.props.checkAllTodo(event.target.checked)
    }
    deleteDone = () => {
        return () => {
            this.props.deleteDone()
        }
    };

    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0)
        }, 0)

        return (
            <div>
                <label>
                    {/*如果只是写checked将会报错，提示不能修改props，必须要有onchange事件，
                        这里可以使用defaultChecked，但是使用这个只在第一次勾选有作用，后续勾选无作用
                        想要解决这个问题，使用checked，并且添加onChange事件，每次事件改变将会触发事件
                    */}
                    <input type="checkbox" checked={doneCount === todos.length && todos.length !== 0}
                           onChange={this.changeAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </span>
                <button onClick={this.deleteDone()} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;
