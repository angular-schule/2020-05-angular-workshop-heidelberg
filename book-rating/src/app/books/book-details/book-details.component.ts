import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


function connect() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
    // Wenn Fehler: reject();
  });
}

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

    await connect();
    console.log('Connected!!! ');

  }

}
