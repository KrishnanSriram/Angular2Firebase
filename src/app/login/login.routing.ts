/**
 * Created by krishnan on 9/3/16.
 */
import { RouterModule }  from '@angular/router';

import { LoginComponent } from './login.component';

export const routing = RouterModule.forChild([
    {
        path: '',
        component: LoginComponent
    }
]);