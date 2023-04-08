import React from 'react';
import './Header.scss';
import logo from '../../assets/diagram_statistics_icon.svg'

const Header: React.FC = () => {
    return (
            <header className="header">
                <div className="header__logo">
                    <img width="70px" src={logo} alt="stock logo"/>
                    <div>
                        <h1>React stocks</h1>
                        <p>Plunge into the world of trading!</p>
                    </div>
                </div>

                    <nav className="header__navbar">
                        <a href="">Main</a>
                        <a href="">Contact</a>
                        <a href="">About us</a>
                    </nav>
            </header>
    );
};

export default Header;