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
        let newTodo = [{id: nanoid(), name: todo, done: false}, ...this.state.todos]
        this.setState({todos: newTodo})
    }
    // 用于更新todo对象
    changeTodo = (id, done) => {
        const {todos} = this.state
        const newTodo = todos.map(todo => {
            if (todo.id === id) return {...todo, done}
            else return todo
        })
        this.setState({todos: newTodo})
    }
    // 删除todo
    deleteTodo = (id) => {
        const {todos} = this.state
        // 删除指定id的todo
        const newTodo = todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({todos: newTodo})
    }
    checkAllTodo = (check) => {
        const {todos} = this.state
        const newTodo = todos.map(todo => {
            return {...todo, done: check}
        })
        this.setState({todos: newTodo})
    }
    deleteDone = ()=>{
        const {todos} = this.state
        const newTodo = todos.filter(todo=>{
            return !todo.done
        })
        this.setState({todos: newTodo})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header sonChange={this.sonChange}></Header>
                    <List changeTodo={this.changeTodo} todos={this.state.todos} deleteTodo={this.deleteTodo}></List>
                    <Footer deleteDone={this.deleteDone} checkAllTodo={this.checkAllTodo} todos={this.state.todos}></Footer>
                </div>
            </div>
        )
    }

}

export default App;
