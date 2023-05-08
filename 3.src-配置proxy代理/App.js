import {Component} from "react";
import axios from 'axios'

class App extends Component {
    getStudentData = ()=>{
        axios.get('http://localhost:3000/api1/students/').then(res=>{
            console.log(res)
        })
    }
    getCarData = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(res=>{
            console.log(res)
        })
    };
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        )
    }

}

export default App;
