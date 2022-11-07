import React from 'react'
import "./CarItemFoto.css"
import carImg from "../../../../assets/img/car0.jpg"


const CarItemFoto = (props) => {

    return (
        <div className="cars-item__foto">
            <img src={carImg} alt="car" />
        </div>

    )
}

export default CarItemFoto