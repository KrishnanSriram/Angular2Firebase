/**
 * Created by krishnan on 9/3/16.
 */
import { RouterModule }  from '@angular/router';
import {RegisterComponent} from "./register.component";

export const routing = RouterModule.forChild([
    {
        path: '',
        component: RegisterComponent
    }
]);