import React, { Component } from "react";
import axios from 'axios'
import './Form.css'


class Form extends Component {
  state = {
    imgurl: "",
    name: "",
    price: 0
  };

  handleChange= (el) => {
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  clearInputs= () => {
    this.setState({
        name: '',
        price: 0,
        imgurl: '',
        edit: false
    })
  }

  addItems = () => {
    const update = {
        name: this.state.name,
        price: this.state.price,
        img: this.state.imgurl
    }

    axios.post(`/api/products`, update).then(() => {
        this.clearInputs()
    })
  }

  render() {
    return (
      <div className="Formholder">
        <div className="Form">Product Image
          <img className="Image" src={this.state.imgurl} />
        

        <span className="InputNames">name</span>
        <input className="inputs"
        type="text"
        name="name"
        onChange={this.handleChange}
        value={this.state.name}></input>

        <span className="InputNames">price</span>
        <input className="inputs"
        type="text"
        name="price"
        onChange={this.handleChange}
        value={this.state.price}></input>

        <span className="InputNames">imgurl</span>
        <input className="inputs"
        type="text"
        name="imgurl"
        onChange={this.handleChange}
        value={this.state.imgurl}></input>


        <button onClick={this.clearInputs}>Cancel</button>
        <button onClick={this.addItems}>Add To Inventory</button>
      </div></div>
    );
  }
}
export default Form;
