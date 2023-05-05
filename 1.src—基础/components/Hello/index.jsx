import React,{Component} from "react";
// 引入样式表
import Hello from './index.module.css'
export default class Index extends Component {
    render() {
        return (
            <h2 className={Hello.title}>Hello,React</h2>
        )
    }
}
