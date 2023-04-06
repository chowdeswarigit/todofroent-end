import { configureStore } from "@reduxjs/toolkit" 

import Authreducer from './features/authSlice' 

import TourReducer from './features/tourSlice' 

import { todoReducer } from "./features/todoReducer"

export default configureStore ({
    reducer:{
        auth:Authreducer,
        tour:TourReducer,
        todo:todoReducer
    }
})