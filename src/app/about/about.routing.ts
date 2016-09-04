import { RouterModule }  from '@angular/router';

import { AboutComponent } from './about.component';
import { SalesComponent } from './sales/sales.component';

export const routing = RouterModule.forChild([
    {
        path: '',
        component: AboutComponent
    },
   {
       path: 'sales',
       component: SalesComponent
   } 
]);