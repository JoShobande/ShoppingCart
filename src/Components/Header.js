import React,{Component} from 'react';
import CartInfo from "./CartInfo"




class Header extends Component{

    

    render(){
      return(
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
            <div>
              <CartInfo />
            </div>
              
        
        </div>
      )
    }
  }
  


export default Header;