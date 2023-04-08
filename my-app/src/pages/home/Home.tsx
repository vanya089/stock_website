import React, {useEffect, useState} from 'react';
import './Home.scss';
//import stockers from "../../assets/stocks.json";
import Stock from "../../components/stock/Stock";
import axios from "axios";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import Pagination from "../../components/pagination/Pagination";

const secretKey = "sk_4c1ba332fb974cdca322ab308f9ea178";
const Home: React.FC = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        async function fetchStocks() {
            try {
                const {data} = await axios.get(`https://api.iex.cloud/v1/data/CORE/ENERGY?limit=40&token=${secretKey}`);
                setStocks(data);
            } catch (e) {
                console.log('Ошибка при получении!')
            }
        }

        fetchStocks();
    }, [])






    const [currentPage, setCurrentPage] = useState(0)
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const currentPageData = stocks
        .slice(offset, offset + PER_PAGE)
        .map((obj: any, index) =>
        <Stock key={obj.key} {...obj} index={index}/>
    );
    const pageCount = Math.ceil(stocks.length / PER_PAGE);

    function handlePageClick( page: number) {
        setCurrentPage(page);
    }




    const [drag, updateDrag] = useState(0);
    // @ts-ignore
    let onDragEnd = (result) => {

        // @ts-ignore
        const items = Array.from(drag);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem)

        // @ts-ignore
        updateDrag(items);
    };


   /* const stockList = stocks.map((obj: any, index) =>
        <Stock key={obj.key} {...obj} index={index}/>
    );*/

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
                                {currentPageData}
                                {provided.placeholder}
                            </div>

                        )}

                    </Droppable>

                </div>
                <Pagination value={pageCount} onChangePage={handlePageClick}/>
            </div>
        </DragDropContext>


    );
};

export default Home;