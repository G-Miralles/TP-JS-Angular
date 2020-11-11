import { Injectable } from '@angular/core';

import { Data } from '../models/Data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  datas: Data[];

  constructor() { 
    this.datas = [
      {name: 'Verduleria', price: '350', date: 'Agosto', type: 'Gasto', category: 'comida', description: '1 choclo y 2 pimientos'},
      {name: 'Auto', price: '950', date: 'Agosto', type: 'Gasto', category: 'Combustible', description: '10 litros de nasta'},
      {name: 'Honorarios', price: '111350', date: 'Septiembre', type: 'Ingreso', category: 'dinero', description: 'sueldo'},
    ]
  }

  getDatas(){
    return this.datas;
  }

  addData(data: Data) {
    this.datas.push(data);
    return false;
  }
}
