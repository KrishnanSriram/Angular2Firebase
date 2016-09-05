/**
 * Created by krishnan on 9/4/16.
 */
export class User {

    public displayName: string;
    public firstName: string;
    public lastName: string;
    // public email: string;

    constructor(public fName, public lName, public dName, public email) {
        this.firstName = fName;
        this.lastName = lName;
        this.displayName = dName;
        this.email = email;
    }
}