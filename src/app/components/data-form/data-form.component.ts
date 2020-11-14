import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/Category';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  categorys: Category[];

  constructor(
    public taskService: DataService,
    public categoryService: DataService
  ) { }

  ngOnInit(): void {
    this.categorys = this.categoryService.getCategorys();
  }

  addData(newName: HTMLInputElement, newPrice: HTMLInputElement, newDate: HTMLInputElement, newCategory: HTMLInputElement, newType: HTMLInputElement, newDescription: HTMLInputElement) {
    this.taskService.addData({
      name: newName.value,
      price: newPrice.value,
      date: newDate.value,
      category: newCategory.value,
      type: newType.value,
      description: newDescription.value,
    });
    newName.value = '';
    newPrice.value = '';
    newDescription.value = '';
    newName.focus();

    return false;
  }
  

}
