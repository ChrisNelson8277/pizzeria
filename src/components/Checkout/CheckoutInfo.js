import React from 'react'
import '../../css/Checkout/CheckoutInfo.css'

const CheckoutInfo = (props) => {
    console.log(props)
    function goToCheckout(){
        fetch('http://localhost:5000/create-checkout-session/', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                items: [
                    { id: 1, quantity: 3},
                    { id: 2, quantity: 1}
                ]
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
    <div className='checkout-info-container'>
        <div>
            <div className='header'>
            <h2>Order Info</h2>
            </div>
            <div className='grid-container'>
            <div>Subtotal:</div><div>${props.subtotal}</div>
            </div>
            <div className='grid-container'>
            <div>Tax:</div><div>$0.00</div>
            </div>
            <div className='grid-container'>
            <div>Special Offers:</div><div>-$0.00</div>
            </div>
            <div className='input-button'>
                <input placeholder='Enter a Promo Code'></input><button>Apply</button>
            </div>
            <div className='footer'></div>
            <div className='grid-container total'>
                <div>
                    Total:
                    </div>
                 <div>${props.subtotal}</div>   
            </div>
            <div className='button-container'>
            <button onClick={() => goToCheckout()} id="place-order">Place Order</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutInfo