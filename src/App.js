import {Component} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import './App.css'
import {nanoid} from "nanoid";

class App extends Component {
    state = {
        todos: [{id: 1, name: '吃饭', done: true}, {id: 2, name: '睡觉', done: true}, {id: 3, name: '打豆豆', done: true}]
    }
    sonChange = (todo) => {
        let newTodo = [{id: nanoid(), name: todo, done: false},...this.state.todos]
        this.setState({todos:newTodo})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header sonChange={this.sonChange}></Header>
                    <List todos={this.state.todos}></List>
                    <Footer></Footer>
                </div>
            </div>
        )
    }

}

export default App;
