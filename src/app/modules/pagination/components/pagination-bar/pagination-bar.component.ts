import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../book/book.service';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.css'],
})
export class PaginationBarComponent implements OnInit {
  actualPage: number = 0;
  totalPages: number = 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getSearchSubject().subscribe((value) => {
      this.totalPages = value.length;
      console.log(this.totalPages);
    });
  }

  nextPage() {
    this.actualPage = this.actualPage + 1;
    this.changePage();
  }

  beforePage() {
    this.actualPage = this.actualPage - 1;
    this.changePage();
  }

  changePage() {
    this.bookService.changePage(this.actualPage);
  }
}
