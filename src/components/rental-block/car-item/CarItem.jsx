import React from 'react';
import "./CarItem.css"


import CarItemTitle from './car-item-title/CarItemTitle';
import CarItemDescription from './car-item-description/CarItemDescription'
import CarItemFoto from './car-item-foto/CarItemFoto';
import CarItemOrder from './car-item-order/CarItemOrder';



const CarItem = (props) => {
  
    return (
        <div className="cars-item">
            <div className="car-item__wraper">
                <CarItemTitle model={props.model} type={props.type} />                
                <CarItemFoto foto={props.foto}/>
                <CarItemDescription fuelType={props.fuelType} transmission={props.transmission} year={props.year} capasity={props.capasity}/>
                <CarItemOrder price={props.price}/>                
            </div>
        </div>
    )
}

export default CarItem