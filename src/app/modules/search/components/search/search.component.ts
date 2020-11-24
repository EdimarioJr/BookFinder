import { Component } from '@angular/core';
import { BookService } from '../../../book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  search: String = '';
  interval: number = 0;

  constructor(private bookService: BookService, private router: Router) {}

  setSearch(value: String) {
    this.search = value;
    this.setTimeOutFetchSearch();
  }
  // Depois de um certo atraso faz a pesquisa
  setTimeOutFetchSearch(): void {
    if (this.interval !== 0) window.clearTimeout(this.interval);
    if (this.search !== '') {
      this.interval = window.setTimeout(() => {
        console.log(this.search);
        // manda os dados para o service, e esse por sua vez para o Subject, e é esse
        // Subject que vai permitir a comunicação sincronizada entre esse componente e o componente
        // BooksContainerComponent
        this.router.navigate(['']);
        this.bookService.setSearch(this.search);
      }, 2000);
    }
  }
}
