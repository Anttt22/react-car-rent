import React from 'react';
import "../../App.css"

import heartImg from "../../assets/img/heart.svg"
import carImg from "../../assets/img/Car.jpg"


import CarItem from "./car-item/CarItem"

const RentalBlock = () => {
    return (
        <div class="rental-block">
            <div class="rental-block__wraper">
                <div class="rental-block__title">
                    <div class="order-block">
                        <div class="pick-up make-order"></div>
                        <div class="drop-of make-order"></div>
                    </div>
                </div>
                <div class="cars">
                    <div class="cars__fotos">
                        <CarItem />
                        <CarItem />
                        <CarItem />
                        <CarItem />
                        <CarItem />
                    </div>
                </div>
                <div class="show-more-btn">
                    <div class="show-more-btn__link rent-btn">
                        <a href="#" class="btn-show">Show-more-car</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalBlock