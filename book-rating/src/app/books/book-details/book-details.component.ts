import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


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

    // Los geht'!

    of('😇', '😍', '😎').subscribe(
      smilie => console.log(smilie),
      e => console.error(e),
      () => console.log('COMPLETE!')
    );

  }

}
