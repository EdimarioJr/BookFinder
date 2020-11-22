import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [BooksContainerComponent, BookCardComponent],
  imports: [CommonModule],
  providers: [BookService],
  exports: [BooksContainerComponent],
})
export class BookModule {}
