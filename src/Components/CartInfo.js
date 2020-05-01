import React from 'react';


const CartInfo =()=>{
    return(
        <div className="flex-box">
            <div className="subtotal-section">
                <p>No. Of Items : 0 <br></br>
                    Subtotal : 0 </p>
                    
            </div>   
            <div className="bag-icon">
                <img src="./images/bag.png" alt="bag"/>
            </div>
        </div>
        
    )
} 


export default CartInfo;