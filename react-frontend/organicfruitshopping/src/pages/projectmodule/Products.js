import React from 'react'
import img from'./images/product1.jpg';
import img2 from './images/product2.jpg';
import img1 from './images/product3.jpg';
import img3 from './images/product4.jpg';
import img4 from './images/product5.jpg';
import img5 from './images/product6.jpg';
import Cart from './Cart.js';
import ProductList from './ProductList';
import { useState } from 'react';
import Header from './Header.js';


function Products() {
    const [product] = useState([
        {
          url: img,
          name: 'Apple - 4Pcs',
          price:130
        },
        {
          url: img1,
          name: 'Pomegranate-1Kg',
          price: 125
        },
        {
          url: img2,
          name: 'Papaya-1Pcs',
          price: 50
        },
        {
          url: img3,
          name: 'Dragonfruit-1Kg',
          price: 150
        },
        {
            url: img4,
            name: 'Custard apple-1Kg',
            price: 100
          },
          {
            url: img5,
            name: 'Pine Apple-1Pcs',
            price: 50
          },
    ])
    const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }
return (
     
    <div>
      
         <Header count={cart.length}
        handleShow={handleShow} ></Header>
        {
        showCart ?
          <Cart cart={cart} ></Cart> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>

      }
      
      <div className="Footer" style={{top:'24rem'}} ><p>Copyright &copy; 2022,All rights reserved </p></div>
    </div>
          
)
    
}

export default Products;