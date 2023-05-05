import React, {Component} from 'react';
import './index.css'
class Header extends Component {
    handleKeyUp = (event) => {
        if(event.keyCode !== 13) return
        if(event.target.value.trim() === ''){
            alert('不能为空')
            return
        }
        this.props.sonChange(event.target.value)
        event.target.value = ''
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        );
    }
}

export default Header;
