import {Component} from "react";
import { Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Aside from "./components/Aside";

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <Aside/>
                    <div className="col-xs-6">
                        <Switch>
                            <Route path='/about' component={About}></Route>
                            <Route path='/home' component={Home}></Route>
                        </Switch>

                    </div>
                </div>
            </div>

        )
    }

}

export default App;
