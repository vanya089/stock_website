import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";


type FilterSliceState = {
    currentPage: number;
    drag: {};
}

const initialState: FilterSliceState = {
    currentPage: 0,
    drag:{},
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setDragUpdate(state, action: PayloadAction<{}>) {
            state.drag = action.payload;
        },

    }
});



export const currentPageSelector = (state: RootState) => state.filter.currentPage;
export const {setCurrentPage, setDragUpdate} = filterSlice.actions;

export default filterSlice.reducer