import React from 'react';
import "../../App.css" 

const FilterBlock = () => {

    return(
        <div class="filter-block">
            <div class="filter-block__item filter">
                <div class="filter-block__title">
                    <h3 class="title-filter">Type</h3>
                </div>
                <div class="filter__items">
                    <ul class="list-fiter">
                        <li class="list-filter__li"><input type="checkbox" name="type" id="sport" /><label>Sport</label><span class="metriks">(14)</span></li>
                        <li class="list-filter__li"><input type="checkbox" name="type" id="suv" /><label>Suv</label><span class="metriks">(14)</span></li>
                        <li class="list-filter__li"><input type="checkbox" name="type" id="mpv" /><label>Mpv</label><span class="metriks">(14)</span></li>
                        <li class="list-filter__li"><input type="checkbox" name="type" id="sedan" /><label>Sedan</label><span class="metriks">(14)</span></li>
                        <li class="list-filter__li"><input type="checkbox" name="type" id="coupe" /><label>Coupe</label><span class="metriks">(14)</span></li>
                        <li class="list-filter__li"><input type="checkbox" name="type" id="hathback" /><label>Hathback</label><span class="metriks">(14)</span></li>
                    </ul>
                </div>
            </div>
            <div class="filter-block__item filter">
                <div class="filter-block__title">
                    <h3 class="title-filter">Capacity</h3>
                </div>
                <div class="filter__items">
                    <ul class="list-fiter">
                        <li class="list-filter__li"><input type="checkbox" name="capacity" id="two-person" /><label>2 Person</label><span class="metriks">(14)</span></li>
                        <li class="list-filter__li"><input type="checkbox" name="capacity" id="four-person" /><label>4 Person</label><span class="metriks">(14)</span></li>
                        <li class="list-filter__li"><input type="checkbox" name="capacity" id="six-person" /><label>6 Person</label><span class="metriks">(14)</span></li>
                        <li class="list-filter__li"><input type="checkbox" name="capacity" id="eight-person" /><label>8 or More</label><span class="metriks">(14)</span></li>
                    </ul>
                </div>
            </div>
            <div class="filter-block__item filter">
                <div class="filter-block__title">
                    <h3 class="title-filter">Price</h3>
                </div>
                <div class="filter__items">
                    <div class="price-item"></div>
                </div>
            </div>
        </div>

    )
}

export default FilterBlock