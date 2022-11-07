import React from 'react';
import "../../App.css"

import CarItem from "./car-item/CarItem"

const RentalBlock = (props) => {
  
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

                            {props.carsList.map((elem) => (
                                <CarItem
                                    key={elem.id}
                                    model={elem.model}
                                    type={elem.type}
                                    transmission={elem.transmission}
                                    fuelType={elem.fuelType}
                                    capasity={elem.capasity}
                                    year={elem.year}
                                    price={elem.price}
                                    rating={elem.rating}
                                    bluetooth={elem.bluetooth}
                                    foto={elem.foto}
                                />
                            ))}
   
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