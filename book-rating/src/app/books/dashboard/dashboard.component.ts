import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../shared/book';
import { loadBooks } from '../store/book.actions';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private store: Store) {
    this.store.dispatch(loadBooks());
  }

  doRateDown(book: Book) {
    // const ratedBook = this.bs.rateDown(book);
    // this.update(ratedBook);
  }

  doRateUp(book: Book) {
    // const ratedBook = this.bs.rateUp(book);
    // this.update(ratedBook);
  }

  update(ratedBook: Book) {
    // this.books = this.books
    //   .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    // this.books = [...this.books, book];
  }
}
