import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser =  this.userService.currentUserValue;
    if (currentUser) {
    
      if(route.data.roles && route.data.roles.indexOf(currentUser.idToken.payload['custom:user_role']) === -1) {
        this.router.navigate(['/']);
        return false
      }
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

  
}
