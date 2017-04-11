import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() chosenLink = new EventEmitter<string>();

  choseLink(link: string) {
    this.chosenLink.emit(link);
  }
}
