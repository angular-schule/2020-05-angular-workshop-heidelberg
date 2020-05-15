import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observable, timer, Subscription } from 'rxjs';


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
    const observable = timer(0, 500);

    // Subcription
    this.subscription = observable.subscribe(observer);
  }

  ngOnDestroy() {
    // Subscription beenden
    this.subscription.unsubscribe();
  }

}
