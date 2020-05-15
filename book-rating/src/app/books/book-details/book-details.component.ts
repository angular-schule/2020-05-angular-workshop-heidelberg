import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    this.isbn = this.route.snapshot.paramMap.get('isbn');

    // Observer
    const observer = {
      next: smilie => console.log(smilie),
      error: e => console.error(e),
      complete: () => console.log('COMPLETE!')
    };

    // Observable
    const observable = new Observable<string>(subscriber => {
      subscriber.next('🤪');
      setTimeout(() => subscriber.next('🤪'), 1000);
      setTimeout(() => subscriber.next('🤪'), 2000);
      setTimeout(() => subscriber.next('😔'), 3000);

      setTimeout(() => subscriber.complete(), 2000);
    });

    // Subcription
    const subscription = observable.subscribe(observer);

    // Subscription beenden
    // subscription.unsubscribe();

  }

}
