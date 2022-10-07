import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


function Cart({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className="cart">
                            <img src={cartItem.url} width={40} />
                            <span> {cartItem.name} </span>
                            <button style={{backgroundColor:' #501563', color: 'white'}}
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button style={{backgroundColor:' #501563', color: 'white'}}
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>

                        </div>
                    )
                })
            }

            <p> Total  <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            <div>
                <button style={{backgroundColor:'#501563'}}><Link style={{backgroundColor:'#501563',color:'white',textDecorationLine:'none'}}to="/Payment" className="paymentButton">Payment </Link>
                </button></div>
            
        </div >
    )
}

export default Cart