import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }

  updateSearchText(inputEl: HTMLInputElement) {
    // this.searchText = event.target.value;
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
