import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // Usamos um subject (que age como um Observable e como um Observer) para receber dados 
  // e passar esses dados para todos os seus subscribers. Geralmente um componente manda esses 
  // dados e esses dados são transmitidos e atualizados entre outros componentes. Usamos essa abordagem
  // para comunicação entre componentes que não tem relação direta entre si.
  // O Subject é um Observer por que ele é um objeto que contem as funcoes next(), error() e complete()
  // para mandarmos valor para o subject fazemos next(valor)
  // Ele é um Observable pois tem a função subscribe. A diferença da função subscribe do Subject
  // e a função Subscribe do Observable é que a do Observable recebe um observer e passa valores
  // para ele, mas a do Subject apenas adiciona esse observer na lista de observers.
  searchedBooks: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  setSearch(query: String) {
    // Metódos do pacote HTTP do Angular SEMPRE retornão Observables.
    // Por isso fazemos o fetch num recurso e aplicamos chamamos o subscribe no retorno
    // nesse subscribe definimos a funcao next() do observer através de uma arrow function
    // nessa função passamos os dados que queremos para o Subject, e esse Subject vai transmitir
    // isso para todos os seus observers inscritos.
    // Um Subject é multicast( Pode enviar os dados para muitos observers de uma vez, sincronizado),
    // enquanto um observable é Unicast
    this.http
      .get<any>(`${environment.googleBooksAPI}?q=${query}`)
      .subscribe((data) => {
        data = data.items;
        this.searchedBooks.next(data)
        console.log(data);
      });
  }

  getSearchSubject(): Subject<any> {
    return this.searchedBooks;
  }
}
