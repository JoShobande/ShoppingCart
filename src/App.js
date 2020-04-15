import React, {Component} from 'react';
// import Header from "./Components/Header"
// import Home from "./Components/Home"
import './App.css';



class App extends Component{

  
  render(){
    return(
      <div className="container">
        <div className="flex-box header">
          <div className="veggy">
              <h1>Veggy!</h1>
          </div>
          <div className="form-section">
              <form>
                  <input
                      type="text" 
                      className="" 
                      placeholder="Search"
                  />
                  <button>Search</button>
              </form>
          </div>      
          <div className="subtotal-section">
              <p>No. Of Items : 0 <br></br>
                Subtotal : 0 </p>
                
          </div>   
          <div className="bag-icon">
              <img src="./images/bag.png" alt="bag"/>
          </div>
          
    
      </div>

      <div className="body-content">
        <div className="grid-content">
            <div>
              this is a fruit
            </div>
            <div>
              this is a fruit
            </div>
            <div>
              this is a fruit
            </div>
            <div>
              this is a fruit
            </div>
            <div>
              this is a fruit
            </div>
            <div>
              this is a fruit
            </div>
            <div>
              this is a fruit
            </div>
            <div>
              this is a fruit
            </div>
        </div>
      </div>
        
      
      </div>
    )
  }
}



export default App;
