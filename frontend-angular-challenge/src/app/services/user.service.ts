import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    public apiUrl: string = 'http://localhost:4000';
    //Type Error: changed bool to string 

    constructor(
        private http: HttpClient
    ) {}

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }

    /*
    takes in a User as a parameter
    */
    editUserName(user: User, newUserName: string)
    {
        console.log(newUserName);
        console.log("old Name: " + user.username);
        user.username = newUserName;
        console.log("new Name: " + user.username);
        

        //TODO: create a new route in fake
        return this.http.put(`${this.apiUrl}/users/edit`, user);
    }
}
