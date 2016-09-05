import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;
    private errorMessage:string;

    constructor(private router: Router, activeRouter: ActivatedRoute, private formBuilder: FormBuilder,
                private authService: AuthService) {
        this.setupLoginForm(formBuilder);
        this.errorMessage = null;
    }

    ngOnInit() {
    }

    onLogin() {
        console.dir(this.loginForm);
        this.errorMessage = null;
        if(this.loginForm.valid == true) {
            this.authService.signIn(this.loginForm.controls['email'].value,
                this.loginForm.controls['password'].value).subscribe(
                (firebaseUser) => this.loginSuccess(firebaseUser),
                (err) => this.loginFailed(err),
                () => console.log('Completed login process')
            );
            // validate form here
        }
    }

    loginSuccess(firebaseUser) {
        console.log('Login success invoked');
        console.dir(firebaseUser);
        this.router.navigate(['/dashboard']);
    }

    loginFailed(err) {
        this.errorMessage = "Failed to login. Please try again";
        console.log('ERROR: ' + err.message);
    }

    setupLoginForm(formBuilder: FormBuilder) {
        this.loginForm = formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

}
