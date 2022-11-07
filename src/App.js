
import { useState } from "react";
import React from "react"

import Header from "./components/header-block/HeaderBlock"
import RentalBlock from "./components/rental-block/RentalBlock"
import FooterBlock from "./components/footer-block/FooterBlock"
import FilterBlock from "./components/filter-block/FilterBlock"



import './App.css';


const DummyCars =
  [
    {
      id: 'e1',
      model: "Mersedes",
      type: "Sport",
      transmission: "A",
      fuelType: "Diesel",
      capasity: "2 ",
      year: "2021",
      price: "3000",
      rating: "five",
      bluetooth: true,
      foto: "Assets/img/car.jpg"
    },
    {
      id: 'e2',
      model: "Porshe",
      type: "Suv",
      transmission: "A",
      fuelType: "Gasoline",
      capasity: "2 ",
      year: "2022",
      price: "2500",
      rating: 4,
      bluetooth: true,
      foto: "Assets/img/car1.jpg"
    },
    {
      id: 'e3',
      model: "Honda",
      type: "Mpv",
      transmission: "A",
      fuelType: "Diesel",
      capasity: "4 ",
      year: "2020",
      price: "2000",
      rating: 5,
      bluetooth: true,
      foto: "Assets/img/car2.jpg"
    },
    {
      id: 'e4',
      model: "Toyta",
      type: "Coup",
      transmission: "A",
      fuelType: "Gasoline",
      capasity: "4 ",
      year: "2020",
      price: "2000",
      rating: 5,
      bluetooth: true,
      foto: "Assets/img/car3.jpg"
    },
    {
      id: 'e5',
      model: "Opel",
      type: "Sedan",
      transmission: "M",
      fuelType: "Gasoline",
      capasity: "6 ",
      year: "2020",
      price: "2500",
      rating: 5,
      bluetooth: true,
      foto: "Assets/img/car3.jpg"
    },
    {
      id: 'e6',
      model: "Seat",
      type: "Hatchback",
      transmission: "M",
      fuelType: "Diesel",
      capasity: "8 ",
      year: "2020",
      price: "3000",
      rating: 5,
      bluetooth: true,
      foto: "Assets/img/car3.jpg"
    }

  ]


function App() {

   const [carsList, SetCarsList] = useState(DummyCars)


  return (
    <div>
      <div class="wraper">
        <div class="rental-page">
          <div class="rental-page__container-background _container">
            <div class="rental-page__content-container">
              <Header />
              <div class="items-container">
                <div class="page-content">
                  <div class="page-content-wraper">
                    <FilterBlock />
                    <RentalBlock carsList={carsList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterBlock />
        </div>
      </div>


      

    </div>
  );
}

export default App;
