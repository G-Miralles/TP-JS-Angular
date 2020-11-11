import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-category',
  templateUrl: './data-category.component.html',
  styleUrls: ['./data-category.component.css']
})
export class DataCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addCategory(newCategoryName: HTMLInputElement, newCategoryDescription: HTMLInputElement) {
    console.log("Esta merga anda bien", newCategoryName.value, newCategoryDescription.value);
    return false;
  }

}
