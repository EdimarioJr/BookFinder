import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  id: String = '';
  bookInfo!: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.bookService.getSearchSubject().subscribe((value) => {
      this.bookInfo = value;
    });
    this.bookService.findOneVolume(this.id);
    
   
  }
  /*
  ngOnDestroy(): void {
    this.bookService.getSearchSubject().unsubscribe();
  }
  */
}
