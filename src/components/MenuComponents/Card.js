import React from 'react'
import '../../css/Menu/Card.scss'
import pepImg from '../../images/menu/vinnyspep.png';
import {useNavigate} from 'react-router-dom'
const Card = ({name, toppings, smallPrice, mediumPrice, largePrice, setCustomize, id}) => {
    let navigate = useNavigate();
    let item = [
        {"name": name,
        "id": id,
        "smallPrice": smallPrice,
        "meduimPrice": mediumPrice,
        "largePrice": largePrice,
        "qty": 1
    }
    ]
    function goToCustomize () {
        navigate('/customize');
        setCustomize(item)
    }
  return (
    <div className='card-container'>
        
        <div className='card-img'>
            <picture>
                <img className='product-picture' src={pepImg} alt="Pepperoni Pizza"></img>
            </picture>
        </div>
        <div className='card-desc-header'><h2>{name}</h2></div>
        <div className='card-desc'>({toppings.map((topping, index)=> 
            <span key={index}>{index == toppings.length -1 ? topping : topping + ", "}</span>
            )})
        </div>
        <div className='card-desc'>Starting at ${smallPrice}</div>
        <div>
            <button className='card-button' onClick={goToCustomize}>Add To Order</button>
        </div>
    </div>
  )
}

export default Card