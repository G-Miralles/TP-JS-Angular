import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addData(newName: HTMLInputElement, newPrice: HTMLInputElement, newDate: HTMLInputElement, newType: HTMLInputElement, newDescription: HTMLInputElement) {
    console.log("Esta merga anda bien", newName.value, newPrice.value, newDate.value, newType.value, newDescription.value);
    return false;
  }

}
