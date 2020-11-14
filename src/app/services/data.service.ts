import { Injectable } from '@angular/core';

import { Data } from '../models/Data';

import { Category } from '../models/Category';

import { Expenese } from '../models/Expense';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  datas: Data[];

  categorys: Category[];

  expenses: Expenese[];

  filterCategory: '';

  constructor() { 
    this.datas = [
      /*{name: 'Verduleria', price: '350', date: 'Agosto', type: 'Gasto', category: 'comida', description: '1 choclo y 2 pimientos'},
      {name: 'Auto', price: '950', date: 'Agosto', type: 'Gasto', category: 'Combustible', description: '10 litros de nasta'},
      {name: 'Honorarios', price: '111350', date: 'Septiembre', type: 'Ingreso', category: 'dinero', description: 'sueldo'},*/
    ];

    this.categorys = [
      /*{categoryName: 'Servicios', categoryDescription: 'Pago servicio de luz'},
      {categoryName: 'Alimentos', categoryDescription: 'compras en el super'}*/
    ];

    this.expenses = [
      {monto: 7500}
    ];
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
    //let Expenses = [];
    //let Income = [];
    let expensesTotal = 0;
    let incomeTotal = 0;
    let e = 0;
    let I = 0;
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].type == "Egreso"){
        e = parseFloat(datas[i].price);
        expensesTotal = (expensesTotal + e );
      }else{
        I = e = parseFloat(datas[i].price);
        incomeTotal = (incomeTotal + I)
      }
    }
    //Expenses.push(expensesTotal);
    //Income.push(incomeTotal);
    console.log("TOTAL DE EGRESOS", expensesTotal)
    console.log("TOTAL DE INGRESOS", incomeTotal)
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
    if(localStorage.getItem('categorys') === null){
      return this.categorys;
      }else{
        this.categorys = JSON.parse(localStorage.getItem('categorys'));
        return this.categorys;
      }
    }


  addCategory(category: Category){
    this.categorys.push(category);
    let categorys: Category[] = [];
    if (localStorage.getItem('categorys') === null){
      categorys.push(category);
      localStorage.setItem('categorys', JSON.stringify(categorys));
    }else{
      categorys = JSON.parse(localStorage.getItem('categorys'));
      categorys.push(category);
    localStorage.setItem('categorys', JSON.stringify(categorys));
    }
  }

}


