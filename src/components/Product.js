import React, { useState } from 'react'
import './Product.css'
export default function Product() {

    const [isInStock, setIsInStock] = useState(true)


    function changeState() {
        setIsInStock((prev) => {
            return !prev
        })
    }
    return (
        <div className='product'>
            <h2> Product Name: </h2>
           <p> Stock Status: {isInStock?"In Stock":"Not in Stock"}</p> <br/>
             <button onClick={changeState}>Change Stock</button>
        </div>
    )
}
