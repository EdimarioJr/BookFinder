import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  searchedBooks!: Book[];
  searchedBooks$!: Observable<Book[]>;

  constructor(private http: HttpClient) {}

  setSearch(query: String) {
    this.searchedBooks$ = this.http.get<Book[]>(
      `${environment.googleBooksAPI}?q=${query}`
    );

    this.searchedBooks$.subscribe((data) => {
      this.searchedBooks = data;
    });
  }

  getSearchResults(): Book[] {
    return this.searchedBooks;
  }
}
