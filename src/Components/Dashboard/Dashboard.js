import React, {Component} from 'react'
import Product from './../Product/Product'
import axios from 'axios'
import './Dashboard.css'




class Dashboard extends Component {

    state = {
        inventory: [],
        edit: false,

    }
   


componentDidMount() {
    axios.get('/api/products').then(res => {
        this.setState({
            inventory: res.data
        })

        console.log(res)
    }).catch(err => {
        console.log(`error: ${err}`)
    })
}

setEdit = (edit) => {    
    this.setState({
        edit: !this.state.edit
    }) 
}


setId = (id)=> {
    this.props.setId(id)
}




render(){
  
    return(
        <div className="Dashboard" >{this.state.inventory.map((e,i)=>{
            console.log(e,i)
            return <Product item={e} test="hi"  id={e.id} edit={this.state.edit} setEdit={this.setEdit} />
        })}</div>

        )
    }
}
export default Dashboard