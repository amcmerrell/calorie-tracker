import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FoodListComponent }   from './food-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    FoodListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
