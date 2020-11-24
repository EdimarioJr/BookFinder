import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookPipe } from './book.pipe';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

@NgModule({
  declarations: [BooksContainerComponent, BookCardComponent, BookPipe, BookDetailComponent],
  imports: [CommonModule],
  exports: [BooksContainerComponent, BookDetailComponent],
})
export class BookModule {}
