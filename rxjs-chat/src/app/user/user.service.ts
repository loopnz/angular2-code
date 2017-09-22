import { Injectable } from "@angular/core";
import { Subject,BehaviorSubject } from "rxjs/Rx";
import { User } from "./user.model";
export class UserService{
    currentUser:Subject<User>=new BehaviorSubject<User>(null);
    public setCurrentUser(newUser:User):void{
        this.currentUser.next(newUser);
    }
}

export const userServiceInjectables:Array<any>=[UserService];