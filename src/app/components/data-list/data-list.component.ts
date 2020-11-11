import { Component, OnInit } from '@angular/core';


import { DataService } from '../../services/data.service';
import { Data } from '../../models/Data';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  datas: Data[];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(){
    this.datas = this.dataService.getDatas();
    console.log(this.datas);
  }

}
