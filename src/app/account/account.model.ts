import { Address } from "./profile/profile.component";
import { User } from "./firebaseUser.model";


export class account{
    constructor(
        private firstName: string,
        private lastName: string,
        private email: string,
        private phone: string,
        private password: string,
        private accountId: string,
        private address: Address,
    ){

    }
}