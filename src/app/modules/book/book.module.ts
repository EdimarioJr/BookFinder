import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookPipe } from './book.pipe';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { RouterModule } from '@angular/router';
import { PaginationModule } from '../pagination/pagination.module';
import { NPagesPipe } from './n-pages.pipe';

@NgModule({
  declarations: [
    BooksContainerComponent,
    BookCardComponent,
    BookPipe,
    BookDetailComponent,
    NPagesPipe,
  ],
  imports: [CommonModule, RouterModule, PaginationModule],
  exports: [BooksContainerComponent, BookDetailComponent],
})
export class BookModule {}
