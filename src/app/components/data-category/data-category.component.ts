import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';


import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-category',
  templateUrl: './data-category.component.html',
  styleUrls: ['./data-category.component.css']
})
export class DataCategoryComponent implements OnInit {

  categorys: Category[];

  constructor(
    public categoryService: DataService
  ) { }

  ngOnInit(): void {
    this.categorys = this.categoryService.getCategorys();
  }

  addCategory(newCategoryName: HTMLInputElement, newCategoryDescription: HTMLInputElement) {
    this.categoryService.addCategory({
      categoryName: newCategoryName.value,
      categoryDescription: newCategoryDescription.value
    });
    newCategoryName.value = '';
    newCategoryDescription.value = '';
    newCategoryName.focus();
    return false;
  }

}
