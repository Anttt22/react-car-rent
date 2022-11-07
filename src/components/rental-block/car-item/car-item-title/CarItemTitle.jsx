import React from 'react'
import "./CarItemTitle.css"
import heartImg from "../../../../assets/img/heart.svg"


const CarItemTitle = (props) => {

    return (
        <div className="cars-item__title">
            <h4 className="title-car">{props.model}</h4>
            <h6 className="type-car">{props.type}</h6>
            <div className="car-reiting">
                <img src={heartImg} alt="heart" />
                <img src={heartImg} alt="heart" />
                <img src={heartImg} alt="heart" />
                <img src={heartImg} alt="heart" />
                <img src={heartImg} alt="heart" />
                <img src={heartImg} alt="heart" />
            </div>
        </div>
    )
}

export default CarItemTitle