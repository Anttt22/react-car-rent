import React from "react"

import Header from "../components/header-block/HeaderBlock"
import RentalBlock from "../components/rental-block/RentalBlock"
import FooterBlock from "../components/footer-block/FooterBlock"
import FilterBlock from "../components/filter-block/FilterBlock"

class Home extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <div class="wraper">
                        <div class="rental-page">
                            <div class="rental-page__container-background _container">
                                <div class="rental-page__content-container">
                                  <Header/>
                                    <div class="items-container">
                                        <div class="page-content">
                                            <div class="page-content-wraper">
                                                <FilterBlock/>
                                                <RentalBlock/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FooterBlock/>
                        </div>
                    </div>                   
                </body>
            </div>

        )
    }
}

export default Home