import React from 'react';


const DropDownInfo = () =>{
    return(
        <div>
            <div className="info-wrapper">
                <div className="flex-box">
                    <div  className="flex-box_two">
                        <div>
                            <img src="../images/orange.jpeg" alt="" />
                        </div>
                        <div>
                            <p>orange - 1kg <br/>$102</p>
                        </div>
                    </div>
                   
                    <div>
                        <p>1 No. <br/> $102</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}


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
            <DropDownInfo />
        </div>
        
    )
} 


export default CartInfo;