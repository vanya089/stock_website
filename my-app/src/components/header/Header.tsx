import React from 'react';
import './Header.scss';
import logo from '../../assets/diagram_statistics_icon.svg'

const Header: React.FC = () => {
    return (
            <header className="header">
                <div className="header__logo">
                    <img width="70px" src={logo} alt="stock logo"/>
                    <div>
                        <h1>React stock</h1>
                        <p>Погрузитесь в мир трейдинга!</p>
                    </div>
                </div>

                    <nav className="header__navbar">
                        <a href="">Главная</a>
                        <a href="">Контакты</a>
                        <a href="">О нас</a>
                    </nav>
            </header>
    );
};

export default Header;