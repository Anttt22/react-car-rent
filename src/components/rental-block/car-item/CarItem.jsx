import React from 'react';
import "../../../App.css"

import heartImg from "../../../assets/img/heart.svg"
import carImg from "../../../assets/img/Car.jpg"


const CarItem = () => {
    return (
        <div class="cars-item">
            <div class="car-item__wraper">
                <div class="cars-item__title">
                    <h4 class="title-car">Rols-Roice</h4>
                    <h6 class="type-car">Sport</h6>
                    <div class="car-reiting">
                        <img src={heartImg} alt="heart" />
                        <img src={heartImg} alt="heart" />
                        <img src={heartImg} alt="heart" />
                        <img src={heartImg} alt="heart" />
                        <img src={heartImg} alt="heart" />
                        <img src={heartImg} alt="heart" />
                    </div>
                </div>
                <div class="cars-item__foto">
                    <img src={carImg} alt="car" />
                </div>
                <div class="cars-item__description">
                    <ul class="description-car">
                        <li>Fuel type:</li>
                        <li>Transmission:</li>
                        <li>Size:</li>
                        <li>Year:</li>
                    </ul>
                </div>
                <div class="cars-item__to-order">
                    <div class="order-price cars-item__price">
                        <p class="price-order">
                            $100/
                        </p>
                        <p class="price-order _grey">day</p>
                    </div>
                    <div class="order-button cars-item__button">
                        <div class="rent-btn">
                            <a href="#" class="btn-rent-link">
                                Rent Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarItem