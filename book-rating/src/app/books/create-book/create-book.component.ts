import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.dirty && control.invalid;
  }

  hasError(name: string, code: string) {
    const control = this.bookForm.get(name);
    return control.dirty && control.hasError(code);
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // ???
    // Hands On:
    // 1. Event mit dem Namen "create" wird emittiert (Payload: Book)
    // 2. Ereignis wird im HTML des Dashboards empfangen
    // 3. Das Buch wird dem Buch-Array hinzugefügt

    this.bookForm.reset();
  }
}
