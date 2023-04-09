import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import stock from "./stockSlice"
import filter from "./filterSlice"

export const store = configureStore({
    reducer: {
        stock,
        filter,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch