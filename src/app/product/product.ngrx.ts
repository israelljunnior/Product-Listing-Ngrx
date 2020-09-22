import { createAction, props, createReducer, on } from "@ngrx/store";
import { Product } from './product.model';
import { ProductActionTypes } from './ProductActionTypes';

const INITIAL_STATE = {
    products: []
}

export const list = createAction(
    ProductActionTypes.LIST
)
export const add = createAction(
    ProductActionTypes.ADD,
    props<{payload: any}>()
)
export const remove = createAction(
    ProductActionTypes.REMOVE,
    props<{payload: any}>()
)
const listProduct = [
    {   
        id: 1,
        name: "Rtx 3090",
        price: 10000,
        description: "Quero muitíssimo"
    },{
        id: 2,
        name: "Rtx 3080",
        price: 5000,
        description: "Quero Pakas"
    },{
        id: 3,
        name: "Rtx 3070",
        price: 3500,
        description: "Quero muito"
    }
]
export const reducerProduct = createReducer(
    INITIAL_STATE,
    on(list, (state, action) => ({
        ...state,
        products: [...state.products, ...listProduct]
    })),
    on(add, (state, action) => ({
        ...state,
        products: [...state.products, action.payload]
    })),
    on(remove, (state, action) => ({
        ...state,
        products: [...state.products.filter(product =>  product.id != action.payload)]
    }))
)



