import {Component} from "react";
// import axios from 'axios'
import Search from "./components/Search";
import List from './components/List'
class App extends Component {
    state = {
        users:[]
    }
    getUser = (users) => {
        console.log(users)
        this.setState({users:users})
    }
    render() {
        return (
            <div className="container">
                <Search getUser={this.getUser}/>
                <List users={this.state.users}/>
            </div>
        )
    }

}

export default App;
