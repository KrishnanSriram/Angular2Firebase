
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './home.routing';

@NgModule({
  imports     : [ReactiveFormsModule, routing],
  declarations: [HomeComponent],
  bootstrap   : [HomeComponent],

})

export class HomeModule { }