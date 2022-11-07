import React from 'react';
import "./CarItemOrder.css"
import CarItemOrderButton from '../car-item-order-button/CarItemOrderButton';
import CarItemPrise from '../car-item-prise/CarItemPrise';

const CarItemOrder = (props) => {
    return (
        <div className="cars-item__to-order">

            <CarItemPrise price={props.price} />
            <CarItemOrderButton />

        </div>
    )
}

export default CarItemOrder