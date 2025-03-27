import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeToCart, resetToCart } from '../../store/cart.action';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counterValue = signal(0);
  store = inject(Store);
  increment() {
    // this.counterValue.update((value) => value + 1);
    this.store.dispatch(addToCart({ msg: 'the item added to cart' }));
  }

  reset() {
    this.counterValue.set(0);
    this.store.dispatch(resetToCart({ msg: 'empty cart' }));
  }

  decrement() {
    // this.counterValue.update((value) => value - 1);
    this.store.dispatch(removeToCart({ msg: 'the item removed from cart' }));
  }
}
