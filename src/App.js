import React, {Component} from 'react';
import Header from "./Components/Header"
import ProductList from "./Components/ProductList"
import './App.css';



class App extends Component{

  
  render(){
    return(
      <div className="container">
        <Header />
        <ProductList />

      
        
      
      </div>
    )
  }
}



export default App;
