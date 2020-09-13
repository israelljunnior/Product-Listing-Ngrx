import { createAction, props, createReducer, on } from "@ngrx/store";
import { Product } from './product.model';
import { ProductActionTypes } from './ProductActionTypes';

const INITIAL_STATE = {
    products: []
}

export const list = createAction(
    ProductActionTypes.LIST
)
const listProduct = [
    {   
        id: 1,
        name: "Rtx 3090",
        price: 10000
    },{
        id: 2,
        name: "Rtx 3080",
        price: 5000 
    },{
        id: 3,
        name: "Rtx 3070",
        price: 3500
    }
]
export const reducerProduct = createReducer(
    INITIAL_STATE,
    on(list, (state, action) => ({
        ...state,
        products: [...state.products, ...listProduct]
    }))
)



