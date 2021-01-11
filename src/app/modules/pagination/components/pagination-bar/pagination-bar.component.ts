import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BookService } from '../../../book/book.service';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.css'],
})
export class PaginationBarComponent implements OnInit {
  actualPage: number = 0;
  visiblePages: number[] = [];
  @Input() totalPages: number = 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    console.log(this.totalPages)
    /*
    this.bookService.getSearchSubject().subscribe((value: any) => {
      this.totalPages = value.totalItems;
      console.log(this.totalPages);
    });
    */
  }

  setVisiblePages() {
    let newVisiblePages = [];
    if (this.actualPage + 7 >= this.totalPages) {
      if (this.totalPages <= 7) {
        for (let i = 0; i < this.totalPages; i++) newVisiblePages.push(i);
      } else {
        console.log('entrei', this.totalPages, this.actualPage)
        for (let i = 7; i > 0; i--) {
          newVisiblePages.push(this.totalPages - i);
        }
      }
    } else {
      for (let i = 0; i < 7; i++) {
        newVisiblePages.push(this.actualPage + i);
      }
    }
    this.visiblePages = newVisiblePages;
  }

  setPage(page: number) {
    this.actualPage = page;
    this.setVisiblePages();
    this.changePage();
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
