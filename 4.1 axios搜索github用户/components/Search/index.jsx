import React, {Component} from 'react';
import axios from 'axios'
class Search extends Component {
    search = () => {
        const {value} = this.keyWordElement
        axios.get(`https://api.github.com/search/users?q=${value}`).then(res=>{
            // eslint-disable-next-line react/no-direct-mutation-state
            this.props.getUser(res.data.items)
        }).catch(err=>{
            console.log(err.data)
        })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;
