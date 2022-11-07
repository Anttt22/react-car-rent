import React from 'react';
import "./CarItemPrise.css"


const CarItemPrise = (props) => {
    return (


        <div className="order-price cars-item__price">
            <p className="price-order">
                ${props.price}
            </p>
            <p className="price-order _grey"> day</p>
        </div>



    )
}

export default CarItemPrise