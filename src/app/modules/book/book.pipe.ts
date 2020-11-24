import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'books-filter',
})
export class BookPipe implements PipeTransform {
  transform(data: any): Book[] {
    console.log('oi');
    return data.map((bookAPI: any) => {
      const {
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
      } = bookAPI;

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
