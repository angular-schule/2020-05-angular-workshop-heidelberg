import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Book } from '../shared/book';
import { loadBooks } from '../store/book.actions';
import { selectBooks, selectBooksLoading, bookWithIsbn } from '../store/book.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  // tslint:disable-next-line: no-string-literal
  // booksBAD$ = this.store.pipe(map(x => x['book'].books));

  books$ = this.store.pipe(select(selectBooks));
  loading$ = this.store.pipe(select(selectBooksLoading));
  book42$ = this.store.pipe(select(bookWithIsbn, { isbn: 42}));


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
