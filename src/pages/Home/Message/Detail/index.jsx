import React, {Component} from 'react';
import qs from 'querystring'

const DetailData = [
    {id: '001', title: 'message001', content: 'message content001'},
    {id: '002', title: 'message002', content: 'message content002'},
    {id: '003', title: 'message003', content: 'message content003'},
]

class Detail extends Component {
    render() {
        // 接收 params 参数
        const {id} = this.props.match.params
        // 传递 search 参数
        // const {id} = qs.parse(this.props.location.search.slice(1))
        // 传递 state 参数
        // const {id} = this.props.location.state
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <div>
                <li>ID:{id}</li>
                <li>TITLE:{findResult.title}</li>
                <li>CONTENT:{findResult.content}</li>
            </div>
        );
    }
}

export default Detail;
