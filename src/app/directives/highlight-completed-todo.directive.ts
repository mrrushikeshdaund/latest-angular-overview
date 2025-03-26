import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodoDirective {
  isCompleteted = input(false);
  el = inject(ElementRef);
  styleEffect = effect(() => {
    if (this.isCompleteted()) {
      this.el.nativeElement.style.backgroundColor = 'green';
      this.el.nativeElement.style.color = 'black';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.color = 'black';
    }
  });
}
