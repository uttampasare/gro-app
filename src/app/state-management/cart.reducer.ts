import { ADD_CART , REMOVE_CART, REMOVE_ALL_CARTS} from './cart.action';
import { Product } from '../model/product';

export function cartReducer(state: Product[] = [], action) {
    switch (action.type) {
        case ADD_CART:
            return [...state, action.payload]
        
        case REMOVE_CART:
            return state.filter(t => t.name !== action.payload.name);
        case REMOVE_ALL_CARTS:
            return [... state, []]
    }
    return state;
}