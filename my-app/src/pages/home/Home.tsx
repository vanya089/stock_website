import React from 'react';
import './Home.scss';
import stocks from "../../assets/stocks.json";
import Stock from "../../components/stock/Stock";



const Home: React.FC = () => {


    const stockList = stocks.map((obj)=> <Stock key={obj.id} {...obj}  />)
    return (
        <div className="home">
            <div className="home__content">
                <div className="home__items">
                    {stockList}
                </div>
            </div>
        </div>

    );
};

export default Home;