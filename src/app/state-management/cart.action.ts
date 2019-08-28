import { Product } from '../model/product';

export interface ICartState {
     items: Product[];
}

export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const REMOVE_ALL_CARTS = 'REMOVE_ALL_CARTS';