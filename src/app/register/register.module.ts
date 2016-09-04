/**
 * Created by krishnan on 9/3/16.
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './register.routing';
import {RegisterComponent} from "./register.component";

@NgModule({
    imports     : [ReactiveFormsModule, routing],
    declarations: [RegisterComponent],
    bootstrap   : [RegisterComponent],

})

export class RegisterModule { }