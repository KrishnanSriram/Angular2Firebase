import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import {HttpModule, HTTP_PROVIDERS} from '@angular/http';
import { AppComponent } from './app.component';
import {routing } from "./app.routing";
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {LoginComponent} from "./login/login.component";
import {LoginModule} from "./login/login.module";
import {RegisterModule} from "./register/register.module";

@NgModule({
    imports: [BrowserModule, routing, HomeModule, LoginModule, RegisterModule],
    declarations: [AppComponent, NavbarComponent],
    exports: [NavbarComponent],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
    }],
    bootstrap: [AppComponent]

})

export class AppModule {
}