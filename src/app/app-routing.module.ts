import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './modules/search/components/search/search.component';
import { BookDetailComponent } from './modules/book/components/book-detail/book-detail.component';
import { BooksContainerComponent } from './modules/book/components/books-container/books-container.component';

const routes: Routes = [
  { path: '', component: BooksContainerComponent, pathMatch: 'full' },
  { path: 'book-detail/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
