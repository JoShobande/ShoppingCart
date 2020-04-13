import React,{Component} from 'react';




class Header extends Component{

    state = {
        value:"",
        
        


    }

    render(props){
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
            <div className="subtotal-section">
                <p>No. Of Items : {this.props.numberOfItemsInCart} <br></br>
                	Subtotal : {this.props.subTotal}</p>
            </div>   
            <div className="bag-icon">
                <img src="./images/bag.png" alt="bag"/>
            </div>
              
        
        </div>
      )
    }
  }
  


export default Header;