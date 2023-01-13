// src/users/users.interface.ts

import {NewUser} from "./user.interface";

export interface Users {
    [key: number] : NewUser;
}