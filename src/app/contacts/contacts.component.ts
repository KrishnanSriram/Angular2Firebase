import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html',
})
export class ContactsComponent implements OnInit {

  constructor(private _router: Router) { 
    console.log('Contacts component invoked');
  }

  ngOnInit() {
  }

}
