import React, {useEffect, useState} from 'react';
import './Home.scss';
import Stock from "../../components/stock/Stock";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import Pagination from "../../components/pagination/Pagination";
import {useAppDispatch} from "../../redux/store";
import {fetchStocks, stockSelector} from "../../redux/stockSlice";
import {useSelector} from "react-redux";
import {currentPageSelector, setCurrentPage, setDragUpdate} from "../../redux/filterSlice";
import loading from '../../assets/Loading_2.gif'


const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const {items, status} = useSelector(stockSelector);
    const currentPage = useSelector(currentPageSelector);


    const getStocks = async () => {
        try {
            dispatch(
                fetchStocks()
            )

        } catch (e) {
            console.log('Axios error!', e)
        }
    }

    useEffect(() => {
        getStocks();

    }, [currentPage])

//pagination

    //const [pagi, setPagi] = useState(0)

    //TODO почему то не работает redux с пагинацией

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


//d-n-d
    const onDragEnd = (result: any) => {

        const items = Array.from(currentPageData);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem)

        setDragUpdate(items);

    };


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
                                {
                                    status === 'error' ?
                                        <div className="home__error">
                                            <h3>An error has occurred</h3>
                                            <p>Unfortunately, it was not possible to get stocks. Please try again
                                                later</p>

                                        </div>
                                        : <>
                                            {status === 'loading'
                                                ? <img className="home__loading" src={loading} alt="loading"/>
                                                : currentPageData}
                                        </>
                                }
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