import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import axios from "axios";

class App extends Component {
  state = {
    editId: 0,
    name: "",
    price: "",
    imgurl: ""
  };

  setId = (id) => {
    axios.get(`api/products/${id}`).then(res => {
      let { name, price, img } = res.data[0];
      this.setState({
        editId: id,
        name: name,
        price: price,
        imgurl: img
      });
    });
  };

  render() {
    return (
      <div className="App">
      <div className="Realheader"></div>
        <div className="Slots">
          <Dashboard />
          <Header />
          <Product />
        </div>
        <Form />
      </div>
    );
  }
}

export default App;