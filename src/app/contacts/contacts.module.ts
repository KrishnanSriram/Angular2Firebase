
import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { routing } from './contacts.routing';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports     : [routing],
  declarations: [ContactsComponent],
  bootstrap   : [ContactsComponent],

})

export class ContactsModule { }