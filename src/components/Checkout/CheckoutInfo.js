import React from 'react'
import '../../css/Checkout/CheckoutInfo.css'

const CheckoutInfo = (props) => {
    console.log(props)
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
            <button id="place-order">Place Order</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutInfo