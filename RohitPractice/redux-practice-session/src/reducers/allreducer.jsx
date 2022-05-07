
import {combineReducers} from "redux"
import { counterreducer } from "./counterreducer"


export const allreducers = combineReducers({
    counter : counterreducer,
})