import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observable, timer, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';


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
      map(x => x * 10)
      // Hand on!
      // 2. filtere Werte heraus, so das nur noch Werte größer als 30 emittiert werden
      // 3. bilde die Summe aus allem (nur einmal!)
      // 4. fies: Zeige die selbe Anzahl an Raketen (🚀) an, wie die Summer groß ist
    );

    // Subcription
    this.subscription = observable.subscribe(observer);
  }

  ngOnDestroy() {
    // Subscription beenden
    this.subscription.unsubscribe();
  }

}
