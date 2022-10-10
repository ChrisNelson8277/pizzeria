import React from 'react'
import '../../css/Customize/Customize.css'

const Sizes = (props) => {
    function updatePrice(size){
        if(size === "small"){
            props.setPrice(12.99);
            props.setSize(size);
        }else if(size === "medium"){
            props.setPrice(14.99);
            props.setSize(size);
        }
        else if(size === "large"){
            props.setPrice(16.99);
            props.setSize(size);

        }
        
    }
  return (
    <div className='size-container'>
        <form className='form-container' onChange={(e) => {updatePrice(e.target.value)}}>
            <div className='sizes-header'>
                <h3>Sizes</h3>
            </div>
            <div className='flex'>
            <div className='first-flex'>
            <input type="radio" name='size' value={"small"}></input>
            <label>Small 11"</label>
            </div>
            <div>
            <h4>$12.99</h4>
            </div>
            </div>
            <div className='flex'>
                <div className='first-flex'>
            <input type="radio" name='size' value={"medium"}></input>
            <label>Medium 13"</label>
                </div>
                <h4>$14.99</h4>
            </div>
            <div className='flex'>
                <div className='first-flex'>
            <input type="radio" name='size' value={"large"}></input>
            <label>Large 15"</label>
                </div>
            <div>
                <h4>$16.99</h4>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Sizes