import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataCategoryComponent } from './components/data-category/data-category.component';

import { DataService } from './services/data.service';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { FilterExpensesIncomesPipe } from './pipes/filter-expenses-incomes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    DataListComponent,
    NavigationComponent,
    DataCategoryComponent,
    FilterCategoryPipe,
    FilterDatePipe,
    FilterExpensesIncomesPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
