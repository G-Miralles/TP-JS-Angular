import { Injectable } from '@angular/core';

import { Data } from '../models/Data';

import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  datas: Data[];

  categorys: Category[];

  constructor() { 
    this.datas = [
      /*{name: 'Verduleria', price: '350', date: 'Agosto', type: 'Gasto', category: 'comida', description: '1 choclo y 2 pimientos'},
      {name: 'Auto', price: '950', date: 'Agosto', type: 'Gasto', category: 'Combustible', description: '10 litros de nasta'},
      {name: 'Honorarios', price: '111350', date: 'Septiembre', type: 'Ingreso', category: 'dinero', description: 'sueldo'},*/
    ];

    this.categorys = [
      {categoryName: 'Servicios', categoryDescription: 'Pago servicio de luz'},
      {categoryName: 'Alimentos', categoryDescription: 'compras en el super'}
    ]
  }

  getDatas(){
    if(localStorage.getItem('datas') === null){
      return this.datas;
    }else{
      this.datas = JSON.parse(localStorage.getItem('datas'));
      return this.datas;
    }
    
  }

  addData(data: Data) {
    this.datas.push(data);
    let datas: Data[] = [];
    if(localStorage.getItem('datas') === null){
      datas.push(data);
      localStorage.setItem('datas', JSON.stringify(datas));
    }else{
      datas = JSON.parse(localStorage.getItem('datas'));
      datas.push(data);
      localStorage.setItem('datas', JSON.stringify(datas));
    }
    

  }

  dataDelete(data: Data) {
    for (let i = 0; i < this.datas.length; i++){
      if(data == this.datas[i]){
        this.datas.splice(i, 1);
        localStorage.setItem('datas', JSON.stringify(this.datas));
      }
    }
  }
  /* Metodos de categorias */
  getCategorys(){
    return this.categorys;
  }

  addCategory(category: Category){
    this.categorys.push(category);
    //return false;
  }

}


