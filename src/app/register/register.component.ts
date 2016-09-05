import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {RegisterUser} from "../Models/RegisterUser";

@Component({
    moduleId: module.id,
    selector: 'app-register',
    templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {

    private registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
        this.setupRegistrationForm(formBuilder);
    }

    ngOnInit() {
    }

    setupRegistrationForm(formBuilder: FormBuilder) {
        this.registerForm = formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'displayName': ['', Validators.required],
            'email':['', Validators.required],
            'password': ['', Validators.required],
            'confirmPassword': ['', Validators.required]
        });
    }

    onRegister() {
        if(this.registerForm.valid == true) {
            // register and go to home
            let registerUser = new RegisterUser(this.registerForm.controls['firstName'].value,
                this.registerForm.controls['lastName'].value, this.registerForm.controls['displayName'].value,
                this.registerForm.controls['email'].value,
                this.registerForm.controls['password'].value, this.registerForm.controls['confirmPassword'].value);
            if(registerUser.validateCredentials() == true) {
                this.authService.signupNewUser(registerUser)
            }
        }
    }

}
