import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Cart/subtotal.css'

const SubTotal = (props) => {
    let navigate = useNavigate();
    function goToCheckout(){
        navigate('/checkout')
    }
    console.log(props,'sub props')
    function goToCheckout(){
        fetch('http://localhost:5000/create-checkout-session/', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                items: props.cartItems.map((items) => {console.log(items)
                    return {id: items.id, qty: items.qty, size: items.size}
                })
                
                
            })
        })
        .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url
        }).catch(e => {
            console.error(e.error)
        })
    }
  return (
    <div className=''>
        <div className='subtotal-container2'>
            <div className='subtotal-wrapper'>
                <ul>
                    <li>Items In Cart</li>
                    <li>Special Offers</li>
                    <li>Sub-Total</li>
                </ul>
            </div>
            <div className='subtotal-wrapper'>
                <ul>
                    <li>${props.totalPrice.toFixed(2)}</li>
                    <li>$0.00</li>
                    <li>${props.totalPrice.toFixed(2)}</li>
                </ul>
            </div>

                <div className='promo'>
                <input placeholder='Enter a Promo Code'></input>      
                </div>
                <div className='button-container'>
                    <button className='promo-button'>Apply</button>
                </div>
            </div>
            <div  className='checkout-button' onClick={() => goToCheckout()}><button onClick={goToCheckout}>Checkout</button></div>
    </div>
  )
}

export default SubTotal