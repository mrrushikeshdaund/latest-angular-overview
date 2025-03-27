import { createReducer, on } from '@ngrx/store';
import { addToCart, removeToCart, resetToCart } from './cart.action';

const initialState = 0;

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, props) => {
    console.log(props);
    return state + 1;
  }),
  on(removeToCart, (state, props) => {
    console.log(props);
    return state - 1;
  }),
  on(resetToCart, (state, props) => {
    console.log(props);
    return 0;
  })
);
