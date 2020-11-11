import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  constructor(
    public taskService: DataService
  ) { }

  ngOnInit(): void {
  }

  addData(newName: HTMLInputElement, newPrice: HTMLInputElement, newDate: HTMLInputElement, newCategory: HTMLInputElement, newType: HTMLInputElement, newDescription: HTMLInputElement) {
    console.log("Esta merga anda bien", newName.value, newPrice.value, newDate.value, newCategory.value, newType.value, newDescription.value);
    this.taskService.addData({
      name: newName.value,
      price: newPrice.value,
      date: newDate.value,
      category: newCategory.value,
      type: newType.value,
      description: newDescription.value,
    });
    return false;
  }

}
