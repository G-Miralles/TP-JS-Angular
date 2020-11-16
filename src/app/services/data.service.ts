import { Injectable } from '@angular/core';

import { Data } from '../models/Data';

import { Category } from '../models/Category';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  datas: Data[];

  categorys: Category[];

  filterCategory: '';

  constructor() {
    this.datas = [];

    this.categorys = [];
  }

  getDatas() {
    if (localStorage.getItem('datas') === null) {
      return this.datas;
    } else {
      this.datas = JSON.parse(localStorage.getItem('datas'));
      return this.datas;
    }

  }

  addData(data: Data) {
    this.datas.push(data);
    let datas: Data[] = [];
    if (localStorage.getItem('datas') === null) {
      datas.push(data);
      localStorage.setItem('datas', JSON.stringify(datas));
    } else {
      datas = JSON.parse(localStorage.getItem('datas'));
      datas.push(data);
      localStorage.setItem('datas', JSON.stringify(datas));
    }
  }

  dataDelete(data: Data) {
    for (let i = 0; i < this.datas.length; i++) {
      if (data == this.datas[i]) {
        this.datas.splice(i, 1);
        localStorage.setItem('datas', JSON.stringify(this.datas));
      }
    }
  }

  /* Metodos de categorias */
  getCategorys() {
    if (localStorage.getItem('categorys') === null) {
      return this.categorys;
    } else {
      this.categorys = JSON.parse(localStorage.getItem('categorys'));
      return this.categorys;
    }
  }


  addCategory(category: Category) {
    this.categorys.push(category);
    let categorys: Category[] = [];
    if (localStorage.getItem('categorys') === null) {
      categorys.push(category);
      localStorage.setItem('categorys', JSON.stringify(categorys));
    } else {
      categorys = JSON.parse(localStorage.getItem('categorys'));
      categorys.push(category);
      localStorage.setItem('categorys', JSON.stringify(categorys));
    }
  }

}


