import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slice.js'
export const cart=configureStore({
    reducer:{
        data:cartSlice

    }
})
