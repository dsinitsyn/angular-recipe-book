import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private authService: AuthService){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log(route);
        console.log(state);
        return this.authService.isAuthenticated();
    }
}