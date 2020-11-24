import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input()
  bookData!: Book;
  id: String = '';
  title: String = '';
  authors: String[] = [];
  publishedDate: String = '';
  publisher: String = '';
  imageLinks: any = {};

  constructor() {}

  ngOnInit(): void {
    console.log(this.bookData)
    const {
      id,
      title,
      authors,
      publishedDate,
      publisher,
      imageLinks,
    } = this.bookData;
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.publishedDate = publishedDate;
    this.publisher = publisher;
    this.imageLinks = imageLinks;
  }
}
