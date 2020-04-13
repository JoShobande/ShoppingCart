import React, {Component} from 'react';
import Header from "./Components/Header"
// import Home from "./Components/Home"
import './App.css';



class App extends Component{

  state={
    items: [],
    searchTerm : "",
    numberOfItemsInCart : 0,
    subTotal: 0
  }

  render(){
    return(
      <div className="container">
        <Header
          numberOfItemsInCart={this.state.numberOfItemsInCart}
          subTotal = {this.state.subTotal}
        />
        
      
      </div>
    )
  }
}



export default App;
