import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, share } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.store.getSingleBook(isbn)),
    share()
  );

  constructor(private route: ActivatedRoute, private store: BookStoreService) { }
}
