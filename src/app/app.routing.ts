import { RouterModule } from '@angular/router';

export const routing = RouterModule.forRoot([
    {
        path: '',
        pathMatch: 'full',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'about',
        // component: AboutComponent
        loadChildren: 'app/about/about.module#AboutModule'
    },
    {
        path: 'contacts',
        loadChildren: 'app/contacts/contacts.module#ContactsModule'
        // canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
        // canActivate: [AuthGuard]
    },
    {
        path: 'register',
        loadChildren: 'app/register/register.module#RegisterModule'
        // canActivate: [AuthGuard]
    },
    {
        path: 'error',
        loadChildren: 'app/error/error.module#ErrorModule',
    },
    {
        path: '**',
        redirectTo: '/error'
    }
]);