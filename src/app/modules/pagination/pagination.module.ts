import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';

@NgModule({
  declarations: [PaginationBarComponent],
  imports: [
    CommonModule
  ],
  exports: [PaginationBarComponent]
})
export class PaginationModule { }
