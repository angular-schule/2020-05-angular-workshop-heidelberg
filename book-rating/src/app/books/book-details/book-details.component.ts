import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, share, shareReplay, catchError, retry } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.store.getSingleBook(isbn).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => of({
        isbn: -1,
        title: 'Error',
        description: e.message,
        rating: 1
      }))
    )),
  );

  constructor(private route: ActivatedRoute, private store: BookStoreService) { }
}
