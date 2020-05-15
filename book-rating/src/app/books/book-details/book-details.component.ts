import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observable, timer, Subscription, from } from 'rxjs';
import { map, filter, reduce, mergeMap, concatMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private store: BookStoreService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      concatMap(isbn => this.store.getSingleBook(isbn))
    ).subscribe(book => this.book = book);
  }
}
