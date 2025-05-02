import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'atla-reusable-searh',
  templateUrl: './reusable-searh.component.html',
  styleUrls: ['./reusable-searh.component.scss']
})
export class ReusableSearhComponent implements OnInit {

  searchValue: string = ''; // Used for binding input
  @Input() placeholder: string = 'Search...';
  @Output() searchTerm = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
 
  /* we have emit the method */
  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
  this.searchTerm.emit(value);
  }

  /* clear search data */

  // clearSearch() {
  //   this.searchValue = '';
  //   this.searchTerm.emit(this.searchValue);
  // }
}
