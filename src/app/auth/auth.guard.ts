import { CanActivate } from "@angular/router/src/interfaces";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService){}

    canActivate(): boolean  {
        
        return this.authService.isAuth()
    }

}