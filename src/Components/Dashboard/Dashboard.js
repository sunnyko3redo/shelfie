import React, {Component} from 'react'
import Product from './../Product/Product'
import axios from 'axios'
import './Dashboard.css'




class Dashboard extends Component {

    state = {
        inventory: []
    }
   


componentDidMount() {
    axios.get('/api/products').then(res => {
        this.setState({
            inventory: res.data
        })
    }).catch(err => {
        console.log(`error: ${err}`)
    })
}

setId = (id)=> {
    this.props.setId(id)
}




render(){
  
    return(
        <div className="Dashboard" src="https://www.mundohipster.com/wp-content/uploads/2019/01/zapatos-hipster-600x400.jpg> Dashboard"></div>

        )
    }
}
export default Dashboard