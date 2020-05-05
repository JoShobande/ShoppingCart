import React, {useState} from 'react';

const DropDownEmpty = ()=>{
    return(
        <div className="empty_wrapper">
            <img src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" alt="empty-cart"/>
            <p className="empty_text">Your cart is empty Love!</p>
        </div>

    )
}

// const DropDownInfo =()=>{
//     return(
//         <div>
        
//         </div>
//     )
// }

const DropDownButton = ()=>{
    return(
        <div className="button_wrapper">
            <button>PROCEED TO CHECKOUT</button>
        </div>
    )
}

const DropDown = () =>{
    return(
        <div>
            <div className="info-wrapper">
               
                <DropDownEmpty/>

                <DropDownButton/>
               
            </div>
        </div>
    )
}


const CartInfo =()=>{

    const [dropDown, toggleDropDown] = useState(false)

    return(

        
        
        <div className="flex-box">
            <div className="subtotal-section">
                <p>No. Of Items : 0 <br></br>
                    Subtotal : 0 </p>
                    
            </div>   
            <div className="bag-icon">
                <img onClick={()=>toggleDropDown(!dropDown)} src="./images/bag.png" alt="bag"/>

                {dropDown ? <DropDown/> : null}
            </div>
            
        </div>
        
    )
} 


export default CartInfo;

 // <div className="flex-box">
                //     <div  className="flex-box_two">
                //         <div>
                //             <img src="../images/orange.jpeg" alt="" />
                //         </div>
                //         <div>
                //             <p>orange - 1kg <br/>$102</p>
                //         </div>
                //     </div>
                   
                //     <div>
                //         <p>1 No. <br/> $102</p>
                //     </div>
                // </div>