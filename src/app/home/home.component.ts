import { Component, inject, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('Hello, World!');
  store = inject(Store<{ cartCount: number }>);

  cartCount = this.store.select('cartCount');

  handleKeyTyping(event: KeyboardEvent) {
    console.log(`user typing some things ${event.key}`);
  }
}
