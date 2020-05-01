import React from 'react'
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
   
  

  return (
    <div>
      <div>
        <button>-</button>
        <input type="text" value="1"/>
        <button>+</button>
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