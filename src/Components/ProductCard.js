import React, {useState} from 'react'
const ProductInfo = () => {
  return (
    <div>
      <div className="product-image">
      </div>
      <p className="product-name">
        Carrot - 1kg
      </p>
      <p>
        $50
      </p>
    </div>
  )
}
const ProductQuantity = () => {
  let [quantity, addDec] = useState(0)
   
  

  return (
    <div>
      <div>
        <button onClick={()=>addDec(quantity--)}>-</button>
        <input type="text" value={quantity}/>
        <button onClick={()=>addDec(quantity++)}>+</button>
      </div>
    </div>
  )
}
const Button = () => {
  return (
    <button>
      Add To Cart
    </button>
  )
}
function ProductCard() {
  return (
    <div>
      <ProductInfo />
      <ProductQuantity />
      <Button />
    </div>
  )
}
export default ProductCard