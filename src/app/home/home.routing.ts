import { RouterModule }  from '@angular/router';

import { HomeComponent } from './home.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routing = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home/dashboard',
        component: DashboardComponent
    }

]);