import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "./store";

const secretKey = "sk_4c1ba332fb974cdca322ab308f9ea178";

type StockItem = {
    dataId: string;
    date: string;
    frequency: string;
    value: number;
    id: string;
    key: string;
    subkey: string;
    updated: number;
};

enum Status {
    LOADING='loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface StockSliceState {
    items: StockItem[];
    status: Status;
}

const initialState: StockSliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
};


export const fetchStocks = createAsyncThunk<StockItem[]>(
'stock/fetchStocksStatus',
async() =>{
    const {data} = await axios.get(
        `https://api.iex.cloud/v1/data/CORE/ENERGY?limit=21&token=${secretKey}`
    );

    return data;
}

)


const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<StockItem[]>) {
            state.items = action.payload;
        },


    },
    extraReducers: (builder) => {
        builder.addCase(fetchStocks.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchStocks.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchStocks.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    }

});


export const stockSelector = (state: RootState) => state.stock;

export const {setItems,} = stockSlice.actions;

export default stockSlice.reducer;
