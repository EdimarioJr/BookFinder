import { Component, Input, OnInit } from '@angular/core';
import {Book} from '../../book';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})
export class BooksContainerComponent implements OnInit {
  searchedBooks!: Book[];

  constructor() { }

  ngOnInit(): void {

  }

}
