import { RouterModule }  from '@angular/router';

import { ContactsComponent } from './contacts.component';

export const routing = RouterModule.forChild([
    {
        path: '',
        component: ContactsComponent
    }
]);