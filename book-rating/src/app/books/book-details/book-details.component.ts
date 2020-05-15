import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observable, timer, Subscription, from } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isbn = this.route.snapshot.paramMap.get('isbn');

    // Observer
    const observer = {
      next: smilie => console.log(smilie),
      error: e => console.error(e),
      complete: () => console.log('COMPLETE!')
    };

    // Observable
    const observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      map(x => x * 10),
      filter(x => x > 30),
      reduce((x, y) => x + y),
      map(summe => '🚀'.repeat(summe))
    );

    // Subcription
    this.subscription = observable.subscribe(observer);
  }

  ngOnDestroy() {
    // Subscription beenden
    this.subscription.unsubscribe();
  }

}
