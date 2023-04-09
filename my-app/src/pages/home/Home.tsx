import React, {useEffect, useState} from 'react';
import './Home.scss';
//import stockers from "../../assets/stocks.json";
import Stock from "../../components/stock/Stock";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import Pagination from "../../components/pagination/Pagination";
import {useAppDispatch} from "../../redux/store";
import {fetchStocks, stockSelector} from "../../redux/stockSlice";
import {useSelector} from "react-redux";
import {currentPageSelector, setCurrentPage, setDragUpdate} from "../../redux/filterSlice";


const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const {items, status} = useSelector(stockSelector);
    const currentPage = useSelector(currentPageSelector);
    console.log("номер страницы",currentPage)


    const getStocks = async () => {
        try {
            dispatch(
                fetchStocks()
            )

        } catch (e) {
            console.log('Ошибка при получении!', e)
        }
    }

    useEffect(() => {
        getStocks();

    }, [currentPage])



 //const [pagi, setPagi] = useState(0)

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const currentPageData = items
        .slice(offset, offset + PER_PAGE)
        .map((obj: any, index) =>
            <Stock  {...obj} index={index}/>
        );
    const pageCount = Math.ceil(items.length / PER_PAGE);

    function handlePageClick(page: number) {
        setCurrentPage(page);
    }






    const onDragEnd = (result: any) => {

        const items = Array.from(currentPageData);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem)

        setDragUpdate(items);

    };




     // const stockList = drag.map((obj: any, index) =>
     //     <Stock key={obj.key} {...obj} index={index}/>
     // );


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
                <Pagination value={pageCount} handlePageClick={handlePageClick} pageCount={pageCount}/>
            </div>
        </DragDropContext>


    );
};

export default Home;