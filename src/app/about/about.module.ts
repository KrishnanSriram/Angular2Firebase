
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { SalesComponent } from './sales';
import { routing } from './about.routing';

@NgModule({
  imports     : [routing],
//   exports     : [SalesComponent],
  declarations: [AboutComponent, SalesComponent],
  bootstrap   : [AboutComponent],

})

export class AboutModule { }