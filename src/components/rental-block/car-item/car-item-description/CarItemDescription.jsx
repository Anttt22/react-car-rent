import React from 'react'
import './CarItemDescription.css'


const CarItemDescription=(props)=>{
    console.log(props)
    return(

     

    <div className="cars-item__description">
        <ul className="description-car">
            <li>Fuel type: {props.fuelType}</li>
            <li>Transmission: {props.transmission}</li>
            <li>Size: {props.capasity}</li>
            <li>Year: {props.year}</li>
        </ul>
    </div>
    )
}

export default CarItemDescription