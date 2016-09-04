
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import { routing } from './error.routing';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports     : [routing],
  declarations: [ErrorComponent],
  bootstrap   : [ErrorComponent],

})

export class ErrorModule { }