import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Item] Add to Cart',
  props<{ msg: string }>()
);
export const removeToCart = createAction(
  '[Item] Remove From Cart',
  props<{ msg: string }>()
);

export const resetToCart = createAction(
  '[Item]  Reset from Cart',
  props<{ msg: string }>()
);
