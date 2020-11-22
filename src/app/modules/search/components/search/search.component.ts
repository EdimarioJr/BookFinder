import { Component, OnChanges, OnInit } from '@angular/core';
import { BookService } from '../../../book/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnChanges {
  search = '';
  interval:any;


  constructor( private bookService: BookService) {}

  ngOnChanges(): void {
    clearTimeout(this.interval)
    if(this.search!== ''){
      this.interval = setTimeout(()=> {
        this.bookService.setSearch(this.search)
      }, 2000)
    }  
  }
}
