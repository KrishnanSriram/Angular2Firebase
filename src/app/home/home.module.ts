
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './home.routing';
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  imports     : [ReactiveFormsModule, routing],
  declarations: [HomeComponent, DashboardComponent],
  bootstrap   : [HomeComponent],

})

export class HomeModule { }