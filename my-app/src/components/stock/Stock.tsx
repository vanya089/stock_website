import React from 'react';
import './Stock.scss'
import {Draggable} from "react-beautiful-dnd";

type StockProps = {
    index: number;
    date: string;
    dataId: string;
    id: string;
    value: number;
}


const Stock: React.FC<StockProps> = ({index, date,dataId, id, value}) => {
    return (
        <Draggable key={value} draggableId={dataId} index={index}>
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