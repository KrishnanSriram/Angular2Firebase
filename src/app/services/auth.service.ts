import {Injectable} from '@angular/core';
import {RegisterUser} from "../Models/RegisterUser";
import {User} from "../Models/User";
import { Observable } from 'rxjs/Rx';
import {Http, Headers, Response} from '@angular/http';

declare var firebase: any;

@Injectable()
export class AuthService {

    constructor() {
    }

    signupNewUser(user: RegisterUser) {
        console.log('Firebase registration service invoked');
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function(firebaseUser) {
            console.log('Registration success');
            // console.log('Proceed to Update profile with user information');
            console.dir(firebaseUser);
            // this.updateProfile(firebaseUser, user);

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('ERROR: Failed registerUser with error: ' + errorMessage);
        });

    }

    private updateProfile(firbaseUser, appUser: User) {
        firbaseUser.displayName = appUser.displayName;
        firbaseUser.updateProfile().then(function() {
            console.log('Profile updated successfully');
        }, function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('ERROR: Failed updateProfile with error: ' + errorMessage);
        });

    }

    signIn(email:string, password: string): Observable<any> {
        console.log('Firebase singin service invoked');
        return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(email, password));

        // firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        //     let appUser = new User('', '', user.displayName, user.email);
        //     this.loginEvent.emit(appUser);
        // }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log('ERROR: Failed sigin with error: ' + errorMessage);
        // });
    }

    signout() {
        console.log('Firebase Signout invoked');
        firebase.auth().signOut().then(function() {

        }, function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('ERROR: Failed signout with error: ' + errorMessage);
        });
    }

    currentUser(): User {
        let user = firebase.auth().currentUser;
        console.dir(user);
        // if(user != null) {
        //     return new User(user.displayName, '', user.email);
        // }
        return user;
    }

    isAuthenticated(): boolean {
        var user = this.currentUser();

        if (user) {
            return true;
        } else {
            return false;
        }


    }

}
