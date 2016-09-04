/**
 * Created by krishnan on 9/3/16.
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './login.routing';
import {LoginComponent} from "./login.component";

@NgModule({
    imports     : [ReactiveFormsModule, routing],
    declarations: [LoginComponent],
    bootstrap   : [LoginComponent],

})

export class LoginModule { }