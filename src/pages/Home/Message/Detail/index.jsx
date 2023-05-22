import React, {Component} from 'react';
import qs from 'querystring'

const DetailData = [
    {id: '001', title: 'message001', content: 'message content001'},
    {id: '002', title: 'message002', content: 'message content002'},
    {id: '003', title: 'message003', content: 'message content003'},
]

class Detail extends Component {
    render() {
        const {id} = qs.parse(this.props.location.search.slice(1))
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
