import React from 'react';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem) => {
                    return (
                        <div style={{ width: '33%',float:'left' }}>
                           <div className='product-item' >
                                <img src={productItem.url} width="40%" />
                                <p>{productItem.name} 
                         </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button style={{backgroundColor: '#ac4040',
    color: 'white'}} onClick={() => addToCart(productItem)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList