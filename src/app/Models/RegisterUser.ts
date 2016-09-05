import { User } from "./User";
/**
 * created by krishnan on 9/4/16.
 */
export class RegisterUser extends User  {

    public password: string;
    public confirmPassword: string;

    constructor(fName, lName, dName, email, password, cPassword) {
        super(fName, lName, dName, email);
        this.password = password;
        this.confirmPassword = cPassword;
    }

    validateCredentials(): boolean {
        if(this.firstName == null || this.firstName.length <= 0) {
            return false;
        }

        if(this.lastName == null || this.lastName.length <= 0) {
            return false;
        }

        if(this.email == null || this.email.length <= 0) {
            return false;
        }

        if(this.password == this.confirmPassword) {
            return true;
        }

        return false;
    }
}