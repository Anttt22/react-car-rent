import React from 'react';
import "../../App.css" 
import logoImg from "../../assets/img/Logo.svg"


const Header =()=>{
    return(
        <header class="header">
        <div class="header-block header__wraper">
            <div class="title-block">
                <div class="header-block__logo">
                    <div class="logo">
                        <img src={logoImg} alt="morerent" />
                    </div>
                </div>
                <div class="header-block__form">
                    <div class="finding-form">
                        <form action="" class="searching-form">
                            <div class="input-wraper searching-form__input">
                                <input type="text" class="searching-input" placeholder="Search something here" />
                                <button class="filter-btn" type="button" title="title"></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="menu-block">
                <div class="header-block__menu">
                    <div class="menu">
                        <div class="menu-burger"><div class="burger-line"></div></div>
                        <ul class="menu-list"></ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

    )
}

export default Header