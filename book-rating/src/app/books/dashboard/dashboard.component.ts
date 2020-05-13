import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private bs: BookRatingService) {
  }

  ngOnInit(): void {
    this.books = [{
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    }, {
      isbn: '111',
      title: 'AngularJs',
      description: 'Altes Buch',
      rating: 3
    }, {
      isbn: '222',
      title: 'React',
      description: 'Mehhh...',
      rating: 1
    }];
  }

  doRateDown(book: Book) {
    const ratedBook = this.bs.rateDown(book);
    this.update(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.bs.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // };
    this.update(ratedBook);
  }

  update(ratedBook: Book) {
    this.books = this.books
      .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
      .sort((a, b) => b.rating - a.rating);
  }
}
