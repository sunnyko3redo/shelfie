
import React, {Component} from 'react'
import './Product.css'
import axios from 'axios'




class Product extends Component {

    state = {
        name: '',
        price: 0,
        img: ''
    }
    
    handleDelete = () => {
        console.log(this.props)
        let {id} = this.props.item
        console.log(id)
        axios.delete(`/api/products/${id}`).then(()=>{
            window.location.reload()
        })
    }

    handleUpdate = (id)=> {
        let {name, price, img} = this.state
        axios.put(`/api/products/${id}`,{name, price, img}).then((result)=> { 
            window.location.reload()
        })
    }
    
    handleChange = (e,key) => {
        this.setState({
            [key]: e.target.value
        })
    }


render(){

    if (this.props.edit === false){
    return(

        <div className="Product">
               
               <img src={this.props.item.img}/>
               <h1 className="infobox">
                {this.props.item.name} </h1> 
                               
                <h3>${this.props.item.price}</h3>
                <button className="b1"
                onClick={this.handleDelete}
                >Delete</button>
                <button className="b1"
                onClick={this.props.setEdit}
                >
                
                Edit</button>
        </div>
        
    )}
    else {
        return (

            <div className="Product">
               
               <img src={this.props.item.img}/>
               <input className="input"
               type="text"
               name="name"
               onChange={(e) => {
                   this.handleChange(e, 'name')
               }}
               
               />

               <input className="input"
               type="text"
               name="price"
               onChange={(e) => {
                   this.handleChange(e, 'price')
               }}
               
               />  

               <input className="input"
               type="text"
               name="img"
               onChange={(e) => {
                   this.handleChange(e, 'img')
               }}
               
               />                                   
                
                <button className="b1"
                onClick={()=>{
                    this.handleUpdate(this.props.id)
                }}
            
                >Save
                
                </button>
                <button className="b1"
                onClick={this.props.setEdit}
                >
                
                Edit</button>
        </div>

        )
    }
}
}

export default Product