import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() changeCity: EventEmitter<string> = new EventEmitter();
  searchText = '';

  constructor() {}

  onClickCleanBtn() {
    this.searchText = '';
  }

  onSearchClick() {
    this.changeCity.emit(this.searchText)
    this.searchText = '';
  }

  onKeyPress(e: any) {
    if (e.keyCode === 13 && e.target.value) {
      const city = e.target.value;
      this.changeCity.emit(city)
      this.searchText = '';
    }
  }
}
