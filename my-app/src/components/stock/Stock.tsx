import React from 'react';
import './Stock.scss'
import {Draggable, Droppable} from "react-beautiful-dnd";

type StockProps = {
    key: string;
    index: number;
    date: string;
    dataId: string;
    id: string;
    value: number;
}


const Stock: React.FC<StockProps> = ({key,index, date,dataId, id, value}) => {
    return (
        <Draggable draggableId={dataId} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="stock"
                >
                    <h3 className="stock__name">{dataId}</h3>
                    <div className="stock__category">{date}</div>
                    <div className="stock__price">{value} $</div>
                </div>
            )}

        </Draggable>

    );
};

export default Stock;