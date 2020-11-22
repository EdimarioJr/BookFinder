export interface Book {
    id: String;
    title: String;
    authors: String[];
    publishedDate: String;
    publisher: String;
    description: String;
    imageLinks: {
      smallThumbnail: String;
      thumbnail: String;
    }
    pageCount: Number;
    language: String;
    averageRating: Number;
  }