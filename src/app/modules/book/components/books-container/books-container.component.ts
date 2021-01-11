import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css'],
})
export class BooksContainerComponent implements OnInit {
  // Os livros retornados pela pesquisa atual
  searchedBooks: Book[] = [];
  totalItems: number = 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // Logo quando o componente é iniciado fazemos o subscribe no Subject do Service que estamos
    // usando para fazer a comunicação desse componente e o componente search
    // como funcao next atribuimos o valor que vamos receber ao searchedBooks
    this.bookService.getSearchSubject().subscribe((value: any) => {
      if (value.items) {
        this.searchedBooks = value.items;
        this.totalItems = value.totalItems;
      }
    });
  }

  /*
  ngOnDestroy(): void {
    this.bookService.getSearchSubject().unsubscribe();
  }
  */
  // filtrando os valores da pesquisa no formato desejável
  filterBooks(booksAPI: any) {
    return booksAPI.map((bookAPI: any) => {
      const { id } = bookAPI;
      let {
        title,
        authors,
        publishedDate,
        publisher,
        description,
        imageLinks,
        pageCount,
        language,
        averageRating,
      } = bookAPI.volumeInfo;

      if (imageLinks) {
        imageLinks = imageLinks.thumbnail;
      } else {
        imageLinks = 'assets/noimage.png';
      }

      return {
        id,
        title,
        authors,
        publishedDate,
        publisher,
        description,
        imageLinks,
        pageCount,
        language,
        averageRating,
      };
    });
  }
}
