import React from 'react';
import "../../App.css"
import logoImg from "../../assets/img/Logo.svg"

const FooterBlock = () => {
    return (
        <footer class="footer">
            <div class="footer__wraper _container">
                <div class="footer__container ">
                    <div class="title-block">
                        <div class="header-block__logo">
                            <div class="logo">
                                <img src={logoImg} alt="morerent" />
                            </div>
                        </div>
                    </div>
                    <div class="footer-styles__container">
                        <div class="footer-item">
                            <div class="footer-item__title">
                                <h3>About</h3>
                            </div>
                            <ul class="footer-list">
                                <li>How it works</li>
                                <li>Featured</li>
                                <li>Partnership</li>
                                <li>Bussiness Relation</li>
                            </ul>
                        </div>
                        <div class="footer-item">
                            <div class="footer-item__title">
                                <h3>About</h3>
                            </div>
                            <ul class="footer-list">
                                <li>How it works</li>
                                <li>Featured</li>
                                <li>Partnership</li>
                                <li>Bussiness Relation</li>
                            </ul>
                        </div>
                        <div class="footer-item">
                            <div class="footer-item__title">
                                <h3>About</h3>
                            </div>
                            <ul class="footer-list">
                                <li>How it works</li>
                                <li>Featured</li>
                                <li>Partnership</li>
                                <li>Bussiness Relation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterBlock