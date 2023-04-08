import React, {useEffect, useState} from 'react';
import './Home.scss';
import stockers from "../../assets/stocks.json";
import Stock from "../../components/stock/Stock";
import axios from "axios";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';


const Home: React.FC = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        async function fetchStocks() {
            try {
                const {data} = await axios.get('https://api.iex.cloud/v1/data/CORE/ENERGY?last=15&token=sk_4c1ba332fb974cdca322ab308f9ea178');
                setStocks(data);
            } catch (e) {
                console.log('Ошибка при получении!')
            }
        }

        fetchStocks();
    }, [])

    let onDragEnd = () => {

    }




    const stockList = stocks.map((obj: any, index) =>
        <Stock key={obj.key} {...obj} index={index}  />
    );

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="home">
                <div className="home__content">
                    <h2 className="home__title">All stocks</h2>
                    <Droppable droppableId="stocks">
                        {provided => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="home__items">
                                {stockList}
                            </div>
                        )}

                    </Droppable>

                </div>
            </div>
        </DragDropContext>


    );
};

export default Home;