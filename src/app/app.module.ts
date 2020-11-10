import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataComponent } from './components/data/data.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataCategoryComponent } from './components/data-category/data-category.component';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    DataComponent,
    DataListComponent,
    NavigationComponent,
    DataCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
