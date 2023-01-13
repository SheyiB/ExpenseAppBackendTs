// src/users/user.interface.ts

export interface User {
    firstname: string;
    lastname: string;
    email: string;
    dob: string;
    phone: number;
    cash: number;
    password: string;
}


export interface NewUser extends User {
    id: number;
}